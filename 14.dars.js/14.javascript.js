   //    Array 2  // 

// filter((value,index)=>{return})
// filter tugri malumoti kurdimi keyingisinyam uqib kitoradi //
// shartka tugri kiganini qoldirip notugri kiganini chiqarvoradi //
// filter For loop ka uxshab aylanadi //
// 0 di ignor kivoradi chiqarib tasheid //
//filter((value,indx) => guli qovus yozmasak avtomatik return qiladi return dip yozip utirmemiz)//
// filter uzimizga kereligini qoldirup qoganini chiqarib yuboradi bizdi holatimizga moskimagani chiqib ketadi //

// let num = [1,2,3,4,5,6,7,8,9,10,11]

// let res = num.filter((value, index) => {
//     return value < 10

// })

// console.log(res); // javobi: |  1, 2, 3, 4, 5, 6, 7, 8, 9,

//=================

// filter(function(value,index){return}) stringa nisabatan ishlatepiz //

// let str = ["sardor","abbos","latifa","shohid","bunyod","qw"]

// let star = str.filter(function(value,index){
//     return value.length <= 5 // 5 harifli suz kirsin depiz
// }  )

// console.log(star);// javobi : [ 'abbos' ] 5 harifli suz bugani uchun shuni chiqardi

//===============

// filter orqali ikkta bir hil sonlani chiqarib tashash //

// let num = [1,2,3,4,4,5,6,7,7,8,8,9,10]

// let res = num.filter((value,index,arry) => arry.indexOf(value)=== index)

// console.log(res);

//   real proekta filterdi ishlatish  //

// let students = [
//     {id: 1, year: 2002,   name: "Sardorbek Shuxratov"},
//     {id: 2, year: 2000,   name: "Sardorbek Shuxratov"},
//     {id: 3, year: 2005,   name: "Sardorbek Shuxratov"},
//     {id: 4, year: 2000,   name: "Sardorbek Shuxratov"},
//     {id: 5, year: 2000,   name: "Sardorbek Shuxratov"},
//     {id: 6, year: 2005,   name: "Sardorbek Shuxratov"},
//     {id: 7, year: 2005,   name: "Sardorbek Shuxratov"},
//     {id: 8, year: 2001,   name: "Sardorbek Shuxratov"},
//     {id: 9, year: 2001,   name: "Sardorbek Shuxratov"},
//     {id:10, year: 2003,   name: "Sardorbek Shuxratov"},
// ]

// let res = students.filter((value)=> value.year === 2000);// 2000 yilila  3 ta bor ushni chiqarib beradi

// console.log(res);// hamma 2000 yilli lani chiqarib beradi

// javobi: //

//   { id: 2, year: 2000, name: 'Sardorbek Shuxratov' },
//   { id: 4, year: 2000, name: 'Sardorbek Shuxratov' },
//   { id: 5, year: 2000, name: 'Sardorbek Shuxratov' }

//============

// yana bita primer uzim qigan //

// let uquvchilar = [
//     {id: 1, year: 2005, name: "Bobur"},
//     {id: 1, year: 2006, name: "Bobur"},
//     {id: 1, year: 2005, name: "sardor"},
//     {id: 1, year: 2005, name: "Bobur"},
//     {id: 1, year: 2006, name: "Bobur"},
//     {id: 1, year: 2005, name: "sardor"},
//     {id: 1, year: 2006, name: "Bobur"},
//     {id: 1, year: 2005, name: "sardor"},
//     {id: 1, year: 2006, name: "Bobur"},
//     {id: 1, year: 2005, name: "sardor"},
// ]

// let asr = uquvchilar.filter((value)=>value.name === "Bobur")// =>value... === .... |shunga nima yosek kieyn nimaga tenglamoxchi busak ushani yosek ushalani chiqarib beradi

// console.log(asr);//hama boburlani chiqarib beradi

//javobi ://

// { id: 1, year: 2005, name: 'Bobur' },
// { id: 1, year: 2006, name: 'Bobur' },
// { id: 1, year: 2005, name: 'Bobur' },
// { id: 1, year: 2006, name: 'Bobur' },
// { id: 1, year: 2006, name: 'Bobur' },
// { id: 1, year: 2006, name: 'Bobur' }

//===========================

