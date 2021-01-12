/**
 * @description 算法：搜索
 */

/**
 * @description 顺序搜索 。O（n）。
 * @param {*} item ：要搜索的结果
 */
Array.prototype.orderSearch = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === item) {
            return i
        }
    }
    return -1
}

/**
 * @description 二分搜索。思路：
 * 0，数组必须是有序数组
 * 1，从数组的中间元素开始，如果中间元素刚好是要查找的元素，则搜索结束。
 * 2，如果目标值，大于或小于中间元素，则在大于或者小于的那一半继续二分。通常有分的情况，要用递归
 */

Array.prototype.binarySearch = function (item) {
    this.sort();
    let low = 0; //最小下标
    let high = this.length - 1; //最大下标
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let midVal = this[mid]
        if (midVal < item) { //在大的那一边，就改变最小下标
            low = mid + 1
        } else if (midVal > item) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

// [1,3,4] 3
const a = [1, 2, 3, 4, 5].binarySearch(33)
console.log(a)

