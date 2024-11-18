/*
Примитивы
1. string => "", '', ``
2. number => number, NaN, Infinity
3. undefined => undefined
4. null => null
5. boolean => true, false
7. symbol => Symbol
8. bigint => BigInt

Объекты:
  - составной (комбинированный) тип данных
  - ссылочный тип данных
9. object => object, array, function
*/

const user = {name: 'Bob'};
const user2 = user;
user2.name = "Alex";
console.log(user.name);

const arr = [1, 2, 3, 4];
const arr2 = [6, 7, 8];
arr.push(5);
console.log(arr);
console.log(arr2);
const arr3 = arr.concat(arr2);
console.log('arr3:', arr3);
console.log(arr3 === arr); // false

const users = [
  {
    id: 1,
    name: "Bob",
    isStudent: true,
  },
  {
    id: 2,
    name: "Alex",
    isStudent: true,
  },
  {
    id: 3,
    name: "Ann",
    isStudent: true,
  },
  {
    id: 4,
    name: "Donald",
    isStudent: true,
  },
]

const newUser = {
  id: 5,
  name: "Farid",
  isStudents: true
}

// CRUD
const copyUsers = [
  users[0],
  users[2],
  users[3],
  users[4],
  newUser
]

console.log(users === copyUsers); // false
