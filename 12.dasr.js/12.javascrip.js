// == strirng == //

// let str1 = "1web 'brian' \n  academy"//agar biz |\n| yosek yangi qatorga utadi

// let str2 = ' 2web brain "academy"'//sringdi birbiriga qushish let str4 = str1 + str2 + str3

// let str3 = `3web
// brian`//yangi qatorga utoradi qushmacha heshnarsa kiremas

// let str4 = `webbrian${str2}`// | ` ` |bektik ichida hohlagan qushimcha amal bajarsek buladi

// console.log(str4);

// =====================================

// string yasash // 2 hil usulda yasasa buladi  //

// let titel1 = "webbrain";
// console.log(titel1  === "webbrain" );// true

// ================== ikalasini farqi

// let titel2 = new String("webbrain") // konstractor webbrian digan stringdi yasab beradi
// console.log(titel2 === "webbrain" ); // fslse
// console.log(titel2); // aga konstraktordi uzini chaqirsek [String: 'webbrain'] shu holata chiqaradi

// ==================

//  stringdi konstractor stringblan taqoslash //
// localeCompare qiymat qaytaradi |-1 yuq digani, 0 qisman bpr digani, 1 aniq bor digani.|

// let n1 = "webbrain"; // n1 ichidaqa qiymat n2 ikidsayam bormi depti
// let n2 = new String("web");//

// console.log(n1.localeCompare(n2)); // javobi:|0| -1 yuq digani, 0 aniq bor digani, 1  qisman bor digani.

// stringdi exses kilish //

// let str1 = "sardor";

// console.log(str1[0]); // s |-| minusli qiymat qabul qimedi

// console.log(str1[1]); // a |-| minusli qiymat qabul qimedi

// console.log(str1.at(-1)); // a |-| minusli qiymat qabul qiladi ohiridan boshlab hisobledi

// console.log(name.charAt(0)); // s |-|minusli qiymat qabul qimedi charAt()

// String metidlari //

// == .length == //
// .length // neshta harif qatnashkanligini kursatrib beradi //

// let str = "sardor"

// console.log(str.length); // javobi:|6|neshta harif qatnashkanligini kursatrib beradi

// ===============

// == toLocaleUpperCase() == //

// toLocaleUpperCase() stringlardi kata yioki kichkina harifka uzgartirsek buladi //

// let str = "sardor"

// console.log(str.toLocaleUpperCase());//javobi:|SARDOR| kata harif qiberadi

// ===============

// let str1 = "sardor"

// console.log(`${str1}`.toLocaleUpperCase()) // strin buganda ishlasin raqam kiganda raqamdi uzini chiqaradi

// ================

// raqam bupqosayam hato birmedi //

// let str2 = 1825

// console.log(`${str1}`.toLocaleUpperCase())//raqam kiganda raqamdi uzini chiqaroradi

// ======================

// == .toLowerCase() == //

// == .toLowerCase() == //  hariflani kichkina qibiradi == //

// let str1 = "WEBBRAIN"
// console.log(str1.toLowerCase());

// == .indexOf == //
// qaysi indextaligini aytadi //
//  probeldi hisopledi //
// boshidan boshlsm hisobledi //
// |-1 yuq digani, 0 bordigani, 1 qisman bor digani |
// indexOf -  stringning ning index  nichinchi qatorda qaysin harif boshlanadi //

// let str = "sardor shuxratov"

// console.log(str.indexOf("x")); // ikinchi berilgan parametr nechinchi qatordan boshlasin digani

// console.log(str.indexOf("d")); // javobi:|  |3| qatorda |d| digan harif bor depti|  d

// console.log(str.indexOf("t")); // javobi:|  |13| qatorda |t| digan harif bor depti| t

// ====================

// let name = "Asilbek shuxratov"//

// console.log(name.indexOf("w",5));//  ikinchi berilgan parametiri nechinchi qatordan boshlab tekshirsin didi

// console.log(name.indexOf("w",5));// javobi:|-1 yuq digani| 5 katordan keyin w bormi yuqmi tekshiradi

// console.log(name.indexOf("bek",5));// 5 katordan boshlap |bek| digan suzdi qidirgin didi

// ======================================]

// .lastIndexOf //
// == .lastIndexOf == // probeldi hisopledi //
//  .lastIndexOf ohiridan boshlab hisobledi //

// let str = "webbrain";

// console.log(str.lastIndexOf("n")); // probeldiyam hisoblagani uchun|5|chiqadi
// console.log(str.lastIndexOf("b",2)); //javobi: |2|

// ================
// .includes //
// bor yoqligini tekshirib beradi //
// == .includes("")  true folse  kaqytadi == //
// .includes("") ichida suz bor yoki yuqligini tekshirib beradi //

// let str = "sardorbek shuxratov"

// console.log(str.includes("f"));// f harifi yuq false

// console.log(str.includes("s"));// s harifi bor true

// ===============

//.startsWith //
// == .startsWith  true falsega  qaytadi == //
// .startsWith | aynan shu sozblan boshlanganmi tekshirib beradi //

// let str = "sardor shuxratov"

// console.log(str.startsWith("sh"));// false chunki bu suzblan boshlanmagan

// console.log(str.startsWith("s"));// true chunki bu suzblan boshlangan

// ===============

// == str.startsWith() == //
// str.startsWith() |aynan shublan tugaganmi //

// let str = "sardorbek shuxratov"

// console.log(str.endsWith("s"));//folse chunki bu harifblan tugamagan

