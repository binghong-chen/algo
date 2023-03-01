function swap(arr: number[], index1: number, index2: number) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) return;
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

// 冒得不对
// function sort(arr: number[]) {
//     let hasBubble = true;
//     for (let i = 0; i < arr.length; i++) {
//         hasBubble = true;
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[i]) {
//                 hasBubble = true;
//                 swap(arr, i, j);
//             }
//         }
//         if (!hasBubble) break;
//     }
// }

// 冒大
function sort(arr: number[]) {
    let hasBubble = true;
    for (let i = arr.length - 1; i > 0; i--) {
        hasBubble = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                hasBubble = true;
                swap(arr, i, j);
                console.log(arr.join(','))
            }
        }
        if (!hasBubble) break;
    }
}

// 冒小
function sort2(arr: number[]) {
    let hasBubble = true;
    for(let i=0;i<arr.length - 1;i++) {
        for(let j=arr.length; j > i;j--) {
            if (arr[i] > arr[j]) {
                hasBubble = true;
                swap(arr, i, j);
                console.log(arr.join(','))
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
test([2, 1, 3])
test([1, 4, 2, 3, 5])
test([1, 3, 4, 2, 5])
test([1, 2, 3, 4, 5, 6, 7, 8, 9])
test([1, 3, 2, 5, 6, 7, 8, 9, 4])
test([9, 8, 7, 6, 5, 4, 3, 2, 1])
