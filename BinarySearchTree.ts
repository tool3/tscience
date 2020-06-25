import Queue from './Queue';
import Node from './types/Node';

type Value = string | number;

class TreeNode<Value> extends Node<Value> {
    public left: TreeNode<Value> | null;
    public right: TreeNode<Value> | null;

    constructor(value: Value) {
        super(value);
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    public root: TreeNode<Value> | null;
    public queue: Queue<TreeNode<Value>>;

    constructor() {
        this.root = null;
        this.queue = new Queue<TreeNode<Value>>();
    }

    public add(value: Value): void {
        const node: TreeNode<Value> = new TreeNode<Value>(value);
        if (!this.root) {
            this.root = node;
        } else {
            let current: TreeNode<Value> = this.root;
            while (current) {
                if (value && current.value && value < current.value) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    }
                    current = current.left;

                } else {
                    if (!current.right) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }

    breadthFirstSearch(): Array<Value> {
        if (this.root) {
            const visited: Record<Value, boolean> = {};
            const result: Array<Value> = [];
            this.queue.enqueue(this.root);
            while (this.queue.length) {
                let current: TreeNode<Value> = this.queue.dequeue();
                if (current && !visited[current.value]) {
                    visited[current.value] = true;
                    if (current.left) this.queue.enqueue(current.left);
                    if (current.right) this.queue.enqueue(current.right);
                    result.push(current.value);
                }
            }
            return result;
        }
    }

    depthFirstSearch(): Array<Value> {
        const visited: Record<Value, boolean> = {};
        const result: Array<Value> = [];

        const traverse = (node: TreeNode<Value>) => {
            if (!visited[node.value]) {
                visited[node.value] = true;
                if (node.left) traverse(node.left)
                result.push(node.value);
                if (node.right) traverse(node.right)
            }
        }

        traverse(this.root);
        return result;
    }
}



export default BinarySearchTree;