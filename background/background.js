'use strict'
// 後臺頁面脚本 background.js ;
// http://www.kkh86.com/it/chrome-extension-doc/apps/api_index.html


// // 監聽 Chrome 擴展加載安裝成功事件;
// chrome.runtime.onInstalled.addListener(() => {
//     // .clear() 方法為清空數據庫;
//     chrome.storage.sync.clear(() => {
//         console.log('數據庫已被清空.');
//     });
//     // 寫入瀏覽器數據庫，chrome.storage.sync.set() 方法為寫入雲存儲，可使用 google 賬號在不同機器閒同步；chrome.storage.local.set() 方法為寫入本地存儲，不能同步;
//     chrome.storage.sync.set({"color": '#3aa757'}, () => {
//         // 從數據庫讀出數據 now you can read the storage;
//         chrome.storage.sync.get(["color"], (result) => {
//             console.log('Default background color set to %cgreen', `color: ${result["color"]}.`);
//         });
//         // .getBytesInUse() 方法為獲取一個數據或多個數據所占用的縂空間，返回值的單位為字節(byte);
//         chrome.storage.sync.getBytesInUse(["color"], (result) => {
//             console.log(`數據 "color" 占用空間為: ${result["color"]} 字節(byte).`);
//         });
//         // .remove() 方法為刪除指定數據;
//         chrome.storage.sync.remove(["color"], () => {
//             console.log('`數據庫中的 "color" 元素鍵值對已被刪除.');
//         });
//     });
//     // onChanged() 事件，表示當存儲區的數據發生改變時，這個事件會被觸發，回調函數 callback() 會接收兩個參數，第一個為 changes，第二個為 StorageArea。第一個參數 changes 是詞典對象，鍵(key)為更改的屬性名稱，值(value)包含兩個屬性，分別爲 oldValue 和 newValue；第二個參數 StorageArea 為 local 或 sync;
//     chrome.storage.onchanged.addListener((changes, areaName) => {
//         console.log(`存儲區 ${areaName} 已被更改，發生變動的數據為:`);
//         console.log(changes);
//     });
// });

// // web 請求監聽，最後一個參數 ["blocking"] 表示阻塞式，需要在配置文檔 manifest.json 中 "permissions" 條目下聲明申請權限 "webRequestBlocking";
// chrome.webRequest.onBeforeRequest.addListener(
//     (details) => {
//         // cancel 表示取消本次請求;
//         if (!showImage && details.type === 'image') return {cancel: true};
//         // 示例：簡單的網頁中音、視頻檢測；因爲大部分網站視頻的類型不是 media 類型的（details.type !== 'image'），且視頻做了防止下載處理，所以，這裏僅僅是爲了演示效果，實際意義不大;
//         if(details.type === 'media') {
//             chrome.notifications.create(null, {
//                 type: 'basic',
//                 iconUrl: 'img/icon.png',
//                 title: '檢測到網頁中包含音、視頻',
//                 message: '音、視頻地址(url): ' + details.url,
//             });
//         };
//     },
//     {
//         urls:["<all_urls>"]
//     },
//     ["blocking"]
// );

// 顯示桌面通知;
// chrome.notifications.create(
//     null,
//     {
//         type: 'image',
//         iconUrl: 'img/icon.png',
//         title: '祝福',
//         message: '祝福您.',
//         imageUrl: 'img/sds.png'
//     }
// );

// 圖章(badge)演示;
// (function() {
//     var showBadge = false;
//     let menuId = chrome.contextMenus.create({
//         title: '顯示圖標上的显示图标上的圖章(badge)',
//         type: 'checkbox',
//         checked: false,
//         onclick: function() {
//             if (!showBadge) {
//                 chrome.browserAction.setBadgeText({text: 'New'});
//                 chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
//                 chrome.contextMenus.update(menuId, {title: '隱藏圖標上的圖章(badge)', checked: true});
//             } else {
//                 chrome.browserAction.setBadgeText({text: ''});
//                 chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 0]});
//                 chrome.contextMenus.update(menuId, {title: '顯示圖標上的圖章(badge)', checked: false});
//             }
//             showBadge = !showBadge;
//         }
//     });
// })();

// // 鼠標右鍵菜單演示;
// chrome.contextMenus.create({
// 	type: 'normal',  // 類型，預設值為：'normal'，可選：["normal", "checkbox", "radio", "separator"];
//     title: '測試鼠標右鍵菜單',
//     contexts: ['page'],  // 上下文環境，預設值為：'page'，可選：["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"];
//     onclick: function() {
//         chrome.notifications.create(null, {
//             type: 'basic',
//             iconUrl: './image/icon.png',
//             title: '這是標題',
//             message: '您剛才點擊了自定義右鍵菜單！'
//         });
//     },
// 	documentUrlPatterns: 'https://*.baidu.com/*',  // 只在某些頁面顯示此右鍵菜單;
//     parentId: 1  // 右鍵菜單項的父菜單 ID 號，指定父菜單項，會使此菜單項成爲父菜單項的子菜單;
// });
// chrome.contextMenus.create({
//     title: '使用百度搜索：%s', // %s 表示選中的文字;
//     contexts: ['selection'], // 只有當選中文字時才會出現此右鍵菜單;
//     onclick: function(params) {
//         // 注意，不能使用 location.href，因爲 location 是屬於 background 的 window 對象;
//         chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
//     }
// });
// // 刪除某一個自定義右鍵菜單項;
// chrome.contextMenus.remove(menuItemId);
// // 刪除所有自定義右鍵菜單;
// chrome.contextMenus.removeAll();
// // 更新某一個自定義的右鍵菜單項;
// chrome.contextMenus.update(menuItemId, updateProperties);

// 跨域測試;
// window.document.getElementById("invoke_popup").addEventListener("click", async (e) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://www.baidu.com', true);
//     // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  // 設置請求頭，注意：當使用 post 方式發送請求時，必須設置請求頭（在建立鏈接後設置請求頭）;
//     xhr.send();
//     // 獲取數據後的處理程序;
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             // let json = xhr.responseText;  // 獲取到的 JSON 字符串;
//             // console.log(json);
//             let html_Text = xhr.responseText;
//             console.log(html_Text);
//             alert('跨域調用成功！');
//         };
//     };
// });


window.document.getElementById("invoke_injectedScript").addEventListener("click", async () => {
    // 查詢所有選項卡;
    chrome.tabs.query(
        {},
        (tabs) => {
            for (let i=0; i < tabs.length; i++) {
                if (tabs[i].url === 'https://www.baidu.com/') {
                    content_script_tab_id = tabs[i].id;// 向 content-script 標籤頁進程發送消息;
                    chrome.tabs.sendMessage(
                        content_script_tab_id,  // 到達標籤頁的 .id 號碼;
                        {
                            "message": 'invoke_injectedScript_test()',
                            "url": 'background/background.html',  // String(chrome.runtime.getURL('background/background.html'));
                            "data": String(window.document.getElementById("invoke_injectedScript").outerHTML)
                        },  // 發送的具體數據，可以是 JSON 對象;
                        (response_Data) => {}
                    );
                };
            };
        }
    );
});

window.document.getElementById("invoke_popup").addEventListener("click", async () => {
    let views = chrome.extension.getViews({type:'popup'});
    if (views.length > 0) {
        alert('彈出窗口頁面（popup.html）中 body 的代碼:\n' + views[0].document.body.innerHTML);
        // alert(views[0].document.title);
        // alert(views[0].location.href);  // 返回頁面 href (URL);
    } else {
        alert('popup.html 頁面未打開！');
    };
});

// 預留一個方法給 popup.html 頁面調用;
function test(element) {
    alert('您單擊了元素:\n' + element.outerHTML);
};

// 鼠標右鍵菜單演示;
// chrome.contextMenus.create({
//     title: "測試鼠標右鍵菜單",
//     onclick: function(){
//         chrome.notifications.create(null, {
//             type: 'basic',
//             iconUrl: './image/icon.png',
//             title: '這是標題',
//             message: '您剛才點擊了自定義右鍵菜單！'
//         });
//     }
// });

let test_file_path = chrome.runtime.getURL("CrawlerStrategyServer/test/test.html");
let test_http_url = "http://localhost:9001/CrawlerStrategyServer/test/test.html";

let CFDA_file_path = chrome.runtime.getURL("CrawlerStrategyServer/CFDA/CFDA.html");
let CFDA_http_url = "http://localhost:9001/CrawlerStrategyServer/CFDA/CFDA.html";

let WUXIPEOPLEsHOSPITAL_file_path = chrome.runtime.getURL("CrawlerStrategyServer/WUXIPEOPLEsHOSPITAL/WUXIPEOPLEsHOSPITAL.html");
let WUXIPEOPLEsHOSPITAL_http_url = "http://localhost:9001/CrawlerStrategyServer/WUXIPEOPLEsHOSPITAL/WUXIPEOPLEsHOSPITAL.html";

let TFDA_file_path = chrome.runtime.getURL("CrawlerStrategyServer/TFDA/TFDA.html");
let TFDA_http_url = "http://localhost:9001/CrawlerStrategyServer/TFDA/TFDA.html";
let HKHA_file_path = chrome.runtime.getURL("CrawlerStrategyServer/HKHA/HKHA.html");
let HKHA_http_url = "http://localhost:9001/CrawlerStrategyServer/HKHA/HKHA.html";
let CFDAshanghai_file_path = chrome.runtime.getURL("CrawlerStrategyServer/CFDAshanghai/CFDAshanghai.html");
let CFDAshanghai_http_url = "http://localhost:9001/CrawlerStrategyServer/CFDAshanghai/CFDAshanghai.html";
let CFDAguangdong_file_path = chrome.runtime.getURL("CrawlerStrategyServer/CFDAguangdong/CFDAguangdong.html");
let CFDAguangdong_http_url = "http://localhost:9001/CrawlerStrategyServer/CFDAguangdong/CFDAguangdong.html";
let CFDAbeijing_file_path = chrome.runtime.getURL("CrawlerStrategyServer/CFDAbeijing/CFDAbeijing.html");
let CFDAbeijing_http_url = "http://localhost:9001/CrawlerStrategyServer/CFDAbeijing/CFDAbeijing.html";
let SGHSA_file_path = chrome.runtime.getURL("CrawlerStrategyServer/SGHSA/SGHSA.html");
let SGHSA_http_url = "http://localhost:9001/CrawlerStrategyServer/SGHSA/SGHSA.html";
let MFDS_file_path = chrome.runtime.getURL("CrawlerStrategyServer/MFDS/MFDS.html");
let MFDS_http_url = "http://localhost:9001/CrawlerStrategyServer/MFDS/MFDS.html";
let PMDA_file_path = chrome.runtime.getURL("CrawlerStrategyServer/PMDA/PMDA.html");
let PMDA_http_url = "http://localhost:9001/CrawlerStrategyServer/PMDA/PMDA.html";
let DGHR_file_path = chrome.runtime.getURL("CrawlerStrategyServer/DGHR/DGHR.html");
let DGHR_http_url = "http://localhost:9001/CrawlerStrategyServer/DGHR/DGHR.html";
let IVDC_file_path = chrome.runtime.getURL("CrawlerStrategyServer/IVDC/IVDC.html");
let IVDC_http_url = "http://localhost:9001/CrawlerStrategyServer/IVDC/IVDC.html";

// 輸入框設置預設值;
// if (window.document.getElementById("CFDA_import_path_textarea") !== null) {
//     window.document.getElementById("CFDA_import_path_textarea").defaultValue = CFDA_http_url;
// };

// if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea") !== null) {
//     window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").defaultValue = WUXIPEOPLEsHOSPITAL_http_url;
// };

// if (window.document.getElementById("TFDA_import_path_textarea") !== null) {
//     window.document.getElementById("TFDA_import_path_textarea").defaultValue = TFDA_http_url;
// };

// 根據選擇的采集策略導入源類型是從 http 還是本地硬盤文檔系統 file，填充 <textarea> 標簽為相對應的預設值;
if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
    // window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio");
    // window.document.getElementById("test_acquisition_strategy_import_source_http_radio");
    // window.document.getElementById("test_acquisition_strategy_import_source_file_radio");
    for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
        if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].nodeType === 1) {
            window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].addEventListener("click", async () => {
                if (window.document.getElementById("test_import_path_textarea") !== null) {
                    for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
                        if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                            if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].value === "http") {
                                window.document.getElementById("test_import_path_textarea").value = test_http_url;  // .textContent
                            };
                            if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].value === "file") {
                                window.document.getElementById("test_import_path_textarea").value = test_file_path;  // .textContent
                            };
                        };
                    };
                };
            });
        };
    };
};

if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
    // window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio");
    // window.document.getElementById("CFDA_acquisition_strategy_import_source_http_radio");
    // window.document.getElementById("CFDA_acquisition_strategy_import_source_file_radio");
    for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
        if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].nodeType === 1) {
            window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].addEventListener("click", async () => {
                if (window.document.getElementById("CFDA_import_path_textarea") !== null) {
                    for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                        if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                            if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].value === "http") {
                                window.document.getElementById("CFDA_import_path_textarea").value = CFDA_http_url;  // .textContent
                            };
                            if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].value === "file") {
                                window.document.getElementById("CFDA_import_path_textarea").value = CFDA_file_path;  // .textContent
                            };
                        };
                    };
                };
            });
        };
    };
};

if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length > 0) {
    // window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio");
    // window.document.getElementById("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_http_radio");
    // window.document.getElementById("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_file_radio");
    for (let i = 0; i < window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length; i++) {
        if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].nodeType === 1) {
            window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].addEventListener("click", async () => {
                if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea") !== null) {
                    for (let i = 0; i < window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length; i++) {
                        if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                            if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].value === "http") {
                                window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").value = WUXIPEOPLEsHOSPITAL_http_url;  // .textContent
                            };
                            if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].value === "file") {
                                window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").value = WUXIPEOPLEsHOSPITAL_file_path;  // .textContent
                            };
                        };
                    };
                };
            });
        };
    };
};

if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
    for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
        if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].nodeType == 1) {
            window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].addEventListener("click", async () => {
                if (window.document.getElementById("TFDA_import_path_textarea") !== null) {
                    for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                        if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                            if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].value === "http") {
                                window.document.getElementById("TFDA_import_path_textarea").value = TFDA_http_url;
                            };
                            if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].value === "file") {
                                window.document.getElementById("TFDA_import_path_textarea").value = TFDA_file_path;
                            };
                        };
                    };
                };
            });
        };
    };
};






// 自定義函數，對字符串進行Base64()編解碼操作；解碼：str = new Base64().decode(base64)，編碼：base64 = new Base64().encode(str);
// https://www.npmjs.com/package/js-base64
class Base64 {

    constructor () {
        // private property
        let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        // public method for encoding
        this.encode = function (input) {
            let output = "";
            let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            let i = 0;
            input = this._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                };
                output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            };
            return output;
        };
    
        // public method for decoding
        this.decode = function (input) {
            let output = "";
            let chr1, chr2, chr3;
            let enc1, enc2, enc3, enc4;
            let i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                };
            };
            output = this._utf8_decode(output);
            return output;
        };
    };

    // private method for UTF-8 encoding
    _utf8_encode = function (str) {
        str = String(str);
        str = str.replace(/\r\n/g, "\n");
        let utftext = "";
        for (let n = 0; n < str.length; n++) {
            let c = str.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            };

        };
        return utftext;
    };

    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        let string = "";
        let i = 0;
        let c = 0;
        let c1 = 0;
        let c2 = 0;
        let c3 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            };
        };
        return string;
    };
};
// let base64 = new Base64();

// 自定義封裝的函數isStringJSON(str)判斷一個字符串是否爲 JSON 格式的字符串;
function isStringJSON(str) {
    // 首先判斷傳入參數 str 是否為一個字符串 typeof (str) === 'string'，如果不是字符串直接返回錯誤;
    if (Object.prototype.toString.call(str).toLowerCase() === '[object string]') {
        try {
            let Obj = JSON.parse(str);
            // 使用語句 if (typeof (Obj) === 'object' && Object.prototype.toString.call(Obj).toLowerCase() === '[object object]' && !(Obj.length)) 判斷 Obj 是否為一個 JSON 對象;
            if (typeof (Obj) === 'object' && Object.prototype.toString.call(Obj).toLowerCase() === '[object object]' && !(Obj.length)) {
                return true;
            } else {
                return false;
            };
        } catch (error) {
            // console.log(error);
            return false;
        } finally {
            // ;
        };
    } else {
        // console.log("It is not a String!");
        return false;
    };
};


// 使用 chrome 擴展中的 chrome.downloads.download() 方法將數據持久化下載保存到本地硬盤文檔;
function Download_To_Disk(
    DataSource_Html_Node_ID,
    fileExtensionNameString,
    fileName,
    show_label_id,
    table_transform_Array2D,  // "[object Function]";
    Array2D_transform_CSV_String,  // "[object Function]";
    Transform_Excel_ArrayBuffer,  // "[object Function]";
    callback
){
    // 將二維數組數據，保存到本地硬盤上 CSV 或者 Excel 文件;
    // DataSource_Html_Node_ID 也可以直接輸入二維數組結構的數據;
    // window.document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[j].childNodes[0].nodeValue;

    let data_array2D = new Array;

    let DataSource_Html_Node = null;
    if (typeof (DataSource_Html_Node_ID) === "undefined" || DataSource_Html_Node_ID === null || DataSource_Html_Node_ID === NaN) {

        DataSource_Html_Node = null;
        console.log("指定數據源錯誤.");
        console.log(typeof DataSource_Html_Node_ID);
        console.log(DataSource_Html_Node_ID);

    } else if (Object.prototype.toString.call(DataSource_Html_Node_ID) === "[object Array]" && DataSource_Html_Node_ID.length > 0) {

        let type_array = new Array;
        let type_array_boolean = Number(0); // new Boolean;
        let array_length = new Array;
        let array_length_boolean =  true; // new Boolean;
        for (let i = 0; i < DataSource_Html_Node_ID.length; i++) {
            if (Object.prototype.toString.call(DataSource_Html_Node_ID[i]) === "[object Array]") {
                type_array[i] = "Array"; // .push(true);
                if (DataSource_Html_Node_ID[i].length > 0) {
                    array_length[i] = true; // .push(true);
                } else {
                    array_length[i] = false;
                };
            } else {
                type_array[i] = "other"; // .push(false);
            };
        };
        for (let j = 0; j < type_array.length; j++) {
            if (type_array[j] === "Array") {
                type_array_boolean = parseInt(Number(type_array_boolean) + Number(1));
            };
        };
        for (let k = 0; k < array_length.length; k++) {
            array_length_boolean = array_length_boolean && array_length[k];
            console.log("二維數組第 " + i + " 條數據爲空.");
            console.log(typeof DataSource_Html_Node_ID[k]);
            console.log(DataSource_Html_Node_ID[k]);
        };

        if (parseInt(type_array_boolean) === parseInt(type_array.length)) {
            data_array2D = DataSource_Html_Node_ID;
            DataSource_Html_Node = null;
        } else if (Number(type_array_boolean) > Number(0)) {
            console.log("數據數組結構錯誤.");
            // console.log(typeof DataSource_Html_Node_ID);
            console.log(DataSource_Html_Node_ID);
            data_array2D = null;
            DataSource_Html_Node = null;
        } else if (Number(type_array_boolean) === Number(0)) {
            // ;
        };

        if (type_array_boolean) {} else {};

    } else if (Object.prototype.toString.call(DataSource_Html_Node_ID) === "[object String]") {

        if (typeof (window.document.getElementById(DataSource_Html_Node_ID)) === "undefined" || window.document.getElementById(DataSource_Html_Node_ID) === null || window.document.getElementById(DataSource_Html_Node_ID) === NaN) {
            DataSource_Html_Node = DataSource_Html_Node_ID;
            // DataSource_Html_Node = null;
            // console.log("在網頁中未找到指定的數據源元素.");
            // console.log("指定數據源 id 值: " + DataSource_Html_Node_ID);
            // console.log("獲取網頁元素: " + window.document.getElementById(DataSource_Html_Node_ID));
        } else {
            DataSource_Html_Node = window.document.getElementById(DataSource_Html_Node_ID);
        };

    } else if (typeof (DataSource_Html_Node_ID) === 'object' && Object.prototype.toString.call(DataSource_Html_Node_ID).toLowerCase() === '[object object]' && !(DataSource_Html_Node_ID.length)) {
    // 判斷傳入的 DataSource_Html_Node_ID 參數是否是一個 JSON 對象;

        DataSource_Html_Node = JSON.stringify(DataSource_Html_Node_ID);  // JSON.parse()
        // DataSource_Html_Node = null;
        // console.log("在網頁中未找到指定的數據源元素.");
        // console.log("指定數據源 id 值: " + DataSource_Html_Node_ID);
        // console.log("獲取網頁元素: " + window.document.getElementById(DataSource_Html_Node_ID));

    } else {
    // } else if (window.document.body.children.length > 0) {
    // 當傳入的參數是獲取到的一個網頁元素的時候（比如表格table或canvas-datagrid），區別與傳入的是元素的Id值字符串;

        try {
            let Element_Array = window.document.body.getElementsByTagName("*");
            for (let i = 0; i < Element_Array.length; i++) {
                // window.document.body.children;
                let element = Element_Array[i];
                if (element.nodeType === 1) {
                    if (DataSource_Html_Node_ID.isSameNode(element)) {
                        // DataSource_Html_Node_ID.isEqualNode(element);
                        // element === DataSource_Html_Node_ID;
                        DataSource_Html_Node = element;
                    };
                };
            };
        } catch (error) {
            console.log(error);
        } finally {
            //;
        };
        if (DataSource_Html_Node === null) {
            console.log("在網頁中未找到指定的數據源元素.");
            console.log(typeof DataSource_Html_Node_ID);
            console.log(DataSource_Html_Node_ID);
        };

    };
    if (!(typeof (DataSource_Html_Node) === "undefined" || DataSource_Html_Node === null || DataSource_Html_Node === NaN)) {

        try {
            let button_div_id = "";
            if (Object.prototype.toString.call(table_transform_Array2D) === "[object Function]" && Object.prototype.toString.call(DataSource_Html_Node) === "[object Object]" && DataSource_Html_Node.nodeType === 1) {
                data_array2D = table_transform_Array2D(DataSource_Html_Node, button_div_id, show_label_id);  // 自定義函數 table_transform_Array2D(DataSource_Html_Node_ID) 將網頁表格<table>或畫布網格<canvasdatagrid>數據值轉換為二維數組數據;
            } else if (Object.prototype.toString.call(DataSource_Html_Node) === "[object Array]") {
                data_array2D = DataSource_Html_Node;
            } else if (Object.prototype.toString.call(DataSource_Html_Node) === "[object String]") {
                data_array2D = DataSource_Html_Node;
            } else {};
        } catch (error) {
            console.log(error);
            console.log("數據結構錯誤轉換二維數組失敗.");
        } finally {
            //;
        };
    };

    let button_div = window.document.getElementsByTagName("body").item(0);

    // 設置默認的保存文件類型;
    let fileExtensionName = "";
    if (typeof (fileExtensionNameString) === "undefined" || fileExtensionNameString === null || fileExtensionNameString === NaN || fileExtensionNameString === "") {
        fileExtensionName = "csv";
    } else if (fileExtensionNameString === "html" || fileExtensionNameString === "js" || fileExtensionNameString === "json" || fileExtensionNameString === "txt" || fileExtensionNameString === "xlsx" || fileExtensionNameString === "csv") {
        fileExtensionName = fileExtensionNameString;
    } else {
        fileExtensionName = "";
        console.log("輸入的文件擴展名錯誤，不是 ['html', 'js', 'json', 'txt', 'xlsx', 'csv'] 類型，只支持保存爲 ['html', 'js', 'json', 'txt', 'xlsx', 'csv'] 類型的文件.");
        console.log(fileExtensionNameString);
    };

    // 設置默認的保存文件名;
    let stored_file_name = "";
    if (typeof (fileName) === "undefined" || fileName === null || fileName === NaN || fileName === "") {
        stored_file_name = "BackupFileName." + fileExtensionName;
    } else {
        stored_file_name = fileName + "." + fileExtensionName;
    };

    let Stored_Blob;  // 最終將要下載保存的對象;

    if (typeof (data_array2D) === "undefined" || data_array2D === null || data_array2D === NaN) {
        console.log("數據結構錯誤轉換二維數組失敗.");
    } else {

        //當二維數組中第一維每一行的列數不相同時，用空字符串("")補齊每一行的數據;
        if (Object.prototype.toString.call(data_array2D) === "[object Array]") {
            if (data_array2D.length > 0) {
                let max_column_length = 0;  // 數組第二維中的最大長度，也就是表格中行數據的最大列數(column);
                for (let k in data_array2D) {
                    if (data_array2D[k].length > 0) {
                        if (max_column_length < data_array2D[k].length) {
                            max_column_length = data_array2D[k].length;
                        };
                    } else {
                        console.log("由網頁表格數據轉換的二維數組的第 " + k + " 條數據為空.");
                    };
                };
                // console.log(max_column_length);
                for (let k in data_array2D) {
                    for (let i = data_array2D[k].length; i < max_column_length; ++i) {
                        data_array2D[k][i] = "";
                    };
                };
            } else {
                console.log("由網頁表格數據轉換的二維數組為空.");
            };
        };
    };

    // alert(data_array2D);
    // if (!window.console) {
    //   window.console = { log: function () { } };
    // } else {
    //   window.console.log(data_array2D);
    // };
    // alert(data_array2D.length);

    if (!(typeof (data_array2D) === "undefined" || data_array2D === null || data_array2D === NaN) && data_array2D.length > 0) {

        let Temporary_data_array2D = null;  // new Array();

        if (Object.prototype.toString.call(data_array2D) === "[object Array]") {
            for (let j in data_array2D) {
                if (!(typeof (data_array2D[j]) === "undefined" || data_array2D[j] === null || data_array2D[j] === NaN || data_array2D[j] === "" || data_array2D[j].length <= 0)) {
                    Temporary_data_array2D.push(data_array2D[j]);  // 去掉第一維的空元素;
                };
            };
        } else if (Object.prototype.toString.call(data_array2D) === "[object String]") {
            Temporary_data_array2D = data_array2D;
        } else {};

        // if(!window.console) {
        //   window.console = { log:function(){} };
        // } else {
        //   window.console.log(Temporary_data_array2D.length);
        // };
        // alert(Temporary_data_array2D.length);

        if (!(typeof (Temporary_data_array2D) === "undefined" || Temporary_data_array2D === null || Temporary_data_array2D === NaN) && Temporary_data_array2D.length > 0) {

            let Stored_Object = null;

            if (typeof (fileExtensionName) === "undefined" || fileExtensionName === null || fileExtensionName === NaN || fileExtensionName === "") {

                Stored_Object = null;
                // if (callback) { callback("file extension name error.", fileExtensionName); };
                Stored_Blob = new Blob([Stored_Object], { type: "text/html/csv; charset=UTF-8" });
                console.log("輸入文件擴展名錯誤，不是 ['html', 'js', 'json', 'txt', 'xlsx', 'csv'] 類型，只支持保存為 ['html', 'js', 'json', 'txt', 'xlsx', 'csv'] 類型的文件.");
                console.log(fileExtensionName);

            } else {

                switch (fileExtensionName) {

                    case "html": {

                        // fileExtensionName = "html" 表示將二維數組變量以 .html 類型的網頁文檔保存到本地硬盤;
                        Stored_Object = Array2D_transform_CSV_String(Temporary_data_array2D, '<fenliejiangefuhao>', '<fenliejiangefuhao>\\n');  // ",<fenliejiangefuhao>,", ",<fenliejiangefuhao>\\r\\n"使用自定義函數 Array2D_transform_CSV_String(dataArray2D, columnSeparationSymbol, rowSeparationSymbol) 將二維數組數據轉換成 CSV 形式的分隔符字符串文件，返回值為一個字符串變量;

                        // const Stored_Blob = new Blob([Stored_Object], {"type": "text/html/csv/application/octet-stream/vnd.ms-excel; charset=UTF-8, \ufeff"});  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;
                        // const Stored_Blob = new Blob([window.document.getElementById("Result_Exhibits_Div_Tag").innerHTML],{"type": "text/html/csv; charset=UTF-8"});
                        Stored_Blob = new Blob([Stored_Object], { type: "text/html/csv; charset=UTF-8" });  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;

                        // if (!window.console) {
                        //     window.console = { log: function () { } };
                        // } else {
                        //     window.console.log(Stored_Object);
                        // };
                        // alert(Stored_Object);

                        break;
                    };

                    case "js": {

                        // fileExtensionName = "js" 表示將二維數組變量以 .js 類型的網頁文檔保存到本地硬盤;
                        Stored_Object = Array2D_transform_CSV_String(Temporary_data_array2D, '<fenliejiangefuhao>', '<fenliejiangefuhao>\\n');  // ",<fenliejiangefuhao>,", ",<fenliejiangefuhao>\\r\\n"使用自定義函數 Array2D_transform_CSV_String(dataArray2D, columnSeparationSymbol, rowSeparationSymbol) 將二維數組數據轉換成 CSV 形式的分隔符字符串文件，返回值為一個字符串變量;

                        // const Stored_Blob = new Blob([Stored_Object], {"type": "text/html/csv/application/octet-stream/vnd.ms-excel; charset=UTF-8, \ufeff"});  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;
                        // const Stored_Blob = new Blob([window.document.getElementById("Result_Exhibits_Div_Tag").innerHTML],{"type": "text/html/csv; charset=UTF-8"});
                        Stored_Blob = new Blob([Stored_Object], { type: "text/html/csv; charset=UTF-8" });  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;

                        // if (!window.console) {
                        //     window.console = { log: function () { } };
                        // } else {
                        //     window.console.log(Stored_Object);
                        // };
                        // alert(Stored_Object);

                        break;
                    };

                    case "json": {

                        // fileExtensionName = "json" 表示將二維數組變量以 .json 類型的網頁文檔保存到本地硬盤;
                        if (Object.prototype.toString.call(Temporary_data_array2D) === "[object Array]") {
                            Stored_Object = JSON.stringify(Temporary_data_array2D);  // JSON.parse();
                        } else if (Object.prototype.toString.call(Temporary_data_array2D) === "[object String]") {
                            Stored_Object = Temporary_data_array2D;
                        } else if (typeof (Temporary_data_array2D) === 'object' && Object.prototype.toString.call(Temporary_data_array2D).toLowerCase() === '[object object]' && !(Temporary_data_array2D.length)) {
                        // 判斷傳入的 Temporary_data_array2D 參數是否是一個 JSON 對象;
                            Stored_Object = JSON.stringify(Temporary_data_array2D);  // JSON.parse();
                        } else {};

                        // const Stored_Blob = new Blob([Stored_Object], {"type": "text/html/csv/application/octet-stream/vnd.ms-excel; charset=UTF-8, \ufeff"});  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;
                        // const Stored_Blob = new Blob([window.document.getElementById("Result_Exhibits_Div_Tag").innerHTML],{"type": "text/html/csv; charset=UTF-8"});
                        Stored_Blob = new Blob([Stored_Object], { type: "text/html/csv; charset=UTF-8" });  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;

                        // if (!window.console) {
                        //     window.console = { log: function () { } };
                        // } else {
                        //     window.console.log(Stored_Object);
                        // };
                        // alert(Stored_Object);

                        break;
                    };

                    case "txt": {

                        // fileExtensionName = "txt" 表示將二維數組變量以 .txt 類型的網頁文檔保存到本地硬盤;
                        if (Object.prototype.toString.call(Temporary_data_array2D) === "[object Array]") {
                            Stored_Object = JSON.stringify(Temporary_data_array2D);  // JSON.parse();
                        } else if (Object.prototype.toString.call(Temporary_data_array2D) === "[object String]") {
                            Stored_Object = Temporary_data_array2D;
                        } else if (typeof (Temporary_data_array2D) === 'object' && Object.prototype.toString.call(Temporary_data_array2D).toLowerCase() === '[object object]' && !(Temporary_data_array2D.length)) {
                        // 判斷傳入的 Temporary_data_array2D 參數是否是一個 JSON 對象;
                            Stored_Object = JSON.stringify(Temporary_data_array2D);  // JSON.parse();
                        } else {};

                        // const Stored_Blob = new Blob([Stored_Object], {"type": "text/html/csv/application/octet-stream/vnd.ms-excel; charset=UTF-8, \ufeff"});  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;
                        // const Stored_Blob = new Blob([window.document.getElementById("Result_Exhibits_Div_Tag").innerHTML],{"type": "text/html/csv; charset=UTF-8"});
                        Stored_Blob = new Blob([Stored_Object], { type: "text/html/csv; charset=UTF-8" });  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;

                        // if (!window.console) {
                        //     window.console = { log: function () { } };
                        // } else {
                        //     window.console.log(Stored_Object);
                        // };
                        // alert(Stored_Object);

                        break;
                    };

                    case "csv": {

                        // fileExtensionName = "csv" 表示將二維數組變量以 CSV 類型的文件保存到本地硬盤;
                        if (Object.prototype.toString.call(Array2D_transform_CSV_String) === "[object Function]" && Object.prototype.toString.call(Temporary_data_array2D) === "[object Array]") {
                            Stored_Object = Array2D_transform_CSV_String(Temporary_data_array2D, '<fenliejiangefuhao>', '<fenliejiangefuhao>\\n');  // ",<fenliejiangefuhao>,", ",<fenliejiangefuhao>\\r\\n"使用自定義函數 Array2D_transform_CSV_String(dataArray2D, columnSeparationSymbol, rowSeparationSymbol) 將二維數組數據轉換成 CSV 形式的分隔符字符串文件，返回值為一個字符串變量;
                        } else if (Object.prototype.toString.call(Temporary_data_array2D) === "[object Array]") {
                            Stored_Object = JSON.stringify(Temporary_data_array2D);  // JSON.parse();
                        } else if (Object.prototype.toString.call(Temporary_data_array2D) === "[object String]") {
                            Stored_Object = Temporary_data_array2D;
                        } else if (typeof (Temporary_data_array2D) === 'object' && Object.prototype.toString.call(Temporary_data_array2D).toLowerCase() === '[object object]' && !(Temporary_data_array2D.length)) {
                        // 判斷傳入的 Temporary_data_array2D 參數是否是一個 JSON 對象;
                            Stored_Object = JSON.stringify(Temporary_data_array2D);  // JSON.parse();
                        } else {};

                        // const Stored_Blob = new Blob([Stored_Object], {"type": "text/html/csv/application/octet-stream/vnd.ms-excel; charset=UTF-8, \ufeff"});  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;
                        // const Stored_Blob = new Blob([window.document.getElementById("Result_Exhibits_Div_Tag").innerHTML],{"type": "text/html/csv; charset=UTF-8"});
                        Stored_Blob = new Blob([Stored_Object], { type: "text/html/csv; charset=UTF-8" });  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;

                        // if (!window.console) {
                        //     window.console = { log: function () { } };
                        // } else {
                        //     window.console.log(Stored_Object);
                        // };
                        // alert(Stored_Object);

                        break;
                    };

                    case "xlsx": {

                        // fileExtensionName = "xlsx" 表示將二維數組變量以 Excel 類型的文件保存到本地硬盤;
                        
                        if (Object.prototype.toString.call(Transform_Excel_ArrayBuffer)==="[object Function]" && Object.prototype.toString.call(Temporary_data_array2D) === "[object Array]") {
                            Stored_Object = Transform_Excel_ArrayBuffer({ "sheet1": Temporary_data_array2D });  // 使用自定義函數 Transform_Excel_ArrayBuffer({sheetName:[]array2D}) 將二維數組數據轉換成 Excel 的 sheet 形式的緩衝數組對象(ArrayBuffer)，返回值為一個緩衝數組(ArrayBuffer)，顯示形式為無符號整數8字節數組 Uint8Array(ArrayBuffer);
                        } else if (Object.prototype.toString.call(Temporary_data_array2D) === "[object Array]") {
                            Stored_Object = JSON.stringify(Temporary_data_array2D);  // JSON.parse();
                        } else if (Object.prototype.toString.call(Temporary_data_array2D) === "[object String]") {
                            Stored_Object = Temporary_data_array2D;
                        } else if (typeof (Temporary_data_array2D) === 'object' && Object.prototype.toString.call(Temporary_data_array2D).toLowerCase() === '[object object]' && !(Temporary_data_array2D.length)) {
                        // 判斷傳入的 Temporary_data_array2D 參數是否是一個 JSON 對象;
                            Stored_Object = JSON.stringify(Temporary_data_array2D);  // JSON.parse();
                        } else {};

                        // const Stored_Blob = new Blob([Stored_Object], {"type": "text/html/csv/application/octet-stream/vnd.ms-excel; charset=UTF-8, \ufeff"});  // 表示下載的文件用 UTF-8 編碼，不然下載的文件打開時中文顯示亂碼;
                        // const Stored_Blob = new Blob([window.document.getElementById("Result_Exhibits_Div_Tag").innerHTML],{"type": "text/html/csv; charset=UTF-8"});
                        Stored_Blob = new Blob([Stored_Object], { type: "application/octet-stream" });

                        // if (!window.console) {
                        //     window.console = { log: function () { } };
                        // } else {
                        //     window.console.log(Stored_Object);
                        // };
                        // alert(Stored_Object);

                        break;
                    };

                    default: {

                        Stored_Object = Temporary_data_array2D;
                        // Stored_Object = null;
                        console.log("輸入文件擴展名錯誤，不是 ['html', 'js', 'json', 'txt', 'xlsx', 'csv'] 類型，只支持保存為 ['html', 'js', 'json', 'txt', 'xlsx', 'csv'] 類型的文件.");
                        // if (callback) { callback("file extension name error.", fileExtensionName); };
                        Stored_Blob = new Blob([Stored_Object], { type: "text/html/csv; charset=UTF-8" });
                    };
                };
            };

        } else {
            console.log("網頁數據源表格轉換二維數組失敗.");
        };
    };

    // // 使用瀏覽器自帶的文件下載對話框<a download="stored_file_name" href="Stored_Blob" target="blank">建立並點擊運行下載鏈接;
    // if (window.document.getElementById("download_link")) {

    //     let Temporary_DownLoad_Link = window.document.getElementById("download_link");

    //     const Temporary_DownLoad_Link_href = Temporary_DownLoad_Link.getAttribute("href");
    //     // const Temporary_DownLoad_Link_innerText = Temporary_DownLoad_Link.innerText;
    //     const Temporary_DownLoad_Link_download = Temporary_DownLoad_Link.getAttribute("download");
    //     const Temporary_DownLoad_Link_target = Temporary_DownLoad_Link.getAttribute("target");

    //     Temporary_DownLoad_Link.target = "blank";
    //     if (!(typeof (stored_file_name) === "undefined" || stored_file_name === null)) { Temporary_DownLoad_Link.download = stored_file_name; } else { Temporary_DownLoad_Link.download = ""; };
    //     Temporary_DownLoad_Link.href = window.URL.createObjectURL(Stored_Blob);
    //     Temporary_DownLoad_Link.click();
    //     window.URL.revokeObjectURL(Temporary_DownLoad_Link.href);  // 釋放内存;

    //     Temporary_DownLoad_Link.setAttribute("href", Temporary_DownLoad_Link_href);
    //     Temporary_DownLoad_Link.setAttribute("target", Temporary_DownLoad_Link_target);
    //     Temporary_DownLoad_Link.setAttribute("download", Temporary_DownLoad_Link_download);

    // } else if (!(typeof (button_div) === "undefined" || button_div === null)) {

    //     // button_div.style.display = "block";
    //     const Temporary_DownLoad_Link = window.document.createElement("a");
    //     Temporary_DownLoad_Link.setAttribute("id", "download_link");
    //     Temporary_DownLoad_Link.innerHTML = "Click here Data from Memory to HardDisk";
    //     Temporary_DownLoad_Link.style.display = "none";
    //     Temporary_DownLoad_Link.target = "blank";
    //     if (stored_file_name) { Temporary_DownLoad_Link.download = stored_file_name; } else { Temporary_DownLoad_Link.download = "BackupFileName.csv"; };
    //     Temporary_DownLoad_Link.href = window.URL.createObjectURL(Stored_Blob);

    //     button_div.appendChild(Temporary_DownLoad_Link);
    //     window.document.getElementById("download_link").click();
    //     button_div.removeChild(Temporary_DownLoad_Link);
    //     window.URL.revokeObjectURL(Temporary_DownLoad_Link.href);  // 釋放内存;

    // } else {

    //     const Temporary_DownLoad_Link = window.document.createElement("a");
    //     Temporary_DownLoad_Link.setAttribute("id", "download_link");
    //     Temporary_DownLoad_Link.innerHTML = "Click here Data from Memory to HardDisk";
    //     Temporary_DownLoad_Link.style.display = "none";
    //     Temporary_DownLoad_Link.target = "blank";
    //     if (stored_file_name) { Temporary_DownLoad_Link.download = stored_file_name; } else { Temporary_DownLoad_Link.download = "BackupFileName.csv"; };
    //     Temporary_DownLoad_Link.href = window.URL.createObjectURL(Stored_Blob);

    //     window.document.body.appendChild(Temporary_DownLoad_Link);
    //     window.document.getElementById("download_link").click();
    //     window.document.body.removeChild(Temporary_DownLoad_Link);
    //     window.URL.revokeObjectURL(Temporary_DownLoad_Link.href);  // 釋放内存;

    // };

    // 使用使用 chrome 擴展中的 chrome.downloads.download() 方法建立並運行下載鏈接;
    let DownLoad_Link_href = window.URL.createObjectURL(Stored_Blob);
    chrome.downloads.download(
        {
            url: DownLoad_Link_href,  // 下載數據源的 url;
            filename: stored_file_name,  // 保存到硬盤的文檔名;
            conflictAction: "prompt",  // 重名文檔的處理方式，"prompt" 表示以彈出下載選擇的對話框的形式下載，"overwrite" 表示以覆寫重名文檔的形式下載，"uniquify" 表示如有重名則修改預設的文檔名;
            saveAs: true,  // 是否彈出另存爲窗口;
            method: GET,  // 請求方式（POST 或 GET）;
            // 自定義的請求頭（header）數組;
            headers: [
                {'Content-Type': 'text/plain; charset="utf-8"'}
            ],
            body: ""  // 當使用 POST 方式請求時，發送的數據;
        },
        (result) => {

            console.log(result);

            if (callback) {
                // if (error) {callback(error, null);};
                if (!(typeof (Stored_Object) === "undefined" || Stored_Object === null)) {
                    callback(null, Stored_Object);
                } else {
                    callback(error, null);
                };
            };

            window.URL.revokeObjectURL(DownLoad_Link_href);  // 釋放内存;
        }
    );

    return Stored_Blob;
};

