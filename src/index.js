
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix !== undefined) {
    for (let i = 1; i < matrix.length; i += 2) {
      matrix[i].sort( (a,b) => b - a);
      result  = matrix.flat();
    }
  }
  return result;
}
