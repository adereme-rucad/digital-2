// Задание 2. Объявите функцию, которая принимает на вход целые числа. Для
// чётных значений функция возвращает стрелочное выражение
// возведения числа в квадрат, а для нечётных – стрелочное выражение
// возведения в куб.

function task2(n) {
    if (n % 2 === 0) {
        console.log('Число четное, функция возводит в квадрат');
        return (x) => x ** 2;
    }
    else {
        console.log('Число нечетное, функция возводит в куб');
        return (x) => x ** 3;
    }
}


let n = parseInt(prompt('Введите число'));

const proverka = task2(n);
console.log(`Результат: ${proverka(n)}`)