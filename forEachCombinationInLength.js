"use strict";

/**
 * Перебор всех комбинаций контейнеров заданной длины
 * @param {number} k необходимая длина комбинации
 * @param {string[]} unitsArr список всех контейнеров
 * @param {function} iteration callback(combination, stop: func) вызывается на каждую комбинацию
 * @param {number} index приватный параметр
 * @param {number[]} selections приватный параметр
 */
function forEachCombinationInLength(k, unitsArr, iteration, index = 0, combination = []) {

    if ( index === k ) {
        let readyCombination = [];

        for (let i = 0, n = combination.length; i < n; i++) {
            let symbolIndex = combination[i];
            let unit = unitsArr[symbolIndex];
            readyCombination.push( unit );
        }

        let stop = false;
        iteration(readyCombination, () => {
            stop = true;
        });

        return stop;
    }

    let start = 0;
    if ( index > 0 ) {
        start = combination[ index - 1 ] + 1;
    }

    for (let i = start, n = unitsArr.length; i < n; i++) {
        combination[index] = i;
        
        let stop = forEachCombinationInLength(k, unitsArr, iteration, index + 1, combination);
        if ( stop ) {
            return stop;
        }
    }
}

module.exports = forEachCombinationInLength;