function use_AJAX(
    Branch_Switch,  // "get", "post", "form", "file", "ArrayBuffer", "Blob"
    UpLoadData,
    url_string,
    request_Authorization,
    abort_button_id_string,
    show_label_id,
    // textarea_path_or_URL_id,
    callback
){
    // 使用 AJAX 方法 XMLHttpRequest() 對象獲得網絡文件;
    // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest

    let abort_button_id = "";
    if (typeof (abort_button_id_string) === "undefined" || abort_button_id_string === null || abort_button_id_string === NaN || abort_button_id_string === "") {
        abort_button_id = "";
    } else {
        abort_button_id = abort_button_id_string;
    };

    let UpLoad_url = "";
    if (typeof (url_string) === "undefined" || url_string === null || url_string === NaN || url_string === "") {
        console.log("未傳入參數 url_string 將要上傳的目標網址.");
        console.log(url_string);
        // UpLoad_url = null;
        // return false;
    } else {
        UpLoad_url = url_string;
    };

    // // http://localhost:27016/insertMany?dbName=testWebData&dbTableName=test20220703&dbUser=admin_testWebData&dbPass=admin&Key=username:password
    // // let request_Authorization = ""; // "username:password";
    // if (url_string !== "" && url_string.indexOf("&Key=", 0) !== -1) {
    //     request_Authorization = String(url_string.split("&Key=")[1]);
    //     if (request_Authorization.indexOf("&", 0) !== -1) {
    //         request_Authorization = String(request_Authorization.split("&")[0]);
    //     };
    // };
    // // console.log(request_Authorization);
    let request_Authorization_Base64 = "";
    if (request_Authorization === "") {
        request_Authorization_Base64 = "Basic ";  // 'www-authenticate': 'Basic realm="domain name -> username:password"'  獲取響應頭中的"www-authenticate"參數值 response.headers["www-authenticate"];
    } else {
        request_Authorization_Base64 = String("Basic".concat(" ", new Base64().encode(request_Authorization)));  // new Base64().decode(request_Authorization_Base64.split(" ")[1])，'www-authenticate': 'Basic realm="domain name -> username:password"'  獲取響應頭中的"www-authenticate"參數值 response.headers["www-authenticate"];
    };
    // request_Authorization_Base64 = String(request_Authorization);
    // request_Authorization_Base64 = String("Basic".concat(" ", request_Authorization));
    // console.log(request_Authorization_Base64);

    let UpLoad_Data = "";
    if (typeof (UpLoadData) === "undefined" || UpLoadData === null || UpLoadData === NaN) {
        console.log("未傳入參數 UpLoadData 將要使用 post 方法發送的數據.");
        console.log(UpLoadData);
        // UpLoad_Data = null;
    } else {
        UpLoad_Data = UpLoadData;
    };

    if (typeof (UpLoad_url) === "undefined" || UpLoad_url === null || UpLoad_url === NaN || UpLoad_url === "") {

        console.log("參數 url_string 錯誤.");
        if (callback) { callback("parameter url_string unrecognized.", null); };

    } else {

        // 記錄文檔讀取進度百分比;
        let request_data_uploaded_size = 0;
        let response_data_downloaded_size = 0;

        // 暫存啓動按鈕元素初始狀態;
        let button_element = null;
        let button_element_onclick_function = "";
        let button_element_innerText = "";
        let new_button_element = null;

        // 暫存用於提示文件讀取進度和狀態的 show_label_id 標簽的 <label> 内容;
        let initial_label_innerText = "";
        if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
            initial_label_innerText = window.document.getElementById(show_label_id).innerText;
        };

        let xhr = new XMLHttpRequest(); // 實例化瀏覽器 AJAX 對象 XMLHttpRequest();

        let time_out = 30000;
        xhr.timeout = time_out;  // 設置超時等待時長，單位毫秒，默認值為 0，當等於 0 時表示不設置超時，即由AJAX請求開始(onloadstart)算起，到AJAX事件結束(onloadend)，這個過程間等待的最大時長，如果超過時常則觸發 .ontimeout 事件;
        // 監聽超時響應事件，即當 xhr.timeout 不等於 0 時，由請求開始即 onloadstart 開始算起，當到達 xhr.timeout 所設置時間請求還未結束，即 onloadend，則觸發此事件;
        xhr.ontimeout = function () {
            console.log("AJAX load data timeout [ " + time_out / 1000 + " ] second.");
            // console.log(file_input.name + ", uploaded: < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + "% >, total size: < " + parseInt(file_input.size / 1000) + " > KiloByte.");  // Math.round();
                
            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };
    
            // 將 <label> 標簽顯示内容恢復為原初狀態;
            try {
                let label_innerText = "";
                if (response_data_downloaded_size === 0) {
                    label_innerText = "「 request data upload timeout, uploaded: < " + parseInt(request_data_uploaded_size / 1000) + " > KiloByte. 」";  // Math.round();
                } else if (request_data_uploaded_size === 0) {

                } else {
                    label_innerText = "「 response data download timeout, download: < " + parseInt(response_data_downloaded_size / 1000) + " > KiloByte. 」";  // Math.round();
                };
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // if (callback) { callback(Event, null); };
            if (callback) { callback("timeout", null); };

            abort_AJAX_loading();  // 使用自定義函數中止 AJAX 加載數據;
            alert("使用 AJAX 方法加載數據超時 AJAX load data timeout [ " + time_out / 1000 + " ] second.");
        };

        // 中斷正在進行的AJAX數據載入過程;
        function abort_AJAX_loading() {
            xhr.abort();  // 中斷正在進行的AJAX過程，觸發.abort()方法時，若請求階段已經發送完畢，則 readyState 值恢復為 0，若請求階段還未結束，則 readyState 值變為 4;
            xhr = null;  // 將實例化的 AJAX 對象清空，利於内存回收管理;
        };
        // 當調用 xhr.abort() 後觸發;
        xhr.onabort = function () {
            console.log("AJAX load data aborted with [Ctrl] + [c].");
            // console.log(file_input.name + ", uploaded: < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + "% >, total size: < " + parseInt(file_input.size / 1000) + " > KiloByte.");  // Math.round();
                
            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };
    
            // 將 <label> 標簽顯示内容恢復為原初狀態;
            try {
                let label_innerText = "";
                if (response_data_downloaded_size === 0) {
                    label_innerText = "「 request data upload aborted, uploaded: < " + parseInt(request_data_uploaded_size / 1000) + " > KiloByte. 」";  // Math.round();
                } else if (request_data_uploaded_size === 0) {

                } else {
                    label_innerText = "「 response data download aborted, download: < " + parseInt(response_data_downloaded_size / 1000) + " > KiloByte. 」";  // Math.round();
                };
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // if (callback) { callback(Event, null); };
            if (callback) { callback("aborted", null); };
            alert("使用 AJAX 方法加載數據被人爲中止 AJAX load data aborted with [Ctrl] + [c].");
        };

        // 在請求過程中如果發生 Network error，且發生 Network error 時上傳過程(.upload)還沒有結束，則會先觸發 xhr.upload.onerror 事件，然後再觸發 xhr.onerror 事件。注意，只有發生了網絡層級別的異常才會觸發此事件，對於應用層級別的異常，如響應返回的 xhr.statusCode 是 4xx 時，並不屬於 Network error，所以不會觸發 onerror 事件，而是會觸發 onload 事件;
        xhr.upload.onerror = function (XML_Http_Request, text_Status, error_Thrown) {

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 修改 <label> 標簽内容，用於提示文件讀取錯誤狀態;
            try {
                // let label_innerText = "「 request data upload error! uploaded: < " + parseInt(request_data_uploaded_size / 1000) + " > KiloByte, < " + parseInt(request_data_uploaded_size / Event.total * 100) + " % >, total: < " + parseInt(Event.total / 1000) + " > KiloByte. 」";  // Math.round();
                let label_innerText = "「 request data upload error! uploaded: < " + parseInt(request_data_uploaded_size / 1000) + " > KiloByte. 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // alert(text_Status);
            switch (text_Status) {
    
                case "timeout": {
                    console.log(error_Thrown);
                    console.log("AJAX 請求鏈接超時.");
                    if (callback) { callback(error_Thrown, null); };
                    alert("AJAX 請求鏈接超時.");
                    break;
                };
    
                case "error": {
                    console.log(error_Thrown);
                    console.log("AJAX 請求鏈接錯誤.");
                    if (callback) { callback(error_Thrown, null); };
                    alert("AJAX 請求鏈接錯誤.");
                    break;
                };
    
                case "notmodified": {
                    console.log(error_Thrown);
                    if (callback) { callback(error_Thrown, null); };  
                    alert("請求數據上傳時出錯 request data upload error.");
                    break;
                };
    
                case "parsererror": {
                    console.log(error_Thrown);
                    if (callback) { callback(error_Thrown, null); };  
                    alert("請求數據上傳時出錯 request data upload error.");
                    break;
                };
    
                default: {
                    console.log(error_Thrown);
                    if (callback) { callback("請求數據上傳時出錯 request data upload error: " + String(text_Status), null); };
                    alert("請求數據上傳時出錯 request data upload error.");
                };
            };
            // if (callback) { callback(Event.target.error, null); };
            // alert("請求數據上傳時出錯 request data upload error.");
        };

        // 在請求過程中如果發生 Network error，且發生 Network error 時上傳過程(.upload.onloadend 之後)，則會觸發 xhr.onerror 事件，而不觸發 xhr.upload.onerror 事件。注意，只有發生了網絡層級別的異常才會觸發此事件，對於應用層級別的異常，如響應返回的 xhr.statusCode 是 4xx 時，並不屬於 Network error，所以不會觸發 onerror 事件，而是會觸發 onload 事件;
        xhr.onerror = function (XML_Http_Request, text_Status, error_Thrown) {

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 修改 <label> 標簽内容，用於提示文件讀取錯誤狀態;
            try {
                // let label_innerText = "「 response data download error! downloaded: < " + parseInt(response_data_downloaded_size / 1000) + " > KiloByte, < " + parseInt(response_data_downloaded_size / Event.total * 100) + " % >, total: < " + parseInt(Event.total / 1000) + " > KiloByte. 」";  // Math.round();
                let label_innerText = "「 response data download error! downloaded: < " + parseInt(response_data_downloaded_size / 1000) + " > KiloByte. 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // alert(text_Status);
            switch (text_Status) {

                case "timeout": {
                    console.log(error_Thrown);
                    console.log("AJAX 鏈接響應超時.");
                    if (callback) { callback(error_Thrown, null); };
                    alert("AJAX 鏈接響應超時.");
                    break;
                };

                case "error": {
                    console.log(error_Thrown);
                    console.log("AJAX 鏈接響應錯誤.");
                    if (callback) { callback(error_Thrown, null); };
                    alert("AJAX 鏈接響應錯誤.");
                    break;
                };

                case "notmodified": {
                    console.log(error_Thrown);
                    if (callback) { callback(error_Thrown, null); };
                    console.log("響應數據下載時出錯 response data download error.");
                    // alert("響應數據下載時出錯 response data download error.");
                    break;
                };

                case "parsererror": {
                    console.log(error_Thrown);
                    if (callback) { callback(error_Thrown, null); };
                    console.log("響應數據下載時出錯 response data download error.");
                    // alert("響應數據下載時出錯 response data download error.");
                    break;
                };
    
                default: {
                    console.log(error_Thrown);
                    if (callback) { callback("響應數據下載時出錯 response data download error: " + String(text_Status), null); };
                    console.log("響應數據下載時出錯 response data download error.");
                    // alert("響應數據下載時出錯 response data download error.");
                };
            };
            // if (callback) { callback(Event.target.error, null); };
            // alert("響應數據下載時出錯 response data download error.");
        };

        // 每次 readyState 變化時，都會觸發一次，readyState 值依次為 0,1,2,3,4;
        xhr.onreadystatechange = function () {

            // console.log(xhr.readyState);

            // if (xhr.readyState === 4 && xhr.status === 200) {

            //     // xhr.getResponseHeader("Cookie");
            //     let responseHeaders = xhr.getAllResponseHeaders();  // 相應圖字符串;
            //     // let responseData = xhr.responseText;  // 編碼好的字符串;
            //     let responseData = xhr.response;  // 解析好的 Dom 對象;

            //     if (callback) { callback(null, {"ResponseStatus": String(xhr.status), "ResponseHeaders": responseHeaders, "ResponseBody": responseData}); };
            // };
        };

        // 上傳階段開始，此時觸發 .onloadstart 事件;
        xhr.onloadstart = function () {
            // console.log("file upload started ...");

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (window.document.getElementById(abort_button_id)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element_onclick_function = button_element.getAttribute("onclick");
                        button_element_innerText = button_element.innerText;
                        button_element.innerText = "Click here to abort load file";
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", "javascript: abort_AJAX_loading()");
                        if (button_element.getAttribute("disabled")) { button_element.removeAttribute("disabled"); };
                        // button_element.addEventListener("click", function () {xhr.abort();  // 中斷正在進行的文件導入;});
                    } else {
                        new_button_element = window.document.createElement("button");
                        new_button_element.setAttribute("id", abort_button_id);
                        new_button_element.innerText = "Click here to abort load file";
                        new_button_element.setAttribute("onclick", "javascript: abort_AJAX_loading()");
                        window.document.body.appendChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 修改 <label> 標簽内容，用於提示文件讀取進度和狀態;
            try {
                let label_innerText = "「 request data Size: " + parseInt(UpLoad_Data.length) + " characters, Start uploading ... 」";  // Math.round();
                // let label_innerText = "「 request data Size: " + parseInt(UpLoad_Data.length / 1000) + " KiloByte, Start uploading ... 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    // window.document.getElementById(show_label_id).innerText = initial_label_innerText + label_innerText;
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };
        };

        // AJAX 的上傳過程啓動時觸發 .upload.onloadstart 事件;
        xhr.upload.onloadstart = function () {
            // ;
        };

        // .upload.onprogress 事件觸發於上傳階段，每 50ms 觸發一次，可獲得上傳信息、進度等;
        xhr.upload.onprogress = function (Event) {
            // console.log(Event.lengthComputable);
            // console.log(Event.loaded);
            // console.log(Event.total);

            request_data_uploaded_size = Event.loaded;

            if (Event.loaded < Event.total) {
                // 修改 <label> 標簽内容，用於提示文件讀取進度和狀態;
                try {
                    let label_innerText = "「 request data uploading: < " + parseInt(request_data_uploaded_size / 1000) + " > KiloByte, < " + parseInt(request_data_uploaded_size / Event.total * 100) + " % >, Total: < " + parseInt(Event.total / 1000) + " > KiloByte ... 」";  // Math.round();
                    // let label_innerText = "「 request data uploading: < " + parseInt(Event.lengthComputable / 1000) + " > characters ... 」";  // Math.round();
                    if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                        // window.document.getElementById(show_label_id).innerText = initial_label_innerText + label_innerText;
                        window.document.getElementById(show_label_id).innerText = label_innerText;
                    };
                } catch (error) {
                    console.log(error);
                } finally {
                    //;
                };
            } else {
                // 將 <label> 標簽顯示内容恢復為原初狀態;
                try {
                    let label_innerText = "「 request data uploaded successful: < " + parseInt(request_data_uploaded_size / 1000) + " > KiloByte, < " + parseInt(request_data_uploaded_size / Event.total * 100) + " % >. 」";  // Math.round();
                    // let label_innerText = "「 request data uploaded successful: < " + parseInt(Event.lengthComputable / 1000) + " > characters. 」";  // Math.round();
                    if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                        window.document.getElementById(show_label_id).innerText = label_innerText;
                        window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                    };
                } catch (error) {
                    console.log(error);
                } finally {
                    //;
                };
            };
        };

        // AJAX 的上傳過程成功時，觸發 .upload.onload 事件;
        xhr.upload.onload = function () {
            // ;
        };

        // 上傳階段結束，下載階段開始，此時會觸發 .upload.onloadend 事件;
        xhr.upload.onloadend = function (Event) {

            // 修改 <label> 標簽内容，用於提示文件讀取進度和狀態;
            try {
                let label_innerText = "「 request data Size: " + parseInt(UpLoad_Data.length) + " characters successful, response data Start downloading ... 」";  // Math.round();
                // let label_innerText = "「 request data Size: " + parseInt(Event.total / 1000) + " KiloByte successful, response data Start downloading ... 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    // window.document.getElementById(show_label_id).innerText = initial_label_innerText + label_innerText;
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };
        };

        // 監聽下載過程"progress"，事件觸發於下載階段，每 50ms 觸發一次，可獲得下載信息、進度等;
        xhr.onprogress = function (Event) {
            // console.log(Event.lengthComputable);
            // console.log(Event.loaded);
            // console.log(Event.total);

            response_data_downloaded_size = Event.loaded;

            if (Event.loaded < Event.total) {
                // 修改 <label> 標簽内容，用於提示文件讀取進度和狀態;
                try {
                    let label_innerText = "「 response data downloading: < " + parseInt(response_data_downloaded_size / 1000) + " > KiloByte, < " + parseInt(response_data_downloaded_size / Event.total * 100) + " % >, Total: < " + parseInt(Event.total / 1000) + " > KiloByte ... 」";  // Math.round();
                    // let label_innerText = "「 response data downloading: < " + parseInt(Event.lengthComputable / 1000) + " > characters ... 」";  // Math.round();
                    if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                        // window.document.getElementById(show_label_id).innerText = initial_label_innerText + label_innerText;
                        window.document.getElementById(show_label_id).innerText = label_innerText;
                    };
                } catch (error) {
                    console.log(error);
                } finally {
                    //;
                };
            } else {
                // 將 <label> 標簽顯示内容恢復為原初狀態;
                try {
                    let label_innerText = "「 response data downloaded successful: < " + parseInt(response_data_downloaded_size / 1000) + " > KiloByte, < " + parseInt(response_data_downloaded_size / Event.total * 100) + " % >. 」";  // Math.round();
                    // let label_innerText = "「 response data downloaded successful: < " + parseInt(Event.lengthComputable / 1000) + " > characters. 」";  // Math.round();
                    if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                        window.document.getElementById(show_label_id).innerText = label_innerText;
                        window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                    };
                } catch (error) {
                    console.log(error);
                } finally {
                    //;
                };
            };
        };

        // 監聽下載成功"load";
        xhr.onload = function (Event) {

            let label_innerText = "";

            // xhr.getResponseHeader("Cookie");
            let responseHeaders = xhr.getAllResponseHeaders();  // 相應圖字符串;
            // let responseData = xhr.responseText;  // 編碼好的字符串;
            let responseData = xhr.response;  // 解析好的 Dom 對象;

            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {

                // console.log(xhr.status, xhr.statusText);

                // if (xhr.response) {
                //     // console.log("response data downloaded success.");
                //     // console.log("response data downloaded: < " + parseInt(xhr.response / 1000) + " > KiloByte, < " + parseInt(response_data_downloaded_size / xhr.response * 100) + "% >, total size: < " + parseInt(xhr.response / 1000) + " > KiloByte.");  // Math.round();
                //     // console.log(xhr.response);
                //     // if (!window.console) {
                //     //   window.console = { log: function () { } };
                //     // } else {
                //     //   window.console.log(xhr.response);
                //     // };
                //     // alert(xhr.response);
                //     // alert(typeof xhr.response);

                //     // let data_json = JSON.parse(xhr.responseText);
                //     if (callback) { callback(null, xhr.response); }; // 回調函數返回解析結果;
                // };

                label_innerText = "「 response data downloaded successful: < " + parseInt(response_data_downloaded_size / 1000) + " > KiloByte. 」";  // Math.round();
                // label_innerText = "「 response data downloaded successful: < " + parseInt(response_data_downloaded_size / 1000) + " > KiloByte, < " + parseInt(response_data_downloaded_size / Event.total * 100) + " % >. 」";  // Math.round();

                // // xhr.getResponseHeader("Cookie");
                // responseHeaders = xhr.getAllResponseHeaders();  // 相應圖字符串;
                // // responseData = xhr.responseText;  // 編碼好的字符串;
                // responseData = xhr.response;  // 解析好的 Dom 對象;

                if (callback) { callback(null, {"ResponseStatus": String(xhr.status), "ResponseHeaders": responseHeaders, "ResponseBody": responseData}); }; // 回調函數返回解析結果;

            } else {

                label_innerText = "「 response end. 」";
                if (callback) { callback({"ResponseStatus": String(xhr.status), "ResponseHeaders": responseHeaders, "ResponseBody": responseData}, null); }; // 回調函數返回解析結果;
            };

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 將 <label> 標簽顯示内容恢復為原初狀態;
            try {
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };
        };

        // AJAX 過程結束，此時觸發 .onloadend 事件;
        xhr.onloadend = function () {

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 將 <label> 標簽顯示内容恢復為原初狀態;
            try {
                let label_innerText = "「 response end. 」";  // Math.round();
                // let label_innerText = "「 response data downloaded successful: < " + parseInt(Event.lengthComputable / 1000) + " > characters. 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };
        };

        // 設置上傳文件方式的選擇開關;
        switch (Branch_Switch) {

            case "get": {
                // Branch_Switch = "get" 表示使用 "get" 方法發送請求，不上傳本地文件;
                // const file_input_array = UpLoad_Data;  // 獲取上傳的文件流字節，結果是一個一維數組;
                // let form_data = new FormData(file_input_array);  // 實例化一個表單數據對象"FormData"，用來獲取上傳表單的值;
                // for (let i = 0; i < file_input_array.length; i++) {
                //     form_data.append("files_array[" + i + "]", file_input_array[i]);
                // };
                // let body = form_data;
                let UpLoad_url_complete = UpLoad_url + UpLoad_Data;
    
                xhr.open("get", UpLoad_url_complete, true);  // 用於創建 HTTP 請求，.open()方法只是創建請求並未發送發送請求，open(method:string, url:string, async?:boolean=true, username?:string, password: string);
                xhr.withCredentials = true;  // 用於跨域請求時將 cookie 加入到 request header;
                xhr.responseType = "text";  // 用於指定返回的響應數據類型，.responseType = "text", "json", "blob", "arraybuffer", "moz-chunked-arraybuffer", "document";

                // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept", "*/*");  // 客戶端能接受的資源類型 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' ;
                // xhr.setRequestHeader("Content-type", "text/plain; charset=UTF-8");  // post 請求需要設置的 type 值，'application/x-www-form-urlencoded; charset=utf-8';
                // xhr.setRequestHeader("Accept-Charset", "utf-8");  // 瀏覽器告訴服務器自己能接受的字符編碼;
                // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");  // 客戶端能接收的壓縮數據的類型;
                // xhr.setRequestHeader("Accept-Language", "zh-Hant-TW; q=0.8, zh-Hant; q=0.7, zh-Hans-CN; q=0.7, zh-Hans; q=0.5, en-US, en; q=0.3");  // 客戶端能接受的自然語言類型;
                // xhr.setRequestHeader("Transfer-Encoding", "chunked");
                // xhr.setRequestHeader("Cookie", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept-xxx", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                xhr.setRequestHeader("Authorization", request_Authorization_Base64);  // 服務器訪問密碼參數；使用自定義函數對字符串進行base64編解碼，解碼：str = new Base64().decode(base64)，編碼：base64 = new Base64().encode(str);
                // xhr.setRequestHeader("Cache-Control", "no-cache");  // 'max-age=0' 或 no-store, must-revalidate 設置不允許瀏覽器緩存，必須刷新數據;
                // xhr.setRequestHeader("If-Modified-Since", new Date().toLocaleString('chinese', { hour12: false }));  // 緩存時間;
                // xhr.setRequestHeader("Connection", "close");  // 'keep-alive' 維持客戶端和服務端的鏈接關係，當一個網頁打開完成後，客戶端和服務器之間用於傳輸 HTTP 數據的 TCP 鏈接不會關閉，如果客戶端再次訪問這個服務器上的網頁，會繼續使用這一條已經建立的鏈接;
                // xhr.setRequestHeader("Referer", "http://localhost");  // 告訴服務器這個請求是從哪裏鏈接過來的;
                // xhr.setRequestHeader("Upgrade", "HTTP/1.0, HTTP/1.1, HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11");  // 向服務器指定某種傳輸協議;
                // xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");  // 客戶端版本號的名字 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36';
                xhr.setRequestHeader("From", "user@email.com");  // 發送請求用戶的 Email 地址;
                // xhr.setRequestHeader("Date", String(new Date().toLocaleString('chinese', { hour12: false })));  // 客戶端請求服務端的時間;

                let bodyByteLength = 0;
                for (let i = 0; i < body.length; i++) {
                    let c = body.charCodeAt(i);
                    // 判斷單字節加 1 ，雙字節 加 2;
                    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                        bodyByteLength = bodyByteLength + 1;
                    } else {
                        bodyByteLength = bodyByteLength + 2;
                    };
                };
                // xhr.setRequestHeader("Content-Length", bodyByteLength);  // 客戶端發送的請求數據長度;

                try {
                    // tryCode - 嘗試執行代碼塊;
                    xhr.send(null);  // send(body); send(body?:Object=null);
                } catch (error) {
                    // catchCode - 捕獲錯誤的代碼塊;
                    console.log(error);
                } finally {
                    // finallyCode - 無論 try-catch 結果如何都會執行的代碼塊;
                };

                break;
            };

            case "post": {
                // Branch_Switch = "post" 表示使用 "FormData" 對象選擇上傳本地文件;
                // const file_input_array = UpLoad_Data;  // 獲取上傳的文件流字節，結果是一個一維數組;
                // let form_data = new FormData(file_input_array);  // 實例化一個表單數據對象"FormData"，用來獲取上傳表單的值;
                // for (let i = 0; i < file_input_array.length; i++) {
                //     form_data.append("files_array[" + i + "]", file_input_array[i]);
                // };
                // let body = form_data;
                let body = UpLoad_Data;  // 獲取上傳的文件流字節，結果是一個一維數組;

                xhr.open("post", UpLoad_url, true);  // 用於創建 HTTP 請求，.open()方法只是創建請求並未發送發送請求，open(method:string, url:string, async?:boolean=true, username?:string, password: string);
                xhr.withCredentials = true;  // 用於跨域請求時將 cookie 加入到 request header;
                xhr.responseType = "text",  // 用於指定返回的響應數據類型，.responseType = "text", "json", "blob", "arraybuffer", "moz-chunked-arraybuffer", "document";

                // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept", "*/*");  // 客戶端能接受的資源類型 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' ;
                xhr.setRequestHeader("Content-type", "text/plain; charset=UTF-8");  // post 請求需要設置的 type 值，'application/x-www-form-urlencoded; charset=utf-8';
                // xhr.setRequestHeader("Accept-Charset", "utf-8");  // 瀏覽器告訴服務器自己能接受的字符編碼;
                // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");  // 客戶端能接收的壓縮數據的類型;
                // xhr.setRequestHeader("Accept-Language", "zh-Hant-TW; q=0.8, zh-Hant; q=0.7, zh-Hans-CN; q=0.7, zh-Hans; q=0.5, en-US, en; q=0.3");  // 客戶端能接受的自然語言類型;
                // xhr.setRequestHeader("Transfer-Encoding", "chunked");
                // xhr.setRequestHeader("Cookie", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept-xxx", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                xhr.setRequestHeader("Authorization", request_Authorization_Base64);  // 服務器訪問密碼參數；使用自定義函數對字符串進行base64編解碼，解碼：str = new Base64().decode(base64)，編碼：base64 = new Base64().encode(str);
                // xhr.setRequestHeader("Cache-Control", "no-cache");  // 'max-age=0' 或 no-store, must-revalidate 設置不允許瀏覽器緩存，必須刷新數據;
                // xhr.setRequestHeader("If-Modified-Since", new Date().toLocaleString('chinese', { hour12: false }));  // 緩存時間;
                // xhr.setRequestHeader("Connection", "close");  // 'keep-alive' 維持客戶端和服務端的鏈接關係，當一個網頁打開完成後，客戶端和服務器之間用於傳輸 HTTP 數據的 TCP 鏈接不會關閉，如果客戶端再次訪問這個服務器上的網頁，會繼續使用這一條已經建立的鏈接;
                // xhr.setRequestHeader("Referer", "http://localhost");  // 告訴服務器這個請求是從哪裏鏈接過來的;
                // xhr.setRequestHeader("Upgrade", "HTTP/1.0, HTTP/1.1, HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11");  // 向服務器指定某種傳輸協議;
                // xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");  // 客戶端版本號的名字 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36';
                xhr.setRequestHeader("From", "user@email.com");  // 發送請求用戶的 Email 地址;
                // xhr.setRequestHeader("Date", String(new Date().toLocaleString('chinese', { hour12: false })));  // 客戶端請求服務端的時間;

                let bodyByteLength = 0;
                for (let i = 0; i < body.length; i++) {
                    let c = body.charCodeAt(i);
                    // 判斷單字節加 1 ，雙字節 加 2;
                    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                        bodyByteLength = bodyByteLength + 1;
                    } else {
                        bodyByteLength = bodyByteLength + 2;
                    };
                };
                // xhr.setRequestHeader("Content-Length", bodyByteLength);  // 客戶端發送的請求數據長度;

                try {
                    // tryCode - 嘗試執行代碼塊;
                    xhr.send(body);  // send(null), send(body?:Object=null);
                } catch (error) {
                    // catchCode - 捕獲錯誤的代碼塊;
                    console.log(error);
                } finally {
                    // finallyCode - 無論 try-catch 結果如何都會執行的代碼塊;
                };

                break;
            };

            case "form": {
                // Branch_Switch = "form" 表示使用 "FormData" 對象上傳表單的值;
                let form = document.getElementById('myform');

                form.addEventListener("submit", function (event) {

                    let form_data = new FormData(form);  // 實例化一個表單數據對象"FormData"，用來獲取上傳表單的值;
                    form_data.append('username', '张三');  // 添加表單項;
                    form_data.append('id', 123456);
                    event.preventDefault();  // 阻止默認的表單提交;
                    let body = form_data;

                    xhr.open(form.method, form.action);  // 用於創建 HTTP 請求，.open()方法只是創建請求並未發送發送請求，open(method:string, url:string, async?:boolean=true, username?:string, password: string);
                    xhr.withCredentials = true;  // 用於跨域請求時將 cookie 加入到 request header;
                    xhr.responseType = "text";  // 用於指定返回的響應數據類型，.responseType = "text", "json", "blob", "arraybuffer", "moz-chunked-arraybuffer", "document";

                    // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                    // xhr.setRequestHeader("Accept", "*/*");  // 客戶端能接受的資源類型 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' ;
                    xhr.setRequestHeader("Content-type", "text/plain; charset=UTF-8");  // post 請求需要設置的 type 值，'application/x-www-form-urlencoded; charset=utf-8';
                    // xhr.setRequestHeader("Accept-Charset", "utf-8");  // 瀏覽器告訴服務器自己能接受的字符編碼;
                    // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");  // 客戶端能接收的壓縮數據的類型;
                    // xhr.setRequestHeader("Accept-Language", "zh-Hant-TW; q=0.8, zh-Hant; q=0.7, zh-Hans-CN; q=0.7, zh-Hans; q=0.5, en-US, en; q=0.3");  // 客戶端能接受的自然語言類型;
                    // xhr.setRequestHeader("Transfer-Encoding", "chunked");
                    // xhr.setRequestHeader("Cookie", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                    // xhr.setRequestHeader("Accept-xxx", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                    xhr.setRequestHeader("Authorization", request_Authorization_Base64);  // 服務器訪問密碼參數；使用自定義函數對字符串進行base64編解碼，解碼：str = new Base64().decode(base64)，編碼：base64 = new Base64().encode(str);
                    // xhr.setRequestHeader("Cache-Control", "no-cache");  // 'max-age=0' 或 no-store, must-revalidate 設置不允許瀏覽器緩存，必須刷新數據;
                    // xhr.setRequestHeader("If-Modified-Since", new Date().toLocaleString('chinese', { hour12: false }));  // 緩存時間;
                    // xhr.setRequestHeader("Connection", "close");  // 'keep-alive' 維持客戶端和服務端的鏈接關係，當一個網頁打開完成後，客戶端和服務器之間用於傳輸 HTTP 數據的 TCP 鏈接不會關閉，如果客戶端再次訪問這個服務器上的網頁，會繼續使用這一條已經建立的鏈接;
                    // xhr.setRequestHeader("Referer", "http://localhost");  // 告訴服務器這個請求是從哪裏鏈接過來的;
                    // xhr.setRequestHeader("Upgrade", "HTTP/1.0, HTTP/1.1, HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11");  // 向服務器指定某種傳輸協議;
                    // xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");  // 客戶端版本號的名字 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36';
                    xhr.setRequestHeader("From", "user@email.com");  // 發送請求用戶的 Email 地址;
                    // xhr.setRequestHeader("Date", String(new Date().toLocaleString('chinese', { hour12: false })));  // 客戶端請求服務端的時間;

                    let bodyByteLength = 0;
                    for (let i = 0; i < body.length; i++) {
                        let c = body.charCodeAt(i);
                        // 判斷單字節加 1 ，雙字節 加 2;
                        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                            bodyByteLength = bodyByteLength + 1;
                        } else {
                            bodyByteLength = bodyByteLength + 2;
                        };
                    };
                    // xhr.setRequestHeader("Content-Length", bodyByteLength);  // 客戶端發送的請求數據長度;

                    try {
                        // tryCode - 嘗試執行代碼塊;
                        xhr.send(body);  // send(null), send(body?:Object=null);
                    } catch (error) {
                        // catchCode - 捕獲錯誤的代碼塊;
                        console.log(error);
                    } finally {
                        // finallyCode - 無論 try-catch 結果如何都會執行的代碼塊;
                    };

                }, false);

                break;
            };

            case "file": {
                // Branch_Switch = "file" 表示使用 "FormData" 對象選擇上傳本地文件;
                const file_input_array = UpLoad_Data;  // 獲取上傳的文件流字節，結果是一個一維數組;
                let form_data = new FormData(file_input_array);  // 實例化一個表單數據對象"FormData"，用來獲取上傳表單的值;
                for (let i = 0; i < file_input_array.length; i++) {
                    form_data.append("files_array[" + i + "]", file_input_array[i]);
                };
                let body = form_data;

                xhr.open("post", UpLoad_url, true);  // 用於創建 HTTP 請求，.open()方法只是創建請求並未發送發送請求，open(method:string, url:string, async?:boolean=true, username?:string, password: string);
                xhr.withCredentials = true;  // 用於跨域請求時將 cookie 加入到 request header;
                xhr.responseType = "text";  // 用於指定返回的響應數據類型，.responseType = "text", "json", "blob", "arraybuffer", "moz-chunked-arraybuffer", "document";

                // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept", "*/*");  // 客戶端能接受的資源類型 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' ;
                xhr.setRequestHeader("Content-type", "text/plain; charset=UTF-8");  // post 請求需要設置的 type 值，'application/x-www-form-urlencoded; charset=utf-8';
                // xhr.setRequestHeader("Accept-Charset", "utf-8");  // 瀏覽器告訴服務器自己能接受的字符編碼;
                // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");  // 客戶端能接收的壓縮數據的類型;
                // xhr.setRequestHeader("Accept-Language", "zh-Hant-TW; q=0.8, zh-Hant; q=0.7, zh-Hans-CN; q=0.7, zh-Hans; q=0.5, en-US, en; q=0.3");  // 客戶端能接受的自然語言類型;
                // xhr.setRequestHeader("Transfer-Encoding", "chunked");
                // xhr.setRequestHeader("Cookie", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept-xxx", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                xhr.setRequestHeader("Authorization", request_Authorization_Base64);  // 服務器訪問密碼參數；使用自定義函數對字符串進行base64編解碼，解碼：str = new Base64().decode(base64)，編碼：base64 = new Base64().encode(str);
                // xhr.setRequestHeader("Cache-Control", "no-cache");  // 'max-age=0' 或 no-store, must-revalidate 設置不允許瀏覽器緩存，必須刷新數據;
                // xhr.setRequestHeader("If-Modified-Since", new Date().toLocaleString('chinese', { hour12: false }));  // 緩存時間;
                // xhr.setRequestHeader("Connection", "close");  // 'keep-alive' 維持客戶端和服務端的鏈接關係，當一個網頁打開完成後，客戶端和服務器之間用於傳輸 HTTP 數據的 TCP 鏈接不會關閉，如果客戶端再次訪問這個服務器上的網頁，會繼續使用這一條已經建立的鏈接;
                // xhr.setRequestHeader("Referer", "http://localhost");  // 告訴服務器這個請求是從哪裏鏈接過來的;
                // xhr.setRequestHeader("Upgrade", "HTTP/1.0, HTTP/1.1, HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11");  // 向服務器指定某種傳輸協議;
                // xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");  // 客戶端版本號的名字 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36';
                xhr.setRequestHeader("From", "user@email.com");  // 發送請求用戶的 Email 地址;
                // xhr.setRequestHeader("Date", String(new Date().toLocaleString('chinese', { hour12: false })));  // 客戶端請求服務端的時間;

                let bodyByteLength = 0;
                for (let i = 0; i < body.length; i++) {
                    let c = body.charCodeAt(i);
                    // 判斷單字節加 1 ，雙字節 加 2;
                    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                        bodyByteLength = bodyByteLength + 1;
                    } else {
                        bodyByteLength = bodyByteLength + 2;
                    };
                };
                // xhr.setRequestHeader("Content-Length", bodyByteLength);  // 客戶端發送的請求數據長度;

                try {
                    // tryCode - 嘗試執行代碼塊;
                    xhr.send(body);  // send(null), send(body?:Object=null);
                } catch (error) {
                    // catchCode - 捕獲錯誤的代碼塊;
                    console.log(error);
                } finally {
                    // finallyCode - 無論 try-catch 結果如何都會執行的代碼塊;
                };

                break;
            };

            case "ArrayBuffer": {
                // Branch_Switch = "ArrayBuffer"，"Uint8Array" 表示以類型化數組8位無符號整數"Uint8Array"的形式向服務器AJAX發送數據;
                const myArray = new ArrayBuffer(UpLoad_Data);
                let longInt8View = new Uint8Array(myArray);
                // generate some data
                for (let i = 0; i < longInt8View.length; i++) {
                    longInt8View[i] = i % 256;
                }
                let body = myArray;

                xhr.open("post", UpLoad_url, true);  // 用於創建 HTTP 請求，.open()方法只是創建請求並未發送發送請求，open(method:string, url:string, async?:boolean=true, username?:string, password: string);
                xhr.withCredentials = true;  // 用於跨域請求時將 cookie 加入到 request header;
                xhr.responseType = "arraybuffer";  // 用於指定返回的響應數據類型，.responseType = "text", "json", "blob", "arraybuffer", "moz-chunked-arraybuffer", "document";

                // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept", "*/*");  // 客戶端能接受的資源類型 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' ;
                xhr.setRequestHeader("Content-type", "text/plain; charset=UTF-8");  // post 請求需要設置的 type 值，'application/x-www-form-urlencoded; charset=utf-8';
                // xhr.setRequestHeader("Accept-Charset", "utf-8");  // 瀏覽器告訴服務器自己能接受的字符編碼;
                // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");  // 客戶端能接收的壓縮數據的類型;
                // xhr.setRequestHeader("Accept-Language", "zh-Hant-TW; q=0.8, zh-Hant; q=0.7, zh-Hans-CN; q=0.7, zh-Hans; q=0.5, en-US, en; q=0.3");  // 客戶端能接受的自然語言類型;
                // xhr.setRequestHeader("Transfer-Encoding", "chunked");
                // xhr.setRequestHeader("Cookie", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept-xxx", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                xhr.setRequestHeader("Authorization", request_Authorization_Base64);  // 服務器訪問密碼參數；使用自定義函數對字符串進行base64編解碼，解碼：str = new Base64().decode(base64)，編碼：base64 = new Base64().encode(str);
                // xhr.setRequestHeader("Cache-Control", "no-cache");  // 'max-age=0' 或 no-store, must-revalidate 設置不允許瀏覽器緩存，必須刷新數據;
                // xhr.setRequestHeader("If-Modified-Since", new Date().toLocaleString('chinese', { hour12: false }));  // 緩存時間;
                // xhr.setRequestHeader("Connection", "close");  // 'keep-alive' 維持客戶端和服務端的鏈接關係，當一個網頁打開完成後，客戶端和服務器之間用於傳輸 HTTP 數據的 TCP 鏈接不會關閉，如果客戶端再次訪問這個服務器上的網頁，會繼續使用這一條已經建立的鏈接;
                // xhr.setRequestHeader("Referer", "http://localhost");  // 告訴服務器這個請求是從哪裏鏈接過來的;
                // xhr.setRequestHeader("Upgrade", "HTTP/1.0, HTTP/1.1, HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11");  // 向服務器指定某種傳輸協議;
                // xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");  // 客戶端版本號的名字 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36';
                xhr.setRequestHeader("From", "user@email.com");  // 發送請求用戶的 Email 地址;
                // xhr.setRequestHeader("Date", String(new Date().toLocaleString('chinese', { hour12: false })));  // 客戶端請求服務端的時間;

                let bodyByteLength = 0;
                for (let i = 0; i < body.length; i++) {
                    let c = body.charCodeAt(i);
                    // 判斷單字節加 1 ，雙字節 加 2;
                    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                        bodyByteLength = bodyByteLength + 1;
                    } else {
                        bodyByteLength = bodyByteLength + 2;
                    };
                };
                // xhr.setRequestHeader("Content-Length", bodyByteLength);  // 客戶端發送的請求數據長度;

                try {
                    // tryCode - 嘗試執行代碼塊;
                    xhr.send(body);  // send(null), send(body?:Object=null);
                } catch (error) {
                    // catchCode - 捕獲錯誤的代碼塊;
                    console.log(error);
                } finally {
                    // finallyCode - 無論 try-catch 結果如何都會執行的代碼塊;
                };

                break;
            };

            case "Blob": {
                // Branch_Switch = "Blob" 表示以二進制binary對象"Blob"的形式向服務器AJAX發送數據;
                let blob = new Blob([UpLoad_Data], { type: "text/plain, charset=UTF-8" });  // { type: "text/csv,charset=UTF-8" } { type: "text/html,charset=UTF-8" } { type: "image/png" };
                let body = blob;

                xhr.open("post", UpLoad_url, true);  // 用於創建 HTTP 請求，.open()方法只是創建請求並未發送發送請求，open(method:string, url:string, async?:boolean=true, username?:string, password: string);
                xhr.withCredentials = true;  // 用於跨域請求時將 cookie 加入到 request header;
                xhr.responseType = "arraybuffer";  // 用於指定返回的響應數據類型，.responseType = "text", "json", "blob", "arraybuffer", "moz-chunked-arraybuffer", "document";

                // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept", "*/*");  // 客戶端能接受的資源類型 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' ;
                xhr.setRequestHeader("Content-type", "text/plain; charset=UTF-8");  // post 請求需要設置的 type 值，'application/x-www-form-urlencoded; charset=utf-8';
                // xhr.setRequestHeader("Accept-Charset", "utf-8");  // 瀏覽器告訴服務器自己能接受的字符編碼;
                // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");  // 客戶端能接收的壓縮數據的類型;
                // xhr.setRequestHeader("Accept-Language", "zh-Hant-TW; q=0.8, zh-Hant; q=0.7, zh-Hans-CN; q=0.7, zh-Hans; q=0.5, en-US, en; q=0.3");  // 客戶端能接受的自然語言類型;
                // xhr.setRequestHeader("Transfer-Encoding", "chunked");
                // xhr.setRequestHeader("Cookie", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                // xhr.setRequestHeader("Accept-xxx", "");  // 添加AJAX過程發送的請求頭(header)信息，必須為字符串(string)數據，xhr.setRequestHeader("header_key", "value");
                xhr.setRequestHeader("Authorization", request_Authorization_Base64);  // 服務器訪問密碼參數；使用自定義函數對字符串進行base64編解碼，解碼：str = new Base64().decode(base64)，編碼：base64 = new Base64().encode(str);
                // xhr.setRequestHeader("Cache-Control", "no-cache");  // 'max-age=0' 或 no-store, must-revalidate 設置不允許瀏覽器緩存，必須刷新數據;
                // xhr.setRequestHeader("If-Modified-Since", new Date().toLocaleString('chinese', { hour12: false }));  // 緩存時間;
                // xhr.setRequestHeader("Connection", "close");  // 'keep-alive' 維持客戶端和服務端的鏈接關係，當一個網頁打開完成後，客戶端和服務器之間用於傳輸 HTTP 數據的 TCP 鏈接不會關閉，如果客戶端再次訪問這個服務器上的網頁，會繼續使用這一條已經建立的鏈接;
                // xhr.setRequestHeader("Referer", "http://localhost");  // 告訴服務器這個請求是從哪裏鏈接過來的;
                // xhr.setRequestHeader("Upgrade", "HTTP/1.0, HTTP/1.1, HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11");  // 向服務器指定某種傳輸協議;
                // xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");  // 客戶端版本號的名字 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36';
                xhr.setRequestHeader("From", "user@email.com");  // 發送請求用戶的 Email 地址;
                // xhr.setRequestHeader("Date", String(new Date().toLocaleString('chinese', { hour12: false })));  // 客戶端請求服務端的時間;

                let bodyByteLength = 0;
                for (let i = 0; i < body.length; i++) {
                    let c = body.charCodeAt(i);
                    // 判斷單字節加 1 ，雙字節 加 2;
                    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                        bodyByteLength = bodyByteLength + 1;
                    } else {
                        bodyByteLength = bodyByteLength + 2;
                    };
                };
                // xhr.setRequestHeader("Content-Length", bodyByteLength);  // 客戶端發送的請求數據長度;

                try {
                    // tryCode - 嘗試執行代碼塊;
                    xhr.send(body);  // send(null), send(body?:Object=null);
                } catch (error) {
                    // catchCode - 捕獲錯誤的代碼塊;
                    console.log(error);
                } finally {
                    // finallyCode - 無論 try-catch 結果如何都會執行的代碼塊;
                };

                break;
            };

            default: {
                alert('AJAX 過程請求類型 ( "get", "post" ~ ["form", "file", "ArrayBuffer", "Blob"] ) 設定無法識別.');
                // break;
            };
        };
    };

    return;
};

