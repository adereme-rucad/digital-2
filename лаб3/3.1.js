'use strict';
const student = {
    "name": "Петров",
    "lastName": "Петр",
    "marks": [        
    {"subject": "Математика", "mark": "2"},
    {"subject": "Русский_язык", "mark": "5"},
    {"subject": "Литература", "mark": "4"},   
    {"subject": "История", "mark": "3"}, 
    ]   
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
