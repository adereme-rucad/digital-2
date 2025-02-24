//1
function findCommonElements(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    
 const commonElements = [];

 for (const element of set1) {
     if (set2.has(element)) {
         commonElements.push(element);
     }
 }

 console.log(commonElements);
 
 return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const resultat = findCommonElements(array1, array2);
console.log(resultat);

//2 
function schetchik(array) {
    const schetchikMap = new Map();

    for (const element of array) {
        if (schetchikMap.has(element)) {
            schetchikMap.set(element, schetchikMap.get(element) + 1);
        } else {
            schetchikMap.set(element, 1);
        }
    }
    return schetchikMap;
}

const array = [2, 3, 2, 4, 3, 3];

const result = schetchik(array);
result.forEach((count, element) => {
    console.log(`Элемент "${element}" встречается ${count} раз(а).`);
});

//3 