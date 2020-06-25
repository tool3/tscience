export default class Node<T> {
    public value: T;
    public next: Node<T>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}