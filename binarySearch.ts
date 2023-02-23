function binarySearch<T>(array: T[], value: T) {
    let l = 0, h = array.length;
    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        if (array[m] === value) return m;
        if (array[m] < value) l = m + 1;
        else h = m - 1;
    }
    return -1;
}

function binarySearchRecursion<T>(array: T[], l: number, h: number, value: T): number {
    if (l > h) return -1;
    let m = Math.floor((l + h) / 2);
    if (array[m] === value) return m;
    if (array[m] < value) return binarySearchRecursion<T>(array, m + 1, h, value);
    return binarySearchRecursion<T>(array, l, m - 1, value);
}

function test<T>(array: T[], value: T) {
    const index1 = binarySearch<T>(array, value);
    const index2 = binarySearchRecursion<T>(array, 0, array.length, value);
    if (!array.includes(value)) {
        if (index1 !== -1) {
            console.error(`binarySearch 错误 array=${array},value=${value} 期望返回 -1, 实际返回 ${index1}`);
        }
        if (index2 !== -1) {
            console.error(`binarySearchRecursion 错误 array=${array},value=${value} 期望返回 -1, 实际返回 ${index2}`);
        }
    } else {
        if (index1 === -1) {
            console.error(`binarySearch 错误 array=${array},value=${value} 包含, 实际返回 ${index1}`);
            return;
        }
        if (index2 === -1) {
            console.error(`binarySearchRecursion 错误 array=${array},value=${value} 包含, 实际返回 ${index2}`);
            return;
        }
        if (array[index1] !== value) {
            console.error(`binarySearch 错误 array=${array},value=${value} array[${index1}] !== ${value}`);
        }
        if (array[index1] !== value) {
            console.error(`binarySearchRecursion 错误 array=${array},value=${value} array[${index2}] !== ${value}`);
        }
    }
}

test<number>([], 0)
test<number>([1], 0)
test<number>([1], 1)
test<number>([1, 2], 0)
test<number>([1, 2, 3], 1)
test<number>([1, 2, 3, 3], 3)
test<number>([1, 2, 3, 3, 3], 3)
test<number>([1, 2, 3, 3, 3, 4], 3)
test<number>([1, 2, 3, 3, 3, 4, 4], 5)
test<number>([1, 2, 3, 3, 3, 4, 4, 5], 4)
test<number>([1, 2, 3, 3, 3, 4, 4, 5, 6], 2)
test<number>([1, 2, 3, 3, 3, 4, 4, 5, 6], 3)
test<number>([1, 2, 3, 3, 3, 4, 4, 5, 6], 4)
test<number>([1, 2, 3, 3, 3, 4, 4, 5, 6], 5)
test<number>([1, 2, 3, 3, 3, 4, 4, 5, 6], 6)