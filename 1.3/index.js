// событие - это: обработчик, слушатель, подписчик, handler, listener, subscribe => function
// function() (вызывает браузер) => callback
// по событию формируется объект, который содержит сведения о событии:
// {....} => сведения о событии => этот объект формирует шаблон Event => event => ev => e
// new Array(), new Object(), new Event()
// при возникновении события вызывается функция и в нее передается объект события: function(Event)

function getName() {
  return this.name;
}

const obj = {
  name: 'Bob',
  getName: getName
}

console.log(obj.getName());

const a = document.querySelector('.a');

// вешаем несколько обработчиков события
function handler(params) {
  console.log(params);
}

function handler2(params) {
  console.log(params);
}

function double(params) {
  handler(params);
  handler2(params);
}
a.onclick = double;

// но лучше такой метод!
a.addEventListener('click', (e) => {
  console.log('e.currentTarget: ', e.currentTarget);
  console.log('e.target: ', e.target);
});

// сколько угодно обработчиков события
// функция getEventListeners(a) показывает сколько обработчиков события весит на нужном нам элементе
a.addEventListener('click', (e) => {
  console.log('e.currentTarget: ', e.currentTarget);
  console.log('e.target: ', e.target);
});
