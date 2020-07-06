// //створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

//  let arrNum = [123, 123, 321, 456, 123];
//  console.log(arrNum);



//  let arrStr = ['max', 'name', 'car', 'hobby', 'user'];
//  console.log(arrStr);


//  let arrRan = [123, 'car', true];
//  console.log(arrRan);

// //-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let ind = [];
// ind[0] = 'car';
// ind[1] = 123;
// console.log(ind);


// //За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//   document.write('<div>123</div>');
//   document.write('<br>')
// }


// //За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let divI = [];

// console.log(divI.length);

// for (let i = 0; i < 10; i++) {
//   document.write(`<div> ${divI[i]} </div>`);
//   document.write('<br>')
// }


// //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0
// while (i < 20) {
//     document.write(`<h1>qwe</h1>`);
//     document.write('<br>');
//     i++
// }


// //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// while (i < 20) {
//     document.write(`<h1> ${divI[i]}</h1`)
//     document.write('<br>');
//     i++
// }

// //Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numAr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 1];

// for (let i = 0; i < numAr.length; i++){
//     document.write(numAr[i]);
//     document.write('<br>');
// }


// //Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі

// let strAr = ['one', 'two', 'two', 'one', 'one', 'two', 'tre', 'two', 'one', 'three'];

// for (let i = 0; i < strAr.length; i++) {
//     document.write(strAr[i]);
//     document.write('<br>');
// }


// //Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let runAr = ['one', 2, true, 'one', 5, false, 'tre', 'two', 'one', 'three'];

// for (let i = 0; i < runAr.length; i++) {
//     document.write(runAr[i]);
//     document.write('<br>');
// }


// //Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let ranAr = [1, 'two', true, 4, 'five', false, 7, 'eight', 9, true];



// for (let i in ranAr){
// if  (typeof ranAr[i] === 'boolean') {
//     document.write(ranAr[i] + ' ' + '<br>');
//     }
// }


// //Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки строкові елементи

// for (let i in ranAr){
//     if (typeof ranAr[i] === 'string'){
//         document.write(ranAr[i] + ' ' + '<br>');
//     }
// }

// //Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (let i in ranAr){
//     if (typeof ranAr[i] === 'number'){
//         document.write(ranAr[i] + ' ' + '<br>')
//     }
// }

// //Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arRandom = [];

// arRandom[0] = 1;
// arRandom[1] = 'two';
// arRandom[2] = true;
// arRandom[3] = 4;
// arRandom[4] = 'five';
// arRandom[5] = false;
// arRandom[6] = 7;
// arRandom[7] = 'eight';
// arRandom[8] = 9;
// arRandom[9] = true;

// for (i = 0; i < arRandom.length; i++){
//     console.log(arRandom[i]);
// }

// //Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++){
//     console.log(i);
//     document.write(i);
// }
// //Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++){
//     console.log(i);
//     document.write(i);
// }

// //Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i = i + 2){
//     console.log(i);
//     document.write(i);
// }

// //Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let minute = 0; minute < 2; minute++){
//     for (let sec = 0; sec <60; sec++){
//         console.log('min-' + minute + 'sec-' + sec)
//     }
// }

// //Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hours = 0; hours < 2; hours++){
//     for (let minute = 0; minute <20; minute++){
//         for (let sec = 0; sec < 60; sec++){
//             console.log('hour-' + hours + ' ' + 'minute-' + minute + ' ' + 'sec-' + sec)
//         }
//     }
// }




// //Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let abc = [ 'a', 'b', 'c'] ;


// for ( let i = 0; i < abc.length; i++){
//     document.write(abc[i]);
// }
//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0;
// while (i < abc.length){
//     document.write(abc[i]);
//     i++
// }

//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// for (let elem of abc){
//     document.write(elem);
// }

// // Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.


// let arr = ['a', 'b', 'c'];

// for (let i = 0; i < 6; i++) {
//     arr.push(1, 2, 3);
// 	console.log(arr[i]);
// }


// //Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].


// let arr = [1, 2, 3];

// a = arr.reverse();

// console.log(arr);


// // Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr1 = [1, 2, 3];

// arr1.push(4, 5, 6);
// console.log(arr1);

// //  Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.


// let arr2 = [1, 2, 3];

// arr2.unshift(4, 5, 6);
// console.log(arr2);


// // Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()


// let arrjs = ['js', 'css', 'jq'];

// let shiftedEl = arrjs.shift();

// console.log(shiftedEl);


// //Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arrpop = ['js', 'css', 'jq'];

// let popedEl = arrpop.pop();