function UpLoad_From_Disk_Use_AJAX(
    url_string,
    abort_button_id_string,
    show_label_id,
    textarea_path_or_URL_id,
    callback
){
    // 使用 AJAX 方法 XMLHttpRequest() 上傳本地硬盤文件;

    let url = url_string;

    // 首先檢查網頁中是否已經存在之前添加的用於導入文件的輸入框(input)元素，如果已經存在，則直接點擊，如果網頁中不存在，則在網頁中添加隱藏的輸入框(input)元素，並鼠標左鍵點擊，運行該輸入框(input)元素;
    if (window.document.getElementById("file_input")) {
        window.document.getElementById("file_input").click();  // 獲取文件輸入框標簽<iniput id="Data_From_Hard_Disk_To_Memory_Temporary_Input" type="file" accept="text/csv, text/html, text/xml">，並點擊啓動;
    } else {
        // 新建一個網頁上載文件標簽<iniput type="file">，並初始化配置;
        const input_element = window.document.createElement("input");
        input_element.setAttribute("id", "file_input");
        input_element.setAttribute("type", "file");
        input_element.setAttribute("accept", "text/csv, text/html, text/xml");  // "accept", "text/html,text/xml,text/csv,application/xml,application/xhtml+xml,application/vnd.ms-excel,application/msword,image/gif,image/jpeg,image/png,image/jpg,text/javascript,text/css,application/javascript,application/json,application/pdf,application/vnd.ms-powerpoint,application/vnd.ms-works,application/xhtml+xml,application/zip";
        input_element.setAttribute("webkitdirectory", "webkitdirectory");  // 設置 "webkitdirectory" 參數使 "input" 控件可以選擇文件夾;
        //input_element.multiple = "multiple";
        input_element.style.display = "none";
        input_element.innerHTML = "Select files from local disk";
        // input_element.setAttribute("onchange", "javascript: select_files_upload()");
        // input_element.setAttribute("onpropertychange", "select_files_upload()");
        // input_element.setAttribute("onclick", "javascript: select_files_upload()");

        // 添加到網頁<div id=button_div>元素中，並點擊啓動;
        if (input_div === null) { input_div = window.document.body; };
        input_div.appendChild(input_element);
        window.document.getElementById("file_input").click();
    };

    if (window.document.getElementById("file_input").value != "") {
        let file_input_array = window.document.getElementById("file_input").files;

        for (let i = 0; i < file_input_array.length; i++) {
            console.log("「 < " + file_input_array[i].name + " >. < " + Math.round(parsetInt(file_input_array[i].size) / 1000) + " > KiloByte. 」");
            // let Extension = file_input_array[i].name.split('.').pop();  // 首先使用 .files[0].name 方法獲取上傳的文件全 名，然後再使用 .split('.').pop() 方法截取獲得文件擴展名，然後再根據擴展名確定文件的類型，從而針對不同類型的文件選擇特定的解析方法;
        };

        function getInputURL(file) {
            let url = "";
            if (window.createObjcectURL !== undefined) {
                url = window.createOjcectURL(file);
            } else if (window.URL !== undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL !== undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
            window.URL.revokeObjectURL(url); // 釋放内存 url;
        };
        let file_input_path = "";
        let label = "";

        for (let i = 0; i < file_input_array.length; i++) {
            file_input_path = getInputURL(file_input_array[i]);  // 使用自定義函數 getInputURL(file_input) 獲取上傳文件路徑;
            label = label + "「 " + file_input_array[i].name + ", " + Math.round(parsetInt(file_input_array[i].size) / 1000) + " ( KiloByte )" + ", " + file_input_path + ". 」";;
            // file_input_array[i].type;  // 文件的 MIME 類型;
            // file_input_array[i].lastModifiedDate;  // 文件最近一次修改的日期;
            console.log(label);
        };

        if (label_div !== null) {
            label_div.style.display = "block";
            if (window.document.getElementById("show_label")) {
                let label_element = window.document.getElementById("show_label");
                label_element.removeAttribute("hidden");
                label_element.lang = "zh";
                label_element.translate = "yes";
                label_element.innerText = label;
            } else {
                let label_element = window.document.createElement("label");
                label_element.setAttribute("id", "show_label");
                label_element.contentEditable = "false";
                label_element.lang = "zh";
                label_element.translate = "yes";
                label_element.innerText = label;
                label_div.appendChild(label_element);
            };
        };

        if (textarea_div !== null) {
            textarea_div.style.display = "block";
            if (window.document.getElementById("textarea_import_file_from_local_harddisk")) {
                let textarea_element = window.document.getElementById("textarea_import_file_from_local_harddisk");
                textarea_element.style.readonly = "true";  // 將網頁文本輸入框為只讀不可修改;
                // textarea_element.removeAttribute("hidden");
                textarea_element.value = file_input_path;
                // file_input.type;  // 文件的 MIME 類型;
                // file_input.lastModifiedDate;  // 文件最近一次修改的日期;
            } else {
                let textarea_element = window.document.createElement("textarea");
                textarea_element.setAttribute("id", "textarea_import_file_from_local_harddisk");
                textarea_element.style.readonly = "true";
                // textarea_element.removeAttribute("hidden");
                textarea_element.lang = "zh";
                textarea_element.translate = "yes";
                textarea_element.value = file_input_path;
                textarea_div.appendChild(textarea_element);
            };
        };


        use_AJAX(
            "file",
            file_input_array,
            url,
            "",
            abort_button_id_string,
            show_label_id,
            // textarea_path_or_URL_id,
            (error, result) => {
            if (callback) {
                callback(null, null);
            };
        });

    };
};

// 使用網頁 new FileReader() 對象，自定義封裝將文件讀取到内存的函數;
function File_Reader(
    file_Blob,  // type 'Blob';
    abort_button_id_string,
    show_label_id,
    // textarea_path_or_URL_id,
    callback
){
    // 使用網頁 new FileReader() 對象，自定義封裝將文件讀取到内存的函數;
    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader

    let abort_button_id = "";
    if (typeof (abort_button_id_string) === "undefined" || abort_button_id_string === null || abort_button_id_string === NaN || abort_button_id_string === "") {
        abort_button_id = "";
    } else {
        abort_button_id = abort_button_id_string;
    };

    let file_input = null;
    if (typeof (file_Blob) === "undefined" || file_Blob === null || file_Blob === NaN || file_Blob === "") {
        console.log("未傳入參數 file_Blob 將要讀取的文件.");
        console.log(file_Blob);
        file_input = null;
    } else {
        file_input = file_Blob;
    };

    if (typeof (file_input) === "undefined" || file_input === null || file_input === NaN) {

        console.log("參數 file_Blob 文件錯誤.");
        if (callback) { callback("parameter file_Blob blank.", null); };

    } else {

        // 記錄文檔讀取進度百分比;
        let file_loaded_size = 0;

        // 暫存啓動按鈕元素初始狀態;
        let button_element = null;
        let button_element_onclick_function = "";
        let button_element_innerText = "";
        let new_button_element = null;

        // 暫存用於提示文件讀取進度和狀態的 show_label_id 標簽的 <label> 内容;
        let initial_label_innerText = "";
        if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
            initial_label_innerText = window.document.getElementById(show_label_id).innerText;
        };

        const file_reader = new FileReader();

        let file_extension_name = "";
        if (typeof (file_input) === "Blob") {
            if (typeof (file_input.name) === "undefined" || file_input.name === null || file_input.name === NaN || file_input.name === "") {
                file_extension_name = "";
            } else {
                file_extension_name = file_input.name.split('.').pop();  // 獲取文件擴展名;
            };
        } else if (Object.prototype.toString.call(file_input) === "[object String]") {
            if (typeof (file_input) === "undefined" || file_input === null || file_input === NaN || file_input === "") {
                file_extension_name = "";
            } else {
                file_extension_name = file_input.split('.').pop();  // 獲取文件擴展名;
            };
        };
        // console.log(file_extension_name);
        // alert(file_extension_name);

        switch (file_extension_name) {
            case "csv": {
                file_reader.readAsText(file_input, "UTF-8");  // .readAsText 表示以文本形式讀取文件，.readAsDataURL 表示以超級鏈接地址形式讀取文件，.csv 文件棌用字符串形式讀取;
                break;
            };
            case "xlsx": {
                file_reader.readAsBinaryString(file_input);  // .readAsBinaryString 表示以二進制形式讀取文件，Excel 文件以二進制形式讀取;
                break;
            };
            case "json": {
                file_reader.readAsText(file_input, "UTF-8");  // .readAsText 表示以文本形式讀取文件，.readAsDataURL 表示以超級鏈接地址形式讀取文件，.json 文件棌用字符串形式讀取;
                break;
            };
            case "txt": {
                file_reader.readAsText(file_input, "UTF-8");  // .readAsText 表示以文本形式讀取文件，.readAsDataURL 表示以超級鏈接地址形式讀取文件，.txt 文件棌用字符串形式讀取;
                break;
            };
            case "html": {
                file_reader.readAsText(file_input, "UTF-8");  // .readAsText 表示以文本形式讀取文件，.readAsDataURL 表示以超級鏈接地址形式讀取文件，.txt 文件棌用字符串形式讀取;
                break;
            };
            case "js": {
                file_reader.readAsText(file_input, "UTF-8");  // .readAsText 表示以文本形式讀取文件，.readAsDataURL 表示以超級鏈接地址形式讀取文件，.txt 文件棌用字符串形式讀取;
                break;
            };
            default: {
                file_reader.readAsBinaryString(file_input);  // .readAsBinaryString 表示以二進制形式讀取文件，除去 Excel 和 .csv 類型的文件之外，其它類型文件默認以二進制形式讀取;
                console.log("文件擴展名不是 ['.xlsx', '.csv', '.json', '.txt', '.html', '.js'] 類型，只支持解析 ['.xlsx', '.csv', '.json', '.txt', '.html', '.js'] 類型的文件.");
                console.log(file_input);
            };
        };

        function abort_reading() {
            file_reader.abort();  // 中斷正在進行的文件導入;
            file_reader = null;
        };

        let data_div_innerHTML = "";
        if (typeof (window.document.getElementById("data_div")) === "undefined" || window.document.getElementById("data_div") === null || window.document.getElementById("data_div") === NaN) {
            data_div_innerHTML = "";
        } else {
            data_div_innerHTML = window.document.getElementById("data_div").innerHTML;
        };

        // 監聽讀取文件啓動事件，當讀取操作開始時調用;
        file_reader.onloadstart = function () {
            // console.log("File upload started...");

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (window.document.getElementById(abort_button_id)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element_onclick_function = button_element.getAttribute("onclick");
                        button_element_innerText = button_element.innerText;
                        button_element.innerText = "Click here to abort load file";
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", "javascript: abort_reading()");
                        if (button_element.getAttribute("disabled")) { button_element.removeAttribute("disabled"); };
                        // button_element.addEventListener("click", function () {file_reader.abort();  // 中斷正在進行的文件導入;});
                    } else {
                        new_button_element = window.document.createElement("button");
                        new_button_element.setAttribute("id", abort_button_id);
                        new_button_element.innerText = "Click here to abort load file";
                        new_button_element.setAttribute("onclick", "javascript: abort_reading()");
                        window.document.body.appendChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 修改 <label> 標簽内容，用於提示文件讀取進度和狀態;
            try {
                let label_innerText = "「 Read file: " + file_input.name + ", Size: " + parseInt(file_input.size / 1000) + " KiloByte, Start upload ... 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    // window.document.getElementById(show_label_id).innerText = initial_label_innerText + label_innerText;
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };
        };

        // 當讀取操作發生錯誤時調用;
        file_reader.onerror = function (Event) {

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 修改 <label> 標簽内容，用於提示文件讀取錯誤狀態;
            try {
                let label_innerText = "「 Select file read error! uploaded: < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + " % >, total: < " + parseInt(file_input.size / 1000) + " > KiloByte. 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                    // window.document.getElementById(show_label_id).innerText = label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            switch (Event.target.error.code) {

                case Event.target.error.NOT_FOUND_ERR: {
                    console.log(Event.target.error.code);
                    console.log("選中文件沒找到.");
                    if (callback) { callback(Event.target.error.code, null); };
                    alert("選中文件沒找到.");
                    break;
                };

                case Event.target.error.NOT_READABLE_ERR: {
                    console.log(Event.target.error.code);
                    console.log("選中文件不可讀.");
                    if (callback) { callback(Event.target.error.code, null); };
                    alert("選中文件不可讀.");
                    break;
                };

                case Event.target.error.ABORT_ERR: {
                    console.log(Event.target.error.code);
                    if (callback) { callback(Event.target.error.code, null); };
                    alert("讀取文件時出錯.");
                    break;
                };

                default: {
                    console.log(vent.target.error);
                    if (callback) { callback(Event.target.error, null); };
                    alert("讀取文件時出錯.");
                };
            };
        };

        // 在讀取數據過程中周期性調用，每隔 50ms 觸發一次 progress 事件;
        file_reader.onprogress = function (Event) {

            file_loaded_size = Event.loaded;

            if (file_loaded_size < file_input.size) {
                // 修改 <label> 標簽内容，用於監測文件讀取進度;
                try {
                    let label_innerText = "「 File reading: < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + " % >, Total: < " + parseInt(file_input.size / 1000) + " > KiloByte. 」";  // Math.round();
                    if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                        // window.document.getElementById(show_label_id).innerText = initial_label_innerText + label_innerText;
                        window.document.getElementById(show_label_id).innerText = label_innerText;
                    };
                } catch (error) {
                    console.log(error);
                } finally {
                    //;
                };
            } else {
                // 將 <label> 標簽顯示内容恢復為原初狀態;
                try {
                    // let label_innerText = "「 File readed: < " + parseInt(file_loaded_size / 1000) + " > KiloByte. 」";  // Math.round();
                    if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                        window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                        // window.document.getElementById(show_label_id).innerText = label_innerText;
                    };
                } catch (error) {
                    console.log(error);
                } finally {
                    //;
                };
            };
        };

        // 監聽中止導入事件，當讀取操作被終止時調用;
        file_reader.onabort = function (Event) {
            console.log("Upload file aborted.");
            console.log(file_input.name + ", uploaded: < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + "% >, total size: < " + parseInt(file_input.size / 1000) + " > KiloByte.");  // Math.round();

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 將 <label> 標簽顯示内容恢復為原初狀態;
            try {
                // let label_innerText = "「 File readed: " + file_input.name + " aborted, uploaded: < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + "% >, total size: < " + parseInt(file_input.size / 1000) + " > KiloByte. 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                    // window.document.getElementById(show_label_id).innerText = label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // if (callback) { callback(Event, null); };
            if (callback) { callback("abort with [Ctrl] + [c].", null); };
        };

        // 監聽導入成功事件，當讀取操作成功完成時調用;
        file_reader.onload = function (Event) {
            // console.log("File uploaded success.");
            // console.log(file_input.name + " uploaded: < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + "% >, total size: < " + parseInt(file_input.size / 1000) + " > KiloByte.");  // Math.round();

            // if (!window.console) {
            //   window.console = { log: function () { } };
            // } else {
            //   window.console.log(Event.target.result);
            // };
            // alert(Event.target.result);
            // alert(typeof Event.target.result);

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 將 <label> 標簽顯示内容恢復為原初狀態;
            try {
                let label_innerText = "「 File read success: " + file_input.name + ", < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + " % >, Total: < " + parseInt(file_input.size / 1000) + " > KiloByte. 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    window.document.getElementById(show_label_id).innerText = label_innerText;
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            if (callback) { callback(null, Event.target.result); };
        };

        // 當讀取操作停止時調用，無論成功或失敗或是被終止;
        file_reader.onloadend = function () {
            // console.log("File upload end.");
            // console.log(file_input.name + ", uploaded: < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + "% >, total size: < " + parseInt(file_input.size / 1000) + " > KiloByte.");  // Math.round();

            // 修改或添加點擊中斷讀取文件按鈕 <buttno> 標簽的狀態内容，用於提示激活文件讀取程序的入口;
            try {
                if (!(typeof (abort_button_id) === "undefined" || abort_button_id === null || abort_button_id === NaN || abort_button_id === "")) {
                    if (!(typeof (button_element) === "undefined" || button_element === null || button_element === NaN)) {
                        button_element = window.document.getElementById(abort_button_id);
                        button_element.removeAttribute("onclick");
                        button_element.setAttribute("onclick", button_element_onclick_function);
                        button_element.innerText = button_element_innerText;
                        // button_element.setAttribute("disabled", "disabled");
                    } else if (!(typeof (new_button_element) === "undefined" || new_button_element === null || new_button_element === NaN)) {
                        new_button_element = window.document.getElementById(abort_button_id);
                        window.document.body.removeChild(new_button_element);
                    };
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };

            // 將 <label> 標簽顯示内容恢復為原初狀態;
            try {
                // let label_innerText = "「 File read end: " + file_input.name + ", < " + parseInt(file_loaded_size / 1000) + " > KiloByte, < " + parseInt(file_loaded_size / file_input.size * 100) + " % >, Total: < " + parseInt(file_input.size / 1000) + " > KiloByte. 」";  // Math.round();
                if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                    // window.document.getElementById(show_label_id).innerText = label_innerText;
                    window.document.getElementById(show_label_id).innerText = initial_label_innerText;
                };
            } catch (error) {
                console.log(error);
            } finally {
                //;
            };
        };
    };
};

function File_Input_From_Disk(
    filePath,
    abort_button_id_string,
    show_label_id,
    textarea_path_or_URL_id,
    callback
){
    // 使用網頁 <input type="file"> 元素和 JavaScript 的 FileReader() 對象獲取本地硬盤文件;
    // 參數 abort_button_id_string 是一個字符串，是一個網頁按鈕<button>元素的 id 值，因爲讀取硬盤文件「fileRead()」是一個異步IO長時間持續過程，因此可以在讀取的中間階段，進行中斷停止讀取操作，這個參數就是將這個功能傳遞到這個按鈕元素上用於點擊激發;

    // let abort_button_id = abort_button_id_string;
    let abort_button_id = "";
    if (typeof (abort_button_id_string) === "undefined" || abort_button_id_string === null || abort_button_id_string === NaN || abort_button_id_string === "") {
        abort_button_id = "";
    } else {
        abort_button_id = abort_button_id_string;
    };

    // let file_input_parentNode = window.document.body;  // 聲明一個變量，用於.appendChild("input") 移入瀏覽器上傳對話框鏈接<input type="file">的父元素;
    let file_input_parentNode = window.document.getElementById("operation_div");  // 聲明一個變量，用於.appendChild("input") 移入瀏覽器上傳對話框鏈接<input type="file">的父元素;

    let file_path = "";  // 對話框默認的打開文件夾路徑，在瀏覽器中不支持，只能在 Electron 中使用;
    if (typeof (filePath) === "undefined" || filePath === null || filePath === NaN || filePath === "") {
        file_path = "";
    } else {
        file_path = filePath;
    };

    // 首先檢查網頁中是否已經存在之前添加的用於導入文件的輸入框(input)元素，如果已經存在，則直接點擊，如果網頁中不存在，則在網頁中添加隱藏的輸入框(input)元素，並鼠標左鍵點擊，運行該輸入框(input)元素;
    let input_element = null;
    let input_onchange_value = "";  // 用於暫存<input type="file">標簽"onchange"屬性的原始值，當讀取完文件時用於復原<input type="file">標簽;
    if (window.document.getElementById("file_input") !== null) {
        input_element = window.document.getElementById("file_input");  // 獲取文件輸入框標簽<iniput id="Data_From_Hard_Disk_To_Memory_Temporary_Input" type="file" accept="text/csv, text/html, text/xml">;
        if (typeof (window.document.getElementById("file_input").getAttribute("onchange")) === "undefined" || window.document.getElementById("file_input").getAttribute("onchange") === null || window.document.getElementById("file_input").getAttribute("onchange") === NaN || window.document.getElementById("file_input").getAttribute("onchange") === "") {
            input_onchange_value = "";
        } else {
            input_onchange_value = window.document.getElementById("file_input").getAttribute("onchange");
        };
    } else {
        // 新建一個網頁上載文件標簽<iniput type="file">，並初始化配置;
        input_element = window.document.createElement("input");
        input_element.setAttribute("id", "file_input");
        input_element.setAttribute("type", "file");
        input_element.setAttribute("accept", " .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");  // "accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv,text/html,text/xml,application/xml,application/xhtml+xml,application/msword,image/gif,image/jpeg,image/png,image/jpg,text/javascript,text/css,application/javascript,application/json,application/pdf,application/vnd.ms-powerpoint,application/vnd.ms-works,application/xhtml+xml,application/zip";
        // input_element.setAttribute("webkitdirectory", "webkitdirectory");  // 設置 "webkitdirectory" 參數使 "input" 控件可以選擇文件夾;
        //input_element.multiple = "multiple";
        input_element.style.display = "none";
        input_element.innerHTML = "Select files from local disk";

        // 添加到網頁<div id=button_div>元素中，並點擊啓動;
        if (typeof (file_input_parentNode) === "undefined" || file_input_parentNode === null || file_input_parentNode === NaN) { file_input_parentNode = window.document.body; };
        file_input_parentNode.appendChild(input_element);
        if (window.document.getElementById("file_input") !== null) {
            input_element = window.document.getElementById("file_input");
        } else {
            input_element = null;
            console.log("啓動瀏覽器上載輸入框 <input id='file_input' type='file'> 失敗，無法將之移入網頁文件樹「document」.");
            alert("啓動瀏覽器上載輸入框 <input id='file_input' type='file'> 失敗，無法將之移入網頁文件樹「document」.");
            return "error";
        };
    };

    // input_element = window.document.getElementById("file_input");
    // input_element.setAttribute("onpropertychange", "javascript: function () {}");
    // input_element.setAttribute("onclick", "javascript: function () {}");
    if (typeof (input_element) === "undefined" || input_element === null || input_element === NaN) {

        console.log("瀏覽器輸入框 <input id='file_input' type='file'> 元素錯誤，未找到相應元素 <input> === " + input_element + ".");
        console.log(input_element);
        if (callback) { callback("error: <input id='file_input' type='file'>.", null); };
        alert("瀏覽器輸入框 <input id='file_input' type='file'> 元素錯誤，未找到相應元素 <input> === " + input_element + ".");
        return "error";

    } else {

        // 暫存用於提示文件讀取進度和狀態的 show_label_id 標簽的 <label> 内容;
        // let initial_label_innerText = "";
        // if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
        //     initial_label_innerText = window.document.getElementById(show_label_id).innerText;
        // };

        // 暫存用於輸入文件路徑全名的 textarea_path_or_URL_id 標簽的 <textarea> 内容;
        // let initial_textarea_value = "";
        // if (!(typeof (textarea_path_or_URL_id) === "undefined" || textarea_path_or_URL_id === null || textarea_path_or_URL_id === NaN || textarea_path_or_URL_id === "") && window.document.getElementById(textarea_path_or_URL_id) !== null) {
        //     initial_textarea_value = window.document.getElementById(textarea_path_or_URL_id).textContent;
        // };

        input_element.onchange = function () {
            // .addEventListener("onchange", function () {});

            if (!(typeof (input_element.value) === "undefined" || input_element.value === null || input_element.value === NaN || input_element.value === "")) {

                let file = input_element.files[0];  // 獲取上傳的文件流字節，結果是一個一維數組;
                // console.log("「 Select file name: < " + file.name + " >. 」");
                // console.log("「 Select file size: < " + parseInt(file.size / 1000) + " > KiloByte. 」");  // Math.round();
                // console.log(Extension);

                let file_extension_name = "";
                if (typeof (file.name) === "undefined" || file.name === null || file.name === NaN || file.name === "") {
                    file_extension_name = "";
                } else {
                    file_extension_name = file.name.split('.').pop();  // 獲取文件擴展名;
                };
                // eval("var file_extension_name = file.name.split('.').pop();");

                // console.log(file_extension_name);
                // file.type;  // 文件的 MIME 類型;
                // file.lastModifiedDate;  // 文件最近一次修改的日期;

                // 修改 <label> 標簽内容，用於提示文件選擇和讀取狀態;
                // try {
                //     let label_innerText = "「 Select file: " + file.name + ", Size: " + parseInt(file.size / 1000) + " KiloByte. 」";  //Math.round();
                //     if (!(typeof (show_label_id) === "undefined" || show_label_id === null || show_label_id === NaN || show_label_id === "") && window.document.getElementById(show_label_id) !== null) {
                //         // window.document.getElementById(show_label_id).innerText = initial_label_innerText + label_innerText;
                //         window.document.getElementById(show_label_id).innerText = label_innerText;
                //     };
                // }
                // catch (error) {
                //     console.log(error);
                // }
                // finally {
                //     //;
                // };

                // 修改 <textarea> 標簽内容，用於顯示讀取本地硬盤文件的路徑;
                // try {
                //     function getInputURL(file, Window_Name) {
                //         let url = "";
                //         if (Window_Name.createObjcectURL !== undefined) {
                //             url = Window_Name.createOjcectURL(file);
                //         } else if (Window_Name.URL !== undefined) {
                //             url = Window_Name.URL.createObjectURL(file);
                //         } else if (Window_Name.webkitURL !== undefined) {
                //             url = Window_Name.webkitURL.createObjectURL(file);
                //         }
                //         return url;
                //         Window_Name.URL.revokeObjectURL(url); // 釋放内存 url;
                //     };
                //     const file_input_path = getInputURL(file, Window_Name);  // 使用自定義函數 getInputURL(file, Window_Name) 獲取上傳文件路徑;
                //     // console.log("「 Select file path: < " + file_input_path + " >. 」");

                //     let textarea_value = file_input_path;
                //     if (!(typeof (textarea_path_or_URL_id) === "undefined" || textarea_path_or_URL_id === null || textarea_path_or_URL_id === NaN || textarea_path_or_URL_id === "") && window.document.getElementById(textarea_path_or_URL_id) !== null) {
                //         // window.document.getElementById(textarea_path_or_URL_id).textContent = initial_textarea_value;
                //         window.document.getElementById(textarea_path_or_URL_id).textContent = textarea_value;
                //     };
                // } catch (error) {
                //     console.log(error);
                // } finally {
                //     //;
                // };

                // 使用自定義函數 File_Reader(file, abort_button_id_string, callback) 異步讀取硬盤 CSV 或 Excel 文件;
                File_Reader(file, abort_button_id, show_label_id, function (error, data) {

                    if (error) {
                        if (callback) { callback(error, null); };
                        alert("使用 FileReader() 函數讀取文檔發生錯誤:\n" + error);
                    };

                    if (data) {

                        if (typeof (file_extension_name) === "undefined" || file_extension_name === null || file_extension_name === NaN || file_extension_name === "") {
                            console.log("解析文件的擴展名錯誤無法識別文件類型和數據結構不能進行解析.");
                            console.log(file_extension_name);
                            if (callback) { callback("error: file extension name.", data); };  // 變量 data 是 FileReader() 函數讀取到的原始文件數據，未經過相應自定義函數解析，如果FileReader()函數讀取文件類型錯誤無法解析，就回調返回讀取的原始文件數據;
                            alert("無法識別文檔擴展名 file extension name error.");
                        } else {
                            // switch (file_extension_name) {
                            //     case "csv": {
                            //         let button_div_id = "";
                            //         // 使用自定義函數 CSV_File_Parser_to_Array2D(fileString, columnSeparationSymbol, rowSeparationSymbol) 解析異步讀取的硬盤 CSV 文件，解析後的結果返回為一個二維數組變量，數組的第一維是 CSV 文件的行數據，第二維是每一行中的每一列單元格的數據;
                            //         file_data = CSV_File_Parser_to_Array2D(data, "<fenliejiangefuhao>", "<fenliejiangefuhao>\\n", button_div_id, show_label_id);
                            //         break;
                            //     };
                            //     case "xlsx": {
                            //         // 使用自定義函數 XLSX_File_Parser_to_JsonObject(Excel_file) 解析異步讀取的硬盤 Excel 文件，解析後的結果返回為一個 JSON 對象;
                            //         file_data = XLSX_File_Parser_to_JsonObject(data);
                            //         // xlsx_file_data = {
                            //         //   SheetNames: SheetName_string_Array["SheetName_1", "SheetName_2", "SheetName_3"],
                            //         //   Sheets: {
                            //         //     SheetName_1: data_1_Array[][],
                            //         //     SheetName_2: data_2_Array[][],
                            //         //     SheetName_3: data_3_Array[][],
                            //         //   }
                            //         // };
                            //         break;
                            //     };
                            //     case "json": {
                            //         file_data = JSON.parse(data);
                            //         break;
                            //     };
                            //     case "txt": {
                            //         file_data = data;
                            //         break;
                            //     };
                            //     case "html": {
                            //         file_data = data;
                            //         // window.open(chrome.runtime.getURL(file_data));
                            //         break;
                            //     };
                            //     case "js": {
                            //         file_data = data;
                            //         // eval(file_data);
                            //         break;
                            //     };
                            //     default: {
                            //         file_data = null;
                            //         console.log("文件擴展名不是 ['xlsx', 'csv', 'json', 'txt', 'html', 'js'] 類型，只支持解析 ['xlsx', 'csv', 'json', 'txt', 'html', 'js'] 類型的文件.");
                            //     };
                            // };

                            if (typeof (data) === "undefined" || data === null || data === NaN) {
                                if (callback) { callback("error: file Unrecognized.", data); };  // 變量 data 是 FileReader() 函數讀取到的原始文件數據，未經過相應自定義函數解析，如果FileReader()函數讀取文件類型錯誤無法解析，就回調返回讀取的原始文件數據;
                                alert("讀取到的文檔内容無法識別 file type error.");
                            } else {
                                if (callback) { callback(null, data); };  // 變量 file_data 是經過自定義函數解析好了的文件數據，是一個二維數組或解析完成的 Excel workbook JSON 對象，如果FileReader()函數讀取文件類型可以成功被解析，就回調返回解析過的讀取文件數據;
                            };

                            // input_element = window.document.getElementById("file_input");
                            if (typeof (input_onchange_value) === "undefined" || input_onchange_value === null || input_onchange_value === NaN || input_onchange_value === "") {
                                input_element.removeAttribute("onchange");
                            } else {
                                input_element.onchange = input_onchange_value;
                                // input_element.setAttribute("onchange", "javascript: " + input_onchange_value + '"');
                            };

                            if (input_element !== null) {
                                file_input_parentNode.removeChild(input_element);  // 移除網頁中前面建立的用於點擊上傳文件的文件選擇框元素<input type="file" id="file_input">;
                            };
                        };
                    };
                });
            };
        };

        input_element.click();  // 點擊啓動;
    };
};

// chrome.fileSystem.chooseEntry (
//     {
//         type: "openFile", // "openFile", "openWritableFile", "saveFile", or "openDirectory";
//         suggestedName: "",  // 展現給用戶的推薦文檔名，作爲讀取或寫入的預設文件名，可選
//         // 打開器可選接受選項的列表;
//         accepts: {
//             description: ["text/html"],  // 這是該選項的可選文字描述。如果不存在的話，將會自動生成描述，通常包含擴充之後的有效副檔名列表（例如 "text/html" 將擴充為 "*.html, *.htm"）;
//             mimeTypes: ["image/jpeg", "audio/*"],  // 可接受的 MIME 類型，例如 "image/jpeg" 或 "audio/*"。mimeTypes 或 extensions 其中之一必須包含至少一個有效元素;
//             extensions: ["html", "js", "json", "txt", "csv", "xlsx", "jpg", "gif", "crx"]  // 可接受的副檔名，例如 ["jpg", "gif", "crx"];
//         },
//         acceptsAllTypes: true,  // 除了 accepts 欄位中指定的選項外，是否接受所有檔案類型，默認為 true。如果 accepts 欄位未設置或沒有包含有效的項，它始終會被重置為 true;
//         acceptsMultiple: true  // 是否接受多個檔，僅在 'openFile'（打開檔）和 'openWritableFile'（打開可寫檔）時支援。如果該屬性設置為 true，調用 chooseEntry 的回呼函數時會傳遞檔項列表，否則傳遞單個檔項;
//     },
//     (optional_entry, array_fileentry) => {
//         if (optional_entry) {
//             alert(optional_entry);
//         };
//         if (array_fileentry) {
//             alert(array_fileentry);
//         };
//         array_fileentry.file((file) => {
//             File_Reader(
//                 file,
//                 "test_import_button",
//                 "test_label",
//                 // textarea_path_or_URL_id,
//                 (error, data) => {
//                     alert(error);
//                     alert(data);
//                 }
//             );
//         });
//     }
// );

// 創建一個新標籤頁，使用 ajxs 方法或讀取硬盤文檔的方法，獲取策略脚本字符串，然後在該新打開的標籤頁中顯示策略操作界面 new page;
function Import_Acquisition_Strategy(
    Import_Source_Type,
    file_path,
    Open_Web_Page_Name,
    abort_button_id_string,
    show_label_id,
    textarea_path_or_URL_id,
    Public_Variable_Acquisition_Strategy_Web_Page,
    Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID,
    callback
){

    // 判斷數組元素是否爲 JSON 對象，判斷傳入的 Data_JSON_Object[i] 參數 JSON 對象中的各元素，是否有不可識別的錯誤;
    if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty(Open_Web_Page_Name)) {

        // if (Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name]) === "[object Window]") {
        //     New_Open_Web_Page = Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name];
        //     New_Open_Web_Page.document.getElementsByTagName("body").item(0).innerHTML = "";  // 清空用於承載策略的標籤頁窗口;
        // } else {
        //     Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name] = null;
        //     New_Open_Web_Page = window.open("about:blank", Open_Web_Page_Name);  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為Open_Web_Page_Name，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
        //     Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name] = New_Open_Web_Page;
        // };
        // New_Open_Web_Page = Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name];  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為Open_Web_Page_Name，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
        // Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name].url = file_path;
        // chrome.tabs.reload(Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name].id, {active: true}, function (tabPage) {});  // 當前標籤頁打開鏈接;

        chrome.tabs.update(
            Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name].id,
            {
                url: file_path,
                active: true
            },
            function (tabPage) {
                // Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name] = tabPage;
                // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[Open_Web_Page_Name] = parseInt(tabPage.id);

                if (callback) {
                    callback(
                        null,
                        [
                            Open_Web_Page_Name,
                            Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name],
                            Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[Open_Web_Page_Name]
                        ]
                    );
                };
            }
        );  // 當前標籤頁打開鏈接;

    } else {

        // 使用 chrome.tabs.create({url: "urlString"}) 方法新打開新標籤頁並加載指定鏈接;
        chrome.tabs.create(
            {
                // windowId: 1,
                url: file_path,  // 擴展的保存路徑 "chrome-extension://lbmjlnpknngndfphpkfjoeiimamjbohe/CrawlerStrategyServer/CFDA/CFDA.html";
                // url: chrome.extension.getURL(file_path)
                active: true
            },
            (tabPage) => {
                // console.log(tabPage.id);
                Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name] = tabPage;
                Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[Open_Web_Page_Name] = parseInt(tabPage.id);
                // chrome.tabs.get(
                //     tabPage.id,
                //     (tabPage) => {
                //         console.log(tabPage.id);
                //         alert(tabPage.windowId);
                //     }
                // );
                // alert(tabPage.id);

                if (callback) {
                    callback(
                        null,
                        [
                            Open_Web_Page_Name,
                            tabPage,
                            parseInt(tabPage.id)
                        ]
                    );
                };
            }
        );
        // chrome.tabs.update(tabId, {url: "urlString", active: true}, function (tabPage) {});  // 當前標籤頁打開鏈接;
        // chrome.windows.remove(tabPage.id, function() {});  // 關閉標籤頁;
        // chrome.tabs.get(
        //     tabPage.id,
        //     (tabPage) => {
        //         console.log(tabPage.id);
        //         alert(tabPage.id);
        //     }
        // );
        // chrome.tabs.getSelected(
        //     tabPage.windowId,
        //     (tabPage) => {
        //         console.log(tabPage.id);
        //         alert(tabPage.id);
        //     }
        // );
        // chrome.tabs.query(
        //     {
        //         // active: true,
        //         // status: "complete",  // "loading";
        //         // title: "CFDA",
        //         url: chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
        //     },
        //     function(tabs) {
        //         alert(tabs.length ? tabs[0].id: null);
        //         alert(tabs.length ? tabs[0].windowId: null);
        //     }
        // );
    };

    // return [Open_Web_Page_Name, New_Open_Web_Page];
    return Public_Variable_Acquisition_Strategy_Web_Page;

