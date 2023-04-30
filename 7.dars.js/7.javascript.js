//Function//

// function qanday ishlatamiz qachonki nomini yosak //
//   function getAvr() {
//   console.log("webbrain 1");
//   console.log("webbrain 2");
// }
// getAvr()

//===============

//qachonki bosilganda ishlasin//
//index.html ulemiz index.js//
//button boskanda ishlasin ugacha ishlamasin//

//<body>
//<h1>salom</h1>
//<button onclick="sardor()">save</button>
//<script src="./index.js"></script>
//</body>

// function sardor() {
//  console.log("shuxratov");
//  console.log("shuxratov");
//  console.log("shuxratov");
//  console.log("shuxratov");
//  console.log("shuxratov");
// }
//========================

// == Function Parametirlari ==//

// const getArv = function ( name, surname,age) {
//   console.log(name,surname,age);
// }
// getArv ("sardor","shuxratov",20)
//==================================

//=========================================================[
//Default parametirlari// || or , if (), ? : , kisa buladi
//surname busa chiqsin bumasa name uzi chiqorsin//

//   const telegram = (name, surname)=>{
//   if (surname)
//    console.log(name,surname);
//    else console.log(name);
//   }
// telegram("webbrain","Academy")
//=========

//=========
// //surname busa chiqsin bumasa name uzi chiqorsin//

//   const telegram = (name,surname = "" )=>{
//   console.log(name, surname );
// }
// telegram("sardor","familiy")

//=========

//=========

//  OR || holatoda defolt parametir //
//surname busa chiqsin bumasa name uzi chiqorsin//
// const telegram = (name, surname)=>{
// console.log(name, surname || "");
// }
// telegram("webbrain")

//==========

//=========
//  ?  : bik teg holatida defolt parametir //
//surname busa chiqsin bumasa name uzi chiqorsin//
// const test = (name, surname) =>{
//   surname ? console.log(name, surname) : console.log(name);
// }
// test ("azamat")

//===========================================================]

//===========================================================[

//Function Decloration ///
//  hoistinga uchiramedi qerda busa ishledi farqi yuq//

// let id = 1;
// console.log(id);

// function getAvr() {
//   console.log("Sardorbek, Shuxratov");
// }
// getAvr()

//==============

//==============

//Function Expression |hoistinga| uchiredi

// const getAvr = function(){
//   console.log("Welcome to Webbbrain");
// }
// getAvr() <nomi pasta yizilshi shart
//===========================

//== Arrow Function ==//
// Arrow tarjimasi - nayza |()=>{}|
// shadov veraybel soya  digani//
// let name = "webbrain";
// const test = ()=>{
// let name = "sardor";
// console.log(name);//sardor
// }
// console.log(name);//webbrain
// test()
//javibi//
//webbrain
//sardor

//====================================]

//===================================
// Function with returen //

// urta arifmetikasi qanchaligini bilish
// funksiyadan qaytayotkan natija ustidayam qandedur amal bajarish
//uchun return ishlatamiz
//console,log chiqan natija ustida amal bajarolmemiz
//  const res = (a)=>{
//   let total = 193
//   return (a * 100 )/ total
// }
// console.log(parseInt (res(159)));
//javobi//
//82.38341968911917
//82//parseInt buganda
//===================================

// Clean code  functio  get,calc,create,check,camel case//

//  const getGpa =()=>{}
//  const calcJpa =()=>{}
//  const createOpa =()=>{}
//  const checkKpa =()=>{}

//============================[

// = hoisting =//
//veraybilani yuqorada declear kilishka aytiladi yani-
//yuqoradan yuzish kire digani
// console.log(id);
// let id = 1; <veraybil pasta busa hato beradi

//=============================]

// == Collbek Function == //

//Collbek function =  boshqa bir function  di prametirida kelshiga aytiladi

// let gethey =  (name) => {
//     console.log(name());
// }
// gethey(function(){
//     return 1231
// })
