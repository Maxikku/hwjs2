//_____________________line 2_____________________________

 let arrNum = [123, 123, 321];
 console.log(arrNum);

//_____________________line 3_____________________________

 let arrStr = ['max', 'name', 'car'];
 console.log(arrStr);

//_____________________line 4_____________________________

 let arrRan = [123, 'car', true];
 console.log(arrRan);

//_____________________line 5_____________________________

let ind = [];
ind[1] = 'car';
console.log(ind);


//_____________________line 7_____________________________

for (let i = 0; i < 10; i++) {
  document.write('<div>123</div>');
  document.write('<br>')
}


//_____________________line 8_____________________________

let divI = [];

console.log(divI.length);

for (let i = 0; i < 10; i++) {
  document.write(`<div> ${divI[i]} </div>`);
  document.write('<br>')
}


//_____________________line 9_____________________________

let i = 0
while (i < 20) {
    document.write(`<h1>qwe</h1>`);
    document.write('<br>');
    i++
}


//_____________________line 10_____________________________

while (i < 20) {
    document.write(`<h1> ${divI[i]}</h1`)
    document.write('<br>');
    i++
}

//_____________________line 11_____________________________

let numAr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 1];

for (let i = 0; i < numAr.length; i++){
    document.write(numAr[i]);
    document.write('<br>');
}


//_____________________line 12_____________________________

let strAr = ['one', 'two', 'two', 'one', 'one', 'two', 'tre', 'two', 'one', 'three'];

for (let i = 0; i < strAr.length; i++) {
    document.write(strAr[i]);
    document.write('<br>');
}


//_____________________line 13_____________________________

let runAr = ['one', 2, true, 'one', 5, false, 'tre', 'two', 'one', 'three'];

for (let i = 0; i < runAr.length; i++) {
    document.write(runAr[i]);
    document.write('<br>');
}


//_____________________line 14_____________________________

let ranAr = [1, 'two', true, 4, 'five', false, 7, 'eight', 9, true];



for (let i in ranAr){
if  (typeof ranAr[i] === 'boolean') {
    document.write(ranAr[i] + ' ' + '<br>');
    }
}


//_____________________line 15_____________________________

for (let i in ranAr){
    if (typeof ranAr[i] === 'string'){
        document.write(ranAr[i] + ' ' + '<br>');
    }
}

//_____________________line 16_____________________________

for (let i in ranAr){
    if (typeof ranAr[i] === 'number'){
        document.write(ranAr[i] + ' ' + '<br>')
    }
}

//_____________________line 17_____________________________

let arRandom = [];

arRandom[0] = 1;
arRandom[1] = 'two';
arRandom[2] = true;
arRandom[3] = 4;
arRandom[4] = 'five';
arRandom[5] = false;
arRandom[6] = 7;
arRandom[7] = 'eight';
arRandom[8] = 9;
arRandom[9] = true;

for (i = 0; i < arRandom.length; i++){
    document.write(arRandom[i] + ' ');
}

//_____________________line 18_____________________________

for (let i = 0; i < 10; i++){
    console.log(i);
    document.write(i);
}
//_____________________line 19_____________________________

for (let i = 0; i < 100; i++){
    console.log(i);
    document.write(i);
}

//_____________________line 20_____________________________

for (let i = 0; i < 100; i = i + 2){
    console.log(i);
    document.write(i);
}

//_____________________line 24_____________________________

for (let minute = 0; minute < 2; minute++){
    for (let sec = 0; sec <60; sec++){
        console.log('min-' + minute + 'sec-' + sec)
    }
}

//_____________________line 25_____________________________

for (let hours = 0; hours < 2; hours++){
    for (let minute = 0; minute <20; minute++){
        for (let sec = 0; sec < 60; sec++){
            console.log('hour-' + hours + ' ' + 'minute-' + minute + ' ' + 'sec-' + sec)
        }
    }
}




// _____________________dodatkovo 1/2/3   27/28/29_____________________________

let abc = [ 'a', 'b', 'c'] ;


for ( let i = 0; i < abc.length; i++){
    document.write(abc[i]);
}

let i = 0;
while (i < abc.length){
    document.write(abc[i]);
    i++
}

for (let elem of abc){
    document.write(elem);
}

// _____________________line 37_____________________________


let arr = ['a', 'b', 'c'];

for (let i = 0; i < 6; i++) {
    arr.push(1, 2, 3);
	console.log(arr[i]);
}


// _____________________line 38_____________________________


let arr = [1, 2, 3];

a = arr.reverse();

