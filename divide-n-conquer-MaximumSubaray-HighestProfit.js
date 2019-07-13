 /**
 * suppose you have to invest in a company. the rate of share are volatile. they change every day. 
 * To earn profit, you have to buy the share at low price and sell it at higher price. 
 * 
 * Day       0    1    2    3   4    5    6    7   8    9   10  11   12   13  14  15  16 
 * Price    100  113  110  85  105  102  86   63   81  101  94  106  101  79  94  90  97
 * 
 * You can only buy one share and only one time. 
 * You have to find the maximun profit out of above given rates on given day. you have to find the 
 * day to invest and day to sell the share. 
 * 
 * -----------Brute Force Aproach-------------
 * We will add the change in rates of subsequent days and compare each of the possible combination of the values.
 * 
 * Day       0    1    2    3   4    5    6    7   8    9   10  11   12   13  14  15  16 
 * Price    100  113  110  85  105  102  86   63   81  101  94  106  101  79  94  90  97 
 * Change(A[])    13   -3 -25   20  -3  -16  -23   18   20  -7   12   -5 -22  15   4   7 
 * 
 * We will compare the sum of each of the possible subarray of 'Change' array. 
 * The subarray whose sum is higher, will be our answer.
 * Elements in the 'Change' array, n = 16;
 * There are 'n C 2' possible combinations to select the array. O(n C 2) = O(n^2) 
 * We wont go with this aproach
 * -----------------Divide and Conquer - Recursive Aproach------------------------
 * 
 * lets max-subarray is A[low,...,high]. 
 * Suppose we want to ﬁnd a maximum subarray of the subarray A[low,...,high]
 * Any contiguous subarray A[i,..,j] of A[low,..,high] must lie in exactly one of the following places
 * 1. entirely in the subarray A[low,..,mid], so that low <= i <= j <= mid
 * 2. entirely in the subarray A[mid+1,..,high], so that mid < i <= j <=high
 * 3. crossing the midpoint, so that low <= i <= mid < j <= high.
 * 
 * In fact, a maximum subarray of A[low,...,high]
 * must have the greatest sum over all subarrays entirely in A[low,..,mid], 
 * entirely in A[mid+1,..,high] and crossing the midpoint.
 * 
 * We can ﬁnd maximum subarrays of A[low,..,mid] and A[mid+1,..,high] recursively, 
 * because these two subproblems are smaller instances of the problem of ﬁnding a maximum subarray.
 * 
 * we will find max-subarray of A[low,..,mid] in a manner  - A[i,..,mid]
 * we will find max-subarray of A[mid+1,..,high] in a manner  - A[mid+1,..,j]
 * We will combine the sum of these two max-subarrays
 * function FIND-MAX-CROSSING-SUBARRAY(A[], low, mid, high) will return { max-left, max-right, left-sum + right-sum}
 * where max-left = starting index of first max array, 
 *       max-right = closing index of second max array
 * 
 * FIND-MAX-CROSSING-SUBARRAY(A[], low, mid, high)
 *      left-sum= -Infinity ;
 *      sum = 0
 *      for i = mid downto low
 *          sum = sum+A[i]
 *          if(sum>left-sum)
 *              left-sum = sum
 *              max-left = i;
 * 
 *      left-sum= -Infinity;
 *          sum = 0
 *          for i = mid downto low
 *              sum = sum+A[i]
 *              if(sum>left-sum)
 *                  left-sum = sum
 *                  max-right = i;
 *      
 *      return { max-left, max-right, left-sum + right-sum }
 * 
 * 
 * function FIND-MAXIMUM-SUBARRAY(A[],low,high)
 *      if(high==low)
 *          return {low, high, A[low]}
 *      else
 *          mid = floor(low+high/2)
 *          { left-low, left-high, left-sum } = FIND-MAXIMUM-SUBARRAY(A[],low,mid)
 *          { right-low, right-high, right-sum } = FIND-MAXIMUM-SUBARRAY(A[],mid+1,high)
 *          { cross-low, cross-high, cross-sum } = FIND-MAX-CROSSING-SUBARRAY(A[],low,mid,high)
 *          if (left-low>=right-low && left-low>=cross-low)
 *                  return { left-low, left-high, left-sum }
 *          else if(right-low>=left-low && right-low>=cross-low)
 *                  return { right-low, right-high, right-sum }
 *          else return { cross-low, cross-high, cross-sum }
 */