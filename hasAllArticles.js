"use strict";

/**
 * проверка, что комбинация контейнеров содержит все артикулы
 * @param {{[key: string]: string[]}} units исходные данные из data.js
 * @param {string[]} combination комбинация контейнеров
 * @param {string[]} allArticles все артикулы (уникальный набор из data.js)
 * @returns {boolean}
 */
function hasAllArticles(units, combination, allArticles) {
    let existsArticles = {};

    for (let unit of combination) {
        let articles = units[ unit ];

        for (let article of articles) {
            existsArticles[ article ] = true;
        }
    }

    existsArticles = Object.keys( existsArticles );
    return existsArticles.length >= allArticles.length;
}

module.exports = hasAllArticles;