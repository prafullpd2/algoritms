/**
 * | a  b |   | e  f |   |ae+bg af+bh|
 * | c  d | * | g  h | = |ce+dh cf+dh|
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
function divideMatrix(arr, mid){
    let n = a[0].length;

    if(n==1)
        return [a[0],[]];
    else{
        let nA = [], nB=[]
        for(let i=0; i<=mid; i++){
            for(let j=0; j<=mid; j++){
                nA[i][j]=arr[i][j];
            }
        }
        for(let i=mid+1; i<=n; i++){
            for(let j=mid+1; j<=n; j++){
                nB[i][j]=arr[i][j];
            }
        }

        return [nA, nB]
    }
}
function addMatrix(A, B, startIndex, endIndex){
    let C = [[]];
    let a=0, b=0;
    for(let i = 0; i< A[0].length ; i++){
        for(let j = 0; j< B[0].length; j++){
            if(!C[a]){
                C[a] = [[]]
            }
            C[a][b] = A[i][j] + B[i][j];
            
            b++;
        }
        a++
    }
    return C;
}

function mergeMatrix(A, B, C, D){
    let M = A.slice();
    for(let i = 0; i<B.length; i++){
        M[i] = M[i].concat(B[i]);
    }
    let j = M.length;
    let k = M.length;
    for(let i = 0; i<C.length; i++){
        M[j] = C[i];
        j++
    }
    for(let i = 0; i<D.length; i++){
        M[k] = M[k].concat(D[i]);
        k++;
    }
    return M

}
function makeSquare(A){
    let Arr = A.slice();
    if(Arr.length>Arr[0].length){
        let c = [];
        for(let i=Arr[0].length; i<Arr.length; i++){
            c.push(0);
        }
        for(let i = 0; i<Arr.length; i++){
            Arr[i] = Arr[i].concat(c);
        }
    }
    else if(Arr.length<Arr[0].length){
        let c = [];
        for(let i=0; i<Arr[0].length; i++){
            c.push(0);
        }
        for(let i = A.length; i<Arr[0].length; i++){
            Arr[i] = c;
        }
    }

    return Arr;
}
function partitionMatrix(A, mid){
let a1=[], a2=[], a3=[], a4=[];
let Arr = A.slice();
if(Arr.length>Arr[0].length){
    let c = [];
    for(let i=Arr[0].length; i<Arr.length; i++){
        c.push(0);
    }
    for(let i = 0; i<Arr.length; i++){
        Arr[i] = Arr[i].concat(c);
    }
}
else if(Arr.length<Arr[0].length){
    let c = [];
    for(let i=0; i<Arr[0].length; i++){
        c.push(0);
    }
    for(let i = A.length; i<Arr[0].length; i++){
        Arr[i] = c;
    }
}

    for (let i = 0; i<=mid; i++){
        a1[i] = Arr[i].slice(0, mid+1);
    }
    for (let i = 0; i<=mid; i++){
        a2[i] = Arr[i].slice(mid+1);
    }
    
    for (let i = mid+1, k = 0; i<Arr.length; i++, k++){
        a3[k] = Arr[i].slice(0, mid+1);

    }
    for (let i = mid+1, k=0; i<Arr.length; i++, k++){
        a4[k] = Arr[i].slice( mid+1);
    }
    return [a1, a2, a3, a4]
}
 function multiplyMatrix(A, B, startIndex, endIndex, A_Quad, B_Quad){
    //let n = endIndex-startIndex+1;

    if(A.length==1)
        return [[A[0][0] * B[0][0]]];
    else{
        // let mid = Math.floor((startIndex+endIndex)/2);
        // let subMatrices = divideMatrix(A,mid);
        let mid = Math.floor((0+A.length-1)/2);

        let a1 = [[0]], a2=[[0]], a3=[[0]], a4=[[0]];
        let b1 = [[0]], b2=[[0]], b3=[[0]], b4=[[0]]; 
        let pA = partitionMatrix(A, mid)     ;
        a1 = pA[0];
        a2 = pA[1];
        a3 = pA[2];
        a4 = pA[3];

        let pb = partitionMatrix(B, mid)     ;
        b1 = pb[0];
        b2 = pb[1];
        b3 = pb[2];
        b4 = pb[3];

        let c11 = addMatrix(multiplyMatrix(a1, b1), multiplyMatrix(a2, b3 ));
        let c12 = addMatrix(multiplyMatrix(a1, b2), multiplyMatrix(a2, b4 ));
        let c13 = addMatrix(multiplyMatrix(a3, b1), multiplyMatrix(a4, b2 ));
        let c14 = addMatrix(multiplyMatrix(a3, b2), multiplyMatrix(a4, b4 ));

        return mergeMatrix(c11, c12, c13, c14);
    }
 }

 /*
 function multiplyMatrix(A, B, sta){
    //let n = endIndex-startIndex+1;

    if(A_i==B_i && A_j==B_j)
        return A[A_i][A_j] * B[B_i][B_j];
    else{
        let mid_i = Math.floor((A_i+B_i)/2);
        let mid_j = Math.floor((A_j+B_j)/2);
        // let subMatrices = divideMatrix(A,mid);
        let c11 = addMatrix(multiplyMatrix(A, B,A_i, A_j,mid_i, mid_j),
                            multiplyMatrix(A, B, mid_i+1, mid_j+1, B_i, B_j));
        let c12 = 
    }
 }*/

 var m1 = [
     [1, 2, 3, 1],
     [2, 3, 4, 2],
     [3, 4, 5, 3],
     [2, 3, 4, 2]
 ]
 var m2 = [
    [1, 2, 3, 1],
    [2, 3, 4, 2],
    [3, 4, 5, 3],
    [2, 3, 4, 2]
]
var x = makeSquare(m1);
var y = makeSquare(m2);
console.log(multiplyMatrix(x, y,  0, x[0].length-1));