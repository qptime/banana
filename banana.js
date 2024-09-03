// ==UserScript==
// @name         自动点击脚本
// @namespace    https://github.com/qptime/banana/
// @version      1.0
// @description  自动点击指定元素
// @author       qptime
// @match        https://banana.carv.io/*
// @noframes
// @icon         https://pbs.twimg.com/profile_images/1815713398979690496/nj0Z0Jns_400x400.jpg
// @downloadURL  https://raw.githubusercontent.com/qptime/banana/main/banana.js
// @updateURL    https://raw.githubusercontent.com/qptime/banana/main/banana.js
// @homepage     https://github.com/qptime
// ==/UserScript==

// 您的脚本内容...

(function() {
    'use strict';

    // 自动点击的时间间隔（以毫秒为单位）
    const interval = 1000; // 每秒点击一次

    // 要点击的元素选择器
    const selector = '.progress-container'; // 替换成你需要点击的元素的CSS选择器

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
