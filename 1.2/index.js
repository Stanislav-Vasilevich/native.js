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

const myPop = (array) => {
  const last = array[array.length - 1];

  array.length = array.length -1;

  return last;
}

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

const myPush = (array, ...elements) => {
  for (let i of elements) {
    array[array.length] = i;
  }

  return array.length;
}

const myShift = (array) => {
  const first = array[0];

  for (let i = 0; i < first.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length -1;

  return first;
}

const myUnshift = (array, ...elements) => {
  const length = array.length;

  array.length = array.length + elements.length;

  for (let i = length - 1; i >= 0; i--) {
    array[i + elements.length] = array[i];
  }

  for (let i = 0; i < elements.length; i++) {
    array[i] = elements[i];
  }

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

const myReverse = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = temp;
  }

  return array;
}

const myConcat = (array, ...rest) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result[result.length] = array[i];
  }

  for (let i = 0; i < rest.length; i++) {
    if(Array.isArray(rest[i])) {
      for (let j = 0; j < i; j++) {

      }
    } else {
      result[result.length] = rest[i];
    }
  }

  return result;
}

console.log(myConcat([1, 2], [33, 22], 2, 3));

const array = ['one', 'two', 'three'];
const result1 = myMap(students, st => st.name);
const result2 = myFilter(students, st => st.name !== 'John');
const result3 = myFilter(students, st => st.name === 'John');
// const result4 = myPush(students, {name: 'Stanislav', age: 36, isMarried: true, scores: 100}, {name: 'Alexandr', age: 26, isMarried: false, scores: 50});
const result5 = myIndexOf(array, 'two');
const result6 = myInclude(array, 'three');
const result7 = myShift(array);
const result8 = myShift(array);
// console.log('result1: ', result1);
// console.log('result2: ', result2);
// console.log('result3: ', result3);
// console.log('result4: ', result4);
// console.log('students: ', students);
// console.log('result5: ', result5);
// console.log('result6: ', result6);
// console.log('result7: ', result7);
// console.log('result8: ', result8);
// console.log('proto: ', array.__proto__);
// console.log('myPop(array): ', myPop(array));
