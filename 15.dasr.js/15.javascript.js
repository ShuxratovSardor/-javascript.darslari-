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
