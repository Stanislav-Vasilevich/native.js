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
