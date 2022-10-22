const findElementPosition = (matrix, number) => {
  const rowIndex = matrix.findIndex((row) => row.includes(number));
  const columnIndex = matrix[rowIndex].indexOf(number);

  return [rowIndex, columnIndex];
};
