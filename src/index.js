import faker from 'faker';

import Emitter from './emitter';
import Tree from './suggest';


console.log('Emitter');
// пример использования эмиттера
const emitter = new Emitter();

const fn1 = () => console.log(1);
const fn2 = () => console.log(2);

emitter.on('event', fn1);
emitter.on('event', fn2);
emitter.emit('event');
emitter.off('event', fn1);
emitter.emit('event');
console.log('end Emitter');


console.log('suggest');
const SIZE = 150000;

// рандомно заполняем улицы словами
const streets = new Array(SIZE).fill().map(() => faker.lorem.words());

console.log(`preparing tree of size ${SIZE}...`);
// создаем дерево на основе массива
const tree = new Tree(streets);

// создаем случайные инпуты заранее, чтобы исключить это время из измерения
const inputs = new Array(100000).fill().map(() => faker.lorem.word());

console.time(`searching ${inputs.length} inputs`);

// поиск
for (let i = 0; i < inputs.length; i++) {
  tree.find(inputs[i]);
}

console.timeEnd(`searching ${inputs.length} inputs`);
console.log('end suggest');
