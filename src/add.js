function add (numOne, numTwo) {
    if(arguments < 2) return undefined;
    if(typeof numOne !== "number" || typeof numTwo !== "number") return undefined;
    return numOne + numTwo;
}