// .sort(()) //
// pakatkina malumotni joylashish urnini uzgartiradi //
//   .sort((a,b) => a - b) //
// .sort() 10 dan yoqora sonlada notugri ishlashti boshledi //
// .sort() malumotlani tartiblab beraadi katta kichligiga qarab //

// let num = [2,4,3,6,5,7,8,1,0,9,] // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 |tartiblab berdi kata kichiligiga qarab

// let res = num.sort()

// console.log(res);

//========================

// .sort((a,b) => a - b)//
// .sort() 10 dan yoqora sonlada notugri ishlashti boshledi //
// .sort((a,b) => a - b) // kichkinadan boshlab sanedi
// .sort((a,b) => b - a)  // katadan boshlab sanedi

// let sr = [1,2, 34,22,55, 3,21,76, 4, 35,54, 0] // kichigidan boshlab sanedi

// let sar = sr.sort((a,b)=> a - b)

// console.log(sar);

//.sort((a,b))=> //
// .sort() Stringa nisbatan ishlatamiz //

// let str = [ "banana","Apple", "orange","Kiwi",]

// let res = str.sort((a , b) => a.localeCompare(b))

// console.log(res);

//==============

// alfavitka qarab tugri joylasgh=htirib beradi //
// .localeCompare Stringlani taqoslashka ishlatioladi //

// let studets = [

//     {id: 1, year: 2000, name: "Bardor Shuxratov"},
//     {id: 1, year: 2001, name: "Aardor Shuxratov"},
//     {id: 1, year: 2002, name: "Cardor Shuxratov"},
//     {id: 1, year: 2003, name: "lardor Shuxratov"},
//     {id: 1, year: 2004, name: "Dardor Shuxratov"},
//     {id: 1, year: 2005, name: "iardor Shuxratov"},
//     {id: 1, year: 2006, name: "fardor Shuxratov"},
//     {id: 1, year: 2007, name: "jardor Shuxratov"},
// ]

// let res = studets.sort( (a,b) => a.name.localeCompare(b.name) );

// console.log(res);

//====================

// .find((value) => value.)

// .find((value) => value.) ichidan bironta malumoti qidirishka ishlatiladi
// bata tugri malumoti kurdimi undan keyingisaga utmedi usheta tuhtedi
//     let students = [
//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2002, name: "Sobir Shuxratov"},
//         {id: 3, year: 2003, name: "Jalol Shuxratov"},
//         {id: 4, year: 2004, name: "Asil Shuxratov"},
//         {id: 5, year: 2006, name: "Bobur Shuxratov"},
//         {id: 6, year: 2005, name: "Ali Shuxratov"},
//     ]

// let res = students.find((value)=>value.year === 2005, );

// console.log(res.year);// berga nima kiritsek |yilmi||ismimi| |id| simi shuni chiqaradi uzini

// javobi: 2005 chunki yilini surepiz  //
// javobi: 1 chunki id surepiz  //
// javobi: Sardor Shuxratov chunki name surepiz  //

//=====================

// .findIndex() //
// .findIndex() boshidan boshlab qidiradi //
// .findIndex() qaysi indexta joylashkanligini chiqarib beradi//

//    let ar = [1,2,3,4,5,6,7,8,9,10]

// let res = ar.findIndex((value) => value === 5)

// console.log(res);// javobi : 4 indexta turipti didi

// .findLastIndex //
// .findLastIndex ohiridan boshlab qidiradi //

// let ar = [1,2,3,4,5,6,7,8,9,10]

// let res = ar .findLastIndex((value)=>value === 10)

// console.log(res);

//===============

// .forEach //
// malumot ekranga chiqmedi undefined biradi//
//.forEach(value,index)=>{} qndedur amaldi bajarmohchi biz ushani ishlatadi buldi //

//  let srt = [1,2,3,4,5,6,7,8,9,10]

//  let res = srt.forEach((value,indxe)=>{

//      console.log(value + 1)// shu ammaldi bajaradi buldi boshqa amal bajarip bumedi
//  }
//  )

//======================

// map //
//| map| doyim ekranga chiqaradi malumotlani //
//   let srt = [1,2,3,4,5,6,7,8,9,10]

// let res = srt.map((value,index)=>{
//     return "hey"
// })

// console.log(res);

//===================

// .every(()=>)
//  every har doyim digani //
//  every biza aytakan shartka mos keladimi yoqmi true false qaytadi //

// let ar = [1,2,3,4,5,6,7,8,9,"10"]

