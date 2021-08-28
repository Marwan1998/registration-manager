const obj1 = {id: 1, name: 'SpiderMan', power: 6, of: 10};
const obj2 = {id: 2, name: 'superman', power: 8, of: 10};
const obj3 = {id: 3, name: 'houlk', power: 7, of: 10};
const Name = 'MG45';

// console.log(`%c Hello ${Name}`, 'color: blue; font-size: 8rem;');
console.table({obj1, obj2, obj3});

const size = 10000;
const arr = Array(size);
for(let i=1;i<=size;i++) arr[i-1]=i;

console.time('for');
// arr.forEach(v => console.log(v));                      // 2....31ms.....2.66s
// for(let co = 0; co<arr.length; co++) console.log(arr[co]);   // 1...31ms.....2.67s
// for (const ar of arr) console.log(ar);                  // 3....31ms....2.799s
// for(let ar in arr) console.log(ar);                     // 100.....30ms..2.661s
// arr.map((i) => console.log(i));                        // 4....33ms....2.60s

// for(let i=0; i<1000; i++) console.log('name');


let name1 = 'xxxxxxxxxx'
.replace(/x/g, 'xxxxxxxxxx')
.replace(/x/g, 'xxxxxxxxxx')
.replace(/x/g, 'mg45\n');
console.log(name1.length);


console.timeEnd('for');