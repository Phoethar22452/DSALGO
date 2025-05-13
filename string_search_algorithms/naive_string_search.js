function naiveStringSearchOne(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            console.log(short[i], long[i + j]);
            if (short[j] !== long[i+j]) {
                console.log("Break!");
                break;
            }
            if (j === short.length - 1) {
                console.log("Found One!");
                count++;
            }
        }
    }
    return count;
}