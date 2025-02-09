let arr1 = [80, 40, 60, 2, 15];
function abzac(){
    console.log('========')
}
//1
function sum_do_min(arr) {
    let minindex = arr.indexOf(Math.min(...arr));
    let result = 0;
    for (let i = 0; i < minindex; i++) {
        result += arr[i];
    }
    console.log('Индекс минимального элемента: ' + minindex);
    console.log('Сумма чисел, расположенных до минимального элемента: ' + result);
}

sum_do_min(arr1);

abzac()

//4
function proizved_between(arr) {
    let index_min = arr.indexOf(Math.min(...arr));
    let index_max = arr.indexOf(Math.max(...arr));
    let proizved = 1;
    if (index_min > index_max) {
        [index_min, index_max] = [index_max, index_min];
    }
    for ( let i = index_min + 1 ; i < index_max; i++){
        proizved *= arr[i];
    }
    console.log('Произведение ' + proizved );
}
let arr2 = [3, 5, 4, 15, 7, 10]; 
let arr3 = [10, 7, 15, 4 , 10, 3]
proizved_between(arr2);
proizved_between(arr3);

abzac()