console.log(arr);


// _____________________line 39_____________________________

let arr1 = [1, 2, 3];

arr1.push(4, 5, 6);
console.log(arr1);

// _____________________line 40_____________________________


let arr2 = [1, 2, 3];

arr2.unshift(4, 5, 6);
console.log(arr2);

// _____________________line 41_____________________________


let arrjs = ['js', 'css', 'jq'];

let shiftedEl = arrjs.shift();

console.log(shiftedEl);

// _____________________line 42_____________________________



let arrpop = ['js', 'css', 'jq'];

let popedEl = arrpop.pop();

console.log(popedEl);


// _____________________line 43_____________________________


let arrSlice = [1, 2, 3, 4, 5];

console.log(arrSlice.slice(3));

// _____________________line 44_____________________________


let arrS = [1, 2, 3, 4, 5];

console.log(arrS.slice(0,2));

// _____________________line 45_____________________________

let arrSl = [1, 2, 3, 4, 5];

arrSl.splice(3, 0, 'a', 'b', 'c');

console.log(arrSl);


// _____________________line 46_____________________________

let moreSplic = [1, 2, 3, 4, 5];

moreSplic.splice(1, 0, 'a', 'b');
moreSplic.splice(6, 0, 'c');
moreSplic.splice(8, 0, 'e');

console.log(moreSplic);


// _____________________line 48_____________________________

let arrPar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 2; i <= 9; i++){
    if (i % 2 == 0){
        console.log(arrPar[i])
    }
}

// _____________________line 49_____________________________

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrPush = [];

for( let i = 0; i < arr.length; i++){
    arrPush.push(arr[i]);
}
console.log(arrPush);


// _____________________line 50_____________________________

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrCopy = [];

for ( let i = 0; i < arr.length; i++) {
    arrCopy[i]=arr[i];
}

console.log(arrCopy);

// _____________________line 55_____________________________

let arrTen = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;

while (i < arrTen.length){
    console.log(arrTen[i]);
    i++;
}

for ( i = 0; i < arrTen.length; i++){
    console.log(arrTen[i]);
}


while (i < arrTen.length){
    console.log(arrTen[i])
    i= i + 2;
}

for (let i = 0; i < arrTen.length; i++){
    if (!(arrTen[i] % 2)){
        console.log(arrTen[i]);
    }
}

// _____________________line 62_____________________________

for (let i = 0; i < arrTen.length; i++){
    if (!(arrTen[i] % 3)){
        arrTen[i] = 'okten';
        
    }
}

console.log(arrTen);

let reversed = arrTen.reverse();
console.log(arrTen);





// _____________________line 67_____________________________


let clear = [];
for(let i =0; i<100; i++){
  if (i%2 === 0) {
    clear.push(i);
  }
}
console.log(clear);

// _____________________line 68_____________________________

let clearT = [];
for(let i =0; i<100; i++){
  if (i%2 !== 0) {
    clearT.push(i);
  }         
}
console.log(clearT);

// _____________________line 75+_____________________________


let arr = [];
for (let i =0; i<20; i++){
  let rand = Math.round(Math.random(i));
  arr.push(rand);
}
console.log(arr);


let arr = [];
for (let i =0; i<20; i++){
  let rand = Math.floor(Math.random(i) * 732) + 8;
  arr.push(rand);
}
console.log(arr);

for(let j=0; j<20;j++){
  if((j+1)%3 === 0 && arr[j]%2 === 0) {
    console.log(arr[j]);
  }
}

let newArr = [];
for(let j=0; j<20;j++){
  if((j+1)%3 === 0 && arr[j]%2 === 0) {
    newArr.push(arr[j]);
    console.log(arr[j]);
  }
}
console.log(newArr);

for(let g = 0; g<20; g++) {
  if(arr[g+1]%2===0) {
    console.log(arr[g])
  }
}

let arr = [100,250,50,168,120,345,188];
let check = 0;

for ( n of arr) {
  check += n;
}
check=arr.length;
console.log(check);

let arr = [];
let newArr = [];

for (let i=0; i<3; i++) {
  let rand = Math.round(Math.random(i)*10) + 1;
  arr.push(rand);
  arr[i]*=5;
  newArr.push(arr[i]);
}

 console.log(newArr);

let arr = ['max', 1, 2, 16, true, false, 'katya'];
let newArr = [];
for (let i = 0; i<arr.length; i++) {
  if (typeof(arr[i]) === 'number') {
    newArr.push(arr[i]);
  }
}
console.log(newArr);









