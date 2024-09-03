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
```

如果您的脚本确实是为了在iframe中运行的，那么现有的设置可能已经是正确的。但如果您的意图是让脚本在主页面执行，那么您需要确保元数据块正确配置，而不是专门针对iframe。

如果您已经确认了元数据块是正确的，但脚本仍然显示为“仅在frame中执行”，那么可能是脚本的某些逻辑导致它只在iframe中运行。此时，您可能需要检查脚本的代码，确保它不是专门查询或操作iframe中的元素。

如果您需要更具体的帮助，请提供更多关于您的脚本的信息，包括元数据块和任何相关的代码片段。这样我可以提供更精确的指导。
// ==/UserScript==

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