//     // 參考資料 https://www.runoob.com/jsref/met-win-open.html;
//     // let html_innerHTML = '「 正在加載網頁操作策略自動化工具 Loading automation web tools ... 」';
//     // let html_innerHTML = '<p>「 正在加載網頁操作策略自動化工具 Loading automation web tools ... 」</p>';
//     let html_innerHTML = '<!DOCTYPE html><html><head><meta charset="utf-8" http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><p>「 正在加載網頁操作策略自動化工具 Loading automation web tools ... 」</p></body></html>';
//     let Temporary_href = window.URL.createObjectURL(new Blob([html_innerHTML], { type: "text/html/js/json; charset=UTF-8" }));  // 將下載鏈接元素的 "href" 屬性值指向前面創建的待下載的對象;

//     let New_Open_Web_Page = null;  // new Object(); // 打開的策略操作網頁對象;
//     // 判斷數組元素是否爲 JSON 對象，判斷傳入的 Data_JSON_Object[i] 參數 JSON 對象中的各元素，是否有不可識別的錯誤;
//     if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty(Open_Web_Page_Name)) {

//         // if (Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name]) === "[object Window]") {
//         //     New_Open_Web_Page = Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name];
//         //     New_Open_Web_Page.document.getElementsByTagName("body").item(0).innerHTML = "";  // 清空用於承載策略的標籤頁窗口;
//         // } else {
//         //     Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name] = null;
//         //     New_Open_Web_Page = window.open("about:blank", Open_Web_Page_Name);  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為Open_Web_Page_Name，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
//         //     Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name] = New_Open_Web_Page;
//         // };
//         New_Open_Web_Page = Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name];  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為Open_Web_Page_Name，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
//         // New_Open_Web_Page.open("about:blank", Open_Web_Page_Name);
//         // New_Open_Web_Page.location.href = "";  // "about:blank";
//         // New_Open_Web_Page.location.replace("about:blank");
//         New_Open_Web_Page.location.replace(Temporary_href);
//         // New_Open_Web_Page.location.assign("about:blank");

