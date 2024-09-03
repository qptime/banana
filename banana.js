// ==UserScript==
// @name         banana自动点击脚本
// @namespace    https://github.com/qptime/banana/
// @version      1.1
// @description  banana自动点击脚本
// @author       qptime
// @match        https://banana.carv.io/*
// @icon         https://pbs.twimg.com/profile_images/1815713398979690496/nj0Z0Jns_400x400.jpg
// @downloadURL  https://raw.githubusercontent.com/qptime/banana/main/banana.js
// @updateURL    https://raw.githubusercontent.com/qptime/banana/main/banana.js
// @homepage     https://github.com/qptime
// ==/UserScript==

(function() {
    'use strict';

    // 自动点击的时间间隔（以毫秒为单位）
    const interval = 100; // 每秒点击10次

    // 要点击的元素选择器
    const selector = '.progress-container'; // 替换成你需要点击的元素的CSS选择器

    // 点击次数计数器
    let clickCount = 0;
    // 最大点击次数
    const maxClicks = 1000;

    // 定义一个函数来模拟点击事件
    function simulateClick(element) {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
        console.log('Element clicked via simulateClick!');
    }

    // 定义自动点击函数
    function autoClick() {
        if (clickCount >= maxClicks) {
            clearInterval(clickInterval);
            console.log(`Reached the maximum of ${maxClicks} clicks.`);
            return;
        }

        const element = document.querySelector(selector);
        if (element && typeof element.click === 'function') {
            element.click();
            console.log('Element clicked!');
        } else if (element) {
            simulateClick(element);
        } else {
            console.log('Element not found for selector:', selector);
        }

        clickCount++;
        console.log(`Click count: ${clickCount}`);
    }

    // 设置定时器，按指定的时间间隔自动点击
    const clickInterval = setInterval(autoClick, interval);

    // 如果你想在某个时间停止自动点击，可以调用 clearInterval 并传入 clickInterval
    // clearInterval(clickInterval);

})();
