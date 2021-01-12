/**
 * @description call的实现.思路：
 * 1，arguments 是类数组。call的第一个参数，默认就是要改变的this对象。
 * 2，函数中的this，指向的是call的第一个参数
 * 3，call中的this，指的是当前的函数。（函数才会调用call）
 */
Function.prototype.myCall = function () {
    // 获取传入call的this对象。及参数
    let [thisArg, ...args] = [...arguments] //数组解构。 与apply的区别
    if (!thisArg) { //没有就默认window
        thisArg = typeof window === 'undefined' ? global : window
    }
    // this，代表当前函数。新增属性，保存当前函数
    thisArg.fun = this
    let result = thisArg.fun(...args) //已经用传入的this对象，执行当前函数。把结果抛出去就行。并且删除这个fun属性。
    delete thisArg.fun;
    return result
}
