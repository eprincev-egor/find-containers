"use strict";

const hasAllArticles = require("./hasAllArticles");
const forEachCombinationInLength = require("./forEachCombinationInLength");

/**
 * Поиск минимальной комбинации контейнеров
 * отталкиваемся от известной комбинации контейнеров, полученной простым путем,
 * и пытаемся найти комбинацию поменьше, перебирая все возможные
 * @param {{[key: string]: string[]}} units 
 * @param {string[]} simpleCombination 
 * @param {string[]} allArticles 
 * @returns {string[]}
 */
function findMinCombination(units, allArticles, simpleCombination) {
    let unitsArr = Object.keys(units);
    let start = simpleCombination.length - 1;
    
    let minCombination = null;
    for (let i = start; i > 0; i--) {
        let combination = findFirstCombinationInLength(units, unitsArr, allArticles, i);
        
        if ( !combination ) {
            break;
        }

        minCombination = combination;
    }

    if ( !minCombination ) {
        minCombination = simpleCombination;
    }

    return minCombination;
}

/**
 * Ищем первую комбинацию контейнеров заданной длины, которая содержит все артикулы
 * @param {{[key: string]: string[]}} units 
 * @param {string[]} unitsArr 
 * @param {string[]} allArticles 
 * @param {number} length 
 * @returns {string[]}
 */
function findFirstCombinationInLength(units, unitsArr, allArticles, length) {
    let outCombination = null;

    forEachCombinationInLength(length, unitsArr, (combination, stop) => {
        if ( hasAllArticles(units, combination, allArticles) ) {
            outCombination = combination;
            stop();
        }
    });

    return outCombination;
}

module.exports = findMinCombination;