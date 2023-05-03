// ================================================================]
//     Objekt 1 //

// Objekt kiy va valuyedan tashkil topkan //
// Object : ikki nuxtablam yoziladi //
// objekt nima ? - key va valydan tashkil topkan bir malumotka aytiladi//
// primitiv valyu  qaytaradi
// non promotiv manzilini qaytaradi

// =========

// Objektka kiymat biriktirish //

//  let obj = {name:"sardor", major:"frontent",founded:2020

//  };

// console.log(obj.name, obj.major);//hamma malomoti okib beradi
// console.log(obj.age);//error bermedi undefiened beradi

// ==========

//  1 usuli //
// 2 ta big'inli key lani qaday yozish va chaqirish usulari

// let obj = {full_name: "sardorbek"}
// console.log(obj.full_name);

// 2 usuli
// let obj = {"full name": "sardorbek" }
// console.log(obj["full name"]);

//  3 usuli
// let obj ={fullName: "sardorbek"}
// console.log(obj.fullName);

// objekti ichidegi qiymatini olish 2 hil usuli bor //

// ==========

// objec malumotlani bir bir olish //

// pakat objekti ichidegi malumotimizdi opkib beradi
// 1 chi usuli

// let obj = {name:"sardor", surname:"shuxratov", age: 20}

// console.log(obj.name);

// farqi

// tuburche qovus tashqardegi malumoti opbkib biradi
// 2 chi usuli

// let her = "age"
// let obj = { [her] :"sardorbek"}

// console.log(obj["age"]);

// ////////////////////////

//  let obj = {name:"sardor",major:"frontent", founded:2020
//  };

//  obj.aeg =132213 //aeg objectka kushilib koladi
// console.log(obj);

// /////////////////////////

// ===========
// == bush Objekt kilish busak==//
// let newObj1={};
// let newobj2 = new Object();
// console.log(newObj1,newobj2);
// javobi
// {}
// ()
// ===============
// ===accssesing key ======//

//   let account  = {
//   name:"Webbrain Acedemy",
//   major:"frontent",
//   foundent:2020.,
//   "full name":"sardorbek",//ikki bug'inli malumot biriktirganda ishlatiladi
//   0: 1390,
//  };
//   console.log(account.name);//ecses qilish yulari 1
//   console.log(account ["full name"]);//ikki bug'inli malumot biriktirganda ishlatiladi 2
//   console.log([0]);//raqam orqali keganda shu  holda ecses buladi
// ==========================

// //////////////////////////////////

// daynamek usulda set qilish //

// let  name ="sardor" ;
// let surname =" shuxartov";
// let job ="title";

// let obj = {name:"sardor",surname:"it center",

//  [ title] : "eshmat",//shet uzida skop kuyipkitse buladi
// };

// console.log(obj["title"]);

// ////////////////////////////////////