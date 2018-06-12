function decodeString(s) {
    while (s.includes("[")) {
        s = s.replace(/(\d+)\[([a-z]*)\]/, (match, i, string) => string.repeat(i));
    }
    return s;
}
