function buildBadCharTable(pattern) {
    const table = {};
    for (let i = 0; i < pattern.length; i++) {
        table[pattern[i]] = i;
    }
    return table;
}

function boyerMoore(text, pattern) {
    const badCharTable = buildBadCharTable(pattern);
    const m = pattern.length;
    const n = text.length;

    let s = 0;

    while (s <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            return s;
        } else {
            const shift = Math.max(1, j - (badCharTable[text[s + j]] ?? -1));
            s += shift;
        }
    }
    return -1;
}
