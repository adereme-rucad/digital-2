function minEvenElements(matrix) {
    let result = [];
    
    for (let row of matrix) {
        const evenElements = row.filter(x => x % 2 === 0);

        if (evenElements.length > 0) {
            result.push(Math.min(...evenElements));
        } else {
            result.push(null);
        }
    }
    console.log(result);
    return minEvens;
}
let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

minEvenElements(matrix);
