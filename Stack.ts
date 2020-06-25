import Node from './types/Node';

class Stack<T> {
    public top: Node<T>;
    public size: number;

    constructor() {
        this.top = null;
        this.size = 0;
    }

    public isEmpty(): boolean {
        return this.size <= 0;
    }

    public push(value: T): void {
        const node: Node<T> = new Node<T>(value);
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }

    public pop(): T {
        if (this.isEmpty()) return null;
        const top: Node<T> = this.top;
        this.top = this.top.next;
        this.size--;
        return top.value;
    }

    public print(): void {
        const result: Array<T> = [];
        let top: Node<T> = this.top;
        while (top) {
            result.push(top.value);
            top = top.next;
        }
        console.log(result);
    }
}

export default Stack;