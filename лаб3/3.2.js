class Mark {
    constructor(subject) {
        this.subject = subject;
        this.marks = []; 
    }
    addmark(mark) {
        this.marks.push(mark);
    }
}
class Student {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.marksList = [];
    } 
    privet() {
        console.log('Привет, я - ' + this.name + ' ' + this.lastName);
    }
    
    addMark(mark) {
        this.marksList.push(mark);
    }
}

const student1 = new Student('Иван', 'Иванов');

const mathMark = new Mark('Математика'); 
mathMark.addmark(4); 
student1.addMark(mathMark);

const rusMark = new Mark ('Русский язык');
rusMark.addmark(3);
student1.addMark(rusMark);


console.log(student1);
student1.privet();