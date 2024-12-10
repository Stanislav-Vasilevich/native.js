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

const myMap = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].name);
  }

  return newArray;
}

const result = myMap(students);
console.log('result: ', result);

const result2 = students.map(i => i.name);
console.log('result2: ', result2);