// let res =ar.every((value) => typeof value  === "number")//sharti number busa true chiqar bumasa false

// console.log(res);//string busa false number busa true ichida bita srin busayam false buloradi

// some //
// sam // hudi // every //de pakat sam teskarisi //

//  let ar = [1,2,3,4,5,6,7,8,9,]

//  let res =ar.some((value) => typeof value  === "string")//sharti number busa true chiqar bumasa false

//  console.log(res);// teskarisi false

// .fill //
// aynan qaysinidur taypini uzgartirishka ishlatamiz .fiil di //

//  let num = [1,2,3,4,4,5,6,7,8,8]

//  console.log(num.fill(5,4,5));// birinchi qiymat qaysini uzgartirshimiz ikki uchlari usha kerdan kergachalie

//  console.log(num.fill(9,9));//

// .copyWithin //
// .copyWithin malumotlani copya kib joylashtiraolamiz//
// malumoti copya qilib qerdadur joylashtirolamiz //

// let num = [0,0,0,1,2,3,4,5,6,7,8,9,10]

// console.log(num.copyWithin(0,10,13));// birinchsi uzgartimohchi bugan manzilimiz

// ikkinchsi kerdan uchunsi kergacha

// javobi:

// 8, 9, 10, 1, 2, 3,
// 4, 5,  6, 7, 8, 9,
// 10

//=======================

// reduce //
// reduce(callback,initialvalue)
// nimaga return kisa anashunga teng buladi //

// let num = [1,2,3,4,5,6,7,8,9,10]

// let res = num.reduce((sum,current) => {
// console.log(sum);
// return 2
//},0)

// console.log(res);//returnga nima yose 10 marta usha narsa chiqadi

// Arry ichida Arry //

// let num = [1,2,[3,4,],5,6,[7,8,9],10]       // [3,4,] muni uziyam bita index hisoblanadi|[7,8,9] buyam shude
// yana bita arry kurdimi [3,4,] u bita alohida index digani ichide malumoti ahamyatsiz

// 1, 2, |[3,4,] bu ikkinchi index digani opshi| 5,6, |[7,8,9] bu beshinchi index digani opshi| 10,
// console.log(num[2]); // 2 indextegi Arry malumotlari  javobi : |[3,4]

// console.log(num[5]); // [7,8,9] bu opshi 5 index digani shunichun lig di ichiga 5 yozdim javobi : [7,8,9]

// === arry ichidegi arraydi malumotini bitasini olamiz diseg === //

// let num = [1,2,[3,4,],5,6,[7,8,9],10] //

// console.log(num[2][1]);//1 birinchi qiymat qaysi idextaligi 2 qiymati qaysini malumoti olishligi
// [2] indexti ichidegi [1] malumoti olish digani

// javobi : 4

// === arry ichidegi arry diyam ichidegi arrydi malotini olish  === //
// indi uchunchi qiymatiyam biramiz chiqarish uchun //

//   let num = [1,2,[3,[2,4],],5,6,[7,8,9],10]

//   console.log(num[2][1][0]);// [2] qaysi indextaligimiz [1] uni ichidegi index [0] uni uchidegi qaysi indexti olish

// [1] qiymat nichinchi indexligi [2] qiymat [1] qiymati ichidegi index [3] qiymat uni icidegi malumoti olish

// javobi :  2

//=================================

//  .flat //
//  .flat vazifasi skopti ichidan chiqarib beradi parintindan //
//  .flat(Infinity) barini skoptan chiqarib tashedi |kalkulet kisa buladi| //
// let num = [1,2,[3,[2,4],],5,6,[7,8,9],10]

// console.log(num.flat());// bita qovustan chiqarib beradi qiymat bersak buladi nichinchi indexligini yose ushandan chiqarib beradi

// javobi :  [ 1, 2, 3, [ 2, 4 ], 5, 6, 7, 8, 9, 10 ] 3 oldidegi qovus yuq buldi

// .flat(Infinity)
//  kushimcha kalkulet amal bajarsa buladi //
// ==== agar bizda cheksiz busachi sanogini bilbasek //
//  .flat(Infinity) barini skoptan chiqarib tashedi //

// let num = [1,2,[3,[2,4],],[5][[[[[[[[[[[[[[[[[4]]]]]]]]]]]]]]]]],6,[7,8,9],10]

// console.log(num.flat(Infinity)); //hmasaini skopidan chiqarib tashedi

//========================================

