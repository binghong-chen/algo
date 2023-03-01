function sort(arr: number[]) {
    function sortInner(start: number, end: number) {
        if (start >= end) return
        let mid = Math.floor((start + end) / 2)
        sortInner(start, mid)
        sortInner(mid + 1, end)
        // 子项完成，本项合并前需要一份空间
        let copy = [...arr]
        let i = start;
        let j = start;
        let k = mid + 1;
        while (j <= mid && k <= end) arr[i++] = copy[j] < copy[k] ? copy[j++] : copy[k++]
        while (j <= mid) arr[i++] = copy[j++];
        while (k <= end) arr[i++] = copy[k++];
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
test([2, 1, 3])
test([1, 4, 2, 3, 5])
test([1, 3, 4, 2, 5])
test([1, 2, 3, 4, 5, 6, 7, 8, 9])
test([1, 3, 2, 5, 6, 7, 8, 9, 4])
test([9, 8, 7, 6, 5, 4, 3, 2, 1])
