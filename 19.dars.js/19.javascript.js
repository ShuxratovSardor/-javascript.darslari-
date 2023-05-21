// new WeakMap()- GarbeachColeption buganda hiptan uchib kitadi
// new Map() -GarbeachColeption bupqoganda hiptan uchib

// new WeakSet() - GarbeachColeption buganda hiptan uchib kitadi
// new Set() -    GarbeachColeption bupqoganda hiptan uchib kitmedi

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