/**
 * @description 冒泡排序：升序 / 降序。
 *  1，第一位跟第二位对比，以此类推，最后一位是最大或最小。
 *  2，有多少位，就循环多少次
 *  3，但其实，每比一次，应该少一轮（最后一位不对比）
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
    var arr = []
    var len = this.length;
    for (let i = 0; i < len - 1; i++) {
        if (this[i]) {

        }
    }
}

/**
 * @description  插入排序。
 * 1，将数组中的第二位 与 前一位对比，如果比前一位大，则插入。
 * 2, 记录当前的位置，不断的与他前面的对比。
 */
Array.prototype.sortInsert = function () {
    let len = this.length
    for (let i = 1; i < len; i++) {
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





var sortArr = [4, 3, 5, 2, 9, 6, 1, 7, 8]
// sortArr.sortInsert()
// console.log(sortArr)