// console.log(str.endsWith("v"));//ture chunki bu harifblan tugagabn

// ===================

// .padStart //
// malumotlani qushish uchun kerak buladi //
// == .padStart(22 ".") == //

// probeldi hisibledi //
//  .padStart() boshiga suz qoshib quyadi  //

// let str = "sardorbek shuxratov"

// console.log(str.padStart(20,"s."));//ssardorbek shuxratov ikkta| s |buladi chunki oldiga qushib quydi

// console.log(str.padStart(22,".s"));//.s.sardorbek shuxratov ikkta |.s.| buladi chunki oldiga qushib quydi

// =========

//.padEnd //
// malumotlani qushish uchun kerak buladi //
// == .padEnd(22 ".") == //

// probeldi hisibledi //
// .padEnda| ohiriga suz qushib beradi sigme qosa| //

// let str = "sardor shuxratov"

// console.log(str.padEnd(25,".zur bola"));//sardor shuxratov . zur bola

// console.log(str.padEnd(19,"jon."));//sardor shuxratovjon

// ====================

//.slice() //

// malumotlani kesib olish uchun kerak buladi //
// nechinchi indextan nechinchi indexgacha qirqib olish //
// let str = "sardor"

// console.log(str.slice( 0, 2 ));// javobi |sa| 2 chi hariftan boshlap qoganini kesvosin

// console.log(str.slice( 1, 2 ));// javobi |a| 1 hariftan kesib osin 2 harifta qoganinyam kesib osin

// console.log(str.slice( 0, -2 ));//javobi |sard| orqasidan boshlab 2 tasini kesib oladi |-| qiymat bersak

// ===========================

// .subString() //

// == .subString(), |-|qiyat qabul qimedi == //

// let str = "webbrain"

// console.log(str.substring(0,2));// javobi:|we|

// console.log(str.substring(0,-2));// |-| qiymat qabul qimedi javobi chiqmedi

// console.log(str.substring(2 , 0));// uzi tugirlavoladi katasini kichigiga

// ==============================

// == eval(``) arifmetik amal bajarishka ishlatami //

// console.log(eval(2 + 2 * 8));//javobi : |18| string ichida arifmetik amal kilaolamiz

// =========================

//           == .trim() == //

// == .trim() bush joylani yuq qilishka ishlatiladi == //
// probel quyilgan joylani yuq qibiradi //
// boshi va ohiridan boshlab bush joylani chiqarib beradi//

// let  str = "   webbrain acadmiy   "

// console.log(str);//    webbrain acadmiy     // joy tashalganligicha qoldi

// console.log(str.trim());//webbrain acadmiy// joy tashalgan joylani yu qibirdi

// ========================

// == trimStart() == //

// trimStar() boshidegi bush joydi uzini uchiradi //

// let  str = "   webbrain acadmiy   "

// console.log(str.trimStart());// webbrain acadmiy      // boshidegi bush joydi uchirdi

// == trimEnd()  == //

// trimEnd() ohiridegi bush joyni uzini uchiradi  //

//  let  str = "   webbrain acadmiy   "

//  console.log(str.trimEnd());//     webbrain acadmiy//  ihiridegi bush joydi uchirdi

// =======================

//             == .split() == //

//  .split() malumotlani arrayga utkazib beradi //
//   nichinchi indextan neshtagacha kesib ilish //

//  let str = "sardor shuxratov  Asilovich"

//  console.log(str.split(""));//hariflani bita bitaga ajiratib beradi
//  console.log(str.split(" "));// agar bush joy busa ushani bita elemntka ajiratadi
//  console.log(str.split(" " , 3));// bizga neshtaelement kerak| 2 |ta sini kursatadi
//  console.log(str.split("a"));//a  urniga anashiu joyda bita element yasab beradi

// ========================

//          == .concat() == //

// ikta stringdi birbiriga qushish //

// let str  = "sardor"

// console.log(str.concat("shuxratov"));// javobi :| sardor shuxratov |chiadi

// =======================

// new String("") //

// == new String("").valueOf() == //
// newString() ichidagi malumotni olish //

// let  str = "webbrain"

// console.log(new String("webbrain"));

// console.log(new String("webbrain").valueOf());// |webbrain| malumotni ichidan oldik

// ========================

//            == .replace(",") == //

// .replace(" 1 , ") 1 parametirda biz uzgartimohchi bugan suz //
// .replace(" 1 ,2 ") 2 parametirda yangi qiymat harifini kata qibiradi   //

// let str = "webbrain academy";

// console.log(str.replace("web", "WEB")); // 1 si uzgarti mohchi bugan harifimiz 2 si uni uzgartirshimiz

// javobi : WEBbrain academy

// ========================

// let str = "sar dorbek shuxratov    sar"

// console.log(str.replace(/Sar/i , "SAR")); // | /  /i | birnchi duch kiganini uzgartirib beradi

// javobi : SAR dorbek shuxratov    sar /

// =========================

// let str = "sar dorbek shuxratov    sar"

// console.log(str.replace(/sar/ig , "SAR")); // berilgan qiymati barini uzgartirib bersin digani

// javobi : SAR dorbek shuxratov    SAR /

// ==================================

//                 == for(char of str)  == //
//      for(char of str) hamasiga bir ma bir kirib chiqadi //

// let str = "sardorbek"

//     for(char of str) {
//     console.log(char);
//     }

//     javobi //

//  d
//  r
//  b
//  o
//  r
//  e
//  a
//  k
//  s

// ======================================================
