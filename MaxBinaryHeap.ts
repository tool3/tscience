import { Value } from './types/Value';

class MaxBinaryHeap {
    public values: Value[];

    constructor() {
        this.values = [];
    }

    public add(value: Value): void {
        if (value) {
            this.values.push(value);
            this.bubble(value);
        }
    }

    public bubble(value: Value): void {
        let index: number = this.values.length - 1;
        while (index !== 0) {
            const parentIndex: number = Math.floor((index - 1) / 2);
            const parentValue: Value = this.values[parentIndex];
            if (value <= parentValue) break;
            this.values[parentIndex] = value;
            this.values[index] = parentValue;
            index = parentIndex;
        }
    }

    public extractMax(): Value {
        const max: Value = this.values[0];
        const end: Value = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sink();
        }

        return max;
    }

    public sink(): void {
        let index = 0;
        const length = this.values.length;
        const value = this.values[0];
        while (true) {
            const leftChildIndex = (index * 2) + 1;
            const rightChildIndex = (index * 2) + 2;
            const leftChild = this.values[leftChildIndex];
            const rightChild = this.values[rightChildIndex];
            let swapIndex = null;

            if (leftChildIndex < length) {
                if (leftChild > value) swapIndex = leftChildIndex;
            }

            if (rightChildIndex < length) {
                if (rightChild > leftChild) swapIndex = rightChildIndex;
            }

            if (!swapIndex) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = value;
            index = swapIndex;
        }
    }

}

export default MaxBinaryHeap;