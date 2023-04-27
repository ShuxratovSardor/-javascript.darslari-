// | != |   ignor  / yoq digani /    //
// != asini qiladi true busa false qaytaradi
//=========== |!=| < yoq undemas digani |false|true|
//|!=|prosta teng emas
//|!==| kat i teng emas
// let a =1;
// let b =1;
// console.log(a  == b);//true
// console.log(a != b);//false
//==========================

// =========================================]

/// OR //
//     OR   / yoki digani /  ===  truega ishledi
//============ || <or belgisi// <ikalasini tekshirib beradi
// let ceo = false;
// let admin = true;
// console.log( true || false)// true
// console.log("" || null);//null
// console.log("" || undefined);//undefined
// console.log(false || "sardor");//sardor
// console.log(true || "sardor");//true
// console.log("sardor" || "sunnat");//sardor
// console.log("" || "begi");//begi
//==========================]

// AND && / va digani /  ========[ falsega ishledi
// =============== AND &&
// ikalasi true busa true qaytaradi
// let id = true;
// let false = true;
// console.log(id && face);//true
//============ 0, null, indefined.
//bitasi folse busayam false qaytaradi
// let id =false;
// let face = true;
// console.log(id && face)//false
// console.log(true && false);//false
// console.log('' && 0 && true && false);//
// console.log(0 && true);o//0
// console.log("sardor" && null);//null
// console.log(null && undefined);//null
// console.log(false && null);//false
// console.log( false  || undefined);//undefined
//================================]

//===== Nullish ?? false ga ishledi -> , null,undefined keganda keyingisiga utkazib yuboradi ====//
//==== OR || ,null , undefined, 0, false, NaN.===//
// console.log(null ?? "web");//web
// console.log(undefined ?? 1);//1
// console.log(false || 1);// 1
// console.log(0 ?? 1 );// 0
// console.log(12 ?? null);//12
// console.log(NaN ?? 1);//NaN
// console.log(false ?? true);//false
// console.log( false ?? 0);//false
// console.log(NaN || 1);//1
// console.log(null || 1);//1
// console.log(null ?? 1);//1
// console.log(undefined || 1);//1
// console.log(undefined ?? 1);//1
//=============]

//==========================[
// console.log(1 !== "0");//true ha teng emas
// console.log(1 !== "0" && false && "helow");//false
// console.log(1 !== "0" && true && "helow");//helow
// console.log(!(1 !== "0" && true && "helow"));//false !yoq teng
//==========================]
//Basic operators, match//

// =========|+=|1 kushish
//let a = 50;
// a = a + 10; <asil holata yozilshi//50+10
//a+=10 <kiskardmasi
//console.log(a)
// ===============

// ==========|-=|2 ayirish
//let a = 50;
//a = a-10 <asil holati //50-10
//a-=10 //<kiskartma holati
//console.log(a)
// ============

// =========|/=|3 bulish
//let a = 10;
//a = a / 5  //<asil holati//10/5
//a/=5  //<kiskartma holati
//console.log(a)
// ==========

// ========|%|koldig
//let a = 55;
//a = a % 10;//<asil holati  //55%10
//a %= 10 //<kiskartma holati
//console.log(a)
// ==========

// ========|*=| kupaytiru
// let a = 5;
// a = a * 5 //5*5 //<asil holati
// a *= 5  //<kiskartma holati
// console.log(a)
//==================

//===|**|nechinchid darajasi==//
// console.log(2*2);//2**2 darajasi
// console.log(2*2*2);//2**3 darajasi
// console.log(2*2*2*2);//2**4 darajasi
// console.log(2*2*2*2*2);//2**5 darajasi
//===========================

// ==============]