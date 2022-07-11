"use strict"

//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = (n, m) => {
    return Math.floor(Math.random() * (m - n + 1)) + n;
};

console.log (`Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.`, getRandomNumber(5, 25))