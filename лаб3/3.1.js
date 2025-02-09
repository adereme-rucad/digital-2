'use strict';
const student = {
    name: "Петров",
    lastName: "Петр",
    marks: {
        "Математика": [1, 2, 3, 4],   
        "Физика": [5, 6,7, 8],       
        "Химия": [9, 10, 11, 12],        
        "История": [13, 14, 15, 16]       
    }
};
console.log(student);
function proverka(student) {
    console.log('Моё имя ' + student.name);
    console.log('Моя фамилия ' + student.lastName);
    console.log('Оценки:')
    for (const property in student.marks) {
    console.log(property + ": " + student.marks[property].join(', '));
}
}
proverka(student)
