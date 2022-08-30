/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/
function countLetter(letter, array) {
    let idx = letter.toLowerCase().charCodeAt(0)
    if (array[idx] === undefined) {
        array[idx] = 0;
    } else {
        array[idx]++;
    }

}

function anagram(str1, str2) {
    if (str1.length === str2.length) {
        if (str1.toLowerCase() === str2.toLowerCase()) {
            return false;
        }

        const arr1 = [];
        const arr2 = [];

        str1.split('').forEach(element => countLetter(element, arr1));
        str2.split('').forEach(element => countLetter(element, arr2));

        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true
    }

    return false;
    // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('up', 'UP')); // true
console.log(anagram('hello', 'bye')); // false