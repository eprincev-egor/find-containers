"use strict";

/**
 * Поиск комбинации контейнеров, которая содержит все артикулы:  
 * Берем контейнер с самым большим числом артикулов 
 * и подбираем к нему другой контейнер с чуть меньшим кол-вом артикулов 
 * (за исключением тех артикулов, что есть в первом контейнере)
 * затем подбираем 3й контейнер схожим образом
 * @param {{[key: string]: string[]}} units исходные данные из data.js
 * @param {string[]} allArticles все артикулы (уникальный набор из data.js)
 * @returns {string[]}
 */
function findSimpleCombination(units, allArticles) {
    let {unit: maxUnit, articles} = getMaxUnit(units);
    let combination = [maxUnit];
    
    if ( articles.length >= allArticles ) {
        return combination;
    }

    while ( articles.length < allArticles.length ) {
        let result = getMaxUnit(units, articles);
        let nextUnit = result.unit;
        let nextArticles = result.articles;
        
        combination.push( nextUnit );

        articles = articles.concat(nextArticles);
    }

    return combination;
}

/**
 * Подбор контейнера с самым большим числом артикулов, 
 * исключая из него некоторый набор артикулов
 * @param {{[key: string]: string[]}} units исходные данные из data.js
 * @param {string[]} excludeArticles набор артикулов, которые надо выкинуть
 * @returns {{unit: string, articles: string[]}}
 */
function getMaxUnit(units, excludeArticles = []) {
    let maxLength = null;
    let maxUnit;
    let maxUnitArticles;

    for (let unit in units) {
        let articles = units[ unit ];

        articles = articles.filter(article => 
            !excludeArticles.includes(article)
        );

        if ( maxLength === null ) {
            maxLength = articles.length;
            maxUnit = unit;
            maxUnitArticles = articles;
        }
        else {
            if ( articles.length > maxLength ) {
                maxLength = articles.length;
                maxUnit = unit;
                maxUnitArticles = articles;
            }
        }
    }

    return {
        unit: maxUnit,
        articles: maxUnitArticles
    };
}

module.exports = findSimpleCombination;