//     } else {

//         New_Open_Web_Page = window.open(Temporary_href, Open_Web_Page_Name);  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為Open_Web_Page_Name，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
//         // New_Open_Web_Page = window.open("about:blank", Open_Web_Page_Name);  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為Open_Web_Page_Name，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
//         Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name] = New_Open_Web_Page;
//     };

//     // New_Open_Web_Page.document.write(html_innerHTML);
//     // New_Open_Web_Page.document.getElementsByTagName("body").item(0).appendChild(New_Open_Web_Page.document.createElement("p").innerText=html_innerHTML);
//     // New_Open_Web_Page.document.getElementsByTagName("body").item(0).innerHTML = "";
//     // New_Open_Web_Page.location.assign("http://www.baidu.com/");  // 窗口重新加載到百度;
//     // New_Open_Web_Page.location.replace('<html><head><meta charset="utf-8" http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><p>「 正在加載網頁操作策略自動化工具 Loading automation web tools ... 」</p></body></html>');  // 窗口使用新文檔替換現用文檔;
//     // New_Open_Web_Page.location.replace(Temporary_href);  // 窗口使用新文檔替換現用文檔;
//     window.URL.revokeObjectURL(Temporary_href);  // 釋放内存;
//     Temporary_href = null;

// //     let New_Open_Web_Page_JavaScript_Function_Aggregate_Script = null;
// //     if (New_Open_Web_Page.document.getElementById("NewOpenWebPageJavaScriptFunctionAggregateScript") === null) {
// //         New_Open_Web_Page_JavaScript_Function_Aggregate_Script = window.document.createElement("script");
// //         New_Open_Web_Page_JavaScript_Function_Aggregate_Script.setAttribute("id", "NewOpenWebPageJavaScriptFunctionAggregateScript");
// //         New_Open_Web_Page_JavaScript_Function_Aggregate_Script.setAttribute("type", "text/javascript");
// //         New_Open_Web_Page_JavaScript_Function_Aggregate_Script.setAttribute("language", "javascript");
// //         New_Open_Web_Page.document.head.appendChild(New_Open_Web_Page_JavaScript_Function_Aggregate_Script);
// //         // New_Open_Web_Page.document.getElementsByTagName("body").item(0).appendChild(New_Open_Web_Page_JavaScript_Function_Aggregate_Script); // 在載入的web躰<body>中新增插入一個<div>層節點(ScriptContainerDiv)作爲呈現抓取結果的載體;
// //         // New_Open_Web_Page.document.body.appendChild(New_Open_Web_Page_JavaScript_Function_Aggregate_Script);
// //         New_Open_Web_Page_JavaScript_Function_Aggregate_Script = New_Open_Web_Page.document.getElementById("NewOpenWebPageJavaScriptFunctionAggregateScript");
// //     } else {
// //         New_Open_Web_Page_JavaScript_Function_Aggregate_Script = New_Open_Web_Page.document.getElementById("NewOpenWebPageJavaScriptFunctionAggregateScript");
// //     };

// //     let New_Open_Web_Page_Insert_Function_Code_String = "" +
// // `
// // window.onbeforeunload = function (event) {
// //     event.returnValue = "是否現在就要離開本頁面？" + "//n" + "比如要不要先點擊<取消>關閉本頁面，在保存一下之後再離開呢？";
// // };
// // // function New_Function() {
// // //     alert(window.document.getElementsByTagName("html")[0].outerHTML);
// // // };
// // `;
// //     let New_Open_Web_Page_Insert_Function_Code_String_createTextNode = window.document.createTextNode(New_Open_Web_Page_Insert_Function_Code_String);
// //       let Storage_New_Open_Web_Page_Insert_Function_Code_String_createTextNode = window.document.createTextNode(window.document.getElementById("Tag_Span_Temporary_Storage_New_Open_Web_Page_Insert_Function_Code_String").innerHTML); // 預設的需要寫入新開網頁中的函數代碼字符;
// //       if (New_Open_Web_Page_JavaScript_Function_Aggregate_Script !== null) {
// //         New_Open_Web_Page.New_Open_Web_Page_JavaScript_Function_Aggregate_Script.appendChild(New_Open_Web_Page_Insert_Function_Code_String_createTextNode);
// //         New_Open_Web_Page.New_Open_Web_Page_JavaScript_Function_Aggregate_Script.appendChild(Storage_New_Open_Web_Page_Insert_Function_Code_String_createTextNode);
// //     };

//     // if (window.console) { window.console.log(New_Open_Web_Page.document.getElementsByTagName("html")[0].outerHTML); } else { window.console = { log: function () {} }; };
//     // alert(New_Open_Web_Page.document.getElementsByTagName("html")[0].outerHTML);

//     switch (Import_Source_Type) {
//         case "http": {
//             // New_Open_Web_Page.open(
//             //     file_path,
//             //     Open_Web_Page_Name
//             // );
//             New_Open_Web_Page.location.replace(file_path);
//             // New_Open_Web_Page.location.assign(file_path);
//             if (false) {
//                 try {
//                     if (!(New_Open_Web_Page === null || New_Open_Web_Page.closed)) {
//                         // New_Open_Web_Page.location.href === "about:blank" 表示窗口不存在;
//                         New_Open_Web_Page.close();
//                     };
//                 } catch (error) {
//                     console.log(error);
//                     // alert("關閉 " + Open_Web_Page_Name + " Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
//                 };
//                 if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty(Open_Web_Page_Name)) {
//                     delete Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name];
//                 };
//                 if (callback) { callback(error, null); };
//                 alert("讀取 " + Open_Web_Page_Name + " web 操作策略文檔發生錯誤:\n" + error);
//             };
//             if (true) {
//                 // New_Open_Web_Page.document.write(data);
//                 // New_Open_Web_Page.location.assign("http://www.baidu.com/");  // 窗口重新加載到百度;
//                 // New_Open_Web_Page.location.replace(data);  // 窗口使用新文檔 data.html 替換正在使用的 .html 文檔;
//                 if (callback) { callback(null, [Open_Web_Page_Name, New_Open_Web_Page]); };
//             };
//             // use_AJAX(
//             //     "get",  // "get", "form", "file", "ArrayBuffer", "Blob"
//             //     "",  // "?username=A&password=1&strategy=CFDA",
//             //     file_path,
//             //     "",
//             //     abort_button_id_string,
//             //     show_label_id,
//             //     // textarea_path_or_URL_id,
//             //     (error, data) => {

//             //         if (error) {
//             //             try {
//             //                 if (!(New_Open_Web_Page === null || New_Open_Web_Page.closed)) {
//             //                     // New_Open_Web_Page.location.href === "about:blank" 表示窗口不存在;
//             //                     New_Open_Web_Page.close();
//             //                 };
//             //             } catch (error) {
//             //                 console.log(error);
//             //                 // alert("關閉 " + Open_Web_Page_Name + " Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
//             //             };
//             //             if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty(Open_Web_Page_Name)) {
//             //                 delete Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name];
//             //             };
//             //             if (callback) { callback(error, null); };
//             //             alert("讀取 " + Open_Web_Page_Name + " web 操作策略文檔發生錯誤:\n" + error);
//             //         };

//             //         if (data) {
//             //             // New_Open_Web_Page.document.write(data);
//             //             // New_Open_Web_Page.location.assign("http://www.baidu.com/");  // 窗口重新加載到百度;
//             //             New_Open_Web_Page.location.replace(data);  // 窗口使用新文檔 data.html 替換正在使用的 .html 文檔;
//             //             if (callback) { callback(null, [Open_Web_Page_Name, New_Open_Web_Page]); };
//             //         };
//             //     }
//             // );
//             break;
//         };
//         case "file": {
//             // New_Open_Web_Page.open(
//             //     file_path,  // chrome.runtime.getURL(file_path),
//             //     Open_Web_Page_Name
//             // );
//             New_Open_Web_Page.location.replace(file_path);  // chrome.runtime.getURL(file_path);
//             // New_Open_Web_Page.location.assign(file_path);  // chrome.runtime.getURL(file_path);
//             if (false) {
//                 try {
//                     if (!(New_Open_Web_Page === null || New_Open_Web_Page.closed)) {
//                         // New_Open_Web_Page.location.href === "about:blank" 表示窗口不存在;
//                         New_Open_Web_Page.close();
//                     };
//                 } catch (error) {
//                     console.log(error);
//                     // alert("關閉 " + Open_Web_Page_Name + " Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
//                 };
//                 if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty(Open_Web_Page_Name)) {
//                     delete Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name];
//                 };
//                 if (callback) { callback(error, null); };
//                 alert("讀取 " + Open_Web_Page_Name + " web 操作策略文檔發生錯誤:\n" + error);
//             };
//             if (true) {
//                 // New_Open_Web_Page.document.write(data);
//                 // New_Open_Web_Page.location.assign("http://www.baidu.com/");  // 窗口重新加載到百度;
//                 // New_Open_Web_Page.location.replace(data);  // 窗口使用新文檔 data.html 替換正在使用的 .html 文檔;
//                 if (callback) { callback(null, [Open_Web_Page_Name, New_Open_Web_Page]); };
//             };
//             // File_Input_From_Disk(
//             //     file_path,
//             //     abort_button_id_string,
//             //     show_label_id,
//             //     // textarea_path_or_URL_id,
//             //     (error, data) => {

//             //         if (error) {
//             //             try {
//             //                 if (!(New_Open_Web_Page === null || New_Open_Web_Page.closed)) {
//             //                     // New_Open_Web_Page.location.href === "about:blank" 表示窗口不存在;
//             //                     New_Open_Web_Page.close();
//             //                 };
//             //             } catch (error) {
//             //                 console.log(error);
//             //                 // alert("關閉 " + Open_Web_Page_Name + " Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
//             //             };
//             //             if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty(Open_Web_Page_Name)) {
//             //                 delete Public_Variable_Acquisition_Strategy_Web_Page[Open_Web_Page_Name];
//             //             };
//             //             if (callback) { callback(error, null); };
//             //             alert("讀取 " + Open_Web_Page_Name + " web 操作策略文檔發生錯誤:\n" + error);
//             //         };

//             //         if (data) {
//             //             // New_Open_Web_Page.document.write(data);
//             //             // New_Open_Web_Page.location.assign("http://www.baidu.com/");  // 窗口重新加載到百度;
//             //             New_Open_Web_Page.location.replace(data);  // 窗口使用新文檔 data.html 替換正在使用的 .html 文檔;
//             //             if (callback) { callback(null, [Open_Web_Page_Name, New_Open_Web_Page]); };
//             //         };
//             //     }
//             // );
//             break;
//         };
//         default: {
//             console.log("網頁操作自動化工具加載源不是 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
//             console.log(Import_Source_Type);
//             alert("加載 CFDA web 操作策略失敗；\n網頁操作自動化工具加載源不是 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
//         };
//     };

//     // return [Open_Web_Page_Name, New_Open_Web_Page];
//     return Public_Variable_Acquisition_Strategy_Web_Page;
};

// let Public_Variable_Acquisition_Strategy_Web_Page = new Object(); // 全局變量新打開的網頁對象;
var Public_Variable_Acquisition_Strategy_Web_Page = {}; // 全局變量新打開的網頁對象;
var Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID = {};  // 交互操作頁面的 Chrome 標籤頁窗口的 ID 號;

// 即將注入新創建的加載數據源網頁的新建窗口的 JavaScript 代碼;
var TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton = ';' +
'window.onbeforeunload = function(event) { event.returnValue = "是否現在就要離開本頁面？"+"///n"+"比如要不要先點擊 < 取消 > 關閉本頁面，在保存一下之後再離開呢？"; };' +
'function NewFunction() { alert(window.document.getElementsByTagName("html")[0].outerHTML);  /* (function(j) {})(j) 表示定義了一個，有一個形參（第一個 j ）的空匿名函數，然後以第二個 j 為實參進行調用 */; };';
// if (window.document.getElementById("OperationModuleDivTemporaryStorageNewOpenWebPageScriptFunctionCodeStringTagP_NewOpenWebPageContainDataButton") !== null) {
//     TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton = window.document.getElementById("OperationModuleDivTemporaryStorageNewOpenWebPageScriptFunctionCodeStringTagP_NewOpenWebPageContainDataButton").innerHTML;
// };
if (window.document.getElementById("TagSpanTemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton") !== null) {
    TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton = window.document.getElementById("TagSpanTemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton").innerHTML;
};

// 即將注入新創建的用於呈現采集結果的新建窗口的 JavaScript 代碼;
var TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton = ';' +
'window.onbeforeunload = function(event) { event.returnValue = "是否現在就要離開本頁面？"+"///n"+"比如要不要先點擊 < 取消 > 關閉本頁面，在保存一下之後再離開呢？"; };' +
'function NewFunction() { alert(window.document.getElementsByTagName("html")[0].outerHTML);  /* (function(j) {})(j) 表示定義了一個，有一個形參（第一個 j ）的空匿名函數，然後以第二個 j 為實參進行調用 */; };';
// if (window.document.getElementById("OperationModuleDivTemporaryStorageNewOpenWebPageScriptFunctionCodeStringTagP_NewOpenWebPageButton") !== null) {
//     TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton = window.document.getElementById("OperationModuleDivTemporaryStorageNewOpenWebPageScriptFunctionCodeStringTagP_NewOpenWebPageButton").innerHTML;
// };
if (window.document.getElementById("TagSpanTemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton") !== null) {
    TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton = window.document.getElementById("TagSpanTemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton").innerHTML;
};

// 打開目標數據源網頁的 Chrome 標籤頁窗口的 ID 號;
var Contain_Data_Web_Page_Tab_ID = {};
var Contain_Data_Web_Page_Tab = {};
// // 交互操作頁面的 Chrome 標籤頁窗口傳過來的啓動常量參數;
// var Configuration_Parameters = {
//     "test": {
//         "ContainDataWebPageURL": "http://127.0.0.1:8000/ajax.html",  // "CrawlerStrategyServer/test/testWeb/ajax.html",  // 數據源網頁的地址;
//         "Open_Contain_Data_Web_Page_Name": "testContainDataWebPage",  // 用於加載數據源網頁的新建窗口變量;
//     },
//     "CFDA": {
//         "ContainDataWebPageURL": "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV",  // 數據源網頁的地址;
//         "Open_Contain_Data_Web_Page_Name": "CFDAContainDataWebPage",  // 用於加載數據源網頁的新建窗口變量;
//         "WebKeyWordTextboxElement_XPath": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[1]/tbody/tr/td[2]/table[2]/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td/input[3]",  // 網頁中關鍵詞輸入框元素的 XPath 值;
//         "WebKeyWordQuerySubmitButtonElement_XPath": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[1]/tbody/tr/td[2]/table[2]/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td/input[4]",  // 網頁中關鍵詞查詢按鈕的 XPath 值;
//         "TableWebPageNumberTdElement_XPath_1": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[4]/tbody/tr/td[1]",  // 可采集的最大網頁序號，和當前所處網頁的序號的，元素 XPath 值;
//         "TableWebPageNumberTdElement_XPath_2": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/div/table[4]/tbody/tr/td[1]",  // 可采集的最大網頁序號，和當前所處網頁的序號的，元素 XPath 值;
//         "RetrievalResult_XPath_1": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/div/table[2]/tbody/tr",  // 當前網頁中可采集數據元素的 XPath 值;
//         "RetrievalResult_XPath_2": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[2]/tbody/tr",  // 當前網頁中可采集數據元素的 XPath 值;
//         "NumberOfItemInThisSecondLevelWebPage": parseInt(27),  // 第二層網頁中需要抓取的數據的條目數目;
//         "SecondLevelWebPageRetrievalResult_XPath": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/div/div/table[1]/tbody",  // 第二層網頁中需要抓取的數據元素的 XPath 值;
//         "EntryElementfromFirstLevelPagetoSecondLevelPage_XPath_1": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/div/table[2]/tbody/tr",  // 當前網頁中進入第二層級頁面的入口的網頁元素的 XPath 值字符串;
//         "EntryElementfromFirstLevelPagetoSecondLevelPage_XPath_2": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[2]/tbody/tr",  // 當前網頁中進入第二層級頁面的入口的網頁元素的 XPath 值字符串;
//         "FromSecondLevelWebReturnFirstLevelWeb_XPath": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/div/div/table[1]/tbody/tr",  // 從第二層網頁返回第一層網頁的按鈕元素 XPath 值;
//         "TableSkipPageTextboxTdElement_XPath_1": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/div/table[4]/tbody/tr/td[6]/input[1]",  // 目標網頁中的跳頁頁碼輸入文本框的 xpath 值;
//         "TableSkipPageTextboxTdElement_XPath_2": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[4]/tbody/tr/td[6]/input[1]",  // 目標網頁中的跳頁頁碼輸入文本框的 xpath 值;
//         "TableSkipPageTextboxTdElement_XPath_3": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[4]/tbody/tr/td[7]/input[1]",  // 目標網頁中的跳頁頁碼輸入文本框的 xpath 值;
//         "TableSkipPageSubmitButtonTdElement_XPath_1": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/div/table[4]/tbody/tr/td[7]/input",  // 目標網頁中的跳頁按鈕的 xpath 值;
//         "TableSkipPageSubmitButtonTdElement_XPath_2": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[4]/tbody/tr/td[7]/input",  // 目標網頁中的跳頁按鈕的 xpath 值;
//         "TableSkipPageSubmitButtonTdElement_XPath_3": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[4]/tbody/tr/td[8]/input",  // 目標網頁中的跳頁按鈕的 xpath 值;
//         "TableNextPageSubmitButtonImgTdElement_XPath_1": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/div/table[4]/tbody/tr/td[4]/img",  // 目標網頁中的下一頁按鈕的 xpath 值;
//         "TableNextPageSubmitButtonImgTdElement_XPath_2": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[4]/tbody/tr/td[4]/img",  // 目標網頁中的下一頁按鈕的 xpath 值;
//         "TableNextPageSubmitButtonImgTdElement_XPath_3": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[3]/tbody/tr/td[2]/div/table[4]/tbody/tr/td[5]/img",  // 目標網頁中的下一頁按鈕的 xpath 值;
//         "TableBackPageSubmitButtonImgTdElement_XPath_1": "",  // 目標網頁中的上一頁按鈕的 xpath 值;
//         "TableBackPageSubmitButtonImgTdElement_XPath_2": "",  // 目標網頁中的上一頁按鈕的 xpath 值;
//         "TableBackPageSubmitButtonImgTdElement_XPath_3": "",  // 目標網頁中的上一頁按鈕的 xpath 值;
//         "TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton": TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton,  // 即將注入新創建的加載數據源網頁的新建窗口的 JavaScript 代碼;
//         "TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton": TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton,  // 即將注入新創建的用於呈現采集結果的新建窗口的 JavaScript 代碼;
//         "Interval_Of_Circle_Click_value": parseInt(1000),  // 循環周期時長（單位毫秒）輸入文本框 input 的值;
//         "OpenResultExhibitsWebPageName": "ResultExhibitsWebPage"  // 用於呈現采集結果的的新建窗口變量;
//     },
//     "WUXIPEOPLEsHOSPITAL": {
//         "ContainDataWebPageURL": "http://www.wuxiph.com/info/ZhenLiaoXiangMuChaXun/",  // "http://www.wuxiph.com/index.html";
//         "Open_Contain_Data_Web_Page_Name": "WUXIPEOPLEsHOSPITALContainDataWebPage",  // 用於加載數據源網頁的新建窗口變量;
//         "WebKeyWordTextboxElement_XPath": "/html/body/center/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]/table/tbody/tr[2]/td/table[1]/tbody/tr/td[2]/table[2]/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td/input[3]",  // 網頁中關鍵詞輸入框元素的 XPath 值;
//     },
//     "TFDA": {},
// };
var Configuration_Parameters = {};

