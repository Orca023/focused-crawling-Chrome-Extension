'use strict'
// 打開後臺頁面 background.html 的脚本 starter-backgroundHtml.js ;

// https://stackoverflow.com/questions/30856001/why-does-chrome-tabs-create-create-2-tabs
// https://www.656463.com/wenda/wsmchrometabscreatehcj2gbq_341
// 之所以脚本 starter-backgroundHtml.js 加載後臺頁面 background.html，是因爲，當在配置文檔 manifest.json 中直接加載後臺頁面 background.html 時，如果顯示後臺頁面的話，會有兩個後臺頁面在運行；現在改爲在配置文檔 manifest.json 中不直接加載後臺頁面 background.html，而是加載後臺頁面 background.html 的 JavaScript 啓動脚本 starter_backgroundHtml.js，然後，在 JavaScript 啓動脚本 starter_backgroundHtml.js 中通過代碼加載後臺頁面 background.html，即可解決上述的同時運行兩個後臺頁面的問題;
// The issue is that there are 2 "background" pages running.
// The official background page specified in the manifest file.
// The tab created by " chrome.tabs.create({'url': chrome.extension.getURL('background.html')}). ";
// This means there are 2 message listeners, which is why 2 tabs are opening.
// The console messages from the official manifest.json background can be found by looking at extension on the chrome extensions page and click on the "Inspect views: background.html". Which shows:
// Creating secondary tab
// To work around this issue. The manifest.json background file can point to a script "starter.js" instead of an html page, which simply has the following javascript:
// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.create({'url': chrome.extension.getURL('background.html')});
// });

let background_ID = "";

// Manifest V3 的 API，監聽後臺頁面（starter-backgroundHtml.js）的點擊動作;
chrome.action.onClicked.addListener(
    function (tabPage) {
        chrome.tabs.query(
            {
                // url: '*/background/background.html'
                title: "網頁操作自動化工具(background.html 頁面)"
            },
            function(tabsPage) {
                if (tabsPage === null || tabsPage.length <= 0) {
                    // window.open(chrome.runtime.getURL('./background/background.html'), "background");
                    chrome.tabs.create(
                        {
                            // windowId: 1,
                            selected: true,
                            "url": chrome.runtime.getURL("./background/background.html")
                        },
                        (tabPage) => {
                            // console.log(tabPage.id);
                            // alert(tabPage.id);
                            background_ID = tabPage.id;
                        }
                    );
                } else {
                    // background_ID = tabsPage[0].id;
                    // background_ID = tabsPage[0].windowId;
                    chrome.tabs.update(
                        tabsPage[0].id,
                        {
                            // url: tabsPage[0].url,
                            selected: true
                        }
                    );
                };
            }
        );
    }
);
// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.onClicked.addRules([{
//         conditions: [
//             new chrome.declarativeContent.UserClickedBrowserAction()
//         ],
//         actions: [
//             new chrome.declarativeContent.ShowPageAction()
//         ]
//     }]);
// });



// // 監聽後臺頁面（starter-backgroundHtml.js）的點擊動作 API 接口：chrome.browserAction.onClicked.addListener() 是 Manifest V2 獨有的 API;
// chrome.browserAction.onClicked.addListener(
//     function (tabPage) {
//         chrome.tabs.create(
//             {
//                 // windowId: 1,
//                 "url": chrome.extension.getURL("background/background.html")
//             }
//         );
//     }
// );


// // 使用計時器 setTimeout 定時任務的方法，使後臺 service worker 進程不退出，始終保持活躍狀態;
// // 自定義的後臺任務函數;
// function backgroundTask() {
//     // 執行自定義的任務 ... ;
    
//     // 計時器再次調度任務;
//     scheduler();
// }
   
// // 調度下一次的任務;
// function scheduler() {
//     const delay = 10 * 60 * 1000; // 10分钟
//     setTimeout(backgroundTask, delay);
// }
   
// // 初始化定時任務;
// scheduler();
   
// // 監聽 runtime 消息，關閉計時器 setTimeout 的定時任務;
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'stopBackgroundTask') {
//       // 中止計時器 setTimeout 的下一次調度任務;
//       chrome.runtime.onMessage.removeListener(backgroundTask);
//     }
// });


// // 使用 clients.claim() 方法，使後臺 service worker 進程不退出，始終保持活躍狀態;
// self.addEventListener('install', function(event) {
//     event.waitUntil(self.skipWaiting());
// });
   
// self.addEventListener('activate', function(event) {
//     event.waitUntil(self.clients.claim());
// });
