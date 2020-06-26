import Queue from './Queue';

import { Value } from './types/Value';

class GraphNode {
    public value: Value;
    public neighbors: Value[];
    constructor(value: Value) {
        this.value = value
        this.neighbors = [];
    }
}

class Graph {
    public adjacencyList: Record<Value, Value[]> = {};
    private queue: Queue<Value>;

    constructor() {
        this.adjacencyList = {};
        this.queue = new Queue<Value>();
    }

    public addVertex(value: Value): void {
        const node: GraphNode = new GraphNode(value);
        this.adjacencyList[node.value] = [];
    }

    public addEdge(src: Value, target: Value): void {
        if (this.adjacencyList[src]) this.adjacencyList[src].push(target);
        if (this.adjacencyList[target]) this.adjacencyList[target].push(src);
    }

    public breadthFirst(vertex: Value): Value[] {
        if (!vertex) return null;
        const visited: Record<Value, boolean> = { [vertex]: true };
        const result: Value[] = [];
        this.queue.enqueue(vertex);
        while (this.queue.length) {
            const current: Value = this.queue.dequeue();
            result.push(current);
            for (const neighbor of this.adjacencyList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    this.queue.enqueue(neighbor);
                }
            }

        }
        return result;
    }

    public depthFirstIterative(vertex: Value): Value[] {
        if (!vertex) return null;
        const visited: Record<Value, boolean> = { [vertex]: true };
        const result: Value[] = [];
        const values: Value[] = [vertex];

        while (values.length) {
            const current: Value = values.pop();
            result.push(current);

            for (const neighbor of this.adjacencyList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    values.push(neighbor);
                }
            }

        }
        return result;
    }

    public depthFirst(vertex: Value, visited: Record<Value, boolean> = {}, result: Value[] = []): Value[] {
        if (!vertex) return null;
        if (this.adjacencyList[vertex] && !visited[vertex]) {
            visited[vertex] = true;
            result.push(vertex);
            for (const neighbor of this.adjacencyList[vertex]) {
                this.depthFirst(neighbor, visited, result);
            }
        }

        return result;
    }
}

export default Graph;