
// You should implement your task here.
/*[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
] */
module.exports = function towelSort (matrix) {
  let resArray = [];
  if (arguments.length === 0){
    return resArray;
  }
  for (let i = 0; i < matrix.length; i++)
  {
     if (i % 2 === 0)
     {
       resArray.push(...matrix[i]);
     }
     else {
      resArray.push(...matrix[i].reverse());
     }
  }
  return resArray;
}
