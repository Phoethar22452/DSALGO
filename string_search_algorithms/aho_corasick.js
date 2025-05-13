class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
        this.output = [];
    }
}

class AhoCorasick {
    constructor() {
        this.root = new TrieNode();
    }

    add(pattern) {
        let node = this.root;
        for (const char of pattern) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
        node.output.push(pattern);
    }

    build(patterns) {
        for (const pat of patterns) this.add(pat);
    }

    search(text) {
        let node = this.root;
        const results = [];

        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            while (node !== this.root && !node.children[char]) {
                node = this.root; // simplified fallback
            }
            if (node.children[char]) {
                node = node.children[char];
            }
            if (node.output.length > 0) {
                for (const word of node.output) {
                results.push({ word, index: i - word.length + 1 });
                }
            }
        }

        return results;
    }
}

// Example
const ac = new AhoCorasick();
ac.build(["he", "she", "his", "hers"]);

console.log(ac.search("ushers")); // Output: matches with indexes
