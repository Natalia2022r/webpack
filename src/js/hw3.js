"use strict";
// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
const getRandomArray = (length, min, max) => {
const randomArray = [];
if (min > max){
    return `Введіть правільні значення`;
}
for (let i = 0; i < length; i++){
randomArray.push(Math.floor(Math.random() * (max - min + 1) + min));
} 
return randomArray;
}    

console.log('getRandomArray(10, 3, 100)=> ', getRandomArray(10, 3, 100));