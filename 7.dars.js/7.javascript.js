// For loop // zinadan chiqish//
//1,2,3,4,5,6,7,8,9,10 chiqadi |10 chi zinaga chiqish
// let i = 1;
// for (i=1; i <= 10; i++ ) {
//   console.log(i);
// }
//===================
//10,9,8,6,5,4,3,2,1 chiqadi |10 chi zinadan tushish
// let i=10;
// for (i=10; i >= 1; i--)
// console.log(i);

//===================
//tinimsiz 1 chiqaradi, i++ quymasak
// let i= 1;
// for (i=1; i<10; ){
// console.log(i);
// }
//===================
//for di ichiga let berilsa shundagina for ichidegi log ishledi//
// for(let i = 1; i <= 10; i++){
//   console.log(i);//< for ichida  ishledi
// }
// console.log(i);// for dan tashqarda ishlamedi hato beradi
//=====================
//1,3,6,10 javobi 10 tuxtedi
// var sum = 0;
// for (i = 1; i < 12; i++ ){
// console.log((sum += i));
// if ( sum === 10 )
// break;//tuxtash 10 buganda tuxtedi
// }
//===================================

//for loop qachon yurshini tuxtatadi qachonkim false buganda//
//for loop parametirlari 3 bor//
//1kayerda turganimiz manzilimiz; //i = 1//
//2kayrgacha borshimiz; //i < 10//
//3neshta qadam tashlashimiz;// i++//

//==============================

//==============================
//  qaysidir raqam kiremas diseg continue; ishlatamiz//
//  for (i = 1; i < 10; i++){
//   if (i === 6) continue;//< continue; ishlatamiz  6 yoq
//   console.log(i);
//  }
//====javibi=== 6 yuq//
//  1
//  2
//  3
//  4
//  5
//  7
//  8
//  9
//================
// continue uzidan keyingi kiganini yurguzmedi ustisan  //
// for (i=3; i<10; i++){
//   console.log(i);
//   if(i === 6) continue;
//   console.log("===");//uqimedi ustidan sakirab utib kitadi
// }
// //=====javobi====//
// 3
// ===
// 4
// ===
// 5
// ===
// 6
// 7
// ===
// 8
// ===
// 9
// ===
//============================

// toq sonblan juft sondi chiqarish//
// for (let i=3; i < 10; i++){
//   if(i % 2 === 1){
//     console.log( i,"toq son");
//   }else{
//     console.log( i, "juft son");
//   }
// }

//===============================]
