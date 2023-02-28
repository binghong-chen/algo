function swap(arr: number[], index1: number, index2: number) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) return;
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

function sort(arr: number[]) {
    let hasBubble = true;
    for (let i = 0; i < arr.length; i++) {
        hasBubble = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                hasBubble = true;
                swap(arr, i, j);
            }
        }
        if (!hasBubble) break;
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
test([1, 3, 4, 2, 5])
test([1, 2, 3, 4, 5, 6, 7, 8, 9])
test([1, 3, 2, 5, 6, 7, 8, 9, 4])
test([9, 8, 7, 6, 5, 4, 3, 2, 1])
