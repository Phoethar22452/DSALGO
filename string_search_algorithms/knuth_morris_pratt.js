function buildLPS(pattern) {
    const lps = Array(pattern.length).fill(0);
    let length = 0;
    for (let i = 1; i < pattern.length;) {
        if (pattern[i] === pattern[length]) {
            lps[i++] = ++length;
        } else if (length) {
            length = lps[length - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}

function kmpSearch(text, pattern) {
    const lps = buildLPS(pattern);
    let i = 0, j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
            if (j === pattern.length) return i - j;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
  return -1;
}
