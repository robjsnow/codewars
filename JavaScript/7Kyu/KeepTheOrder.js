function keepOrder(arr, val) {
    // First Solution
    // arr.push(val);
    // arr.sort();
    // return arr.indexOf(val)

    // Refactor
    // return arr.filter(a => a < val).length

    //Final
    return arr.concat(val).findIndex( element => element >= val );
}
