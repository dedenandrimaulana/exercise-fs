// TUGAS CONDITIONAL

/*
Interval Status
lebih dari 100 Expert
antara 70 dan 100 Pro
antara 50 dan 70 Normal
antara 30 dan 50 Basic
kurang dari 30 Beginner
*/
// Jika Power dari sebauh karakter 75 result nya :
// "Character is Pro"

var power = 20;

if (power > 100){
    console.log("Character is Expert")
} else if (power <=100 && power >=70) {
    console.log("Character is Pro")
} else if (power < 70 && power >= 50){
    console.log("Character is Normal")
} else if (power < 50 && power >= 30){
    console.log("Character is Basic")
} else {
    console.log("Character is Beginner")
}

/*
a. "Sweet Tea"
b. "Plain Tea"
c. "Boba"
d. "Milk Coffee"
e. "Choco Ice"
Jika pembeli memilih "Sweet Tea", maka result : 
"You choose Sweet Tea, thanks". (gunakan switch case)
*/

var minuman = "miLK COFFE";

switch(minuman.toLowerCase()){
    case "sweet tea": {
        console.log("You Choose Sweet Tea, Thanks")
    } break;
    case "plain tea": {
        console.log("You Choose Plain Tea, Thanks")
    } break;
    case "boba": {
        console.log("You Choose Boba, Thanks")
    } break;
    case "milk coffe": {
        console.log("You CHoose Milk Coffe, Thanks")
    } break;
    case "choco ice": {
        console.log("You Choose Choco Ice, Thanks")
    } break;
    default: {
        console.log("Minuman Tidak Tersedia, Thanks")
    }break;
}


/*
a.FreeOngkir
Jika pembelian lebih dari atau sama dengan 50000. Maka akan ada potongan 10%.
Jika pembelian antara 30000 dan 50000. Maka akan ada potongan 5%.
Jika kurang dari 30000. Maka akan ada potongan 2.5%
b. Free15%
Jika pembelian lebih dari atau sama dengan 30000. Maka akan ada potongan 15%.
Jika kurang dari 300000. Maka akan ada potongan 0%
*/
//Total pembelian 100000 dan memilih coupon FreeOngkir, maka result: 
// "Total pembelian anda Rp. 90000"

var harga = 100000;
var diskon = "freeongkir";
var limabelas = harga - (harga*15/100);
var sepuluh = harga - (harga*10/100);
var lima = harga - (harga*5/100);
var duasetengah = harga - (harga*2.5/100);

switch (diskon.toLowerCase()){
    case "freeongkir":
        if (harga >= 50000){
            console.log("Total pembelian anda Rp." +sepuluh)
        } else if (harga < 50000 && harga >= 30000){
            console.log("Total pembelian anda Rp." +lima)
        } else {
            console.log("Total pembelian anda Rp." +duasetengah)
        } break;
    case "free15%":
        if (harga >= 30000){
            console.log("Total pembelian anda Rp." +limabelas)
        } else {
            console.log("Total pembelian anda Rp." +harga)
        }
        break;
    default:{
        console.log("Total pembelian anda Rp." +harga, "Maaf anda tidak memilih diskon")
    } break;
    }