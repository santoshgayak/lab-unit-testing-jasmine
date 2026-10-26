function calculateArea(length, breadth) {
    if(!length || !breadth) return undefined;
    if(typeof length !== "number" || typeof breadth !== "number") return undefined;
    return length*breadth;
}