// let Import_Acquisition_Strategy_Button_test = null;
// Import_Acquisition_Strategy_Button_test = window.document.getElementById("test_import_button");
// if (window.document.getElementById("test_import_button") === null) {
//     if (window.console) { window.console.log('網頁中無法獲取 id 值為: "test" 的自定義元素.'); } else { window.console = { log: function () {} }; };
// } else {
//     Import_Acquisition_Strategy_Button_test = window.document.getElementById("test_import_button");
// };
// Import_Acquisition_Strategy_Button_test.addEventListener("click", async () => {});
window.document.getElementById("test_import_button").addEventListener("click", async () => {

    // window.document.getElementById("test_import_button").disabled = "disabled";
    if (window.document.getElementById("test_import_button") !== null) { window.document.getElementById("test_import_button").disabled = "disabled"; };
    if (window.document.getElementById("test_import_path_textarea") !== null) { window.document.getElementById("test_import_path_textarea").disabled = "disabled"; };
    if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
        for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
            window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].disabled = "disabled";
        };
    };
    // window.setTimeout(function () {
    //     if (window.document.getElementById("test_import_button") !== null) { window.document.getElementById("test_import_button").removeAttribute("disabled"); };
    //     if (window.document.getElementById("test_import_path_textarea") !== null) { window.document.getElementById("test_import_path_textarea").removeAttribute("disabled"); };
    //     if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
    //         for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
    //             window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
    //         };
    //     };
    // }, 1000);

    // 傳入自定義輸入的采集策略導入源類型是從 http 還是本地硬盤文檔系統 file;
    let is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = "file";  // "http";
    if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
        // window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio");
        // window.document.getElementById("test_acquisition_strategy_import_source_http_radio");
        // window.document.getElementById("test_acquisition_strategy_import_source_file_radio");
        for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
            if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].value;
            };
        };
    };

    let Acquisition_Strategy_Import_Source_Path_textarea_Value = "";
    if (window.document.getElementById("test_import_path_textarea") !== null && window.document.getElementById("test_import_path_textarea").value !== "") {

        // window.document.getElementById("test_import_path_textarea").style.paddingleft = "5px";
        // window.document.getElementById("test_import_path_textarea").style.verticalalign = "top";
        // window.document.getElementById("test_import_path_textarea").style.textalign = "left";
        // window.document.getElementById("test_import_path_textarea").style.fontfamily = '"Times New Roman, FangSong"' + ', serif';
        // window.document.getElementById("test_import_path_textarea").style.fontstyle = "normal";
        // window.document.getElementById("test_import_path_textarea").style.fontsize = "1em";
        // window.document.getElementById("test_import_path_textarea").style.color = "rgba(0,0,0,0.7)";
        // window.document.getElementById("test_import_path_textarea").style.width = "100%";  // "auto", "100px";
        // window.document.getElementById("test_import_path_textarea").style.height = "100%";  // "auto", "100px";
        // // window.document.getElementById("test_import_path_textarea").style.overflow_x = "hidden";  // visible(默認取值),hidden,auto,scroll;
        // // window.document.getElementById("test_import_path_textarea").style.overflow_y = "hidden";  // visible(默認取值),hidden,auto,scroll;
        // window.document.getElementById("test_import_path_textarea").style.display = "none";  // "block";
        // // window.document.getElementById("test_import_path_textarea").style.resize = none; // 禁用右下角的拖動圖標;
        // // window.document.getElementById("test_import_path_textarea").defaultValue = "初始值" ; // 文本框初始值;
        // // window.document.getElementById("test_import_path_textarea").hidden = "hidden";  // .style.visibility = "hidden";
        // window.document.getElementById("test_import_path_textarea").lang = "en";
        // window.document.getElementById("test_import_path_textarea").translate = "no";
        // // window.document.getElementById("test_import_path_textarea").readonly = "readonly";
        // // window.document.getElementById("test_import_path_textarea").disabled = "disabled";
        // // window.document.getElementById("test_import_path_textarea").rows = "5";
        // // window.document.getElementById("test_import_path_textarea").cols = "160";
        // // window.document.getElementById("test_import_path_textarea").maxlength = "160";
        // // window.document.getElementById("test_import_path_textarea").wrap = "soft";  // "hard"，用 "%OD%OA" （回車/換行）進行分隔;
        // // window.document.getElementById("test_import_path_textarea").contenteditable = "true";  // "false";
        // window.document.getElementById("test_import_path_textarea").placeholder = "input import test acquisition strategy file path or URL.";

        Acquisition_Strategy_Import_Source_Path_textarea_Value = window.document.getElementById("test_import_path_textarea").value;  // .textContent
    };

    // switch (is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value) {
    //     case "http": {
    //         Public_Variable_Acquisition_Strategy_Web_Page["test"] = window.open(
    //             Acquisition_Strategy_Import_Source_Path_textarea_Value,
    //             "test"
    //         );
    //         break;
    //     };
    //     case "file": {
    //         Public_Variable_Acquisition_Strategy_Web_Page["test"] = window.open(
    //             Acquisition_Strategy_Import_Source_Path_textarea_Value,  // chrome.runtime.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value),
    //             "test"
    //         );
    //         break;
    //     };
    //     default: {
    //         console.log("傳入的網頁操作自動化工具加載源類型 " + is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value + " 不屬於 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
    //         alert("傳入的網頁操作自動化工具加載源類型 " + is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value + " 不屬於 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
    //     };
    // };
    // Public_Variable_Acquisition_Strategy_Web_Page["test"].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
    // // 使用 chrome.tabs.create({url: "urlString"}) 方法新打開新標籤頁並加載指定鏈接;
    // // chrome.tabs.create(
    // //     {
    // //         // windowId: 1,
    // //         url: Acquisition_Strategy_Import_Source_Path_textarea_Value  // chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
    // //     },
    // //     (tabPage) => {
    // //         // console.log(tabPage.id);
    // //         // Public_Variable_Acquisition_Strategy_Web_Page["test"] = tabPage.id;
    // //         // chrome.tabs.get(Public_Variable_Acquisition_Strategy_Web_Page["test"], (tabPage) => {
    // //         //     console.log(tabPage.id);
    // //         //     alert(tabPage.windowId);
    // //         // });
    // //         // alert(tabPage.id);
    // //     }
    // // );
    // // chrome.tabs.update(tabId, {url: "urlString"});  // 當前標籤頁打開鏈接;
    // // chrome.windows.remove(tabPage.id, function() {});  // 關閉標籤頁;
    // // chrome.tabs.get(tabPage.id, (tabPage) => {
    // //     console.log(tabPage.id);
    // //     alert(tabPage.id);
    // // });
    // // chrome.tabs.getSelected(tabPage.windowId, (tabPage) => {
    // //     console.log(tabPage.id);
    // //     alert(tabPage.id);
    // // });
    // // chrome.tabs.query(
    // //     {
    // //         // active: true,
    // //         // status: "complete",  // "loading";
    // //         // title: "test",
    // //         url: chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
    // //     },
    // //     function(tabs) {
    // //         alert(tabs.length ? tabs[0].id: null);
    // //         alert(tabs.length ? tabs[0].windowId: null);
    // //     }
    // // );
    // window.setTimeout(function () {
    //     if (window.document.getElementById("test_import_button") !== null) { window.document.getElementById("test_import_button").removeAttribute("disabled"); };

    //     if (window.document.getElementById("test_import_path_textarea") !== null) { window.document.getElementById("test_import_path_textarea").removeAttribute("disabled"); };

    //     if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
    //         for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
    //             window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
    //         };
    //     };
    // }, 10000);

    // Public_Variable_Acquisition_Strategy_Web_Page = Import_Acquisition_Strategy();
    Import_Acquisition_Strategy(
        is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value,
        Acquisition_Strategy_Import_Source_Path_textarea_Value,
        "test",
        "test_import_button",
        "test_label",
        "test_import_path_textarea",
        Public_Variable_Acquisition_Strategy_Web_Page,
        Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID,
        (error, result) => {

            if (error !== null) {
                console.log("加載 test web 操作策略失敗.");
                console.log(error);
                if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("test")) {
                    try {
                        chrome.tabs.remove(
                            [
                                Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["test"]
                            ],
                            function () {
                                console.log('The tabs (Name=test, id=' + String(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["test"]) + ') has been closed.');
                                if (Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("test")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page["test"];
                                };
                                if (Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID.hasOwnProperty("test")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["test"];
                                };
                            }
                        );
                        // if (!(Public_Variable_Acquisition_Strategy_Web_Page["test"] === null || Public_Variable_Acquisition_Strategy_Web_Page["test"].closed)) {
                        //     // Public_Variable_Acquisition_Strategy_Web_Page["test"].location.href === "about:blank" 表示窗口不存在;
                        //     Public_Variable_Acquisition_Strategy_Web_Page["test"].close();
                        //     delete Public_Variable_Acquisition_Strategy_Web_Page["test"];
                        // };
                    } catch (error) {
                        console.log(error);
                        alert("關閉 test Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                    };
                };
                if (window.document.getElementById("test_import_button") !== null) { window.document.getElementById("test_import_button").removeAttribute("disabled"); };
                if (window.document.getElementById("test_import_path_textarea") !== null) { window.document.getElementById("test_import_path_textarea").removeAttribute("disabled"); };
                if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
                    for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
                        window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
                    };
                };
                alert("加載 test web 操作策略失敗:\n" + error);
                return;
            };

            if (result !== null) {
                // // Public_Variable_Acquisition_Strategy_Web_Page[result[0]] = result[1];  // 在 Public_Variable_Acquisition_Strategy_Web_Page 變量中記錄新創建的窗口對象;
                // Public_Variable_Acquisition_Strategy_Web_Page[result[0]].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // // if (Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page[result[0]]) === "[object Window]") {
                // //     Public_Variable_Acquisition_Strategy_Web_Page[result[0]].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // //     // result[1].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // //     // console.log("加載 " + result[0] + " web 操作策略成功.");
                // //     // alert("加載 " + result[0] + " web 操作策略成功.");
                // // } else {
                // //     // console.log("加載 test web 操作策略失敗.");
                // //     if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("test")) {
                // //         try {
                // //             if (!(Public_Variable_Acquisition_Strategy_Web_Page["test"] === null || Public_Variable_Acquisition_Strategy_Web_Page["test"].closed)) {
                // //                 // Public_Variable_Acquisition_Strategy_Web_Page["test"].location.href === "about:blank" 表示窗口不存在;
                // //                 Public_Variable_Acquisition_Strategy_Web_Page["test"].close();
                // //                 delete Public_Variable_Acquisition_Strategy_Web_Page["test"];
                // //             };
                // //         } catch (error) {
                // //             console.log(error);
                // //             alert("關閉 test Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                // //         };
                // //     };
                // //     alert("加載 test web 操作策略失敗.");
                // // };
            } else {
                // console.log("加載 test web 操作策略失敗.");
                if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("test")) {
                    try {
                        chrome.tabs.remove(
                            [
                                Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["test"]
                            ],
                            function () {
                                console.log('The tabs (Name=test, id=' + String(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["test"]) + ') has been closed.');
                                if (Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("test")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page["test"];
                                };
                                if (Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID.hasOwnProperty("test")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["test"];
                                };
                            }
                        );
                        // if (!(Public_Variable_Acquisition_Strategy_Web_Page["test"] === null || Public_Variable_Acquisition_Strategy_Web_Page["test"].closed)) {
                        //     // Public_Variable_Acquisition_Strategy_Web_Page["test"].location.href === "about:blank" 表示窗口不存在;
                        //     Public_Variable_Acquisition_Strategy_Web_Page["test"].close();
                        //     delete Public_Variable_Acquisition_Strategy_Web_Page["test"];
                        // };
                    } catch (error) {
                        console.log(error);
                        alert("關閉 test Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                    };
                };
                alert("加載 test web 操作策略失敗.");
            };

            if (window.document.getElementById("test_import_button") !== null) { window.document.getElementById("test_import_button").removeAttribute("disabled"); };
            if (window.document.getElementById("test_import_path_textarea") !== null) { window.document.getElementById("test_import_path_textarea").removeAttribute("disabled"); };
            if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
                for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
                    window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
                };
            };
        }
    );

    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => { console.log(tabs.length ? tabs[0].id: null); });  // 獲取標簽頁對象數組;
    // // 向指定標籤頁插入 JavaScript 脚本;
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     function: setPageBackgroundColor,
    // });
});

// let Import_Acquisition_Strategy_Button_CFDA = null;
// Import_Acquisition_Strategy_Button_CFDA = window.document.getElementById("CFDA_import_button");
// if (window.document.getElementById("CFDA_import_button") === null) {
//     if (window.console) { window.console.log('網頁中無法獲取 id 值為: "CFDA" 的自定義元素.'); } else { window.console = { log: function () {} }; };
// } else {
//     Import_Acquisition_Strategy_Button_CFDA = window.document.getElementById("CFDA_import_button");
// };
// Import_Acquisition_Strategy_Button_CFDA.addEventListener("click", async () => {});
window.document.getElementById("CFDA_import_button").addEventListener("click", async () => {

    // window.document.getElementById("CFDA_import_button").disabled = "disabled";
    if (window.document.getElementById("CFDA_import_button") !== null) { window.document.getElementById("CFDA_import_button").disabled = "disabled"; };
    if (window.document.getElementById("CFDA_import_path_textarea") !== null) { window.document.getElementById("CFDA_import_path_textarea").disabled = "disabled"; };
    if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
        for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
            window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].disabled = "disabled";
        };
    };
    // window.setTimeout(function () {
    //     if (window.document.getElementById("CFDA_import_button") !== null) { window.document.getElementById("CFDA_import_button").removeAttribute("disabled"); };
    //     if (window.document.getElementById("CFDA_import_path_textarea") !== null) { window.document.getElementById("CFDA_import_path_textarea").removeAttribute("disabled"); };
    //     if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
    //         for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
    //             window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
    //         };
    //     };
    // }, 1000);

    // 傳入自定義輸入的采集策略導入源類型是從 http 還是本地硬盤文檔系統 file;
    let is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = "file";  // "http";
    if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
        // window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio");
        // window.document.getElementById("CFDA_acquisition_strategy_import_source_http_radio");
        // window.document.getElementById("CFDA_acquisition_strategy_import_source_file_radio");
        for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
            if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].value;
            };
        };
    };

    let Acquisition_Strategy_Import_Source_Path_textarea_Value = "";
    if (window.document.getElementById("CFDA_import_path_textarea") !== null && window.document.getElementById("CFDA_import_path_textarea").value !== "") {

        // window.document.getElementById("CFDA_import_path_textarea").style.paddingleft = "5px";
        // window.document.getElementById("CFDA_import_path_textarea").style.verticalalign = "top";
        // window.document.getElementById("CFDA_import_path_textarea").style.textalign = "left";
        // window.document.getElementById("CFDA_import_path_textarea").style.fontfamily = '"Times New Roman, FangSong"' + ', serif';
        // window.document.getElementById("CFDA_import_path_textarea").style.fontstyle = "normal";
        // window.document.getElementById("CFDA_import_path_textarea").style.fontsize = "1em";
        // window.document.getElementById("CFDA_import_path_textarea").style.color = "rgba(0,0,0,0.7)";
        // window.document.getElementById("CFDA_import_path_textarea").style.width = "100%";  // "auto", "100px";
        // window.document.getElementById("CFDA_import_path_textarea").style.height = "100%";  // "auto", "100px";
        // // window.document.getElementById("CFDA_import_path_textarea").style.overflow_x = "hidden";  // visible(默認取值),hidden,auto,scroll;
        // // window.document.getElementById("CFDA_import_path_textarea").style.overflow_y = "hidden";  // visible(默認取值),hidden,auto,scroll;
        // window.document.getElementById("CFDA_import_path_textarea").style.display = "none";  // "block";
        // // window.document.getElementById("CFDA_import_path_textarea").style.resize = none; // 禁用右下角的拖動圖標;
        // // window.document.getElementById("CFDA_import_path_textarea").defaultValue = "初始值" ; // 文本框初始值;
        // // window.document.getElementById("CFDA_import_path_textarea").hidden = "hidden";  // .style.visibility = "hidden";
        // window.document.getElementById("CFDA_import_path_textarea").lang = "en";
        // window.document.getElementById("CFDA_import_path_textarea").translate = "no";
        // // window.document.getElementById("CFDA_import_path_textarea").readonly = "readonly";
        // // window.document.getElementById("CFDA_import_path_textarea").disabled = "disabled";
        // // window.document.getElementById("CFDA_import_path_textarea").rows = "5";
        // // window.document.getElementById("CFDA_import_path_textarea").cols = "160";
        // // window.document.getElementById("CFDA_import_path_textarea").maxlength = "160";
        // // window.document.getElementById("CFDA_import_path_textarea").wrap = "soft";  // "hard"，用 "%OD%OA" （回車/換行）進行分隔;
        // // window.document.getElementById("CFDA_import_path_textarea").contenteditable = "true";  // "false";
        // window.document.getElementById("CFDA_import_path_textarea").placeholder = "input import CFDA acquisition strategy file path or URL.";

        Acquisition_Strategy_Import_Source_Path_textarea_Value = window.document.getElementById("CFDA_import_path_textarea").value;  // .textContent
    };

    // switch (is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value) {
    //     case "http": {
    //         Public_Variable_Acquisition_Strategy_Web_Page["CFDA"] = window.open(
    //             Acquisition_Strategy_Import_Source_Path_textarea_Value,
    //             "CFDA"
    //         );
    //         break;
    //     };
    //     case "file": {
    //         Public_Variable_Acquisition_Strategy_Web_Page["CFDA"] = window.open(
    //             Acquisition_Strategy_Import_Source_Path_textarea_Value,  // chrome.runtime.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value),
    //             "CFDA"
    //         );
    //         break;
    //     };
    //     default: {
    //         console.log("傳入的網頁操作自動化工具加載源類型 " + is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value + " 不屬於 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
    //         alert("傳入的網頁操作自動化工具加載源類型 " + is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value + " 不屬於 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
    //     };
    // };
    // Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
    // // 使用 chrome.tabs.create({url: "urlString"}) 方法新打開新標籤頁並加載指定鏈接;
    // // chrome.tabs.create(
    // //     {
    // //         // windowId: 1,
    // //         url: Acquisition_Strategy_Import_Source_Path_textarea_Value  // chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
    // //     },
    // //     (tabPage) => {
    // //         // console.log(tabPage.id);
    // //         // Public_Variable_Acquisition_Strategy_Web_Page["CFDA"] = tabPage.id;
    // //         // chrome.tabs.get(Public_Variable_Acquisition_Strategy_Web_Page["CFDA"], (tabPage) => {
    // //         //     console.log(tabPage.id);
    // //         //     alert(tabPage.windowId);
    // //         // });
    // //         // alert(tabPage.id);
    // //     }
    // // );
    // // chrome.tabs.update(tabId, {url: "urlString"});  // 當前標籤頁打開鏈接;
    // // chrome.windows.remove(tabPage.id, function() {});  // 關閉標籤頁;
    // // chrome.tabs.get(tabPage.id, (tabPage) => {
    // //     console.log(tabPage.id);
    // //     alert(tabPage.id);
    // // });
    // // chrome.tabs.getSelected(tabPage.windowId, (tabPage) => {
    // //     console.log(tabPage.id);
    // //     alert(tabPage.id);
    // // });
    // // chrome.tabs.query(
    // //     {
    // //         // active: true,
    // //         // status: "complete",  // "loading";
    // //         // title: "CFDA",
    // //         url: chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
    // //     },
    // //     function(tabs) {
    // //         alert(tabs.length ? tabs[0].id: null);
    // //         alert(tabs.length ? tabs[0].windowId: null);
    // //     }
    // // );
    // window.setTimeout(function () {
    //     if (window.document.getElementById("CFDA_import_button") !== null) { window.document.getElementById("CFDA_import_button").removeAttribute("disabled"); };

    //     if (window.document.getElementById("CFDA_import_path_textarea") !== null) { window.document.getElementById("CFDA_import_path_textarea").removeAttribute("disabled"); };

    //     if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
    //         for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
    //             window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
    //         };
    //     };
    // }, 10000);

    // Public_Variable_Acquisition_Strategy_Web_Page = Import_Acquisition_Strategy();
    Import_Acquisition_Strategy(
        is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value,
        Acquisition_Strategy_Import_Source_Path_textarea_Value,
        "CFDA",
        "CFDA_import_button",
        "CFDA_label",
        "CFDA_import_path_textarea",
        Public_Variable_Acquisition_Strategy_Web_Page,
        Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID,
        (error, result) => {

            if (error !== null) {
                console.log("加載 CFDA web 操作策略失敗.");
                console.log(error);
                if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("CFDA")) {
                    try {
                        chrome.tabs.remove(
                            [
                                Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"]
                            ],
                            function () {
                                console.log('The tabs (Name=CFDA, id=' + String(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"]) + ') has been closed.');
                                if (Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("CFDA")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page["CFDA"];
                                };
                                if (Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID.hasOwnProperty("CFDA")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"];
                                };
                            }
                        );
                        // if (!(Public_Variable_Acquisition_Strategy_Web_Page["CFDA"] === null || Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].closed)) {
                        //     // Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].location.href === "about:blank" 表示窗口不存在;
                        //     Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].close();
                        //     delete Public_Variable_Acquisition_Strategy_Web_Page["CFDA"];
                        // };
                    } catch (error) {
                        console.log(error);
                        alert("關閉 CFDA Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                    };
                };
                if (window.document.getElementById("CFDA_import_button") !== null) { window.document.getElementById("CFDA_import_button").removeAttribute("disabled"); };
                if (window.document.getElementById("CFDA_import_path_textarea") !== null) { window.document.getElementById("CFDA_import_path_textarea").removeAttribute("disabled"); };
                if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
                    for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                        window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
                    };
                };
                alert("加載 CFDA web 操作策略失敗:\n" + error);
                return;
            };

            if (result !== null) {
                // // Public_Variable_Acquisition_Strategy_Web_Page[result[0]] = result[1];  // 在 Public_Variable_Acquisition_Strategy_Web_Page 變量中記錄新創建的窗口對象;
                // Public_Variable_Acquisition_Strategy_Web_Page[result[0]].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // // if (Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page[result[0]]) === "[object Window]") {
                // //     Public_Variable_Acquisition_Strategy_Web_Page[result[0]].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // //     // result[1].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // //     // console.log("加載 " + result[0] + " web 操作策略成功.");
                // //     // alert("加載 " + result[0] + " web 操作策略成功.");
                // // } else {
                // //     // console.log("加載 CFDA web 操作策略失敗.");
                // //     if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("CFDA")) {
                // //         try {
                // //             if (!(Public_Variable_Acquisition_Strategy_Web_Page["CFDA"] === null || Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].closed)) {
                // //                 // Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].location.href === "about:blank" 表示窗口不存在;
                // //                 Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].close();
                // //                 delete Public_Variable_Acquisition_Strategy_Web_Page["CFDA"];
                // //             };
                // //         } catch (error) {
                // //             console.log(error);
                // //             alert("關閉 CFDA Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                // //         };
                // //     };
                // //     alert("加載 CFDA web 操作策略失敗.");
                // // };
            } else {
                // console.log("加載 CFDA web 操作策略失敗.");
                if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("CFDA")) {
                    try {
                        chrome.tabs.remove(
                            [
                                Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"]
                            ],
                            function () {
                                console.log('The tabs (Name=CFDA, id=' + String(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"]) + ') has been closed.');
                                if (Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("CFDA")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page["CFDA"];
                                };
                                if (Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID.hasOwnProperty("CFDA")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"];
                                };
                            }
                        );
                        // if (!(Public_Variable_Acquisition_Strategy_Web_Page["CFDA"] === null || Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].closed)) {
                        //     // Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].location.href === "about:blank" 表示窗口不存在;
                        //     Public_Variable_Acquisition_Strategy_Web_Page["CFDA"].close();
                        //     delete Public_Variable_Acquisition_Strategy_Web_Page["CFDA"];
                        // };
                    } catch (error) {
                        console.log(error);
                        alert("關閉 CFDA Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                    };
                };
                alert("加載 CFDA web 操作策略失敗.");
            };

            if (window.document.getElementById("CFDA_import_button") !== null) { window.document.getElementById("CFDA_import_button").removeAttribute("disabled"); };
            if (window.document.getElementById("CFDA_import_path_textarea") !== null) { window.document.getElementById("CFDA_import_path_textarea").removeAttribute("disabled"); };
            if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
                for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                    window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
                };
            };
        }
    );

    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => { console.log(tabs.length ? tabs[0].id: null); });  // 獲取標簽頁對象數組;
    // // 向指定標籤頁插入 JavaScript 脚本;
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     function: setPageBackgroundColor,
    // });
});

window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button").addEventListener("click", async () => {

    // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button").disabled = "disabled";
    if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button").disabled = "disabled"; };
    if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").disabled = "disabled"; };
    if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length > 0) {
        for (let i = 0; i < window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length; i++) {
            window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].disabled = "disabled";
        };
    };
    // window.setTimeout(function () {
    //     if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button").removeAttribute("disabled"); };
    //     if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").removeAttribute("disabled"); };
    //     if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length > 0) {
    //         for (let i = 0; i < window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length; i++) {
    //             window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
    //         };
    //     };
    // }, 1000);

    // 傳入自定義輸入的采集策略導入源類型是從 http 還是本地硬盤文檔系統 file;
    let is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = "file";  // "http";
    if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length > 0) {
        // window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio");
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_http_radio");
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_file_radio");
        for (let i = 0; i < window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length; i++) {
            if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].value;
            };
        };
    };

    let Acquisition_Strategy_Import_Source_Path_textarea_Value = "";
    if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea") !== null && window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").value !== "") {

        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.paddingleft = "5px";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.verticalalign = "top";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.textalign = "left";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.fontfamily = '"Times New Roman, FangSong"' + ', serif';
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.fontstyle = "normal";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.fontsize = "1em";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.color = "rgba(0,0,0,0.7)";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.width = "100%";  // "auto", "100px";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.height = "100%";  // "auto", "100px";
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.overflow_x = "hidden";  // visible(默認取值),hidden,auto,scroll;
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.overflow_y = "hidden";  // visible(默認取值),hidden,auto,scroll;
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.display = "none";  // "block";
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").style.resize = none; // 禁用右下角的拖動圖標;
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").defaultValue = "初始值" ; // 文本框初始值;
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").hidden = "hidden";  // .style.visibility = "hidden";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").lang = "en";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").translate = "no";
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").readonly = "readonly";
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").disabled = "disabled";
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").rows = "5";
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").cols = "160";
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").maxlength = "160";
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").wrap = "soft";  // "hard"，用 "%OD%OA" （回車/換行）進行分隔;
        // // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").contenteditable = "true";  // "false";
        // window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").placeholder = "input import WUXIPEOPLEsHOSPITAL acquisition strategy file path or URL.";

        Acquisition_Strategy_Import_Source_Path_textarea_Value = window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").value;  // .textContent
    };

    // switch (is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value) {
    //     case "http": {
    //         Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"] = window.open(
    //             Acquisition_Strategy_Import_Source_Path_textarea_Value,
    //             "WUXIPEOPLEsHOSPITAL"
    //         );
    //         break;
    //     };
    //     case "file": {
    //         Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"] = window.open(
    //             Acquisition_Strategy_Import_Source_Path_textarea_Value,  // chrome.runtime.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value),
    //             "WUXIPEOPLEsHOSPITAL"
    //         );
    //         break;
    //     };
    //     default: {
    //         console.log("傳入的網頁操作自動化工具加載源類型 " + is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value + " 不屬於 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
    //         alert("傳入的網頁操作自動化工具加載源類型 " + is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value + " 不屬於 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
    //     };
    // };
    // Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
    // // 使用 chrome.tabs.create({url: "urlString"}) 方法新打開新標籤頁並加載指定鏈接;
    // // chrome.tabs.create(
    // //     {
    // //         // windowId: 1,
    // //         url: Acquisition_Strategy_Import_Source_Path_textarea_Value  // chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
    // //     },
    // //     (tabPage) => {
    // //         // console.log(tabPage.id);
    // //         // Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"] = tabPage.id;
    // //         // chrome.tabs.get(Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"], (tabPage) => {
    // //         //     console.log(tabPage.id);
    // //         //     alert(tabPage.windowId);
    // //         // });
    // //         // alert(tabPage.id);
    // //     }
    // // );
    // // chrome.tabs.update(tabId, {url: "urlString"});  // 當前標籤頁打開鏈接;
    // // chrome.windows.remove(tabPage.id, function() {});  // 關閉標籤頁;
    // // chrome.tabs.get(tabPage.id, (tabPage) => {
    // //     console.log(tabPage.id);
    // //     alert(tabPage.id);
    // // });
    // // chrome.tabs.getSelected(tabPage.windowId, (tabPage) => {
    // //     console.log(tabPage.id);
    // //     alert(tabPage.id);
    // // });
    // // chrome.tabs.query(
    // //     {
    // //         // active: true,
    // //         // status: "complete",  // "loading";
    // //         // title: "WUXIPEOPLEsHOSPITAL",
    // //         url: chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
    // //     },
    // //     function(tabs) {
    // //         alert(tabs.length ? tabs[0].id: null);
    // //         alert(tabs.length ? tabs[0].windowId: null);
    // //     }
    // // );
    // window.setTimeout(function () {
    //     if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button").removeAttribute("disabled"); };

    //     if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").removeAttribute("disabled"); };

    //     if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length > 0) {
    //         for (let i = 0; i < window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length; i++) {
    //             window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
    //         };
    //     };
    // }, 10000);

    // Public_Variable_Acquisition_Strategy_Web_Page = Import_Acquisition_Strategy();
    Import_Acquisition_Strategy(
        is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value,
        Acquisition_Strategy_Import_Source_Path_textarea_Value,
        "WUXIPEOPLEsHOSPITAL",
        "WUXIPEOPLEsHOSPITAL_import_button",
        "WUXIPEOPLEsHOSPITAL_label",
        "WUXIPEOPLEsHOSPITAL_import_path_textarea",
        Public_Variable_Acquisition_Strategy_Web_Page,
        Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID,
        (error, result) => {

            if (error !== null) {
                console.log("加載 WUXIPEOPLEsHOSPITAL web 操作策略失敗.");
                console.log(error);
                if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("WUXIPEOPLEsHOSPITAL")) {
                    try {
                        chrome.tabs.remove(
                            [
                                Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["WUXIPEOPLEsHOSPITAL"]
                            ],
                            function () {
                                console.log('The tabs (Name=WUXIPEOPLEsHOSPITAL, id=' + String(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["WUXIPEOPLEsHOSPITAL"]) + ') has been closed.');
                                if (Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("WUXIPEOPLEsHOSPITAL")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"];
                                };
                                if (Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID.hasOwnProperty("WUXIPEOPLEsHOSPITAL")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["WUXIPEOPLEsHOSPITAL"];
                                };
                            }
                        );
                        // if (!(Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"] === null || Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].closed)) {
                        //     // Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].location.href === "about:blank" 表示窗口不存在;
                        //     Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].close();
                        //     delete Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"];
                        // };
                    } catch (error) {
                        console.log(error);
                        alert("關閉 WUXIPEOPLEsHOSPITAL Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                    };
                };
                if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button").removeAttribute("disabled"); };
                if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").removeAttribute("disabled"); };
                if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length > 0) {
                    for (let i = 0; i < window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length; i++) {
                        window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
                    };
                };
                alert("加載 WUXIPEOPLEsHOSPITAL web 操作策略失敗:\n" + error);
                return;
            };

            if (result !== null) {
                // // Public_Variable_Acquisition_Strategy_Web_Page[result[0]] = result[1];  // 在 Public_Variable_Acquisition_Strategy_Web_Page 變量中記錄新創建的窗口對象;
                // Public_Variable_Acquisition_Strategy_Web_Page[result[0]].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // // if (Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page[result[0]]) === "[object Window]") {
                // //     Public_Variable_Acquisition_Strategy_Web_Page[result[0]].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // //     // result[1].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // //     // console.log("加載 " + result[0] + " web 操作策略成功.");
                // //     // alert("加載 " + result[0] + " web 操作策略成功.");
                // // } else {
                // //     // console.log("加載 WUXIPEOPLEsHOSPITAL web 操作策略失敗.");
                // //     if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("WUXIPEOPLEsHOSPITAL")) {
                // //         try {
                // //             if (!(Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"] === null || Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].closed)) {
                // //                 // Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].location.href === "about:blank" 表示窗口不存在;
                // //                 Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].close();
                // //                 delete Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"];
                // //             };
                // //         } catch (error) {
                // //             console.log(error);
                // //             alert("關閉 WUXIPEOPLEsHOSPITAL Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                // //         };
                // //     };
                // //     alert("加載 WUXIPEOPLEsHOSPITAL web 操作策略失敗.");
                // // };
            } else {
                // console.log("加載 WUXIPEOPLEsHOSPITAL web 操作策略失敗.");
                if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("WUXIPEOPLEsHOSPITAL")) {
                    try {
                        chrome.tabs.remove(
                            [
                                Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["WUXIPEOPLEsHOSPITAL"]
                            ],
                            function () {
                                console.log('The tabs (Name=WUXIPEOPLEsHOSPITAL, id=' + String(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["WUXIPEOPLEsHOSPITAL"]) + ') has been closed.');
                                if (Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("WUXIPEOPLEsHOSPITAL")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"];
                                };
                                if (Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID.hasOwnProperty("WUXIPEOPLEsHOSPITAL")) {
                                    delete Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["WUXIPEOPLEsHOSPITAL"];
                                };
                            }
                        );
                        // if (!(Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"] === null || Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].closed)) {
                        //     // Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].location.href === "about:blank" 表示窗口不存在;
                        //     Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"].close();
                        //     delete Public_Variable_Acquisition_Strategy_Web_Page["WUXIPEOPLEsHOSPITAL"];
                        // };
                    } catch (error) {
                        console.log(error);
                        alert("關閉 WUXIPEOPLEsHOSPITAL Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                    };
                };
                alert("加載 WUXIPEOPLEsHOSPITAL web 操作策略失敗.");
            };

            if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_button").removeAttribute("disabled"); };
            if (window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea") !== null) { window.document.getElementById("WUXIPEOPLEsHOSPITAL_import_path_textarea").removeAttribute("disabled"); };
            if (window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length > 0) {
                for (let i = 0; i < window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio").length; i++) {
                    window.document.getElementsByName("WUXIPEOPLEsHOSPITAL_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
                };
            };
        }
    );

    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => { console.log(tabs.length ? tabs[0].id: null); });  // 獲取標簽頁對象數組;
    // // 向指定標籤頁插入 JavaScript 脚本;
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     function: setPageBackgroundColor,
    // });
});

