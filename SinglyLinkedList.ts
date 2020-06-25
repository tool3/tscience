import Node from './types/Node';

class SinglyLinkedList<T> {
    public head: Node<T>;
    public tail: Node<T>;
    public length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    public add(value: T): void {
        const node: Node<T> = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let current: Node<T> = this.head;
            while (current.next) {
                current = current.next;
            }

            if (current) {
                current.next = node;
                current = node;
                this.tail = node;
            }
        }
        this.length++;
    }

    public remove(value: T): Node<T> {
        if (!this.head) return null;
        let current: Node<T> = this.head;
        let prev: Node<T> = null;

        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }

        if (prev) {
            const removed: Node<T> = current;
            prev.next = current ? current.next : null;
            this.length--;
            return removed;
        } else {
            return null;
        }
    }
}

export default SinglyLinkedList;