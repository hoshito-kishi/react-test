// varは上書きも再宣言もできる
// 開発が大きくなると意図せずに上書きや再宣言してしまうリスクがある
// var name = "hoshito";
// console.log(name);
// name = "ほしと";
// console.log(name);
// var name = "kishi";
// console.log(name);

// letは上書きはできるが、再宣言はできない
// let name = "hoshito";
// console.log(name);
// name = "ほしと";
// console.log(name);

// constは上書きも再宣言もできない
// const name = "hoshito";
// console.log(name);

// constでも、オブジェクトと配列は上書きや追加ができる
// const user = {
//   name: "kishi",
//   age: 25
// }
// user.name = "hoshito";
// console.log(user);
// console.log(user.name);
// console.log(user.age);

// const animals = ["dog", "cat"];
// animals[0] = "monkey";
// animals.push("rabbit");
// console.log(animals);
