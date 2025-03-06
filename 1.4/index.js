const todolist = [
  {id: 1, title: 'What to learn', filter: 'all'},
  {id: 2, title: 'What to buy', filter: 'all'},
]

const tasks = {
  [todolist[1].id]: [
    {id: 1, title: 'HTML', isDone: false},
    {id: 2, title: 'CSS', isDone: false},
    {id: 3, title: 'React', isDone: false}
  ],
  [todolist[2]]: [
    {id: 1, title: 'Beer', isDone: false},
    {id: 2, title: 'Fish', isDone: false},
    {id: 3, title: 'Water', isDone: false}
  ],
}

console.log('task1: ', tasks[todolist[1].id]);
