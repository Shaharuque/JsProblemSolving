/*Hacker rank
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */
//Printing star problems in js
function staircase(n) {
    // Write your code here
    let string = "";
    for(let i=1;i<=n;i++){
        //printing space
        for(let j=0;j<n-i;j++){
            string += " ";
        }
        for(let k=0;k<i;k++){
                string+="*"
        }
         // newline after each row
        string += "\n";
    }
    console.log(string)
}

staircase(6);