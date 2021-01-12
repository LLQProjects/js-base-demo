/**
 * @description 手写代码：深拷贝，深比较，数组拍平
 */

const { config } = require("webpack");

/**
 * @description 手写深拷贝
 * @param {Object} obj 拷贝的对象
 */
function deepClone(obj) {
    if (typeof obj !== 'object' || typeof obj == null) {  //不是对象，或者数组不拷贝。
        return obj
    }
    // 判断是否是数组
    let result;
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (const key in obj) { //数组和对象皆可。for..in 会列出所有可枚举的属性，包括通过原型继承的。
        // 属性的hasOwnProperty，可能被串改，所以通过原型上的方法来操作。
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = deepClone(obj[key]) //不是就直接赋值给他，是对象（数组），继续往下拷贝
        }
    }
    // 把第一层的 即  结果返回
    return result
}

/**
 * @description 数组拍平
 */

function flaten(arr) {
    // 判断数组是否已拍平
    const isDeep = arr.filter(item => item instanceof Array)
    if (isDeep.length === 0) {
        return arr
    }
    // 通过concat，连接两个数组。此处不能用call。apply将参数组合成一个数组，在函数里自动解构，获取一个个参数。
    const res = Array.prototype.concat.apply([], arr)

    return flaten(res)
}
var flatArr = [1, 4, [5, 9]]; //[].concat(1,4,[5,9])
// flaten(flatArr)

/**
 * @description 深比较，随便的两个变量
 * 1,先判断是否是对象或数组，如果某一边不是对象，就可以直接比较了。
 * 2，如果 === ，那肯定是相等。
 * 3，for...in。以其中一个obj为基准。
 */

// 判断是否是对象或数组
function isObjectOrArr(obj) {
    return obj !== null && typeof obj === 'object'
}
function isEqual(obj1, obj2) {
    if (!isObjectOrArr(obj1) || !isObjectOrArr(obj2)) {
        return obj1 === obj2
    }
    if (obj1 === obj2) {
        return true
    }

    // 对象或数组，获取keys或下标
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) { return false }  //避免用双for
    for (let key in obj1) {
        //这一步是关键。以obj1为基准。判断是否存在同样的key。一个是对象，一个是数组，key肯定不同。
        // 如果不存在key，就不是对象或数组，就返回false
        // 如果存在就一直递归，到对象的最后一层，肯定有不是对象或数组的时候。
        const res = isEqual(obj1[key], obj2[key])
        if (!res) { return false }
    }
    return true
}
console.log(isEqual({ a: 2 }, { a: 2 }))