window.document.getElementById("TFDA_import_button").addEventListener("click", async () => {

    if (window.document.getElementById("TFDA_import_button") !== null) { window.document.getElementById("TFDA_import_button").disabled = "disabled"; };
    if (window.document.getElementById("TFDA_import_path_textarea") !== null) { window.document.getElementById("TFDA_import_path_textarea").disabled = "disabled"; };
    if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
        for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
            window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].disabled = "disabled";
        };
    };

    // 傳入自定義輸入的采集策略導入源類型是從 http 還是本地硬盤文檔系統 file;
    let is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = "file";  // "http";
    if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
        for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
            if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].value;
            };
        };
    };

    let Acquisition_Strategy_Import_Source_Path_textarea_Value = "";
    if (window.document.getElementById("TFDA_import_path_textarea") !== null && window.document.getElementById("TFDA_import_path_textarea").value !== "") {
        Acquisition_Strategy_Import_Source_Path_textarea_Value = window.document.getElementById("TFDA_import_path_textarea").value;
    };

    // switch (is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value) {
    //     case "http": {
    //         Public_Variable_Acquisition_Strategy_Web_Page["TFDA"] = window.open(
    //             Acquisition_Strategy_Import_Source_Path_textarea_Value,
    //             "TFDA"
    //         );
    //         break;
    //     };
    //     case "file": {
    //         Public_Variable_Acquisition_Strategy_Web_Page["TFDA"] = window.open(
    //             Acquisition_Strategy_Import_Source_Path_textarea_Value,  // chrome.runtime.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value),
    //             "TFDA"
    //         );
    //         break;
    //     };
    //     default: {
    //         console.log("傳入的網頁操作自動化工具加載源類型 " + is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value + " 不屬於 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
    //         alert("傳入的網頁操作自動化工具加載源類型 " + is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value + " 不屬於 ['http', 'file'] 類型，只支持從 ['http', 'file'] 類型的源加載.");
    //     };
    // };
    // Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
    // // 使用 chrome.tabs.create({url: "urlString"}) 方法新打開新標籤頁並加載指定鏈接;
    // // chrome.tabs.create(
    // //     {
    // //         // windowId: 1,
    // //         url: Acquisition_Strategy_Import_Source_Path_textarea_Value  // chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
    // //     },
    // //     (tabPage) => {
    // //         // console.log(tabPage.id);
    // //         // Public_Variable_Acquisition_Strategy_Web_Page["TFDA"] = tabPage.id;
    // //         // chrome.tabs.get(Public_Variable_Acquisition_Strategy_Web_Page["TFDA"], (tabPage) => {
    // //         //     console.log(tabPage.id);
    // //         //     alert(tabPage.windowId);
    // //         // });
    // //         // alert(tabPage.id);
    // //     }
    // // );
    // window.setTimeout(function () {
    //     if (window.document.getElementById("TFDA_import_button") !== null) { window.document.getElementById("TFDA_import_button").removeAttribute("disabled"); };
    //     if (window.document.getElementById("TFDA_import_path_textarea") !== null) { window.document.getElementById("TFDA_import_path_textarea").removeAttribute("disabled"); };
    //     if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
    //         for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
    //             window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
    //         };
    //     };
    // }, 10000);

    // Public_Variable_Acquisition_Strategy_Web_Page = Import_Acquisition_Strategy();
    Import_Acquisition_Strategy(
        is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value,
        Acquisition_Strategy_Import_Source_Path_textarea_Value,
        "TFDA",
        "TFDA_import_button",
        "TFDA_label",
        "TFDA_import_path_textarea",
        Public_Variable_Acquisition_Strategy_Web_Page,
        (error, result) => {

            if (error !== null) {
                console.log("加載 TFDA web 操作策略失敗.");
                console.log(error);
                if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("TFDA")) {
                    try {
                        if (!(Public_Variable_Acquisition_Strategy_Web_Page["TFDA"] === null || Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].closed)) {
                            // Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].location.href === "about:blank" 表示窗口不存在;
                            Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].close();
                            delete Public_Variable_Acquisition_Strategy_Web_Page["TFDA"];
                        };
                    } catch (error) {
                        console.log(error);
                        alert("關閉 TFDA Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                    };
                };
                if (window.document.getElementById("TFDA_import_button") !== null) { window.document.getElementById("TFDA_import_button").removeAttribute("disabled"); };
                if (window.document.getElementById("TFDA_import_path_textarea") !== null) { window.document.getElementById("TFDA_import_path_textarea").removeAttribute("disabled"); };
                if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
                    for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                        window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
                    };
                };
                alert("加載 TFDA web 操作策略失敗:\n" + error);
                return;
            };

            if (result !== null) {
                // Public_Variable_Acquisition_Strategy_Web_Page[result[0]] = result[1];  // 在 Public_Variable_Acquisition_Strategy_Web_Page 變量中記錄新創建的窗口對象;
                Public_Variable_Acquisition_Strategy_Web_Page[result[0]].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                // if (Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page[result[0]]) === "[object Window]") {
                //     Public_Variable_Acquisition_Strategy_Web_Page[result[0]].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                //     // result[1].focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                //     // console.log("加載 " + result[0] + " web 操作策略成功.");
                //     // alert("加載 " + result[0] + " web 操作策略成功.");
                // } else {
                //     // console.log("加載 TFDA web 操作策略失敗.");
                //     if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("TFDA")) {
                //         try {
                //             if (!(Public_Variable_Acquisition_Strategy_Web_Page["TFDA"] === null || Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].closed)) {
                //                 // Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].location.href === "about:blank" 表示窗口不存在;
                //                 Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].close();
                //                 delete Public_Variable_Acquisition_Strategy_Web_Page["TFDA"];
                //             };
                //         } catch (error) {
                //             console.log(error);
                //             alert("關閉 TFDA Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                //         };
                //     };
                //     alert("加載 TFDA web 操作策略失敗.");
                // };
            } else {
                // console.log("加載 TFDA web 操作策略失敗.");
                if ((typeof (Public_Variable_Acquisition_Strategy_Web_Page) === 'object' && Object.prototype.toString.call(Public_Variable_Acquisition_Strategy_Web_Page).toLowerCase() === '[object object]' && !(Public_Variable_Acquisition_Strategy_Web_Page.length)) && Public_Variable_Acquisition_Strategy_Web_Page.hasOwnProperty("TFDA")) {
                    try {
                        if (!(Public_Variable_Acquisition_Strategy_Web_Page["TFDA"] === null || Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].closed)) {
                            // Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].location.href === "about:blank" 表示窗口不存在;
                            Public_Variable_Acquisition_Strategy_Web_Page["TFDA"].close();
                            delete Public_Variable_Acquisition_Strategy_Web_Page["TFDA"];
                        };
                    } catch (error) {
                        console.log(error);
                        alert("關閉 TFDA Acquisition Strategy 頁面窗口發生錯誤:\n" + error);
                    };
                };
                alert("加載 TFDA web 操作策略失敗.");
            };

            if (window.document.getElementById("TFDA_import_button") !== null) { window.document.getElementById("TFDA_import_button").removeAttribute("disabled"); };
            if (window.document.getElementById("TFDA_import_path_textarea") !== null) { window.document.getElementById("TFDA_import_path_textarea").removeAttribute("disabled"); };
            if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
                for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                    window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
                };
            };
        }
    );
});






// 不同標籤頁進程之間通信的數據;
let response_data = null;
let request_data = null;
let request_String = "How are you.";
let request_Dict = {
    "message": 'background -> contentScript',
    "data": request_String
};
let response_String = "Fine, thank you, and you ?";
let response_Dict = {
    "message": 'background -> contentScript',
    "data": response_String
};

// 在後臺頁面(background.html)進程中監聽自定義的網頁包含脚本(content-script.js)進程中傳遞過來的指令;
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        // console.log('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息: ', request);
        // console.log(request);
        // console.log(sender);
        // console.log(sendResponse);
        // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來消息.\n' + 'request:\n' + request + '\nsender:\n' + sender + '\nsendResponse:\n' + sendResponse);

        // request_Dict = JSON.parse(request["data"]);
        // response_String = JSON.stringify(request);
        // 自定義的網頁包含脚本(content-script.js)進程向後臺頁面(background.html)進程發送答復信息;
        // sendResponse(response_Dict);
        // sendResponse(
        //     {
        //         "message": 'contentScript -> background',
        //         "data": response_String
        //     }
        // );

        if (request["message"] === "contentScript -> background" && request["data"] === "How are you.") {
            console.log('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息: ', request);
            // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
            // sendResponse(response_Dict);
            sendResponse(
                {
                    "message": 'background -> contentScript',
                    "data": response_String
                }
            );
            alert('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息:\n' + request);
        };

        if (request["message"] === "content_script_id") {
            content_script_tab_id = request["data"];
            // console.log("request.message: " + request["message"]);
            // console.log("request.data: " + request["data"]);
            // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + request);
        };

        if (request["message"] === "invoke_background_test()") {
            // console.log("request.message: " + request["message"]);
            // console.log("request.data: " + request["data"]);
            // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + request);
            alert('您單擊了' + '自定義注入網頁側邊欄(id="Sidebar_panel_Div")中的元素:\n' + request["data"] + '\n並且，網頁元素自定義的單擊(click)事件，執行了網頁插入脚本(injected-script.js)中的自定義函數:\ntest_invoke_background()\n然後，網頁插入脚本(injected-script.js)中的函數又通過網頁包含脚本(content-script.js)介導，運行了後臺頁面(background)中的函數:\ntest()');
        };
    }
);

// // 使用 Chrome 擴展下載文檔;
// chrome.runtime.onMessage.addListener(
//     function (message, sender, sendResponse) {
//         if (message.url) {
//             chrome.downloads.download(
//                 {
//                     url: message.url,
//                     conflictAction: 'uniquify',
//                     saveAs: false
//                 }
//             );
//         } else if (true) {
//             // 其它自定義的必須在後臺處理的邏輯;
//         };
//     }
// );

// // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
// let content_script_tab_id = 0;  // 目標到達 content-script 標籤頁的 ID 號碼;
// // 向 content-script 標籤頁窗口進程發送消息;
// chrome.tabs.query(
//     {},
//     (tabs) => {

//         for (let i=0; i < tabs.length; i++) {

//             // 根據標籤頁窗口對象的 .url 屬性篩選特定的標籤頁窗口，然後再對特定的標籤頁窗口執行動作;
//             if (tabs[i].url === 'https://www.baidu.com/') {

//                 content_script_tab_id = tabs[i].id;

//                 // 向 content-script 標籤頁進程發送消息;
//                 chrome.tabs.sendMessage(
//                     content_script_tab_id,  // 到達標籤頁的 .id 號碼;
//                     {
//                         "message": 'background -> contentScript',
//                         "url": 'background/background.html',  // String(chrome.runtime.getURL('background/background.html'));
//                         "data": request_String
//                     },  // 發送的具體數據，可以是 JSON 對象;
//                     (response_Data) => {
//                         console.log('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息.');
//                         console.log(response_Data);
//                         alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
//                         // response_data = JSON.parse(response_Data["data"]);
                
//                         // if (response_Data["message"] === "contentScript -> background" && response_Data["data"] === "Fine, thank you, and you ?") {
//                         //     console.log("response.message: " + response_Data["message"]);
//                         //     console.log("response.data: " + response_Data["data"]);
//                         //     alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
//                         // };
//                     }
//                 );
//             };
//         };
//     }
// );
// // 查詢當前標籤頁的 ID 號碼;
// // chrome.tabs.query(
// //     {
// //         active: true,
// //         currentWindow: true
// //     },
// //     (tabs) => {
// //         content_script_tab_id = tabs.length ? tabs[0].id: null;
// //     }
// // );
// // 查詢所有選項卡;
// // chrome.tabs.query(
// //     {},
// //     (tabs) => {
// //         for (let i=0; i < tabs.length; i++) {
// //             // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=26&tableName=TABLE26&title=%B9%FA%B2%FA%D2%BD%C1%C6%C6%F7%D0%B5%B2%FA%C6%B7%A3%A8%D7%A2%B2%E1%A3%A9&bcId=152904417281669781044048234789"
// //             // if (String(tabs[i].url) === String(ContainDataWebPageURL)) {
// //             // 'https://www.baidu.com/'
// //             if (tabs[i].url === 'https://www.baidu.com/') {
// //                 content_script_tab_id = tabs[i].id;
// //                 // 向 content-script 標籤頁進程發送消息;
// //                 chrome.tabs.sendMessage(
// //                     content_script_tab_id,  // 到達標籤頁的 .id 號碼;
// //                     {
// //                         "message": 'background -> contentScript',
// //                         "url": 'background/background.html',  // String(chrome.runtime.getURL('background/background.html'));
// //                         "data": request_String
// //                     },  // 發送的具體數據，可以是 JSON 對象;
// //                     (response_Data) => {
// //                         console.log('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息.');
// //                         console.log(response_Data);
// //                         alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
// //                         // response_data = JSON.parse(response_Data["data"]);
// //                         // if (response_Data["message"] === "contentScript -> background" && response_Data["data"] === "Fine, thank you, and you ?") {
// //                         //     console.log("response.message: " + response_Data["message"]);
// //                         //     console.log("response.data: " + response_Data["data"]);
// //                         //     alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
// //                         // };
// //                     }
// //                 );
// //             };
// //         };
// //     }
// // );

// // 在後臺頁面(background.html)進程中，建立後臺頁面(background.html)進程與自定義的網頁包含脚本(content-script.js)進程建立長鏈接通道;
// let port = null;  // 創建的長鏈接通道對象;
// let tabId = 0;  // 當前標籤頁的 ID 號碼;
// // 查詢當前標籤頁的 ID 號碼;
// chrome.tabs.query(
//     {
//         active: true,
//         currentWindow: true
//     },
//     (tabs) => {
//         tabId = tabs.length ? tabs[0].id: null;

//         // 創建長鏈接通道對象，並賦值給 port 變量;
//         port = chrome.tabs.connect(
//             tabId,
//             {
//                 name: 'connect-background-contentScript'
//             }
//         );

//         // // 在後臺頁面(background.html)進程中向自定義的網頁包含脚本(content-script.js)進程中主動發送長連接指令;
//         // port.postMessage(
//         //     {
//         //         "message": 'background -> contentScript',
//         //         "url": 'background/background.html',  // String(chrome.runtime.getURL('background/background.html'));
//         //         "data": request_String
//         //     }
//         // );

//         // 在後臺頁面(background.html)進程中監聽自定義的網頁包含脚本(content-script.js)進程中傳遞過來的長鏈接指令;
//         port.onMessage.addListener(
//             (message) => {
//                 // console.log('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的長連接消息.');
//                 // console.log("request.message: " + message["message"]);
//                 // console.log("request.data" + message["data"]);
//                 // console.log(message);
//                 // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的長連接消息.\n' + message);
        
//                 // request_data = JSON.parse(message["data"]);
//                 // response_String = JSON.stringify(message);
//                 // port.postMessage(
//                 //     {
//                 //         "message": 'background -> contentScript',
//                 //         "data": response_String
//                 //     }
//                 // );
        
//                 // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
//                 if (message["message"] === "contentScript -> background" && message["data"] === "How are you.") {
//                     // 可以使用類似 "How are you".startsWith("How", 0) 的方法，來查看字符串 "How are you" 從 0 號位置起，是否為 "How" 開頭，返回值為 Boolean 類型變量:
//                     port.postMessage(
//                         {
//                             "message": 'background -> contentScript',
//                             "data": response_String
//                         }
//                     );
//                 };
//             }
//         );
//     }
// );
// // // 獲取當前窗口;
// // chrome.windows.getCurrent(
// //     (currentWindow) => {
// //         // 查詢當前標籤頁的 ID 號碼;
// //         chrome.tabs.query(
// //             {
// //                 active: true,
// //                 windowId: currentWindow.id
// //             },
// //             (tabs) => {
// //                 tabId = tabs.length ? tabs[0].id: null;
// //                 // 創建長鏈接通道對象，並賦值給 port 變量;
// //                 port = chrome.tabs.connect(
// //                     tabId,
// //                     {
// //                         name: 'connect-background-contentScript'
// //                     }
// //                 );
// //             }
// //         );
// //     }
// // );

// // 在後臺頁面(background.html)進程中監聽來自自定義的網頁包含脚本(content-script.js)進程中發送的長鏈接通道信息;
// chrome.runtime.onConnect.addListener(
//     (port) => {
//         // console.log("長鏈接通道接口:\n", port);
//         if (port.name === "connect-contentScript-background") {
//             port.onMessage.addListener(
//                 (message) => {
//                     // console.log('收到來自長鏈接 (name = "' + port.name + '") 發送過來的消息.');
//                     // console.log(message);
//                     // alert('收到來自長鏈接 (name = "' + port.name + '") 發送過來的消息:\n' + message);

//                     // request_data = JSON.parse(message["data"]);
//                     // response_String = JSON.stringify(message);
//                     // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
//                     // port.postMessage(
//                     //     {
//                     //         "message": 'contentScript -> background',
//                     //         "data": response_String
//                     //     }
//                     // );

//                     if (message["message"] === "contentScript -> background" && message["data"] === "How are you.") {
//                         port.postMessage(
//                             {
//                                 "message": 'background -> contentScript',
//                                 "data": response_String
//                             }
//                         );
//                     };
//                 }
//             );
//         };
//     }
// );

// 使用 .onRemoved 方法監聽瀏覽器標籤頁（tab）被關閉事件，並根據觸發事件時返回的 tab-id 號碼執行清理相應記錄變量功能 Cleanup the variables when a tab is closed;
chrome.tabs.onRemoved.addListener(
    function (tabID, removeInfo) {

        for (let key in Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID) {

            if (parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[key]) === parseInt(tabID)) {

                if (Contain_Data_Web_Page_Tab_ID.hasOwnProperty(String(key).concat("ContainDataWebPage"))) {
                    let temp_Contain_Data_Web_Page_Tab_ID = Contain_Data_Web_Page_Tab_ID[String(key).concat("ContainDataWebPage")];
                    // 關閉相對應的目標數據源網頁窗口所在的瀏覽器標籤頁;
                    chrome.tabs.remove(
                        [
                            Contain_Data_Web_Page_Tab_ID[String(key).concat("ContainDataWebPage")]
                        ],
                        function () {
                            console.log('The tabs (Name=' + String(key).concat("ContainDataWebPage") + ', id=' + String(temp_Contain_Data_Web_Page_Tab_ID) + ') has been closed.');
                            // if (Contain_Data_Web_Page_Tab.hasOwnProperty(String(key).concat("ContainDataWebPage"))) {
                            //     delete Contain_Data_Web_Page_Tab[String(key).concat("ContainDataWebPage")];
                            // };
                            if (Contain_Data_Web_Page_Tab_ID.hasOwnProperty(String(key).concat("ContainDataWebPage"))) {
                                delete Contain_Data_Web_Page_Tab_ID[String(key).concat("ContainDataWebPage")];
                            };
                        }
                    );
                };

                delete Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[key];
                delete Public_Variable_Acquisition_Strategy_Web_Page[key];
            };
        };

        for (let key in Contain_Data_Web_Page_Tab_ID) {

            if (parseInt(Contain_Data_Web_Page_Tab_ID[key]) === parseInt(tabID)) {

                if (Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID.hasOwnProperty(String(key).split("ContainDataWebPage")[0])) { 
                    // 在後臺頁面(background.html)進程中主動向自定義的人機交互頁面窗口(CFDA.html)進程中發送指令（CFDA.html 標籤頁的 id 號必須已知）;
                    // 向 CFDA.html 標籤頁窗口進程發送消息;
                    chrome.tabs.sendMessage(
                        // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                        // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                        parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(key).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                        {
                            "message": 'background->userInterface:Contain_Data_Web_Page_Tab_Removed',
                            "url": String(window.document.location.href), // 'background/background.html', // String(chrome.runtime.getURL('background/background.html'));
                            "Open_Contain_Data_Web_Page_Name": String(key),
                            // "ContainDataWebPageURL": String(Contain_Data_Web_Page_Tab[key].url),
                            "user_interface_tab_name": String(key).split("ContainDataWebPage")[0],
                            "data": ""
                        },  // 發送的具體數據，可以是 JSON 對象;
                        (response_Data) => {
                            // console.log(response_Data);
                            // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                            // response_data = JSON.parse(response_Data["data"]);

                            // 答復指令更新啓動常量參數;
                            if ((typeof (response_Data) === 'object' && Object.prototype.toString.call(response_Data).toLowerCase() === '[object object]' && !(response_Data.length)) && response_Data.hasOwnProperty("message") && response_Data["message"] === "userInterface->background:Reopen_Contain_Data_Web_Page") {
                                // 判斷數組元素是否爲 JSON 對象，判斷傳入的 Data_JSON_Object[i] 參數 JSON 對象中的各元素，是否有不可識別的錯誤;
                                if ((typeof (Contain_Data_Web_Page_Tab_ID) === 'object' && Object.prototype.toString.call(Contain_Data_Web_Page_Tab_ID).toLowerCase() === '[object object]' && !(Contain_Data_Web_Page_Tab_ID.length)) && Contain_Data_Web_Page_Tab_ID.hasOwnProperty(String(response_Data["Open_Contain_Data_Web_Page_Name"]))) {
                    
                                    // if (Object.prototype.toString.call(Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])]) === "[object Window]") {
                                    //     New_Open_Web_Page = Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])];
                                    //     New_Open_Web_Page.document.getElementsByTagName("body").item(0).innerHTML = "";  // 清空用於承載策略的標籤頁窗口;
                                    // } else {
                                    //     Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])] = null;
                                    //     New_Open_Web_Page = window.open("about:blank", String(response_Data["Open_Contain_Data_Web_Page_Name"]));  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為String(response_Data["Open_Contain_Data_Web_Page_Name"])，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
                                    //     Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])] = New_Open_Web_Page;
                                    // };
                                    // New_Open_Web_Page = Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])];  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為String(response_Data["Open_Contain_Data_Web_Page_Name"])，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
                    
                                    // Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])].url = String(response_Data["ContainDataWebPageURL"]);
                                    // chrome.tabs.reload(Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])], {active: true}, function (tabPage) {});  // 當前標籤頁打開鏈接;
                                    chrome.tabs.update(
                                        Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])],
                                        {
                                            url: String(response_Data["ContainDataWebPageURL"]),  // ContainDataWebPageURL, // 數據源網頁的網址 "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV";
                                            active: true
                                        },
                                        function (tabPage) {
                                            // Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])] = parseInt(tabPage.id);
                                        }
                                    );  // 當前標籤頁打開鏈接;
                    
                                } else {
                    
                                    // // 使用 window.open("about:blank", Open_Web_Page_Name) 方法新打開一個空白(about:blank)網頁窗口，窗口名字命名為Open_Web_Page_Name，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
                                    // let CFDAContainDataWebPage = window.open(
                                    //     String(response_Data["ContainDataWebPageURL"]),  // ContainDataWebPageURL, // 數據源網頁的網址 "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV";
                                    //     String(response_Data["Open_Contain_Data_Web_Page_Name"])  // Open_Contain_Data_Web_Page_Name // "CFDAContainDataWebPage" 用於加載數據源網頁的新建窗口變量;
                                    // );
                                    // CFDAContainDataWebPage.focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                                    // 使用 chrome.tabs.create({url: "urlString"}) 方法新打開新標籤頁並加載指定鏈接;
                                    chrome.tabs.create(
                                        {
                                            // windowId: 1,
                                            url: String(response_Data["ContainDataWebPageURL"]),  // ContainDataWebPageURL, // 數據源網頁的網址 "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV";
                                            // url: chrome.extension.getURL(file_path)
                                            active: true
                                        },
                                        (tabPage) => {
                                            // console.log(tabPage.id);
                                            Contain_Data_Web_Page_Tab_ID[String(response_Data["Open_Contain_Data_Web_Page_Name"])] = parseInt(tabPage.id);
                                            // Contain_Data_Web_Page_Tab[String(response_Data["Open_Contain_Data_Web_Page_Name"])] = tabPage;
                                            // chrome.tabs.get(
                                            //     tabPage.id,
                                            //     (tabPage) => {
                                            //         console.log(tabPage.id);
                                            //         alert(tabPage.windowId);
                                            //     }
                                            // );
                                            // alert(tabPage.id);
                                        }
                                    );
                                    // chrome.tabs.update(tabId, {url: "urlString", active: true}, function (tabPage) {});  // 當前標籤頁打開鏈接;
                                    // chrome.windows.remove(tabPage.id, function() {});  // 關閉標籤頁;
                                    // chrome.tabs.get(
                                    //     tabPage.id,
                                    //     (tabPage) => {
                                    //         console.log(tabPage.id);
                                    //         alert(tabPage.id);
                                    //     }
                                    // );
                                    // chrome.tabs.getSelected(
                                    //     tabPage.windowId,
                                    //     (tabPage) => {
                                    //         console.log(tabPage.id);
                                    //         alert(tabPage.id);
                                    //     }
                                    // );
                                    // chrome.tabs.query(
                                    //     {
                                    //         // active: true,
                                    //         // status: "complete",  // "loading";
                                    //         // title: "CFDA",
                                    //         url: chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
                                    //     },
                                    //     function(tabs) {
                                    //         alert(tabs.length ? tabs[0].id: null);
                                    //         alert(tabs.length ? tabs[0].windowId: null);
                                    //     }
                                    // );
                                };
                            };
                        }
                    );
                };

                // delete Contain_Data_Web_Page_Tab[key];
                delete Contain_Data_Web_Page_Tab_ID[key];
            };
        };
    }
);

