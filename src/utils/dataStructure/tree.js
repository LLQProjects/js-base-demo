/**
 * @description 数据结构： 
 * 1，树：每个节点可有children包裹的多个子节点
 * 遍历：深度优先遍历、广度优先遍历
 * 举例：省市区及联。
 * 
 * 2，二叉树：每个节点最多只能有左右两个节点。
 * 遍历：先序遍历，中序遍历，后序遍历
 */

// 树 数据结构
let tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: null
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'e',
                    children: null
                }
            ]
        }
    ]
}

/**
 * @description 深度优先遍历：一层往死里遍历到底。
 * 遍历：递归
 */

function deepFor(tree) {
    console.log(tree.val)
    if (tree.children) {
        tree.children.forEach(item => {
            deepFor(item)
        })
    }
}
/**
 * @description 广度优先遍历：
 * 0，运用队列，先进先出
 * 1，根节点入队
 * 2，队头出队并且访问
 * 3，把队头的children子元素，挨个入队
 * 4，重复2，3步骤，直到结束。
 */

function rangeFor(tree) {
    var arr = [tree]; //根节点入队
    while (arr.length > 0) {
        const n = arr.shift() //队头出队并且访问
        const val = n.val
        n.children.forEach(i => { //父在前，子在后，即实现广度
            arr.push(i)
        })
    }
}


// 二叉树 数据结构
var forkTree = {
    val: '1',
    left: {
        val: '2',
        left: {
            val: '4',
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: '3',
        left: null,
        right: null
    }
}

/**
 * @description 先序遍历：
 * 1，访问根节点
 * 2，对根节点的左子树进行先序遍历
 * 3，对根节点的右子树进行先序遍历
 */
function preorder(tree) {
    if (!tree) { return };
    console.log(tree.val)//1，
    preorder(tree.left) //2，往左递归到底
    preorder(tree.right) //3，往右递归到底 
}
/**
 * @description 中序遍历
 */
/**
 * @description 后序遍历
 */