// new Set() //
// ikkta bir hil bugan raqamlani chiqarvarish uchun //

//    let num = [1,2,3,4,5,5,6,7,7,8,9,10,10]

//    console.log(new Set(num));// ikkta birhil bugan raqamlani chiqarib tashedi

// javobi: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

//==============================

// Arry.from() => () //
// hammasini har bitadan element qibiradi  //

// console.log(Array.from("webbrain", (v) => v.toUpperCase ()))

//=================
// new Map  vazifasi
// next bilan ishledi

// new Map
// let obj = new Map([
//         ["a",1],
//         ["b",2],
// ]).entries();

// console.log(obj.next());// javobi | { value: [ 'a', 1 ], done: false } | next keyin nima qiymat bersag ushani qaytaradi

// console.log(obj.next().value);// yana huti shunde yosek kingisini nazarda tutadi | [ 'b', 2 ]

// console.log(obj.next().value);// yna huti shunde yosek undefined qaytaradi |undefined

// value nima busa ushani chiqaradi

// next() //
// .entries() yozmasak next() ishlamedi //
//next() birbiriga bogliq bumagan bita lig yasab beradi //

// let obj = new Map([
//           ["a",1],
//           ["b",2],
//  ]).entries();

//  console.log(obj.next());//entries(); key va valuega qaytarepti vazifasi next() ishlatib berish uhcun

// Arry 3 // CRUD

// CRUD vazifasi create, reat, update, delet,
// create - malalumot qushadi , unga spreat operator kiradi ,
// reat - uqimoq digani , unga fillter sort kiradi
//uppdate -

// sortByYear()=>{} //

// yilarga nisbatan ishlatiladi sortByYear()=>{} //

//  let students = [

//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2002, name: "Sobir Shuxratov"},
//         {id: 3, year: 2003, name: "Jalol Shuxratov"},
//         {id: 4, year: 2004, name: "Asil Shuxratov"},
//         {id: 5, year: 2006, name: "Bobur Shuxratov"},
//         {id: 6, year: 2005, name: "Ali Shuxratov"},
//     ]

// const sortByYear = () =>{
//         let res = students.sort((a,b) => b.year - a.year);
//         students = res;
// }

// sortByYear();
// console.log(students);

// sortByAlphabet = () => {} //
// sortByAlphabet = () => {} Alfavitka ishlatilinadi yani harflarga //
// stringada ishlatmohchi busek .localeCompare foydalanish shart taqoslab beradi //

// let students = [

//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2002, name: "Sobir Shuxratov"},
//         {id: 3, year: 2003, name: "Jalol Shuxratov"},
//         {id: 4, year: 2004, name: "Asil Shuxratov"},
//         {id: 5, year: 2006, name: "Bobur Shuxratov"},
//         {id: 6, year: 2005, name: "Ali Shuxratov"},
//     ]

// const sortByAlphabet = () => {
//         let res = students.sort((a,b) => a.name.localeCompare(b.name))
//         students = res
// }
// sortByAlphabet()
// console.log(students);

// deleteUsre = () => {} //
// deleteUsre = () => {} uchirish digani //

// let students = [

//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2002, name: "Sobir Shuxratov"},
//         {id: 3, year: 2003, name: "Jalol Shuxratov"},
//         {id: 4, year: 2004, name: "Asil Shuxratov"},
//         {id: 5, year: 2006, name: "Bobur Shuxratov"},
//         {id: 6, year: 2005, name: "Ali Shuxratov"},
// ]

// const deleteUsre = (id) => {
//      let res = students.filter((value) => value.id !== id ); // 0 false qaytarmedi
//      students = res;
// }
// deleteUsre(4);// nechi son bersak usha id uchib kitadi
// console.log(students);// id 4 uchib keti delet qiganimiz uchun

// addUser = (user) => {} //
// yangi bir malumot qushish uchun ishlatiladi //

// let students = [

//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2002, name: "Sobir Shuxratov"},
//         {id: 3, year: 2003, name: "Jalol Shuxratov"},
//         {id: 4, year: 2004, name: "Asil Shuxratov"},
//         {id: 5, year: 2006, name: "Bobur Shuxratov"},
//         {id: 6, year: 2005, name: "Ali Shuxratov"},
// ]

// const addUser = (user) => {
//  students = [...students, { id: students.length + 1, ...user}]

// }