// console.log(popedEl);


// // Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].


// let arrSlice = [1, 2, 3, 4, 5];

// console.log(arrSlice.slice(3));

// //Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]


// let arrS = [1, 2, 3, 4, 5];

// console.log(arrS.slice(0,2));

// // Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let arrSl = [1, 2, 3, 4, 5];

// arrSl.splice(3, 0, 'a', 'b', 'c');

// console.log(arrSl);


// // Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let moreSplic = [1, 2, 3, 4, 5];

// moreSplic.splice(1, 0, 'a', 'b');
// moreSplic.splice(6, 0, 'c');
// moreSplic.splice(8, 0, 'e');

// console.log(moreSplic);


// // Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arrPar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 2; i <= 9; i++){
//     if (i % 2 == 0){
//         console.log(arrPar[i])
//     }
// }

// // Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let arrPush = [];

// for( let i = 0; i < arr.length; i++){
//     arrPush.push(arr[i]);
// }
// console.log(arrPush);


// //Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let arrCopy = [];

// for ( let i = 0; i < arr.length; i++) {
//     arrCopy[i]=arr[i];
// }

// console.log(arrCopy);

// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// //перебрати його циклом while

// let arrTen = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;

// while (i < arrTen.length){
//     console.log(arrTen[i]);
//     i++;
// }
// //перебрати його циклом for
// for ( i = 0; i < arrTen.length; i++){
//     console.log(arrTen[i]);
// }


// //перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arrTen.length; i++){
//     if (!(arrTen[i] % 2)){
//         console.log(arrTen[i]);
//     }
// }

// // замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arrTen.length; i++){
//     if (!(arrTen[i] % 3)){
//         arrTen[i] = 'okten';
        
//     }
// }

// console.log(arrTen);

// //вивести масив в зворотньому порядку.
// let reversed = arrTen.reverse();
// console.log(arrTen);





// // створити пустий масив та :
// //- заповнити його 50 парними числами за допомоги циклу.

// let clear = [];
// for(let i =0; i<100; i++){
//   if (i%2 === 0) {
//     clear.push(i);
//   }
// }
// console.log(clear);

// // - заповнити його 50 непарними числами за допомоги циклу.

// let clearT = [];
// for(let i =0; i<100; i++){
//   if (i%2 !== 0) {
//     clearT.push(i);
//   }         
// }
// console.log(clearT);

// // створити пустий масив та :используя Math.random заполнить массив из ???(сколько хотите) элементов.
 //диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

//let arr = [];
// for (let i =0; i<20; i++){
//   let rand = Math.round(Math.random(i));
//   arr.push(rand);
// }
// console.log(arr);


//let arr = [];
// for (let i =0; i<20; i++){
//   let rand = Math.floor(Math.random(i) * 732) + 8;
//   arr.push(rand);
// }
// console.log(arr);

// // вывести на консоль  каждый третий елемент
// for(let j=0; j<20;j++){
//   if((j+1)%3 === 0 && arr[j]%2 === 0) {
//     console.log(arr[j]);
//   }
// }
// // вывести на консоль  каждый третий елемент
// //но при условии что его значение является парным.
// let newArr = [];
// for(let j=0; j<20;j++){
//   if((j+1)%3 === 0 && arr[j]%2 === 0) {
//     newArr.push(arr[j]);
//     console.log(arr[j]);
//   }
// }
// console.log(newArr);
// //вывести на консоль  каждый третий елемент
// // но при условии что он имеет парное значение и
// // записать их в другой массив.
// for(let g = 0; g<20; g++) {
//   if(arr[g+1]%2===0) {
//     console.log(arr[g])
//   }
// }
// // Вывести каждый елемент массива у которого соседний с права элемент - парный
// // 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188]; 
// let sum = 0; 
// for (let i = 0; i < arr.length; i++) { 
//  sum += arr[i]; 
//  } 
//  console.log(sum / arr.length);

// // Вывести каждый елемент массива у которого соседний с права элемент - парный
// //  5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arr = [];
// let newArr = [];

// for (let i=0; i<3; i++) {
//   let rand = Math.round(Math.random(i)*10) + 1;
//   arr.push(rand);
//   arr[i]*=5;
//   newArr.push(arr[i]);
// }

//  console.log(newArr);
// // створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// // додати його в інший масив.

// let arr = ['max', 1, 2, 16, true, false, 'katya'];
// let newArr = [];
// for (let i = 0; i<arr.length; i++) {
//   if (typeof(arr[i]) === 'number') {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);









