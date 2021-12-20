let makeString = (arr) => {
    let string = "";
    for (var i = 0; i < arr.length; i++) {
        string += arr[i];
    }
    return string;
}


let makeArr = (string) => {
    let result = [];

    for (var i = 0; i < string.length; i++) {
        result.push(string[i]);
    }

    return result;
}


let generateWords = (strings) => {
    let n = strings.length;
    let usedValues = new Array(n);
    let arr = new Array(n);

    for (var i = 0; i < n; i++) {
        usedValues[i], arr[i] = 0;
    }

    let result = []

    let perm = (level) => {
        if (level >= n) {
            string = makeString(arr);
            if (!(result.includes(string))) {
                result.push(string);
            }
            return;
        }

        for (var i = 0; i < n; i++) {
            if (usedValues[i] == 1) {
                continue;
            }

            usedValues[i] = 1;
            arr[level] = strings[i];
            perm(level + 1);
            arr[level] = 0;
            usedValues[i] = 0;
        }
    };
    perm(0);

    return result;
};


words = generateWords(makeArr("expensive"));

for (var i = 0; i < words.length; i++) {
    console.log(`[${i + 1}] ${words[i]}`);
}

exit(0);
