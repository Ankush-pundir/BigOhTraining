function rotateMatrix(matrix) {
    const n = matrix.length;

    // nested loops to get the transpose of matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];  // swaping values
        }
    }

    // now reversing each row
    for (let row of matrix) {
        row.reverse();
    }
    return matrix;
}

console.log(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))