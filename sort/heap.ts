/*
## 堆节点的访问
通常堆是通过一维数组来实现的。在阵列起始位置为0的情形中：
- 父节点i的左子节点在位置(2i+1)
- 父节点i的右子节点在位置(2i+2)
- 子节点i的父节点在位置floor((i-1)/2)

## 堆的操作
- 最大堆调整（Max Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
- 建立最大堆（Build Max Heap）：将堆中的所有数据重新排序
- 堆排序（HeapSort）：移除位在第一个数据的根节点，并做最大堆调整的递回运算
*/

function swap(arr: number[], index1: number, index2: number) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) return;
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

function sort(arr: number[]) {
    // 建立最大堆 容易想到的版本
    // O(NLogN)
    // function max_heapify() {
    //     for (let i = 1; i < arr.length; i++) {  // O(N)
    //         let c = i
    //         let p
    //         while ((p = Math.floor((c - 1) / 2)) >= 0) {    // O(LogN)
    //             if (arr[p] >= arr[c]) break
    //             swap(arr, p, c)
    //             c = p
    //         }
    //     }
    // }

    // 建立最大堆 复用 shift_down 版本
    // O(NLogN)
    function max_heapify() {
        // 需要反过来 i 从大到小 排
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {  // O(N)
            shift_down(i, arr.length - 1)   // O(LogN)
        }
    }

    // 下放
    // O(LogN)
    function shift_down(start: number, end: number) {
        const left = 2 * start + 1
        if (left > end) return
        if (left === end) {
            arr[start] < arr[left] && swap(arr, start, left)
        } else {
            const right = 2 * start + 2
            let next = arr[left] > arr[right] ? left : right
            arr[start] < arr[next] && swap(arr, start, next)
            shift_down(next, end)
        }
    }

    // 建立一个最大堆
    max_heapify()   // O(NLogN)
    // console.log(arr + '')

    let end = arr.length - 1
    // O(NLogN)
    while (end > 0) {
        // 将堆首（最大值）与堆尾（最小值备选）交换
        swap(arr, 0, end)
        // 堆大小减1，最大值已经归位，下轮不再参排
        end--
        // 堆首（最小值备选）下放
        shift_down(0, end)  // O(LogN)
    }
}

function test(arr: number[]) {
    let old = [...arr]
    sort(arr)
    console.log(old.toString(), '->', arr.toString())
}


test([])
test([1])
test([2, 1])
test([1, 2])
test([1, 3, 2])
test([2, 1, 3])
test([1, 4, 2, 3, 5])
test([1, 3, 4, 2, 5])
test([1, 2, 3, 4, 5, 6, 7, 8, 9])
test([1, 3, 2, 5, 6, 7, 8, 9, 4])
test([9, 8, 7, 6, 5, 4, 3, 2, 1])
