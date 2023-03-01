function sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        while (j < i) {
            if (arr[j] > arr[i]) {
                let value = arr[i]
                for (let k = i; k > j; k--) arr[k] = arr[k - 1]
                arr[j] = value
                break;
            }
            j++;
        }
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
