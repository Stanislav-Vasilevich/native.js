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
const b = document.querySelector('.b');
const c = document.querySelector('.c');

// вешаем несколько обработчиков события
function handler(e) {
  console.log(e);
  e.stopPropagation();
  alert('удалил обработчик');
}

function handler2(params) {
  console.log(params);
}

function double(params) {
  handler(params);
  handler2(params);
}

function hello() {
  console.log('hello');
}

// но лучше такой метод!
// a.addEventListener('click', (e) => {
//   console.log('e.target: ', e.target);
// });

// сколько угодно обработчиков события
// функция getEventListeners(a) показывает сколько обработчиков события весит на нужном нам элементе
// также всплытие можем поменять на погружение и вызвать обработчик один раз
a.addEventListener('click', double); // для этого третьим параметром передаем {capture: true, once: true}
b.addEventListener('click', hello);
c.addEventListener('click', handler);
b.removeEventListener('click', hello);

// удаляем для ссылки функции по умолчанию
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
  e.preventDefault();
});
