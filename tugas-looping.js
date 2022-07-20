// LOOPING

// 1. Results
// 1,2,5,10

var num = 10;
var temp ="";

for (var i=1; i<=num; i++){
    if (i!=3 && i!=4 && i!=6 && i!=7 && i!=8 && i!=9){
        temp = temp + [i]
    } 
} console.log(temp)


// 2. var n = 5;
// Result
/*
#
#X
#X#
#X#X
#X#X#
*/

var n = 5;
var temp = "";

for (var i=0; i<n; i++){
    for (var j=0; j<=i; j++)
        if (j % 2 === 0){
            temp += "#"
        } else {
            temp += "X"
        }console.log(temp)
     temp="" }
 



// 3. var input = 5;
// Result
/*
#####
#   #
#   #
#   #
#####
*/

var input = 5;
var temp ="";

console.log("#####")
for (var i=2; i<input; i++){
    for (var j=0; j<input; j++){
        temp = "#   #"
    } console.log(temp)
    temp=""
} console.log(temp +"#####")