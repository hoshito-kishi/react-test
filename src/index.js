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
