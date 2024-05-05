// let user = {
//     name: '',
//     age: '',
//     nation:''
// };
// user.name = prompt(`What is your name`)
// user.age = +prompt(`How old are you`)
// user.nation = prompt(`What is your nation`)
// console.log(user.name)
// console.log(user.age)
// console.log(user.nation)
let userData = {};

let name = prompt('Введите ваше имя:');
let id = prompt('Введите ваш ID:');
let password = prompt('Введите ваш пароль:');
function getUserData() {

  userData.name = name;
  userData.id = id;
  userData.password = password;

}
getUserData(name,id,password)
console.log('Полученные данные:', userData);
