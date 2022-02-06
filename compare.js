/* Hacker Rank
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Write your code here
    let pointArr=[]
    let countAlice=0;
    let countBob=0;
    for(let i =0;i<a.length;i++){
        if(a[i]>b[i]){
            countAlice+=1;
        }
        else if(a[i]<b[i]){
            countBob+=1;
        }
        else{
            continue;
        }
    }
    pointArr.push(countAlice)
    pointArr.push(countBob)
    return pointArr;
}
const a = [17, 28 ,0]
const b = [3, 2, 1]
console.log(compareTriplets(a, b))