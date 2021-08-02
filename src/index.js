// /**
//  * const letの使用
//  */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

// // varは再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // let変数は上書き可能
// val3 = "上書き";
// console.log(val3);

// // letは再宣言不可能
// const val3 = "再宣言";
// console.log(val3);

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "toto",
//   age: 24
// };

// val4.name = "taco";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// // テンプレート構文
// const name = "ジャケえ";
// const age = 28;

// const message1 = `私は${name}です．年齢は${age}です`;
// console.log(message1);

// アロー関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// const func2 = (str) => {
//   return str;
// };

// return は一行なら省略化
const func2 = (str) => str;
console.log(func2("func2"));
