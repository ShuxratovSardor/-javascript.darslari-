   // function turlari //

// Hoisting - doyim yoqorada deklear qilishka aytiladi
//  veraybele va function expression va arrow function uchuredi  

//============== 

// function expression, function declaration, arrow function

// function decloretion : fuction name = () {}
// function expression  : let name = () {}
// arrow function       : let name = () => {}

//===============

// function larga misol //

// function returenga qaytadi //

// function test () {
//         return 100 ;
// }
// console.log(test());

//=============

// function declaration //
// Hoistinga uchuramedi

// function test (){
//     console.log('hey');
// }
// test()

// =====================

// function expression  //
// Hoistinga uchuredi

// const hey = function () {
//     console.log("hey");
// }
// hey()

//========================

// Arrow function //
// Hoistinga uchuredi

// const test = () => {
//     console.log("Sardor");
// }
// test()