/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/

function stantonMeasure(arr) {
    let n = 0;
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === 1) {
        n++;
      }
    }
    
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === n) {
        count++;
      }
    }
    return count;
  }