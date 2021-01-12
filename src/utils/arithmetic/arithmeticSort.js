/**
 * @description 算法文件：排序和搜索。画图
 */


/**
 * @description 冒泡排序：升序 / 降序。
 *  1，第一位跟第二位对比，以此类推，最后一位是最大或最小。
 *  2，有多少位，就循环多少次
 *  3，但其实，每比一次，应该少一轮（最后一位不对比）
 * @param 
 * @returns void
 * @author LLQ
 */

Array.prototype.sortMP = function () {
    var len = this.length;
    for (let j = 0; j < len - 1; j++) {
        for (let i = 0; i < len - 1 - j; i++) {
            //最后一位就不用比了
            if (this[i] > this[i + 1]) {
                const cent = this[i]
                this[i] = this[i + 1]
                this[i + 1] = cent
            }
        }
    }
}

/**
 * @description 选择排序：
 *  1，找到数组中的最小值，放置第一位。
 *  2，找到数组中的第二小，放置第二位。
 *  3，以此类推，执行n -1遍
 */
Array.prototype.sortSelect = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let indexMin = i
        for (let j = i; j < this.length; j++) { //比过的就不比了，从i开始
            if (this[j] < this[indexMin]) {
                indexMin = j //暂时拿到最小值，接着跟该最小值继续比
            }
        }
        const temp = this[i]
        this[i] = this[indexMin] //放置在i位置
        this[indexMin] = temp

    }
}

/**
 * @description  插入排序。
 * 1，将数组中的第二位 与 前一位对比，如果比前一位大，则插入。
 * 2, 记录当前的位置，不断的与他前面的对比。
 */
Array.prototype.sortInsert = function () {
    for (let i = 1; i < this.length; i++) {
        const cent = this[i]
        let j = i;
        while (j > 0) {
            if (cent < this[j - 1]) {
                this[j] = this[j - 1]
            } else {
                break
            }
            j -= 1
        }
        this[j] = cent
    }
}

/**
 * @description 归并排序。
 * 1，分：把数组分成两半，再递归的对子数组进行分操作，直到分成一个个的数。
 * 2，合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个数组。
 *  对有序数组进行合并：
 *  1，新建一个空数组res，用于存放最终排序后的数组
 *  2，比较两个有序数组的头部，较小者出队 并推入res中
 *  3，如果两个数组还有值，重复第二步。
 */
Array.prototype.mergeSort = function () {
    function rec(arr) { //有递归，就要定义函数，重复执行该函数
        if (arr.length === 1) { return arr }; //数组一直分，分到长度 1，就停止。
        const len = arr.length
        const mid = Math.floor(len / 2) //取整，获取中间下标。
        const left = arr.slice(0, mid) //slice纯函数，包括前一位，不包括后一位。
        const right = arr.slice(mid, len)
        const orderLeft = rec(left) //只有在return的时候，orderLeft才会有值。获取最终的一个个值
        const orderRight = rec(right)

        //不递归了，会往下走。对每个数组进行合并
        const res = []
        while (orderLeft.length || orderRight.length) { //确保分完，不然会是undefined
            if (orderLeft.length && orderRight.length) {
                //较小出队,shift会得到出队的值，直接push到res中。
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            } else if (orderLeft.length) {  //出队后，剩下的那个就是最大的，并且只会又一个值，因为上面是平分。
                res.push(orderLeft.shift())
            } else if (orderRight.length) {
                res.push(orderRight.shift())
            }
        }
        return res
    }
    const res = rec(this)
    res.forEach((n, i) => { this[i] = n }) //将得到的结果赋值给原数组
}

/**
 * @description 快速排序。
 * 1，从数组中，任意选择一个‘基准 ’，所有比基准小的元素，放在基准前面。比基准大的元素放在基准的后面。
 * 2，递归的对基准前后的子数组进行分区。
 */
Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) { return arr; }
        const left = []
        const right = []
        let mid = arr[0] //定义一个基准,所以从第二位开始 //  4 - 3
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] < mid) {
                left.push(arr[i])  // 3 , 1 - 1
            } else {
                right.push(arr[i]) // 9
            }
        }
        return [...rec(left), mid, ...rec(right)] //return 不会马上返回，会等return里面的执行完才会返回
        // 1，【【1，3，。。】，4，9】。走第二遍，return是个独立的整体
    }
    // 递归执行完，才会执行外面的代码
    const res = rec(this)
    // 拷贝给原数组
    res.forEach((n, i) => {
        this[i] = n
    })
}




var sortArr = [4, 3, 9, 1]
// sortArr.quickSort()
// console.log(sortArr)