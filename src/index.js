// varは上書きも再宣言もできる
// 開発規模が大きくなると、意図せずに上書きをしたり再宣言したりするリスクがある

// var name = "hoshito";
// console.log(name);

// name = "kishi";
// console.log(name);

// var name = "星斗";
// console.log(name);

// letは上書きできるが、再宣言はできない

// let name = "hoshito";
// console.log(name);

// name = "kishi";
// console.log(name);

// let name = "星斗";

// constは上書きも再宣言もできない
// だが、constで宣言したオブジェクトや配列は上書きしたり追加できたりする

// const name = "hoshito";
// console.log(name);

// name = "kishi";
// const name = "kishi";

// const user = {
//   name: "kishi",
//   age: 25
// }
// user.name = "hoshito";
// console.log(user);
// console.log(user.name);

// const animals = ["dog", "cat"];
// animals[0] = "rabbit";
// console.log(animals);
// console.log(animals[0]);
// animals.push("monkey");

// 従来の関数
// function test(name) {
//   return name;
// }

// const test = function (name) {
//   return name;
// };

// console.log(test("kishi"));

// // アロー関数
// const test2 = (age) => {
//   return age;
// }

// console.log(test2(25));

// const test3 =(num1, num2)=>{
//   return num1 + num2;
// }

// console.log(test3(10, 20));

// 分割代入

// const user = {
//   name: "Kishi",
//   age: 25,
// }
// const message1 = `私の名前は${user.name}です。年齢は${user.age}歳です。`;
// console.log(message1);

// const { name, age} = user;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const user =["kishi", 25];
// const message3 = `私の名前は${user[0]}です。年齢は${user[1]}歳です。`;
// console.log(message3);

// const [ name, age] = user;
// const message4 = `私の名前は　${name}です。年齢は${age}歳です。`;
// console.log(message4);

// デフォルト値、引数
const hello = (name = "ゲスト") => {
  console.log(`こんにちは、${name}さん！`);
};

hello("kishi");
