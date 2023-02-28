function swap(arr: number[], index1: number, index2: number) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) return;
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

// 1 3 7 2 4
// 1 3 4 2 7
// 1 3 
function sort(arr: number[]) {
    function sortInner(start: number, end: number) {
        if (start >= end) return
        let mid = Math.floor((start + end) / 2)
        let value = arr[mid]
        swap(arr, mid, end);

        let l = start, r = end - 1;
        while (l < r) {
            // 遇到大的 往后排
            if (arr[l] > value) {
                swap(arr, l, r)
                if (r > start) r--
            } else {
                if (l < end - 1) l++
            }
        }
        if (arr[r] > value) mid = r
        else mid = r + 1
        swap(arr, mid, end)
        sortInner(start, l)
        sortInner(r + 1, end)
    }
    sortInner(0, arr.length - 1)
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
test([1, 3, 4, 2, 5])
test([1, 2, 3, 4, 5, 6, 7, 8, 9])
test([1, 3, 2, 5, 6, 7, 8, 9, 4])
test([9, 8, 7, 6, 5, 4, 3, 2, 1])
