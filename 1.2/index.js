const students = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: 'John',
    age: 19,
    isMarried: false,
    scores: 100
  },
];

const myMap = (array, fn) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = fn(array[i]);
  }

  return newArray;
}

const myFilter = (array, fn) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) === true) {
      newArray[newArray.length] = array[i];
    }
  }

  return newArray;
}

const myFind = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) === true) {
      return array[i];
    }
  }
}

const myPush = (array, elem) => {
  array[array.length] = elem;

  return array.length;
}

const myIndexOf = (array, el, start = 0) => {
  for (let i = start; i < array.length; i++) {
    if(array[i] === el) {
      return i;
    }
  }

  return -1;
}

const myInclude = (array, el, start = 0) => {
  for (let i = start; i < array.length; i++) {
    if(array[i] === el) {
      return true;
    }
  }

  return false;
}

const array = ['one', 'two', 'three'];

const result1 = myMap(students, st => st.name);
const result2 = myFilter(students, st => st.name !== 'John');
const result3 = myFilter(students, st => st.name === 'John');
const result4 = myPush(students, {name: 'Stanislav', age: 36, isMarried: true, scores: 100});
const result5 = myIndexOf(array, 'two');
const result6 = myInclude(array, 'three');
console.log('result1: ', result1);
console.log('result2: ', result2);
console.log('result3: ', result3);
console.log('result4: ', result4);
console.log('students: ', students);
console.log('result5: ', result5);
console.log('result6: ', result6);
console.log('proto: ', array.__proto__);
