/**
 * MERGE SORT
 * 
 * It follows divide-and-conquer paradigm
 * 
 * Divide - We divide an array into half and 
 * Conquer- sort the two subsequent arrays of n/2 elements
 * Combine - Merge the two sorted subsequent array to produce a sorted array.
 * 
 * Merge Sort - 
 * 1. if n = 1, we are done. i.e. the array is sorted.
 * 2. recursively sort array A[1, 2, ... n/2] and A[n/2+1, ....n]
 * 3. Merge the sorted lists
 * 
 * 
 * We have two sorted arrays and we have to merge them - 
 *      A1[]        A2[]
 *      20          12  
 *      13          11  
 *      7           9   
 *      2           1   // 1. compare the top elements and pop the smaller value. then compare the next top elements and 
 *                      // pop smaller one
 *-------------------------------------------
 *     1, 2, 7, 9, 11, 12, 13,20 
 * Merging of above two arrays takes almost n number os steps. Thus Merging is of Θ(n)
 * 
 * Merge (Arr[], startIndexofFirstArry, endIndexofFirstArray, endIndexifWholeArrayA )
 * i.e. Merge(Arr[], p, q, r) where p<=q<r;
 * Merge Assumes that Arr[p,...q], Arr[q+1,...r] are sorted.
 * Merge procedure takes n steps where n = r-p+1. Thus Merging is of Θ(n)
 * 
 * 
 * We place on the bottom of each pile a sentinel card, 
 * which contains a special value that we use to simplify our code. 
 * Here, we use ∞ as the sentinel value, so that whenever a card with ∞ is exposed, 
 * it cannot be the smaller card unless both piles have their sentinel cards exposed. 
 * But once that happens, all the nonsentinel cards have already been placed onto the output pile. 
 * Since we know in advance that exactly r -p +1 cards will be placed onto the output pile, 
 * we can stop once we have performed that many basic steps.
 * 
 * 
 *   ...9  10  11  12  13  14  15  16  17... indices
 * ---------------------------------------
 *      1 | 2 | 5 | 6 | 1 | 3 | 8 | 9 |
 * ----------------------------------------
 * p = 9, 
 * q = 9 + floor((16-9)/2) = 12, or floor((9+16)/2), 
 * r = 16
 * n1 = p-q+1 = 4
 * n2 = r-q = 4
 * 
 * 
 * 
 * PSEUDOCODE - 
 * 
 * Mearge(arr, p, q, r)
 * n1 = q - p + 1 
 * n2 = r - q
 * Let L[1, ... n1 + 1] and R[1... n2 +1] be two arrays
 * for i=1 to n1
 *      L[i] = A[p-1+i]
 * for j=1 to n2
 *      R[j] = A[q+j]
 * L[n1+1] = ∞
 * R[n2+1] = ∞
 * i=1
 * j=1
 * for k=p to k<=r
 *      if  L[i]<=R[j]
 *          A[k] = L[i]
 *          i = i + 1
 *      else 
 *          A[k] = R[j]
 *          j = j + 1
 *
 * 
 * MergeSort(arr, p, r)
 * if p<r
 *      q = floor((p+r)/2)
 *      MergeSort(arr, p, q)
 *      MergeSort(arr, q+1, r)
 *      Merge(arr, p, q, r)
 *  
 * -----------------------------------------------------------
 * ANALYSIS - 
 *                      
 *          |                            n                                      cn
 *          |
 *          |                n/2                     n/2                        2*cn/2
 *        level m, log n
 *          |
 *          |            n/4         n/4           n/4            n/4           4*cn/4
 *          |
 *          |              
 *          |        n/8    n/8   n/8    n/8    n/8     n/8   n/8       n/8     8*cn/8
 * 
 *                  1    1..................................1    1              n * c
 * --------------------------------------------------------------------------------------
 *                                                                      cn(m)=> cn * (logn +1)
 * 
 * 
 * nodes on each level, 2^(m -1), m is level of tree
 * 
 * num of nodes on last level will be n, always
 * 
 * thus num of levels m => 2^(m -1) = n
 *                         m - 1 = log n
 *                         m = log n  +  1 
 * 
 * 
 * let merging of n element takes cn time
 * merging on levels m takes cn(m)=> cn * (logn +1) => cn log n + cn => Θ( n log n )
 * 
 * 
 */

