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
// Create
console.time('one');
const copyUsers = [
  // users[0],
  // users[2],
  // users[3],
  // users[4],
  ...users,
  newUser
]
console.timeEnd('one');
console.time('test');
const copyUsers2 = users.concat(newUser);
console.log('copyUsers2: ', copyUsers2);
console.timeEnd('test');
// Read
console.log(users === copyUsers); // false

// Update
const updateUsers = users.map(i => i.id === 2 ? {...i, isStudent: false} : i);

console.log('users: ', users);
console.log('updateUsers: ', updateUsers);
console.log('update: ', updateUsers[0] === users[0]); // true
console.log('update2: ', updateUsers[1] === users[1]); // false

// Delete
const userDelete = users.filter(i => i.id !== 1);

console.log('userDelete: ', userDelete);
console.log('delete: ', users[0] === userDelete[0]); // false

const superUser = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": 'Kulas Light',
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};

const superUserCopy = {...superUser, company: {...superUser.company, catchPhrase: "harness"}};
console.log('superUserCopy: ', superUserCopy);

const superUserCopy2 = {...superUser, address: {...superUser.address, geo: {...superUser.address.geo, lat: "55.55", lng: "66.66"}}}
console.log('superUserCopy2: ', superUserCopy2);

const superUserCopy3 = {...superUser, email: 'stanislavasilevich@yandex.ru'}
console.log('superUserCopy3: ', superUserCopy3);
