/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column is set to 0.
*/

const findZeroPos = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

const matrixZero = (array) => {
  const zeroPos = findZeroPos(array);
  const zeroRow = [];
  const zeroCol = [];

  zeroPos.forEach(pos => {
    zeroRow.push(pos[0]);
    zeroCol.push(pos[1]);
  })

  array.forEach((row, rowIndex) => {
    if (zeroRow.includes(rowIndex)) {
      row.forEach((col, colIndex) => {
        array[rowIndex][colIndex] = 0;
      })
    }
    row.forEach((col, colIndex) => {
      if (zeroCol.includes(colIndex)) {
        array[rowIndex][colIndex] = 0;
      }
    })
  })

  return array;

}

console.log(matrixZero([
  [1, 1, 1, 1, 1],
  [1, 1, 0 ,1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1]
]));