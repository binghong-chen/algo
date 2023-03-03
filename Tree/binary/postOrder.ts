type BinaryTree<T> = {
    value: T
    left?: BinaryTree<T>
    right?: BinaryTree<T>
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

function visit<T>(node: BinaryTree<T>) {
    if (node.left) visit(node.left)
    if (node.right) visit(node.right)
    console.log(node.value)
}

visit(tree)

