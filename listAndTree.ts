type List = {
    id: number
    pId?: number
}[];

type ListItem = List extends (infer T)[] ? T : never;

type TreeNode = {
    id: number
    children: TreeNode[]
};

function listToTree(list: List): TreeNode[] {
    function listToTreetInner(subList: List): TreeNode[] {
        return subList.map(item => {
            return {
                id: item.id,
                // 递归转换 会多次全表扫描 O(N^2)
                children: listToTreetInner(list.filter(child => child.pId === item.id))
            }
        });
    }
    // 初始条件
    return listToTreetInner(list.filter(item => item.pId === undefined));
}

// 优化 不用filter

function listToTree2(list: List): TreeNode[] {
    const mapList: Record<number, List> = {};
    list.forEach(item => {
        if (item.pId === undefined) return;
        mapList[item.pId] = mapList[item.pId] ?? [];
        mapList[item.pId].push(item)
    })
    function listToTreetInner(subList: List): TreeNode[] {
        return subList.map(item => {
            return {
                id: item.id,
                // 递归转换 会多次全表扫描 O(N^2)
                children: listToTreetInner(mapList[item.id] ?? [])
            }
        });
    }
    // 初始条件
    return listToTreetInner(list.filter(item => item.pId === undefined));
}

function treeToList(treeNodes: TreeNode[]): List {
    const result: List = [];
    function treeToListInner(treeNodes: TreeNode[], pId?: number) {
        result.push(...treeNodes.map(node => ({ id: node.id, pId })));
        treeNodes.forEach(node => treeToListInner(node.children, node.id))
    }
    treeToListInner(treeNodes);
    return result;
}

function testL2T(list: List) {
    const treeList = listToTree(list)
    const treeList2 = listToTree2(list)
    const list2 = treeToList(treeList)
    const list22 = treeToList(treeList2)
    if (list.length !== list2.length) {
        console.error(list, treeList, treeList2, list2, '长度不对', list.length, list2.length)
    }
    list2.forEach(item2 => {
        if (list.findIndex(item1 => item1.id === item2.id && item1.pId === item2.pId) !== -1) return
        console.error('list', list.map(item => item.id), '不包含', item2.id)
    })
    list.forEach(item1 => {
        if (list2.findIndex(item2 => item1.id === item2.id && item1.pId === item2.pId) !== -1) return
        console.error('list2', list2.map(item => item.id), '不包含', item1.id)
    })
    if (list.length !== list22.length) {
        console.error(list, treeList, list22, '长度不对', list.length, list22.length)
    }
    list22.forEach(item2 => {
        if (list.findIndex(item1 => item1.id === item2.id && item1.pId === item2.pId) !== -1) return
        console.error('list', list.map(item => item.id), '不包含', item2.id)
    })
    list.forEach(item1 => {
        if (list22.findIndex(item2 => item1.id === item2.id && item1.pId === item2.pId) !== -1) return
        console.error('list22', list22.map(item => item.id), '不包含', item1.id)
    })
}


// testL2T([])
// testL2T([{ id: 1 }])
// testL2T([{ id: 1 }, { id: 2 }])
// testL2T([{ id: 1 }, { id: 2 }, { id: 11, pId: 1 }])
// testL2T([{ id: 1 }, { id: 2 }, { id: 11, pId: 1 }])
testL2T([{ id: 1 }, { id: 121, pId: 12 }, { id: 2 }, { id: 11, pId: 1 }, { id: 12, pId: 1 }])
