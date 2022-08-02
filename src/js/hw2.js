 "use strict";

export  const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

console.log(`1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.`)

  const girls = students.filter((elem) => {
    return elem.lastIndexOf('а') === elem.length - 1;    
});
// console.log (girls);
const boys = students.filter((elem) => {
    return elem.lastIndexOf('а') !== elem.length - 1;
});
// console.log (boys);
export const allStudents = (students) => {
return boys.map((boys, i) => [boys, girls[i]]);
}

