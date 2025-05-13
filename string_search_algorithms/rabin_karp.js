function rabinKarp(text, pattern) {
    const prime = 101;
    const m = pattern.length;
    const n = text.length;
    let hashPat = 0, hashTxt = 0, h = 1;

    for (let i = 0; i < m - 1; i++) h = (h * 256) % prime;

    for (let i = 0; i < m; i++) {
        hashPat = (256 * hashPat + pattern.charCodeAt(i)) % prime;
        hashTxt = (256 * hashTxt + text.charCodeAt(i)) % prime;
    }

    for (let i = 0; i <= n - m; i++) {
        if (hashPat === hashTxt) {
            if (text.slice(i, i + m) === pattern) return i;
        }

        if (i < n - m) {
            hashTxt = (256 * (hashTxt - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
            if (hashTxt < 0) hashTxt += prime;
        }
    }
    return -1;
}
