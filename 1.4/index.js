const todolist_1 = 1;
const todolist_2 = 2;

let todolist = [
  {id: todolist_1, title: 'What to learn', filter: 'all'},
  {id: todolist_2, title: 'What to buy', filter: 'all'},
]

let tasks = {
  [todolist_1]: [
    {id: 1, title: 'HTML', isDone: false},
    {id: 2, title: 'CSS', isDone: false},
    {id: 3, title: 'React', isDone: false}
  ],
  [todolist_2]: [
    {id: 1, title: 'Beer', isDone: false},
    {id: 2, title: 'Fish', isDone: false},
    {id: 3, title: 'Water', isDone: false}
  ],
}

console.log('task1: ', tasks[todolist_1]);
console.log('task2: ', tasks[todolist_2]);

const createTodolist = (title) => {
  const todolist_3 = crypto.randomUUID();
  const newTodolist = {id: todolist_3, title, filter: 'all'};
  tasks = {...tasks, [todolist_3]: []}

  todolist = [...todolist, newTodolist];
}

console.log(createTodolist('What to show'));

console.log(todolist);
console.log(tasks);

const changeTaskStatus = (todolistId, taskId, newStatus) => {
  tasks = {...tasks, [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, isDone: newStatus} : t)}
}

changeTaskStatus(todolist_1, 2, true);
console.log(tasks);
