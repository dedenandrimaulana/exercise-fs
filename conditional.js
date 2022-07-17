// CONDITIONAL

// console.log("Hello Deden")
// console.log('Hello Deden')

// var usia = 15;

// if(usia === 10){
//     console.log('Usia 10')
// }
// else if(usia === 12){
//     console.log('Usia 12')
// }
// else{
//     console.log('Usia selain 10 dan 12')
// }

// var minuman = 'Jus';
// // .tolowercase ==> membuat huruf jadi kecil
// // .touppercase => membuat huruf jadi besar semua
// // penamaan tolower and toupper setelah swith."variabel"

// switch(minuman.toLowerCase()){
//     case 'kopi':
//         console.log('Kopi')
//         break;

//     case 'teh':
//         console.log('Teh')
//         break;
//     default:
//         console.log('Maaf lagi habis')
// }

// var Nilai = 600;

// if (Nilai <= 100 && Nilai >= 85) { console.log('Nilai A') }
// else if (Nilai < 85 && Nilai >= 70) { console.log('Nilai B') }
// else if (Nilai < 70 && Nilai >= 55) { console.log('Nilai C') }
// else if (Nilai < 55 && Nilai >= 40) { console.log('Nilai C') }
// else if (Nilai < 40 && Nilai >= 20) { console.log('Nilai D') }
// else if (Nilai < 20 && Nilai >= 0) { console.log('Nilai E') }
// else { console.log('Masukan Nilai 0-100') }


// Studi case 2
// Bilangan ganjil dan genap
// ganjil itu tidak habis dibagi 2
// Genap itu habis dibagi 2
// modulus % => sisa bagi

// var bilangan = -99;
// if (bilangan % 2 === 0) { console.log(bilangan + ' Angka Genap') }
// else if (bilangan % 2 === 1) { console.log(bilangan + ' Angka Ganjil') }
// else { console.log('Jangan masukan angka minus(-)') }

var minuman = '';

switch (minuman.toLowerCase()){
    case 'sweet tea':
        console.log('You Choose Sweet Tea, Thanks')
        break;
    case 'plain tea':
        console.log('You Choose Plain Tea, Thanks')
        break;
    case 'boba':
        console.log('You Choose Boba, Thanks')
        break;
    case 'milk coffe':
        console.log('You Choose Milk Coffe, Thanks')
        break;
    case 'choco ice':
        console.log('You Choose Choco Ice, Thanks')
        break;
    case '':
        console.log('Input Minuman')
        break;
    default:
        console.log('Minuman is not Defined') 
}

// Atau bisa juga 
// default:
//     if (minuman === "")
//    {console.log('Input Minuman')}
//     else {console.log('Minuman is not Defined')}

