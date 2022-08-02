"use strict";

export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

// 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

export function getMyTaxes(salary){return  Number((this.tax * +salary).toFixed(2)) };

console.log(`getMyTaxes.call(ukraine, 3000)` ,getMyTaxes.call(ukraine, 3000));
