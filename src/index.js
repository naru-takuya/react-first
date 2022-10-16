// 変数
// var val1 = "val変数";
// val1 = "val1再代入";
// var val1 = "val1再宣言";
// console.log(val1);
// 再宣言再代入ができる
// let val2 = "let変数";
// val2 = "let再代入";
// console.log(val2);
// 再宣言はできないが再代入はできる
// const val3 = "const変数";
// console.log(val3);
// 再宣言も再代入もできない
// const val4 = {
//   name: "naruoka",
//   age: "26",
// };
// val4.age = 32;
// console.log(val4);
// 配列やオブジェクトのプロパティは再代入できるし、追加できる

// テンプレート文字列
// const name = "naruoka";
// const age = 26;
// const message = "私の名前は" + name + "で年齢は" + age + "です";
// const message2 = `私の名前は${name}で年齢は${age}です`;
// console.log(message);
// console.log(message2);

// アロー関数
// 従来のもの
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("function1"));
// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("function2"));
// アロー関数引数２つ
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(2, 4));

// 分割代入
// const myProfile = {
//   name: "naruoka",
//   age: 26,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);
// const myProfile = ["naruoka", 26];
// const [name, age] = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// デフォルト値
// const saHello = (name = "名無し") => {
//   console.log(`こんにちは${name}さん`);
// };
// saHello("ishizu");
// saHello();

// スプレッド構文
// 配列の展開
// const arr1 = [1, 3];
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// 配列のコピー結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// map、filter
// map
// const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; nameArr.length > index; index++) {
//   console.log(nameArr[index]);
// }
// nameArr.map((name, index) => {
//   console.log(`${index + 1}番目は${name}です`);
// });
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   return name === "佐藤" ? name : `${name}さん`;
// });
// console.log(newNameArr);

// 三項演算子
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);
// const num = 1300;
// console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい";
// console.log(formattedNum);
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(20, 139));

// 論理演算子
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);
// const num2 = 100;
// const fee2 = num2 && "なにか設定されました";
// console.log(fee2);
