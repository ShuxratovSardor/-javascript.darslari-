// == Array  0 dan boshlanadi == //b 1

// Array bu bita yuk mashinasi va uni bita bita chaqirse buladi yoki yuk mashinasini uzini chaqirse buadi//
// Array ga hohlaganimizcha malumot joylasak buladi ahamyati yuq //

// let arr = [12,"sardorbek",function(){},true,false,null,undefined]//hohlagan malumoti joylashtirolamiz

// console.log(arr);//hamma malumoti opkib beradi ichida nima busa

//=====================

// Array ichidegi malumotlani birma bir chaqirish //

// let arr = [1221,"sardor",true]

// console.log(arr[0]);//1221// 0 indexti chiqarib bersin dedig

// console.log(arr[1]);//sardor// 1 birinchi indexti chiqarib bersin dedig

// .length |uzunligi| //

// .lenght |Array ichida neshta ilement borligini chiqarib beradi| //
// arr[arr.langth  -1] ichidegi in ohiridegi malumotni olish yuli //

// let arr = [1234, "sardor", function(){}, true, false]

// console.log(arr.length);// 5 malumot bor depti

// let  arr = [12,"asil", "sardor", 1234, "sardor", function(){}, true, false ]

// console.log(arr[arr.length -1]);// Array di in ohiridegi malumotni olish uchun

// console.log(arr[arr.length -2]);// Array di in ohiridegida bita oldindegi uchun

//===========================

// new Array() //

// new Array() |dan maqsad parametirdan Array yasash beradi |//

// let ar = new Array(5); //|uzinlika teng yani |.length  5| parametir nechi busa shuncha arry yasab beradi

// console.log(ar);//[ <5 empty items> ] items yasab beradi

// console.log(ar.length);//javobi:|5| array yasab berdi digani

//=============

// let ar = new Array(5,2);//agr ikinchi qiymat busa uzinligi nechiligi buladi

// console.log(ar); // javobi: [5, 2]

// console.log(ar.length); // javobi : 2

//===============

// let ar = [];

// ar [100] = 1

// console.log(ar);//100 ta joy bush bir 1 chiqadi javobi: [ <100 empty items>, 1 ]

// console.log(ar.length);// 100 ga birdi qushata 101 buladi javobi :|101|

//==============

// 0 dan boshlanadi //

// 0 1 2 3 4  komenta chiqarma iltimos shu qatordi
// let ar = [1,2,3,4,5]

// ar [2] = 1 ; // 2 qatordegi 3 indexka 1 digan qimati berib yangilepiz 3 qiymati 1 uzgardi

// console.log(ar); //  [ 1, 2, 1, 4, 5 ]

//=============================

// Arry di Stringa uzgartirihs //

// let ar1 =[1,2,3,4,5,6,7]

// console.log(ar1.toString());

// .join(",") //
// join bizga malumotlar urtasida qushimcgha amal qilolamiz //
// join arraydi stringa uzgartirib beradi //

// let ar = [1,2,3,4]

// console.log(ar.join(" "));// (" ") barcha raqamlardi orasidan joy ochib beradi |1 2 3 4
// console.log(ar.join(","));// (",") har bitasini |,| ajiratib bersin didi |1,2,3,4
// console.log(ar.join(""));// ("") barisi birbiriga yipiship tursin didi |1234
// console.log(ar.join("/"));// ("/") barisini orasiga |/| quygin didi  |1/2/3/4

// Arry bi rbiriga qushish //
// .concat() //

// let ar1 = [1,2,3,4,5];
// let ar2 = [6,7,8,9,];
// console.log(ar1.concat(ar2));// birbiriga qushish  1, 2, 3, 4, 5, 6, 7, 8, 9
// console.log(ar2.concat(ar1));// birbiriga qushish  6, 7, 8, 9, 1, 2, 3, 4, 5

//=============

// console.log(ar1.concat(ar2, [] , ar2));// hohlaganimzcha malumot birlamiz

// Array |yani malumotlani taypini bilish yulli| //
// .isArray |true false qaytadi | //

// let ar = [123]

// console.log(typeof ar);//objekt

// console.log(Array.isArray([]));//true bu arry bugani uchun true chiqepti

// console.log(Array.isArray(0));//false 0 erey elementimas

//=======================

// Comparision //
// Arraylarni bir biriga taqoslash //

// let ar = []

// console.log(ar == 0);//true

// console.log(ar == "0");//false taypi strin bugani uchun

// Loops //
// zinama zina nomlani chiqarish //

// let user = ["Sardor","Ogabek","Asil","Bobur","Axmad"]

// for (let i = 0; i < user.length; i++){
//     console.log(user[i]);
// }

// javobi // hamasini chiqarib beradi //

// Sardor
// Ogabek
// Asil
// Bobur
// Axmad

// value of user //
// value of user |paqat valueni chiqarib beradi //

// oson yuli //

// let user = ["Sardor","Ogabek","Asil","Bobur","Axmad"]

// for (value of user){
//     console.log(value);//pakat value ni chiqarib beradi
// }

// javobi //

// Sardor
// Ogabek
// Asil
// Bobur
// Axmad

//===============

