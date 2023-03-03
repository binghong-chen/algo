type BinaryTree<T> = {
    value: T
    left?: BinaryTree<T>
    right?: BinaryTree<T>
}

const tree : BinaryTree<number> = {
    value: 1,
    left: {
        value: 2,
        right: {
            value: 3
        }
    },
    right: {
        value: 4,
        right: {
            value: 5,
            left: {
                value: 6
            }
        }
    }
}
/*
            1
          /  \
         2    4
          \    \
           3    5
                 \
                  6
*/
function visit<T>(node: BinaryTree<T>) {
    console.log(node.value)
    if (node.left) visit(node.left)
    if (node.right) visit(node.right)
}

visit(tree)

