let isimler = [];
let isimSayilari = Number(prompt('Kaç adet isim girmek istiyorsunuz: '));

for ( let i = 0; i < isimSayilari; i++) {
    let İsimler = prompt(`${i + 1}. isimleri giriniz: `);
    isimler.push(İsimler);
    // console.log(`${i + 1}. isim : ${İsimler}`);
    
}

isimler.sort();
console.log("Siralanmiş İsimler:", isimler);






