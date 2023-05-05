// == Number == //
// intiger - butun sonlar = 1234
// let num = 124
//==============

// float - kasir sonlar bulingan qisimga aytiladi 1.5
// let num = 12.5
//==============

// chunshimizga osonlashtirishimiz uchun 100_000_000 tagiga chizig chizamiz
// let num = 10_000_000_000;
// ============

// let num = 10e8 //e\\kiyingi kigan raqam neshta nol borligin anglatadi
// let num = 10e9;
// ============

// == Stiringdi Numberga utkazish == //

// let num = "12.3"  |12.3|
// let num = "12s"   |NAN|
// console.log(Number(num)); // qanaqa son busayam numberga utqazadi agar
// qayerdadur harif arilashkan busa NAN biradi yani raqamas didi
//=========

// == Numberdi  Stiringa  utkazish == //

// let n = 4  // stringa utkazildi
// console.log(n.toString()); // stringa utkazildi

//==============

// let n = 4 ;
// console.log(n.toString(2));//ikkili sanoq sistemasi digani skopti ichida yozilsa
// skopti ichida qanaqa raqam yosek usha raqam qanaqa sanok sistemasi liginin bildiradi

// == toFixedn nuhtadan kiyin neshta raqam chiqsin didi == //

// raqam bersak nuhtadan kiyingi neshta raqamdi kursatsin digani
// let n = 1.223;
// console.log(n.toFixed (1));// nuhtadan keyigi bita raqamdin kursatsin 1.2
// console.log(n.toFixed (2));// nuhtadan keyigi ikkta raqamdin kursatsin 1.22
// console.log(n.toFixed (0));// birdi uzini kursatsin nol birsak 1

// toFixedn nuhtadan kiyin neshta raqam chiqsin didi //
// /\ ikalasini farqi \/  //
// toPrecision opshi nishta chiqsin didi //

// == toPrecision opshi nishta chiqsin didi == //

// let n = 1.2213
// console.log(n.toPrecision(2));//opshi ikta chiqsin didi 1.2
// console.log(n.toPrecision(3));//opshi ushta chiqsin didi 1.22
//===================

//===== isNaN =====//
// == isNaN berilgan raqamdi NaN yoki NaN masligini tekshirib beradi == //

// let n = 2
// console.log(isNaN(n));//ramasmi depti yo raqam didi false\
// console.log(isNaN("A"));//ramasmi depti ha raqam emas  true\

// let num = "12.3"  //|12|
// let num = "1a.23" |1| harif arilashsa
// console.log(parseInt(num));//parseInt paqat yahlit qismini oladi javobi : 12
// agar qandaydur harif arilashipmqogan busa ushagacah oladi
// =========

// let num ="12.3s12"
// console.log(parseFloat(num));//numberblan bir hil ishledi agar qayerdadur
// harif arilashkan busa usha harifkacha bugan raqamlani oladi javobi : 12.3
//==========

// == (Math.asb()) == //
// sondi absalut qiymatini chiqarib beradi
// console.log(Math.abs(+23));// 23
// console.log(Math.abs(-23));// 23
// =========

// == (Math.round()) == //
//sondi yahlitlash digani
// nuhtadan kiyingi son 5 kichik busa qiymati uzgarmedi
// nuhtadan kiyingi son 5  ti uzi yoki undan baland busa qiymtini birga oshiradi
// console.log(Math.round(1.234));// 1 // 5 pasbugani uchun kiymati uzgarmadi
// console.log(Math.round(1.534));// 2 // 5 uzi bugani uchun kiymati oshti 1 taga
//===========

// == (Math.ceil()) --> patalog  == //
// console.log(Math.ceil(1.23)); |2| //kasir qismi bormi qimatini oshirib quyadi
//uzidan kata bugan soni oberadi 1.234 --> unga qarab yuradi ceil busa javobi : |2|
// console.log(Math.ceil(-2.3));//agar |-|li qiymat busa qiymati oshmedi
//===========

//kasir qismi busa unga qarap yahlitlaydi|kasir qismi bumasa chapka qarap yahlitledi
//          < --| -5,-4,-3,-2,-1, | 0 | 1, 2, 3, 4, 5 |-->

// == (Math.floor()) <-- pol == //
// console.log(Math.floor(1.999));// |1| kasir kismini tashavoradi sondi uzini obiradi
// console.log(Math.floor(-2.3));//  |-3| |-| qimat busa minusa  qarab kitadi 0,-1,-2,-3.-4,-5
//============

// == (Math.trunc()) == //
//nima bulshidan qati nazar butun qismini ovoladi
// console.log(Math.trunc(12.2334));//  |12|sondi yahlit qismini obiradi parseInt de ishledi
// console.log(Math.trunc(-12.2334));// |-12| yahlit qismini oladi
//===========

// == (Math.random()) == //
//raqamlarning oralogini chiqarib biradi
//10
//100
//1000
//10000
// =====
// console.log(Math.random(10)*100);//10 bilan 100 oralig'idegi sinlani kursatadi
//=============

// == (Math.min())  in kichkinasini chiqarib beradi== //
// console.log(Math.min(1,2,3,4,4,6,4,8,58,23,54,76,98));//|1|
//=============

// == (Math.max()) in kattasini chiqarib beradi == //
// console.log(Math.max(1,2,3,4,4,6,4,8,58,23,54,76,98));//|98|
//==============

// == (Math.pow()) darajaga oshirish == //

// console.log(Math.pow(2, 3)); //ikkinchi yozilgan qiymati nechinchi darajaligi

//  \/ ikkalasi birhil ishledi /\

// console.log( 2 ** 3 );//ikkinchi yozilgan qiymati nechinchi darajaligi
//==============

// == (Math.sign()) 3 qiymat qaytaradi | -, +, 0 | == //
// console.log(+11);// |11|
// console.log(-13);// |-13|
// console.log(0.4);// |0.4|
//============

// == (Math.sqrt()) == //
//ildiz ostini chiqarib beradi
// console.log(Math.sqrt(27));// |5|
//==============

// == (Math.cbrt()) == //
// cub ildiz ostidan chiqarib beradi
// console.log(Math.cbrt(27));// |3|
// console.log(27**(1/3));// |3|
//=============
