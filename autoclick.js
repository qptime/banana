// ==UserScript==
// @name         banana auto click
// @namespace    https://github.com/qptime/
// @version      1.0
// @description  banana auto click
// @author       qptime
// @match        https://bananagame.xyz/*
// @grant        none
// @downloadURL  https://github.com/qptime/banana/autoclick.js
// @updateURL    https://github.com/qptime/banana/autoclick.js
// ==/UserScript==

(function() {
    'use strict';

    // 自动点击的时间间隔（以毫秒为单位）
    const interval = 100; // 每秒点击10次

    // 要点击的元素选择器
    const selector = 'container-inner'; // 替换成你需要点击的元素的CSS选择器

    // 定义自动点击函数
    function autoClick() {
        const element = document.querySelector(selector);
        if (element) {
            element.click();
            console.log('Element clicked!');
        } 
    }

    // 设置定时器，按指定的时间间隔自动点击
    const clickInterval = setInterval(autoClick, interval);

    // 如果你想在某个时间停止自动点击，可以调用 clearInterval 并传入 clickInterval
    // clearInterval(clickInterval);

})();
