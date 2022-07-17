//for
// for (var i=1; i<=5; i++)
// {console.log(i)}

//while
// var i=1;
// while(i<=5)
// {console.log(i);i++}

// for (var i=0; i<10; i++)
// {console.log(i+1)}

//case 1
//Coba buat result:
//1 adalah ganjil
//2 adalah genap
//3 adalah ganjil
//4 adalah genap
//5 adalah ganjil

// var nomor = 5;
//     for(var i=1; i<=5; i++)
//         if (i % 2 === 0)
//         {console.log(i + " Adalah Genap")}
//         else 
//         {console.log(i + " Adalah Ganjil")}

//study case 2
// buat result "SaRaPan"
// menyamping bukan kebawah

// var str = 'sarapan';
// var temp = '';

// for (var i=0; i<=str.length; i++)
//    if (i % 2 === 0)
//      {temp = temp + str[i].toUpperCase()}
//      else {temp = temp + str[i]}
//      console.log(temp)

//result
//###
//###
//###

//  var num = 3;
//  var temp = "";

//  for(i=0; i<num; i++) 
//     {for (j=0; j<num; j++)
//     {temp +="#"}
//     console.log(temp)
//     temp=""}

//result 
//#
//##
//###
//####
//#####

// var num = 7;
// var temp ="";

// for(var i=0; i<num; i++){
//     for(var j=0; j<=i; j++){
//         temp +="@"}
//     console.log(temp)
//     temp=""
// }

//result
//1
//12
//123
//1234
//12345

var num = 5;
var temp = "";

for (var i=0; i<num; i++){
    for (var j=0; j<=i; j++){
        temp +=(j+1)
    } console.log(temp)
    temp=""
}