/**
 * @description 节流
 * @param {Function} fn 监听的回调函数
 * @param {Number} delay 延迟时间
 * @returns Function
 */

export function debounce(fn, delay = 500) {
    let timer = null; //放在闭包中，不放在全局，封装外界无法改变。
    return function () {
        if (timer) {  //频繁操作，如果存在就不新增，执行完再下一次。
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            // fn()  也行
            timer = null
        }, defay)
    }
}