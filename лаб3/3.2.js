class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark; 
    }
    addmark(mark) {
        this.mark.push(mark);
    }
}
class Student {
    constructor(name, lastName, marks) {
        this.name = name;
        this.lastName = lastName;
        this.marks = marks;
    } 
    privet() {
        console.log('Привет, я - ' + this.name + ' ' + this.lastName);
    }
    
    addMark(mark) {
        this.marks.push(mark);
    }
}

const mark1 = new Mark('Математика', 5);
const mark2 = new Mark ('Русский язык', 4);
let Ivanmarks = [mark1, mark2];

const studentIvan = new Student("Иван", "Иванов", Ivanmarks );

let mark3 = new Mark ('История', 3);
studentIvan.addMark(mark3);

console.log(studentIvan);
studentIvan.privet();