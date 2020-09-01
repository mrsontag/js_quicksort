

var qs_array = [-5,9,5,26,-13,3,15,4,11,16,8,1,-21,31,2,-111,42,97,51,7,6,57];

function partition(array, lower, upper) {
    pivotvalue = array[Math.floor((lower+ upper)/2)]; //grab pivot equal to the half-way point between lower and upper, as an integer
    while (lower != upper) {
        while (array[lower]<pivotvalue) { lower++ };  //move lower bound up until you find a value greater than or equal to the pivot
        while (array[upper]>pivotvalue) { upper-- }; //move upper bound down until you find a value less than or equal to the pivot
        if (lower != upper) {  // if you aren't equal (and thus both at the new location of the pivot);
            [array[lower], array[upper]] = [array[upper], array[lower]];
        }
    }
    return upper;
}

function quicksort(array) {
    let todo = [[0,array.length-1]];
    let currentround = [];
    do {
        currentround = todo.pop();
        currentpivot = partition(array, currentround[0], currentround[1]);
        if (currentpivot > 0) {    //need to run pivot on left, save right side for later
            if (currentpivot + 1 < currentround[1]) { // pivot is not the highest value in the set, so add the upper to todo
                todo.push([currentpivot+1,currentround[1]]);
            }
            if (currentpivot - 1 > currentround[0]) { //pivot is not the lowest value in the set, so add the lower to todo
                todo.push([currentround[0],currentpivot-1]);
            }
        }
    }
    while (todo.length);
    return array;
}

console.log(qs_array.join());
quicksort(qs_array);
console.log("--> " + qs_array.join());