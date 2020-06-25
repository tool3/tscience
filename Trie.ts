class TrieNode {
    public letters: Record<string, TrieNode>;
    public isWord: boolean;
    public value: string;

    constructor(value: string) {
        this.value = value;
        this.isWord = false;
        this.letters = {};
    }
}

class Trie {
    public root: TrieNode;
    constructor() {
        this.root = new TrieNode('');
    }

    public addWord(word: string, node: TrieNode = this.root): TrieNode {
        let letter = word[0];
        const newNode: TrieNode = new TrieNode(letter);
        const subWord: string = word.substring(1);
        if (word.length > 0) {
            if (!node.letters[letter]) {
                node.letters[letter] = newNode;
                return this.addWord(subWord, newNode);
            } else {
                return this.addWord(subWord, node.letters[letter]);
            }
        } else {
            node.isWord = true;
        }
    }

    public printAllWords(): Array<string> {
        let result: Array<string> = [];

        const print = (node: TrieNode, string: string = "") => {
            const length: number = Object.keys(node.letters).length;
            if (length) {
                string += node.value;
                for (let letter in node.letters) {
                    if (node.letters[letter].isWord) {
                        string += node.letters[letter].value;
                        result.push(string);
                    }
                    print(node.letters[letter], string);
                }
            } else {
                return result.concat(string);
            }
        }
        print(this.root);
        return result;
    }

    public hasWord(word: string, node: TrieNode = this.root): boolean {
        const letter: string = word[0];
        if (!node.letters[letter]) {
            return false;
        } else if (node.letters[letter].isWord) {
            return true;
        } else {
            return this.hasWord(word.substring(1), node.letters[letter]);
        }
    }
}

