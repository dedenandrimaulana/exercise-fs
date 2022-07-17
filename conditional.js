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

// var minuman = '';

// switch (minuman.toLowerCase()){
//     case 'sweet tea':
//         console.log('You Choose Sweet Tea, Thanks')
//         break;
//     case 'plain tea':
//         console.log('You Choose Plain Tea, Thanks')
//         break;
//     case 'boba':
//         console.log('You Choose Boba, Thanks')
//         break;
//     case 'milk coffe':
//         console.log('You Choose Milk Coffe, Thanks')
//         break;
//     case 'choco ice':
//         console.log('You Choose Choco Ice, Thanks')
//         break;
//     case '':
//         console.log('Input Minuman')
//         break;
//     default:
//         console.log('Minuman is not Defined') 
// }

// Atau bisa juga 
// default:
//     if (minuman === "")
//    {console.log('Input Minuman')}
//     else {console.log('Minuman is not Defined')}


// var coupon = 500000;
// var ongkir = 'freeongkir';

// if (coupon >= 50000)
// switch (ongkir.toLowerCase())
//     {case 'freeongkir':
//     console.log(coupon*0.9 + ' Nilai yang harus anda bayar')
//     break;}
// else if(coupon <50000 && coupon >=30000)
// switch(ongkir.toLowerCase())
//     {case 'freeongkir':
//     console.log(coupon*0.95 + ' Nilai yang harus anda bayar')
//     break;}
// else if (coupon <30000)
//     switch(ongkir.toLowerCase())
//     {case 'freeongkir':
//     console.log(coupon*0.975 + ' Nilai yang harus anda bayar')
//     break;}
// if (coupon >= 30000)
// switch (ongkir.toLowerCase())
//     {case 'free15%':
//     console.log(coupon*0.85 +' yang harus anda bayar')
//     break;}
// else{console.log(coupon +' yang harus anda bayar')}

// Codingan Couch Vincent

var pembelian = 10000;
var kupon ="free15%";

switch(kupon.toLowerCase())
   { case 'freeongkir':
        if(pembelian >= 50000)
        {var total = pembelian*0.9
        console.log("Total pembelian anda" + total)}
        else if (pembelian <50000 && pembelian >=30000)
        {var total = pembelian*0.95
        console.log("Total Pembelian anda" + total)}
        else if (pembelian <30000)
        {console.log("Total Pembelian anda" + pembelian)}
    break;
    case 'free15%':
        if (pembelian >=30000)
        {var total = pembelian*0.85
        console.log("Pembelian anda" + total)}
        else {console.log("Pembelian anda" + pembelian)}
        break;
}

