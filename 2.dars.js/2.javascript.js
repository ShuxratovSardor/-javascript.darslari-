//======== Data Taypes =================[
// primitiv taqoslaganimizda value qaydaradi
// non primitiv uzidan link qaytaradi

//Primitive//
// typeof - taypini tekshirib beradi //

//====== string `` "" ''=====[

// let lop = "`sardor`" //` ` "
// let bob = "'zur'";   //|" ' ' "
// let name ='"salom"'; // |' " "  '
// console.log('sunnat  sardor   "javlon" ' + lop)
// console.log("sunnat  sardor    'bobur'")
// console.log(`webbrien academy ${lop + name}  ${lop} ${bob}`)
// ================================]

//====== Number ==== raqam =[
// let d = "12"
// let a = 12;
// console.log( a)
//============]

//==== Symbol ===== yunik  id berish uchun ishlatiladi =[
// symbolda ikta birhil narsa busayam teng bumedi//

// let a = Symbol("text")
// let b = Symbol("text")
// console.log(a == b);//false
// console.log(a === b);//false
//=======================]

//======= Boolean =======[ true false
// true = 1;  //teng
// false = 0; //teng
// console.log(true == false);//false
// console.log(true == true )//true
// console.log(false == false)//true
//================]

// ====bigInt == katta bugan sonlani ishlatib beradi[

//  console.log(9007199254740992n + 1n)
// =============]

// ======= undefinet == shikalatam yoq qog'aziyam yuq[

// let text;
// console.log(text);
// =====
// text = " salom";
// console.log(text)
// ===========]
//=========================]

//==== null== qog'ozi bor shikalt yoq =[
// let a = null;
// console.log(a);
//============]

//non primitive//

//===== objekt ======//

//=============

// Stringni Numberga utqazish//

// =========1
// let b = 10.3
// console.log(+b)
// ===========

// ========2
// let b ="10"
// console.log(Number(b));// agar sondi oldiga bironta harif qushilsa NaN birvaradi raqamas didi
// ==========

// =========3 kasir kiremas
// let c ="10s.3"
// console.log(parseInt(c)) // 10  agar harif kib qosa raqam oldidan harifgacha bugan raqanmdi uqidi
// =============

// =======4
// let c ="1.6"
// console.log(parseFloat(c))// 1 agar harif kib qosa raqam oldidan harifgacha bugan raqanmdi uqidi

// const res = (title) => {
//     return 1213;
// };
// console.log(title());

// number farqi parseFloat //
// number  = harif arilashsa NAN qaytaradi
// parseFloat  = harif arilashsa harif arilashkan joygacha bugan sondi oladi