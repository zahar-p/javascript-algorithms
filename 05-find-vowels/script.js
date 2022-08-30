/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

const arr =  ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
function findVowels(str) {
    // Напишите код здесь
    let cnt = 0;
    const tmp = str.toLowerCase();
    arr.forEach(element => {
        let pos = -1;
        while( true ) {
            pos = tmp.indexOf(element, pos + 1)
            if( pos >= 0) {
                cnt++;
            } else {
                break;
            } 
        }
    });
    return cnt;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3