// addUser({ year: 1995 ,name: "Donyor"});// students ga bita malumot qushilib qoldi

// console.log(students);// { year: 1995 ,name: "Donyor"} shu malumoti qushtim

// updateUser = () => {} //

// let students = [
//   { id: 1, year: 2005, name: "Sardor Shuxratov" },
//   { id: 2, year: 2002, name: "Sobir Shuxratov" },
//   { id: 3, year: 2003, name: "Jalol Shuxratov" },
//   { id: 4, year: 2004, name: "Asil Shuxratov" },
//   { id: 5, year: 2006, name: "Bobur Shuxratov" },
//   { id: 6, year: 2005, name: "Ali Shuxratov" },
// ];

// const updateUser = (data) => {
//   let res = students.map((value) =>
//     value.id === data.id ? { ...value, [data.type]: data.value } : value
//   );
//   students = res;
// };

// updateUser({ id: 2, type: "name", value: "Sardorjonbek" }); //type : ichiga qaysi key bershimiz

// console.log(students);

// getFilter = () => {} //

//  let students = [

//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2002, name: "Sobir Shuxratov"},
//         {id: 3, year: 2003, name: "Jalol Shuxratov"},
//         {id: 4, year: 2004, name: " Sardor Shuxratov"},
//         {id: 5, year: 2006, name: "Bobur Shuxratov"},
//         {id: 6, year: 2005, name: "Ali Shuxratov"},
// ]

// const getFilter = (key) => {
//         let res = students.filter((value,index) =>
//          value.name.toLowerCase().includes(key.toLowerCase())
//          );
//         students = res;
// };

// getFilter("sardor");// studetnlani ismini bersak ushni malumotini chiqarib beradi

// console.log(students);

// getFilterByID //
// getFilterByID id buyicha filter qibiradi //

//  let students = [

//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2002, name: "Sobir Shuxratov"},
//         {id: 3, year: 2003, name: "Jalol Shuxratov"},
//         {id: 4, year: 2004, name: "Asil Shuxratov"},
//         {id: 5, year: 2006, name: "Bobur Shuxratov"},
//         {id: 6, year: 2005, name: "Ali Shuxratov"},
// ]

// const getFilterByID = (key) => {
//         let res = students.filter((value,index) =>
//          value.name.toLowerCase().includes(key.toLowerCase())
//          );
//         students = res;
// };

// getFilterByID(5);// studetnlani ismini bersak ushni malumotini chiqarib beradi

// console.log(students);

// getByName //
//  getByName name filter qibiradi //

// let students = [

//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2002, name: "Sobir Shuxratov"},
//         {id: 3, year: 2003, name: "Jalol Shuxratov"},
//         {id: 4, year: 2004, name: "Asil Shuxratov"},
//         {id: 5, year: 2006, name: "Bobur Shuxratov"},
//         {id: 6, year: 2005, name: "Ali Shuxratov"},
// ]

// const getByName = (key) => {
//         let res = students.filter((value,index) =>
//          value.name.toLowerCase().includes(key.toLowerCase())
//          );
//         students = res;
// };

// getByName("sardor");// studetnlani ismini bersak ushni malumotini chiqarib beradi

// console.log(students);

//
//   let students = [

//         {id: 1, year: 2005, name: "Sardor Shuxratov"},
//         {id: 2, year: 2006, name: "Sobir Shuxratov"},
//         {id: 3, year: 2007, name: "Jalol Shuxratov"},
//         {id: 4, year: 2008, name: "asil Shuxratov"},
//         {id: 5, year: 2009, name: "Bobur Shuxratov"},
//         {id: 6, year: 20010, name: "Ali Shuxratov"},
// ]

// const deleteId = (id) => {
//         let res = students.filter((value,indedx) => value.id !== id )
//         students = res
// }
//  deleteId(1) // birinchi id yuq bupqoladi

// console.log(students);

//====== HOMEWORK=============
//        // krakara //
// for (i=1; i<10; i++){
//   console.log(`${i} - karali `);
//   for(j=2; j<10; j++){
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
//   }
//==============
//homework//switch
// switch ('browser') {
//   case "Edge":
//     alert("you ' ve got the Edge!")
//     break;

//     case"Chrome":
//     case"FirFox":
//     case"Safari":
//     case"Opera":
//   alert ( 'Okey we support these browers too' );
//     break;

//     default:
//       alert('We hope that this page looks ok ');//<
// }

//=====================