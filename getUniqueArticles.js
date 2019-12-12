"use strict";

/**
 * получаем список всех артикулов
 * @param {{{[key: string]: string[]}}} units исходные данные из data.js
 * @returns {string[]}
 */
function getUniqueArticles(units) {
    let allArticles = {};

    for (let unit in units) {
        let articles = units[ unit ];
        
        for (let article of articles) {
            allArticles[ article ] = true;
        }
    }

    return Object.keys(allArticles);
}

module.exports = getUniqueArticles;