// --------------------
// Перепишите функцию, используя оператор '?' или '||'
// --------------------

// by using ?
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

// by using ||
function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

// --------------------
// Функция pow(x,n)
// --------------------

function pow(x, n) {
  if (n == 0) return 1;
  if (x == 0) return 0;
  return x * pow(x, n - 1);
}

// --------------------
// Перепишите с использованием функции-стрелки
// --------------------

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  'Вы согласны?',
  () => {
    alert('Вы согласились.');
  },
  () => {
    alert('Вы отменили выполнение.');
  }
);

// --------------------
// Сортировать в порядке по убыванию
// --------------------

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10

// --------------------
// Трансформировать в массив имён
// --------------------

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

alert(names); // Вася, Петя, Маша

// --------------------
// Трансформировать в объекты
// --------------------

let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

// --------------------
// Получить средний возраст
// --------------------

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
  return arr.reduce((prev, user) => prev + user.age, 0) / users.length;
}

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
