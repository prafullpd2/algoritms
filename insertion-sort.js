/**
 * INSERTION SORT - 
 * 
 * the concept is that we will select a key element from array. And we will assume that left hand side of 
 * that array is already sorted. Then we will compare the key with the sorted element and put the key at the
 * position where it belongs
 * 
 * we will start the algorithm by picking the key from second position assuming that 1st position is already sorted
 * 
 * [9, 67, 0, 3, 5, 5, 4]
 * 
 * [9,|67|, 0, 3, 5, 5, 4] 
 * selected the key element from second position. 
 * After comparing the key with LHS, we found that it belongs to the same place.
 * 
 * [9, 67,|0|, 3, 5, 5, 4]
 * selected the key element from third position. 
 * After comparing the key with LHS, we found that it belongs to the 1st place.
 * Similarly - 
 * [0, 9, 67, |3|, 5, 5, 4]
 * [0, 3, 9, 67, |5|, 5, 4]
 * [0, 3, 5, 9, 67, |5|, 4]
 * [0, 3, 5, 5, 9, 67, |4|]
 * [0, 3, 4, 5, 5, 9, 67]
 * 
 * ----Sorted-----
 *  
 * PSEUDOCODE - 
 * A[a1, a2, a3....an]
 * 
 *                                  Cost
 * for j=2 to n                 |   n-1
 *      key  = A[j]             |   n-1
 *      i = j-1                 |   n-1
 *      while i>0 and key<A[i]  |   (|j=2 to n Σ| tj) //for every j, let the execution time of this while check be tj
 *          A[i+1] = A[i]       |   (|j=2 to n Σ| tj-1)//it will execute one time less than while loop
 *          i = i-1             |   (|j=2 to n Σ| tj-1)
 *      A[i+1] = key            |   n-1
 * ----------------------------------------------------------------------------------
 *                                  3*(n-1) + 3*(|j=2 to n Σ| tj) - 2*n
 * Best Case -  for best case, tj will be 1
 *              n-3 + 3(n-1)
 *              Θ(n) i.e. theta of n
 * 
 * Worst Case-  for worst case, tj will depend upon j. for j=2, tj will be 2. for j=3 tj will be 3. for j=n tj will be n
 *              n-3 + 3 * (|j=2 to n Σ| j)
 *              n-3 + 3 * (n(n-1)/2 - 1)
 *              Θ(n^2) 
 */


function insertionSort(arr){
    let key;
    for(let j = 1; j<arr.length; j++){
        key = arr[j];
        let i = j-1;
        while(i>-1 && key<arr[i]){
            arr[i+1] = arr[i];
            i--;
        }
        arr[i+1] = key;
    }
    return arr;
}

/**------------------------------------------------------------- */

function insertionSort(arr, comparatorFunction){
    let key;
    for(let j = 1; j<arr.length; j++){
        key = arr[j];
        let i = j-1;
        while(i>-1 && key<arr[i]){
            arr[i+1] = arr[i];
            i--;
        }
        arr[i+1] = key;
    }
    return arr;
}