// index in user //
// index in user| pakat indexsini chiqarib beradi //

//  let user = ["Sardor","Ogabek","Asil","Bobur","Axmad"]

// for (index in user){
//     console.log(index); // pakatkina indexsini chiqari beradi
// }

// Arry metodlari //
// .push // bir marta ishledi //
// ohiridan boshlab malumot qushish // push //

// let ar = [1, 2, 3]

// ar.push(4) // pakatkina birmata ishledi yana malumot qushimiz uchun yana yozshimiz kire shu holata

// ar.push([5, 6,] )// bir neshta malumot ichiga qushsek>[] arry ichidegi arry bulib qushiladi

// console.log(ar);

// javobi 1 : [ 1, 2, 3, 4, 5 ]

// javobi 2 : [ 1, 2, 3, [ 5, 6 ] ]

//=========

// .unshift //
// boshidan boshlab malumot qushadi //

// let ar = [1, 2, 3,]

// ar.unshift(0)

// console.log(ar);

//===============

//.pop() //

// Malumot chiqarib yuborish //
//.pop() bir marta ishledi //
// ohiridan boshlab malumot chiqarib tashlaydi//

//  let ar = [1, 2, 3, 4]
//  ar.pop();//hech qanday parametir qabul qimedi uzi avtomatic ohirida chiqarib tashedi malumoti
//  ar.pop() // javobi : [ 1, 2 ] maslumoti ohirida chiqarib tashedi
//  console.log(ar);// javobi : [ 1, 2, 3 ] |  |4|> raqamdi chiqarib tashladi

//===========

// .shift //
// boshidan boshlab malumoti chiqarib tashedi //
// paramerir qabul qimedi  //

// let ar = [1, 2, 3,]

// ar.shift() // avtomatic ravishta chiqarib tashedi

// console.log(ar);

//==========

// .splice //
//.splice arrydi asil holatinyam uzgartiradi //
//  0 dan sanedi //
// malumotlani kesib oladi //

// let ar = [1, 2, 3,  5];

// ar.splice(3);// bita parametir bersak  ushadan qoganini kesib osin javobi : 1, 2, 3 qoganini kesib tashedi

// ar.splice(0,2) // 0 dan 2 gacha bugan oraligni kesib osin

// ar.splice(0, 2, "web"); // 3 berilgan parametiri uchirilgandi urniga suz qushib quyadi yokin son javobi :[ 'web', 3, 4, 5 ]

// ar.splice(3 , 0 , 4) //urtasiga malumot qushish 3 qaysi indextaligi, 0 kesib olmasi 3 indekstan keyin 4 qiymati qushib quysin

// console.log(ar);

//=====================

//  .slice   //
// .slice arrydi asil holatiga uzgartirmedi //
// .slice bu paqat kesib oladi //
// .slice indextan indexgacha //

// let ar1 = [1, 2, 3, 4, 5]

// // ar2.slice(2, 2)

// console.log(ar1.slice(2, 2));// 2 indextan 2 indexgacha kesib osin javobi : []

// .indexOf //
//.indexOf boshidan boshlab qidiradi//
// indexOf bor yoki yug'ligini aniqlab beradi //
//indexOf malumot busa index chiqaradi yuq busa -1 chiqaradi  yuq digani//

// let ar = [1, 2, 3, 4, 5,"web"]

// console.log(ar.indexOf(1));// 1 digan malumot birmi  ha javobi: |0| indexta 1 digan malumot bor didi

// console.log(ar.indexOf(3));// 3 digan malumot birmi ha javobi: |2| indexta 3 digan malumot bor didi

// console.log(ar.indexOf("web"));// |web| digan malumot birmi ha javobi: |5| indexta web digan  malumot bor didi

// console.log(ar.indexOf(1, 2)); // 1 digan malumot 2 indexti davomida bormi yoq javobi:|-1|

//.lastIndexOf //

//.lastIndexOf ohirida boshlab qidiradi //

// let ar1 = [ 1, 2, 3, 4, 5,]

// console.log(ar.lastIndexOf(3, 1 ));//3 digan malumot 1 idexti damvomida bormi did yuq javobi:-1

// console.log(ar.lastIndexOf(2, 2 ));//2 digan malumot 2 indexti davomida birmi ha javobi:|1| index ta bor

//   .split   //
// .split  stringdi arryga uzgartirib beradi //

// let ar = "1,2,3,4,5,"

// console.log(ar.split()); // butun bita malumot arry kurinishta qaytadi

// console.log(ar.split("")); // har bita elemntni alohida arry elementi dip chiqarib beradi

// console.log(ar.split(" , ")); // yangi bita arry element yasavoladi

// .reverse(); //
// .reverse() hamasini teskari qibiradi //

// let ar = [1, 2, 3, 4]

// console.log(ar.reverse());//[ 4, 3, 2, 1 ] teskari qibirdi

//==============

// .includes() //
// .includes() bor yoki yugligini tekshirib beradi //
// .includes() true false qaytadi //

// let ar = [1, 2, 3, 4, 5,]

// console.log(ar.includes(3)); // true bor depti

// console.log(ar.includes(6)); // false yuq depti

//=========================