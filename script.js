//2chisi masala 
/*
let q = parseFloat(prompt("Kubning tomonini kiriting: "));
if (q > 0) { 
    let hajm = Math.pow(q, 3); //3 tomon kopaytmasi hajm deb ataladi yana hajm= a*a*a
    let Yuza = Math.pow(q, 2) * 6; // berilgan sonnni darajaga kotarib 6 kopaytirsek yuzasi kelib ciqadi
    alert(`Kubning hajmi: ${hajm}  Kubning to‘liq sirt yuzasi: ${Yuza}`);
} else {
    alert("kub tomonlari musbat");

    
}
*/

//3 chisi masala
/*
let x = parseInt(prompt("x kiritin: "));
let y = parseInt(prompt("y kiritin: "));
if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
    if ((x + y) % 2 === 0) {
        alert(`Berilgan (${x}, ${y}) maydon oq.`);
    } else {
        alert(`Berilgan (${x}, ${y}) maydon qora.`);
    }
} else {
    alert("Koordinatalar 1 va 8 orasida bo‘lishi kerak!");
}

*/


//4 chisi masala
/*
let A = parseFloat(prompt("A nuqtasi: "));
let B = parseFloat(prompt("B nuqtasi: "));
let C = parseFloat(prompt("C nuqtasi: "));
let AB = Math.abs(A - B);
let AC = Math.abs(A - C);
let yigindi, ortadagimasofa;
if (AB < AC) {
    yigindi = "B";
    ortadagimasofa = AB;
} else if (AC < AB) {
    yigindi = "C";
    ortadagimasofa = AC;
} else {
    yigindi = "ikkalasiyam yaqin ";
    ortadagimasofa = AB;
}
alert(`A nuqtasiga yaqini: ${yigindi}, Masofa: ${ortadagimasofa}`);

*/



//5 chisi masala // 3 ta nuqtasi aniqlangan 4 chi nuqtani ciqarish kere?

/*
let x = 1 ^ 1 ^ 4;
let y = 2 ^ 5 ^ 2;
alert    ("To'rtinchi nuqta koordinatasi: (" + x + ", " + y + ")");
*/



// 6 chisi masala
/*

let a = parseInt(prompt("a: "));
let b = parseInt(prompt("b: "));
if (a > 0 && b > 0) {
    let qoshish = a + b;
    let ayirish = a - b;
    let kopaytirish = a * b;
    let bolish = a / b;
    alert(`A + B = ${qoshish} \nA - B = ${ayirish} \nA * B = ${kopaytirish} \nA / B = ${bolish}`);
} else {
    alert("Musbat son kiriting");
}
*/
//7chis masala
/*
let a = parseInt(prompt("a: "));
let P = 3.14;
let R = a ;
let D = 2 * R;
let L = 2 * P * R;
let S = P * R * R;
alert(`Radiusi: ${R} \nDiametri: ${D} \nUzunligi: ${L} \nYuzi: ${S}`);
*/