// 在後臺頁面(background.html)進程中監聽自定義的網頁包含脚本(content-script.js)進程中傳遞過來的指令;
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        // console.log('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息: ', request);
        // console.log(request);
        // console.log(sender);
        // console.log(sendResponse);
        // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來消息.\n' + 'request:\n' + request + '\nsender:\n' + sender + '\nsendResponse:\n' + sendResponse);
        // JSON.stringify(request_Dict, function (key, value) {}, 4);
        // JSON.parse(response_Data["data"], function (key, value) {});

        if ((typeof (request) === 'object' && Object.prototype.toString.call(request).toLowerCase() === '[object object]' && !(request.length)) && request.hasOwnProperty("message")) {

            if (request["message"] === "userInterface->background:Current_Page_Information") {
                // console.log('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息: ', request);
                // alert('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息:\n' + request);
    
                // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["user_interface_tab_name"])] = parseInt(request["user_interface_tab_id"]);
    
                if (request.hasOwnProperty("Configuration_Parameters")) {
                    Configuration_Parameters[String(request["user_interface_tab_name"])] = {};
                    for (let key in request["Configuration_Parameters"]) {
                        Configuration_Parameters[String(request["user_interface_tab_name"])][key] = request["Configuration_Parameters"][key];
                    };
                };
    
                // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
                // sendResponse(response_Dict);
                // 指令待命;
                sendResponse(
                    {
                        "message": "background->userInterface:StandBy",
                        "data": ""
                    }
                );
    
                // // console.log(request["user_interface_tab_name"]);
                // if (request["user_interface_tab_name"] === "CFDA") {
                //     // 使用 JSON-1.hasOwnProperty("Key-1") 方法判斷 JSON 對象 JSON-1 中是否包含有 "Key-1" 鍵;
                //     // 用於加載數據源網頁的新建窗口變量;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("Open_Contain_Data_Web_Page_Name")) {
                //         Open_Contain_Data_Web_Page_Name = String(response_Data["Configuration_Parameters"]["Open_Contain_Data_Web_Page_Name"]);
                //     };
                //     // 數據源網頁的地址;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("ContainDataWebPageURL")) {
                //         ContainDataWebPageURL = String(response_Data["Configuration_Parameters"]["ContainDataWebPageURL"]);
                //     };
                //     // 網頁中關鍵詞輸入框元素的 XPath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("WebKeyWordTextboxElement_XPath")) {
                //         WebKeyWordTextboxElement_XPath = String(response_Data["Configuration_Parameters"]["WebKeyWordTextboxElement_XPath"]);
                //     };
                //     // 網頁中關鍵詞查詢按鈕的 XPath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("WebKeyWordQuerySubmitButtonElement_XPath")) {
                //         WebKeyWordQuerySubmitButtonElement_XPath = String(response_Data["Configuration_Parameters"]["WebKeyWordQuerySubmitButtonElement_XPath"]);
                //     };
                //     // 可采集的最大網頁序號，和當前所處網頁的序號的，元素 XPath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableWebPageNumberTdElement_XPath_1")) {
                //         TableWebPageNumberTdElement_XPath_1 = String(response_Data["Configuration_Parameters"]["TableWebPageNumberTdElement_XPath_1"]);
                //     };
                //     // 可采集的最大網頁序號，和當前所處網頁的序號的，元素 XPath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableWebPageNumberTdElement_XPath_2")) {
                //         TableWebPageNumberTdElement_XPath_2 = String(response_Data["Configuration_Parameters"]["TableWebPageNumberTdElement_XPath_2"]);
                //     };
                //     // 當前網頁中可采集數據元素的 XPath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("RetrievalResult_XPath_1")) {
                //         RetrievalResult_XPath_1 = String(response_Data["Configuration_Parameters"]["RetrievalResult_XPath_1"]);
                //     };
                //     // 當前網頁中可采集數據元素的 XPath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("RetrievalResult_XPath_2")) {
                //         RetrievalResult_XPath_2 = String(response_Data["Configuration_Parameters"]["RetrievalResult_XPath_2"]);
                //     };
                //     // 第二層網頁中需要抓取的數據的條目數目;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("NumberOfItemInThisSecondLevelWebPage")) {
                //         NumberOfItemInThisSecondLevelWebPage = parseInt(response_Data["Configuration_Parameters"]["NumberOfItemInThisSecondLevelWebPage"]);
                //     };
                //     // 第二層網頁中需要抓取的數據元素的 XPath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("SecondLevelWebPageRetrievalResult_XPath")) {
                //         SecondLevelWebPageRetrievalResult_XPath = String(response_Data["Configuration_Parameters"]["SecondLevelWebPageRetrievalResult_XPath"]);
                //     };
                //     // 當前網頁中進入第二層級頁面的入口的網頁元素的 XPath 值字符串;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("EntryElementfromFirstLevelPagetoSecondLevelPage_XPath_1")) {
                //         EntryElementfromFirstLevelPagetoSecondLevelPage_XPath_1 = String(response_Data["Configuration_Parameters"]["EntryElementfromFirstLevelPagetoSecondLevelPage_XPath_1"]);
                //     };
                //     // 當前網頁中進入第二層級頁面的入口的網頁元素的 XPath 值字符串;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("EntryElementfromFirstLevelPagetoSecondLevelPage_XPath_2")) {
                //         EntryElementfromFirstLevelPagetoSecondLevelPage_XPath_2 = String(response_Data["Configuration_Parameters"]["EntryElementfromFirstLevelPagetoSecondLevelPage_XPath_2"]);
                //     };
                //     // 從第二層網頁返回第一層網頁的按鈕元素 XPath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("FromSecondLevelWebReturnFirstLevelWeb_XPath")) {
                //         FromSecondLevelWebReturnFirstLevelWeb_XPath = String(response_Data["Configuration_Parameters"]["FromSecondLevelWebReturnFirstLevelWeb_XPath"]);
                //     };
                //     // 目標網頁中的跳頁頁碼輸入文本框的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableSkipPageTextboxTdElement_XPath_1")) {
                //         TableSkipPageTextboxTdElement_XPath_1 = String(response_Data["Configuration_Parameters"]["TableSkipPageTextboxTdElement_XPath_1"]);
                //     };
                //     // 目標網頁中的跳頁頁碼輸入文本框的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableSkipPageTextboxTdElement_XPath_2")) {
                //         TableSkipPageTextboxTdElement_XPath_2 = String(response_Data["Configuration_Parameters"]["TableSkipPageTextboxTdElement_XPath_2"]);
                //     };
                //     // 目標網頁中的跳頁頁碼輸入文本框的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableSkipPageTextboxTdElement_XPath_3")) {
                //         TableSkipPageTextboxTdElement_XPath_3 = String(response_Data["Configuration_Parameters"]["TableSkipPageTextboxTdElement_XPath_3"]);
                //     };
                //     // 目標網頁中的跳頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableSkipPageSubmitButtonTdElement_XPath_1")) {
                //         TableSkipPageSubmitButtonTdElement_XPath_1 = String(response_Data["Configuration_Parameters"]["TableSkipPageSubmitButtonTdElement_XPath_1"]);
                //     };
                //     // 目標網頁中的跳頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableSkipPageSubmitButtonTdElement_XPath_2")) {
                //         TableSkipPageSubmitButtonTdElement_XPath_2 = String(response_Data["Configuration_Parameters"]["TableSkipPageSubmitButtonTdElement_XPath_2"]);
                //     };
                //     // 目標網頁中的跳頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableSkipPageSubmitButtonTdElement_XPath_3")) {
                //         TableSkipPageSubmitButtonTdElement_XPath_3 = String(response_Data["Configuration_Parameters"]["TableSkipPageSubmitButtonTdElement_XPath_3"]);
                //     };
                //     // 目標網頁中的下一頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableNextPageSubmitButtonImgTdElement_XPath_1")) {
                //         TableNextPageSubmitButtonImgTdElement_XPath_1 = String(response_Data["Configuration_Parameters"]["TableNextPageSubmitButtonImgTdElement_XPath_1"]);
                //     };
                //     // 目標網頁中的下一頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableNextPageSubmitButtonImgTdElement_XPath_2")) {
                //         TableNextPageSubmitButtonImgTdElement_XPath_2 = String(response_Data["Configuration_Parameters"]["TableNextPageSubmitButtonImgTdElement_XPath_2"]);
                //     };
                //     // 目標網頁中的下一頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableNextPageSubmitButtonImgTdElement_XPath_3")) {
                //         TableNextPageSubmitButtonImgTdElement_XPath_3 = String(response_Data["Configuration_Parameters"]["TableNextPageSubmitButtonImgTdElement_XPath_3"]);
                //     };
                //     // 目標網頁中的上一頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableBackPageSubmitButtonImgTdElement_XPath_1")) {
                //         TableBackPageSubmitButtonImgTdElement_XPath_1 = String(response_Data["Configuration_Parameters"]["TableBackPageSubmitButtonImgTdElement_XPath_1"]);
                //     };
                //     // 目標網頁中的上一頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableBackPageSubmitButtonImgTdElement_XPath_2")) {
                //         TableBackPageSubmitButtonImgTdElement_XPath_2 = String(response_Data["Configuration_Parameters"]["TableBackPageSubmitButtonImgTdElement_XPath_2"]);
                //     };
                //     // 目標網頁中的上一頁按鈕的 xpath 值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TableBackPageSubmitButtonImgTdElement_XPath_3")) {
                //         TableBackPageSubmitButtonImgTdElement_XPath_3 = String(response_Data["Configuration_Parameters"]["TableBackPageSubmitButtonImgTdElement_XPath_3"]);
                //     };
                //     // 即將注入新創建的加載數據源網頁的新建窗口的 JavaScript 代碼;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton")) {
                //         TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton = String(response_Data["Configuration_Parameters"]["TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageContainDataButton"]);
                //     };
                //     // 即將注入新創建的用於呈現采集結果的新建窗口的 JavaScript 代碼;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton")) {
                //         TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton = String(response_Data["Configuration_Parameters"]["TemporaryStorageNewOpenWebPageInsertFunctionCodeString_NewOpenWebPageButton"]);
                //     };
                //     // 循環周期時長（單位毫秒）輸入文本框 input 的值;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("Interval_Of_Circle_Click_value")) {
                //         Interval_Of_Circle_Click_value = parseInt(response_Data["Configuration_Parameters"]["Interval_Of_Circle_Click_value"]);
                //     };
                //     // 用於呈現采集結果的的新建窗口變量;
                //     if (response_Data["Configuration_Parameters"].hasOwnProperty("OpenResultExhibitsWebPageName")) {
                //         OpenResultExhibitsWebPageName = String(response_Data["Configuration_Parameters"]["OpenResultExhibitsWebPageName"]);
                //     };
                // };
            };

            if (request["message"] === "userInterface->background:Open_Contain_Data_Web_Page") {
                // console.log('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息: ', request);
                // alert('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息:\n' + request);
    
                // 判斷數組元素是否爲 JSON 對象，判斷傳入的 Data_JSON_Object[i] 參數 JSON 對象中的各元素，是否有不可識別的錯誤;
                if ((typeof (Contain_Data_Web_Page_Tab_ID) === 'object' && Object.prototype.toString.call(Contain_Data_Web_Page_Tab_ID).toLowerCase() === '[object object]' && !(Contain_Data_Web_Page_Tab_ID.length)) && Contain_Data_Web_Page_Tab_ID.hasOwnProperty(String(request["Open_Contain_Data_Web_Page_Name"]))) {
    
                    // if (Object.prototype.toString.call(Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])]) === "[object Window]") {
                    //     New_Open_Web_Page = Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])];
                    //     New_Open_Web_Page.document.getElementsByTagName("body").item(0).innerHTML = "";  // 清空用於承載策略的標籤頁窗口;
                    // } else {
                    //     Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])] = null;
                    //     New_Open_Web_Page = window.open("about:blank", String(request["Open_Contain_Data_Web_Page_Name"]));  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為String(request["Open_Contain_Data_Web_Page_Name"])，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
                    //     Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])] = New_Open_Web_Page;
                    // };
                    // New_Open_Web_Page = Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])];  // 新打開一個空白(about:blank)網頁窗口，窗口名字命名為String(request["Open_Contain_Data_Web_Page_Name"])，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
    
                    // Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])].url = String(request["ContainDataWebPageURL"]);
                    // chrome.tabs.reload(Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])], {active: true}, function (tabPage) {});  // 當前標籤頁打開鏈接;
                    chrome.tabs.update(
                        Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])],
                        {
                            url: String(request["ContainDataWebPageURL"]),  // ContainDataWebPageURL, // 數據源網頁的網址 "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV";
                            active: true
                        },
                        function (tabPage) {
                            // Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])] = parseInt(tabPage.id);
                        }
                    );  // 當前標籤頁打開鏈接;
    
                } else {
    
                    // // 使用 window.open("about:blank", Open_Web_Page_Name) 方法新打開一個空白(about:blank)網頁窗口，窗口名字命名為Open_Web_Page_Name，window.open('URL','window.name','width=200,height=100,location=yes', replace_boolean)方法，如果窗口'window.name'已存在且未关闭，將會獲取到窗口对象，并传递给New_Open_Web_Page这个变量，如果窗口'window.name'不存在或已关闭，則打开一个新的網頁窗口;
                    // let CFDAContainDataWebPage = window.open(
                    //     String(request["ContainDataWebPageURL"]),  // ContainDataWebPageURL, // 數據源網頁的網址 "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV";
                    //     String(request["Open_Contain_Data_Web_Page_Name"])  // Open_Contain_Data_Web_Page_Name // "CFDAContainDataWebPage" 用於加載數據源網頁的新建窗口變量;
                    // );
                    // CFDAContainDataWebPage.focus();  // 跳到新創建的標簽窗口，將新創建的標簽窗口對象設置爲當前窗口;
                    // 使用 chrome.tabs.create({url: "urlString"}) 方法新打開新標籤頁並加載指定鏈接;
                    chrome.tabs.create(
                        {
                            // windowId: 1,
                            url: String(request["ContainDataWebPageURL"]),  // ContainDataWebPageURL, // 數據源網頁的網址 "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV";
                            // url: chrome.extension.getURL(file_path)
                            active: true
                        },
                        (tabPage) => {
                            // console.log(tabPage.id);
                            Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])] = parseInt(tabPage.id);
                            // Contain_Data_Web_Page_Tab[String(request["Open_Contain_Data_Web_Page_Name"])] = tabPage;
                            // chrome.tabs.get(
                            //     tabPage.id,
                            //     (tabPage) => {
                            //         console.log(tabPage.id);
                            //         alert(tabPage.windowId);
                            //     }
                            // );
                            // alert(tabPage.id);
                        }
                    );
                    // chrome.tabs.update(tabId, {url: "urlString", active: true}, function (tabPage) {});  // 當前標籤頁打開鏈接;
                    // chrome.windows.remove(tabPage.id, function() {});  // 關閉標籤頁;
                    // chrome.tabs.get(
                    //     tabPage.id,
                    //     (tabPage) => {
                    //         console.log(tabPage.id);
                    //         alert(tabPage.id);
                    //     }
                    // );
                    // chrome.tabs.getSelected(
                    //     tabPage.windowId,
                    //     (tabPage) => {
                    //         console.log(tabPage.id);
                    //         alert(tabPage.id);
                    //     }
                    // );
                    // chrome.tabs.query(
                    //     {
                    //         // active: true,
                    //         // status: "complete",  // "loading";
                    //         // title: "CFDA",
                    //         url: chrome.extension.getURL(Acquisition_Strategy_Import_Source_Path_textarea_Value)
                    //     },
                    //     function(tabs) {
                    //         alert(tabs.length ? tabs[0].id: null);
                    //         alert(tabs.length ? tabs[0].windowId: null);
                    //     }
                    // );
                };
            };

            if (request["message"] === "userInterface->background:Update_Interval_Of_Circle_Click_value") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);
    
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    {
                        "message": 'background->contentScript:Update_Interval_Of_Circle_Click_value',
                        "url": String(window.document.location.href), // 'background/background.html', // String(chrome.runtime.getURL('background/background.html'));
                        "Open_Contain_Data_Web_Page_Name": String(request["user_interface_tab_name"]).concat("ContainDataWebPage"),
                        // "Open_Contain_Data_Web_Page_Name": String(request["Open_Contain_Data_Web_Page_Name"]),
                        "ContainDataWebPageURL": String(request["ContainDataWebPageURL"]),
                        "user_interface_tab_name": String(request["user_interface_tab_name"]),
                        "Interval_Of_Circle_Click_value": parseInt(request["Interval_Of_Circle_Click_value"]),
                        "Randomization_Relative_Interval": parseFloat(request["Randomization_Relative_Interval"]),
                        "data": ""
                    },  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // // 答復指令更新啓動常量參數;
                    //     // if (response_Data["message"] === "contentScript->background:Updated_Interval_Of_Circle_Click_value") {
                    //     //     sendResponse(
                    //     //         {
                    //     //             "message": "background->userInterface:Updated_Interval_Of_Circle_Click_value",
                    //     //             "url": String(window.document.location.href), // 'background/background.html', // String(chrome.runtime.getURL('background/background.html'));
                    //     //             "Open_Contain_Data_Web_Page_Name": String(response_Data["Open_Contain_Data_Web_Page_Name"]),
                    //     //             "ContainDataWebPageURL": String(response_Data["url"]),
                    //     //             "user_interface_tab_name": String(response_Data["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]),
                    //     //             "Interval_Of_Circle_Click_value": parseInt(response_Data["Interval_Of_Circle_Click_value"]),
                    //     //             "Randomization_Relative_Interval": parseFloat(response_Data["Randomization_Relative_Interval"]),
                    //     //             "data": ""
                    //     //         }
                    //     //     );
                    //     // };
                    // }
                );
            };

            if (request["message"] === "userInterface->background:Update_Randomization_Relative_Interval") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);
    
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    {
                        "message": 'background->contentScript:Update_Randomization_Relative_Interval',
                        "url": String(window.document.location.href), // 'background/background.html', // String(chrome.runtime.getURL('background/background.html'));
                        "Open_Contain_Data_Web_Page_Name": String(request["user_interface_tab_name"]).concat("ContainDataWebPage"),
                        // "Open_Contain_Data_Web_Page_Name": String(request["Open_Contain_Data_Web_Page_Name"]),
                        "ContainDataWebPageURL": String(request["ContainDataWebPageURL"]),
                        "user_interface_tab_name": String(request["user_interface_tab_name"]),
                        "Interval_Of_Circle_Click_value": parseInt(request["Interval_Of_Circle_Click_value"]),
                        "Randomization_Relative_Interval": parseFloat(request["Randomization_Relative_Interval"]),
                        "data": ""
                    },  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // // 答復指令更新啓動常量參數;
                    //     // if (response_Data["message"] === "contentScript->background:Update_Randomization_Relative_Interval") {
                    //     //     sendResponse(
                    //     //         {
                    //     //             "message": "background->userInterface:Update_Randomization_Relative_Interval",
                    //     //             "url": String(window.document.location.href), // 'background/background.html', // String(chrome.runtime.getURL('background/background.html'));
                    //     //             "Open_Contain_Data_Web_Page_Name": String(response_Data["Open_Contain_Data_Web_Page_Name"]),
                    //     //             "ContainDataWebPageURL": String(response_Data["url"]),
                    //     //             "user_interface_tab_name": String(response_Data["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]),
                    //     //             "Interval_Of_Circle_Click_value": parseInt(response_Data["Interval_Of_Circle_Click_value"]),
                    //     //             "Randomization_Relative_Interval": parseFloat(response_Data["Randomization_Relative_Interval"]),
                    //     //             "data": ""
                    //     //         }
                    //     //     );
                    //     // };
                    // }
                );
            };

            if (request["message"] === "userInterface->background:Ask_for_Data") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);
    
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:StartCollect") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:StopCollect") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);
    
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:Query_Key_Word") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:Ask_for_Extract_Page_Information") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:Skip_Page") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:Step_Further_Next_Page") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:Step_Back_Previous_Page") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:First_to_Second") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "userInterface->background:Second_return_First") {
                // Configuration_Parameters[String(request["user_interface_tab_name"])]["Interval_Of_Circle_Click_value"] = parseInt(request["Interval_Of_Circle_Click_value"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->contentScript:'.concat(request["message"].split("userInterface->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Contain_Data_Web_Page_Tab_ID[String(request["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->userInterface:'.concat(response_Data["message"].split("contentScript->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };


            if (request["message"] === "contentScript->background:Ask_for_Configuration_Parameters") {
                // console.log('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息: ', request);
                // alert('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息:\n' + request);

                // console.log(request["Open_Contain_Data_Web_Page_Name"]);
                // console.log(request["content_script_tab_id"]);
                // console.log(request["url"]);
                // console.log(request["error"]);

                // 數據源網頁的網址;
                // "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV"
                // request["url"] === ContainDataWebPageURL
                // "CFDAContainDataWebPage", 當前插入 content-script 脚本的標籤頁的自定義名字字符串;
                // Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])] = parseInt(request["content_script_tab_id"]);

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向用戶交互頁面 CFDA.html 標籤頁窗口進程發送消息，請求最新版的配置啓動常量參數值;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    (response_Data) => {
                        // console.log(response_Data);
                        // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                        // response_data = JSON.parse(response_Data["data"]);
    
                        // // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
                        // // sendResponse(response_Dict);
                        // if (Configuration_Parameters.hasOwnProperty(String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]))) {
                        //     sendResponse(
                        //         {
                        //             "message": "background->contentScript:Update_Configuration_Parameters",
                        //             "Configuration_Parameters": Configuration_Parameters[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])],
                        //             "data": ""
                        //         }
                        //     );
                        // };

                        // 指令更新啓動常量參數;
                        // sendResponse(
                        //     {
                        //         "message": "background->contentScript:Update_Configuration_Parameters",
                        //         "Configuration_Parameters": response_Data["Configuration_Parameters"],
                        //         "data": ""
                        //     }
                        // );
                        // 向用戶交互頁面 CFDA.html 標籤頁窗口進程發送消息，發送指令更新啓動常量參數;
                        let temp_Message = response_Data;
                        temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);  // "background->contentScript:Update_Configuration_Parameters";
                        // temp_Message["Configuration_Parameters"] = response_Data["Configuration_Parameters"];
                        chrome.tabs.sendMessage(
                            // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                            // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                            parseInt(Contain_Data_Web_Page_Tab_ID[String(response_Data["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                            temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                            // (response_Data) => {
                            //     // console.log(response_Data);
                            //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                            //     // response_data = JSON.parse(response_Data["data"]);
            
                            //     // // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
                            //     // // sendResponse(response_Dict);
                            //     // if (Configuration_Parameters.hasOwnProperty(String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]))) {
                            //     //     sendResponse(
                            //     //         {
                            //     //             "message": "background->contentScript:Update_Configuration_Parameters",
                            //     //             "Configuration_Parameters": Configuration_Parameters[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])],
                            //     //             "data": ""
                            //     //         }
                            //     //     );
                            //     // };
            
                            //     if (response_Data["message"] === "userInterface->background:StandBy") {
                            //         // 指令待命;
                            //         sendResponse(
                            //             {
                            //                 "message": "background->contentScript:StandBy",
                            //                 "data": ""
                            //             }
                            //         );
                            //     };
                            // }
                        );
                    }
                );

                // // 向用戶交互頁面 CFDA.html 標籤頁窗口進程發送消息，發送當前打開的包含數據的目標網頁的頁面信息;
                // // let temp_Message = request;
                // temp_Message["message"] = 'background->userInterface:Current_Page_Information';  // 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                // chrome.tabs.sendMessage(
                //     // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                //     // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                //     parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])]),  // 到達標籤頁的 .id 號碼;
                //     temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                //     // (response_Data) => {
                //     //     // console.log(response_Data);
                //     //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                //     //     // response_data = JSON.parse(response_Data["data"]);
                //     //     // // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
                //     //     // // sendResponse(response_Dict);
                //     //     // if (Configuration_Parameters.hasOwnProperty(String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]))) {
                //     //     //     sendResponse(
                //     //     //         {
                //     //     //             "message": "background->contentScript:Update_Configuration_Parameters",
                //     //     //             "Configuration_Parameters": Configuration_Parameters[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])],
                //     //     //             "data": ""
                //     //     //         }
                //     //     //     );
                //     //     // };
                //     //     if (response_Data["message"] === "userInterface->background:StandBy") {
                //     //         // 指令待命;
                //     //         sendResponse(
                //     //             {
                //     //                 "message": "background->contentScript:StandBy",
                //     //                 "data": ""
                //     //             }
                //     //         );
                //     //     };
                //     // }
                // );
            };

            if (request["message"] === "contentScript->background:Current_Page_Information") {
                // console.log('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息: ', request);
                // alert('收到來自' + (sender.tab ? "background(" + sender.tab.url + ")" : "自定義的網頁包含脚本(content-script.js)進程") + '傳遞過來的消息:\n' + request);

                // console.log(request["Open_Contain_Data_Web_Page_Name"]);
                // console.log(request["content_script_tab_id"]);
                // console.log(request["url"]);
                // console.log(request["error"]);

                // 數據源網頁的網址;
                // "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV"
                // request["url"] === ContainDataWebPageURL
                // "CFDAContainDataWebPage", 當前插入 content-script 脚本的標籤頁的自定義名字字符串;
                // Contain_Data_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"])] = parseInt(request["content_script_tab_id"]);

                // // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // // 向用戶交互頁面 CFDA.html 標籤頁窗口進程發送消息，請求最新版的配置啓動常量參數值;
                // chrome.tabs.sendMessage(
                //     // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                //     // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                //     parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])]),  // 到達標籤頁的 .id 號碼;
                //     {
                //         "message": 'background->userInterface:Ask_for_Configuration_Parameters',
                //         "url": String(window.document.location.href), // 'background/background.html', // String(chrome.runtime.getURL('background/background.html'));
                //         "Open_Contain_Data_Web_Page_Name": String(request["Open_Contain_Data_Web_Page_Name"]),
                //         "ContainDataWebPageURL": String(request["url"]),
                //         "user_interface_tab_name": String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]),
                //         "data": ""
                //     },  // 發送的具體數據，可以是 JSON 對象;
                //     (response_Data) => {
                //         // console.log(response_Data);
                //         // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                //         // response_data = JSON.parse(response_Data["data"]);
                //         // // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
                //         // // sendResponse(response_Dict);
                //         // if (Configuration_Parameters.hasOwnProperty(String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]))) {
                //         //     sendResponse(
                //         //         {
                //         //             "message": "background->contentScript:Update_Configuration_Parameters",
                //         //             "Configuration_Parameters": Configuration_Parameters[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])],
                //         //             "data": ""
                //         //         }
                //         //     );
                //         // };
                //         // 指令更新啓動常量參數;
                //         // sendResponse(
                //         //     {
                //         //         "message": "background->contentScript:Update_Configuration_Parameters",
                //         //         "Configuration_Parameters": response_Data["Configuration_Parameters"],
                //         //         "data": ""
                //         //     }
                //         // );
                //         // 向用戶交互頁面 CFDA.html 標籤頁窗口進程發送消息，發送指令更新啓動常量參數;
                //         let temp_Message = response_Data;
                //         temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);  // "background->contentScript:Update_Configuration_Parameters";
                //         // temp_Message["Configuration_Parameters"] = response_Data["Configuration_Parameters"];
                //         chrome.tabs.sendMessage(
                //             // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                //             // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                //             parseInt(Contain_Data_Web_Page_Tab_ID[String(response_Data["user_interface_tab_name"]).concat("ContainDataWebPage")]),  // 到達標籤頁的 .id 號碼;
                //             temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                //             // (response_Data) => {
                //             //     // console.log(response_Data);
                //             //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                //             //     // response_data = JSON.parse(response_Data["data"]);
                //             //     // // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
                //             //     // // sendResponse(response_Dict);
                //             //     // if (Configuration_Parameters.hasOwnProperty(String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]))) {
                //             //     //     sendResponse(
                //             //     //         {
                //             //     //             "message": "background->contentScript:Update_Configuration_Parameters",
                //             //     //             "Configuration_Parameters": Configuration_Parameters[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])],
                //             //     //             "data": ""
                //             //     //         }
                //             //     //     );
                //             //     // };
                //             //     if (response_Data["message"] === "userInterface->background:StandBy") {
                //             //         // 指令待命;
                //             //         sendResponse(
                //             //             {
                //             //                 "message": "background->contentScript:StandBy",
                //             //                 "data": ""
                //             //             }
                //             //         );
                //             //     };
                //             // }
                //         );
                //     }
                // );

                // 向用戶交互頁面 CFDA.html 標籤頁窗口進程發送消息，發送當前打開的包含數據的目標網頁的頁面信息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
                    //     // // sendResponse(response_Dict);
                    //     // if (Configuration_Parameters.hasOwnProperty(String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]))) {
                    //     //     sendResponse(
                    //     //         {
                    //     //             "message": "background->contentScript:Update_Configuration_Parameters",
                    //     //             "Configuration_Parameters": Configuration_Parameters[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])],
                    //     //             "data": ""
                    //     //         }
                    //     //     );
                    //     // };

                    //     if (response_Data["message"] === "userInterface->background:StandBy") {
                    //         // 指令待命;
                    //         sendResponse(
                    //             {
                    //                 "message": "background->contentScript:StandBy",
                    //                 "data": ""
                    //             }
                    //         );
                    //     };
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Real_Time_Data") {
                // 向用戶交互頁面 CFDA.html 標籤頁窗口進程發送消息，發送當前打開的包含數據的目標網頁的頁面信息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);

                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // // 後臺頁面(background.html)進程向自定義的網頁包含脚本(content-script.js)進程發送答復信息;
                    //     // // sendResponse(response_Dict);
                    //     // if (Configuration_Parameters.hasOwnProperty(String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0]))) {
                    //     //     sendResponse(
                    //     //         {
                    //     //             "message": "background->contentScript:Update_Configuration_Parameters",
                    //     //             "Configuration_Parameters": Configuration_Parameters[String(request["Open_Contain_Data_Web_Page_Name"].split("ContainDataWebPage")[0])],
                    //     //             "data": ""
                    //     //         }
                    //     //     );
                    //     // };

                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:CollectEnd") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            // if (request["message"] === "contentScript->background:Skipping") {
            //     // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
            //     // 向 content-script 標籤頁窗口進程發送消息;
            //     let temp_Message = request;
            //     temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
            //     chrome.tabs.sendMessage(
            //         // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
            //         // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
            //         parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
            //         temp_Message,  // 發送的具體數據，可以是 JSON 對象;
            //         // (response_Data) => {
            //         //     // console.log(response_Data);
            //         //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
            //         //     // response_data = JSON.parse(response_Data["data"]);
            //         //     // 答復指令更新啓動常量參數;
            //         //     temp_Message = response_Data;
            //         //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
            //         //     sendResponse(temp_Message);
            //         // }
            //     );
            // };

            if (request["message"] === "contentScript->background:Extract_Page_Information") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);

                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Extract_Page_Number_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Querying_Key_Word" || request["message"] === "contentScript->background:Query_Key_Word_Error") {

                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Skip_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Next_Page_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:from_First_Level_Page_to_Second_Level_Page_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:from_Second_Level_Page_return_First_Level_Page_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Input_Start_First_Level_Page_Number_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Input_End_First_Level_Page_Number_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Input_Start_Second_Level_Page_Number_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Input_End_Second_Level_Page_Number_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Obtain_First_Level_Page_Data_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };

            if (request["message"] === "contentScript->background:Obtain_Second_Level_Page_Data_Error") {
                // 在後臺頁面(background.html)進程中主動向自定義的網頁包含脚本(content-script.js)進程中發送指令（content-script 標籤頁的 id 號必須已知）;
                // 向 content-script 標籤頁窗口進程發送消息;
                let temp_Message = request;
                temp_Message["message"] = 'background->userInterface:'.concat(request["message"].split("contentScript->background:")[1]);
                chrome.tabs.sendMessage(
                    // Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID["CFDA"],
                    // Contain_Data_Web_Page_Tab_ID["CFDAContainDataWebPage"],
                    parseInt(Public_Variable_Acquisition_Strategy_Web_Page_Tab_ID[String(request["Open_Contain_Data_Web_Page_Name"]).split("ContainDataWebPage")[0]]),  // 到達標籤頁的 .id 號碼;
                    temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                    // (response_Data) => {
                    //     // console.log(response_Data);
                    //     // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
                    //     // response_data = JSON.parse(response_Data["data"]);
    
                    //     // 答復指令更新啓動常量參數;
                    //     temp_Message = response_Data;
                    //     temp_Message["message"] = 'background->contentScript:'.concat(response_Data["message"].split("userInterface->background:")[1]);
                    //     sendResponse(temp_Message);
                    // }
                );
            };
        };
    }
);


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
