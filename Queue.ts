import Node from './types/Node';

class Queue<T> {
    public length: number;
    public first: Node<T>;
    public last: Node<T>;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    public enqueue(value: T): void {
        const node: Node<T> = new Node<T>(value);
        if (!this.last) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    public dequeue(): T {
        if (this.first === this.last) this.last = null;
        if (!this.first) return null;
        const last: Node<T> = this.first;
        this.first = this.first.next;
        this.length--;
        return last.value;
    }

    public print(): void {
        if (!this.first) return;
        let current: Node<T> = this.first;
        let result: Array<T> = [];

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result);
    }
}

export default Queue;