'use strict'
// 網頁包含脚本 content-script.js ;


let ContainDataWebPageURL = {
    "test": [
        "http://127.0.0.1:8000/ajax.html",  // "CrawlerStrategyServer/test/testWeb/ajax.html"  // 數據源網頁的地址;
        "http://127.0.0.1:8000/a.html",  // "CrawlerStrategyServer/test/testWeb/a.html"  // 數據源網頁的地址;
        "http://127.0.0.1:8000/a1.html",  // "CrawlerStrategyServer/test/testWeb/a1.html"  // 數據源網頁的地址;
        "http://127.0.0.1:8000/a2.html",
        "http://127.0.0.1:8000/a3.html",
        "http://127.0.0.1:8000/a4.html",
        "http://127.0.0.1:8000/a5.html",
        "http://127.0.0.1:8000/b.html",
        "http://127.0.0.1:8000/b1.html",
        "http://127.0.0.1:8000/b2.html",
        "http://127.0.0.1:8000/b3.html",
        "http://127.0.0.1:8000/b4.html",
        "http://127.0.0.1:8000/b5.html",
        "http://127.0.0.1:8000/c.html",
        "http://127.0.0.1:8000/c1.html",
        "http://127.0.0.1:8000/c2.html",
        "http://127.0.0.1:8000/c3.html",
        "http://127.0.0.1:8000/c4.html",
        "http://127.0.0.1:8000/c5.html",
        "http://127.0.0.1:8000/d.html",
        "http://127.0.0.1:8000/d1.html",
        "http://127.0.0.1:8000/d2.html",
        "http://127.0.0.1:8000/d3.html",
        "http://127.0.0.1:8000/d4.html",
        "http://127.0.0.1:8000/d5.html",
        "http://127.0.0.1:8000/e.html",
        "http://127.0.0.1:8000/e1.html",
        "http://127.0.0.1:8000/e2.html",
        "http://127.0.0.1:8000/e3.html",
        "http://127.0.0.1:8000/e4.html",
        "http://127.0.0.1:8000/e5.html"
    ],
    "CFDA": [
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=26&tableName=TABLE26&title=%B9%FA%B2%FA%D2%BD%C1%C6%C6%F7%D0%B5%B2%FA%C6%B7%A3%A8%D7%A2%B2%E1%A3%A9&bcId=152904417281669781044048234789",  // 國產醫療器械產品（注冊）數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=94&tableName=TABLE94&title=国产器械%EF%BC%88历史数据%EF%BC%89&bcId=152904424297012685387397452852",  // 國產醫療器械產品（歷史數據）數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=27&tableName=TABLE27&title=进口医疗器械产品%EF%BC%88注册%EF%BC%89&bcId=152904442584853439006654836900",  // 進口醫療器械產品（注冊）數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=95&tableName=TABLE95&title=进口器械%EF%BC%88历史数据%EF%BC%89&bcId=152904451661174780844452282676",  // 進口醫療器械產品（歷史數據）數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=132&tableName=TABLE132&title=医疗器械生产企业%EF%BC%88许可%EF%BC%89&bcId=154209313929078698414236686309",  // 醫療器械生產企業（許可）數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=133&tableName=TABLE133&title=医疗器械生产企业%EF%BC%88备案%EF%BC%89&bcId=154209457434934902951835653318",  // 醫療器械生產企業（備案）數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=136&tableName=TABLE136&title=医疗器械经营企业%EF%BC%88许可%EF%BC%89&bcId=154209512434322144199787151065",  // 醫療器械經營企業（許可）數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=137&tableName=TABLE137&title=医疗器械经营企业%EF%BC%88备案%EF%BC%89&bcId=154209525480914914535208988760",  // 醫療器械經營企業（備案）數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=168&tableName=TABLE168&title=医疗器械网络交易服务第三方平台&bcId=161459066730718291747479536606",  // 醫療器械網絡交易服務第三方平臺數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=166&tableName=TABLE166&title=一次性使用医疗器械产品&bcId=159287317145647868157579642205",  // 一次性使用醫療器械產品數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=25&tableName=TABLE25&title=国产药品&bcId=152904713761213296322795806604",  // 國產藥品注冊數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=36&tableName=TABLE36&title=进口药品&bcId=152904858822343032639340277073",  // 進口藥品注冊數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=63&tableName=TABLE63&title=境内生产药品备案信息公示&bcId=152904798868514040213090136034",  // 境内生產藥品備案信息公示名單;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=167&tableName=TABLE167&title=境外生产药品备案信息公示&bcId=161191426283719075387328386492",  // 境外生產藥品備案信息公示名單;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=65&tableName=TABLE65&title=药品注册相关专利信息公开公示&bcId=152904820477685999443922990230",  // 藥品注冊相關專利信息公開公示名單;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=19&tableName=TABLE19&title=药物临床试验机构名单&bcId=152904843704682622352673850395",  // 藥物臨床試驗機構名單;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=34&tableName=TABLE34&title=药品生产企业&bcId=152911762991938722993241728138",  // 藥品生產企業數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=41&tableName=TABLE41&title=药品经营企业&bcId=152911863995882985662523838679",  // 藥品經營企業數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=129&tableName=TABLE129&title=非处方药化学药品目录&bcId=154337002238250481700465178201",  // 非處方藥化學藥品目錄;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=143&tableName=TABLE143&title=药品出口销售证明&bcId=155842726469384720845975356256",  // 藥品出口銷售證明清單;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp?tableId=28&tableName=TABLE28&title=互联网药品信息服务&bcId=152912030752488832300204864740",  // 互聯網藥品信息服務數據庫;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html",  // 數據庫目錄頁;
        "http://app1.nmpa.gov.cn/data_nmpa/face3/base.jsp",  // 舊版網頁數據庫目錄頁;
        // "http://app1.nmpa.gov.cn/",  // 數據庫目錄頁;
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAqNrqkUTeIUTeIUT_p1s9asPWwk27ckrl7rlnZYZ80qqJQ",
        // "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html?CbSlDlH0=qAcdrGrmpVYmpVYmpFp1sLujNu5ZXKrSpUFygz9RVa7qqlV",
        "https://www.nmpa.gov.cn/datasearch/"  // 新版網頁數據庫查詢;
        // "https://www.nmpa.gov.cn/"
    ],
    "WUXIPEOPLEsHOSPITAL": [
        "http://www.wuxiph.com/info/ZhenLiaoXiangMuChaXun/"
        // "http://www.wuxiph.com/index.html"
    ],
    "TFDA": []
};

// // 監聽網頁 DOM 加載完畢事件，注意，必須在 manifest.json 文檔中 "content_scripts": 條目的 "run_at": 參數值配置爲 "document_start"，才會有效;
// window.document.addEventListener(
//     'load',  // 'load', 'DOMContentLoaded', 'readystatechange';
//     () => {

//         // if (window.document.readyState === "complete" || window.document.readyState === "interactive") {

            let injected_Script_path = "injected_script.js";  // 需要注入網頁的自定義的 JavaScript 代碼脚本文檔相對路徑路徑（相對於當前正在運行的瀏覽器擴展工具(Chrome Extension)的路徑）;
            // 判斷打開的網頁的主機域名，對特定網頁進行操作;
            if (window.document.location.host === "www.baidu.com") {

//                 // // 將當前網頁包含脚本(content-script)所在頁面的 ID 號發送給後臺頁面(background)記錄備用;
//                 // let content_script_tab_id = 0;  // 當前網頁包含脚本(content-script)所在頁面的 ID 號碼;
//                 // // 查詢當前標籤頁的 ID 號碼;
//                 // chrome.windows.getCurrent(
//                 //     (currentWindow) => {
//                 //         // 查詢當前標籤頁的 ID 號碼;
//                 //         chrome.tabs.query(
//                 //             {
//                 //                 active: true,
//                 //                 windowId: currentWindow.id
//                 //             },
//                 //             (tabs) => {
//                 //                 content_script_tab_id = tabs.length ? tabs[0].id: null;

//                 //                 // 將當前網頁包含脚本(content-script)所在頁面的 ID 號發送給後臺頁面(background)記錄備用;
//                 //                 chrome.runtime.sendMessage(
//                 //                     {"message": 'content_script_id', "data": content_script_tab_id},  // 發送的具體數據，可以是 JSON 對象;
//                 //                     (response_Data) => {}
//                 //                 );
//                 //             }
//                 //         );
//                 //     }
//                 // );
//                 // // chrome.tabs.query(
//                 // //     {
//                 // //         active: true,
//                 // //         currentWindow: true
//                 // //     },
//                 // //     (tabs) => {
//                 // //         content_script_tab_id = tabs.length ? tabs[0].id: null;

//                 // //         // 將當前網頁包含脚本(content-script)所在頁面的 ID 號發送給後臺頁面(background)記錄備用;
//                 // //         chrome.runtime.sendMessage(
//                 // //             {"message": 'content_script_id', "data": content_script_tab_id},  // 發送的具體數據，可以是 JSON 對象;
//                 // //             (response_Data) => {}
//                 // //         );
//                 // //     }
//                 // // );

//                 // 向網頁注入自定義的 JavaScript 脚本代碼;
//                 let tempScript = window.document.createElement("script");  // 創建一個用於注入網頁的 <script></script> 標簽對象;
//                 tempScript.setAttribute("type", "text/javascript");
//                 tempScript.setAttribute("id", "injected_script");
//                 // tempScript.setAttribute("defer", "defer");
//                 // tempScript.setAttribute("async", "async");
//                 // 使用 chrome.runtime.getURL() 函數拼接的路徑全名，類似："chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/injected_script.js";
//                 // tempScript.src = chrome.runtime.getURL(injected_Script_path);
//                 tempScript.setAttribute("src", chrome.runtime.getURL(injected_Script_path));
//                 // 如果想在自定義注入的 JavaScript 代碼脚本執行完畢之後，將它從原網頁中刪除，可以加入如下代碼;
//                 // tempScript.onload = function() {
//                 //     this.parentNode.removeChild(this);  // 移除對象自身l
//                 //     // alert('自定義注入網頁的 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 已被移除.');
//                 //     console.log('自定義注入網頁的 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 已被移除.');
//                 // };
//                 // window.document.getElementById("injected_script").addEventListener("load", async () => {
//                 //     this.parentNode.removeChild(this);  // 移除對象自身l
//                 //     // alert('自定義注入網頁的 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 已被移除.');
//                 //     console.log('自定義注入網頁的 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 已被移除.');
//                 // });
//                 window.document.body.appendChild(tempScript);  // 將自定義 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 標簽注入網頁 DOM 樹;

//                 // 在網頁中創建一個自定義的側邊欄;
//                 let tempSidebarDiv = window.document.createElement("div");
//                 tempSidebarDiv.setAttribute("id", 'Sidebar_panel_Div');
//                 tempSidebarDiv.className = 'chrome-plugin-panel';
//                 tempSidebarDiv.innerHTML = `
// <div id="Sidebar_panel_Div" class="chrome-plugin-panel" style="position: static; z-index: auto; background-color: cornflowerblue; display: block;">
//     <h2>injected-script 脚本通過 content-script 脚本中介與後臺頁面(background.html)通信演示</h2>
//     <button id="b1" onclick="javascript:fuckBaiduAD()">執行網頁插入脚本(injected-script)中的 fuckBaiduAD() 函數刪除百度首頁右側廣告推廣邊欄</button><br>
//     <button id="b2" onclick="javascript:test(this)">執行網頁插入脚本(injected-script)中的 test() 函數</button><br>
//     <button id="b3" onclick="javascript:test_invoke_background(this)">執行後臺頁面(background)中的 test() 函數</button>
// </div>
// `;
//                 window.document.body.appendChild(tempSidebarDiv);

//                 // 不同標籤頁進程之間通信的數據;
//                 let response_data = null;
//                 let request_String = "How are you.";
//                 let request_Dict = {
//                     "message": 'contentScript -> background',
//                     "data": request_String
//                 };
//                 let response_String = "Fine, thank you, and you ?";
//                 let response_Dict = {
//                     "message": 'contentScript -> background',
//                     "data": response_String
//                 };

//                 // 在自定義的網頁包含脚本(content-script.js)進程中監聽自定義注入網頁的插入脚本(injected-script.js)進程中傳遞過來的指令;
//                 window.addEventListener(
//                     "message",
//                     (event) => {
//                         // console.log('接收到來自 [ ' + event.origin + ' ] 發送的消息: ', + event.data);
//                         // console.log(event.source);  // .source 表示消息源，指消息的發送窗口對象 /iframe ;
//                         // console.log(event.origin);  // .origin 表示消息源的 URI（可能包含協議、域名、埠號），用來驗證數據源;
//                         // console.log(event.data);  // .data 表示發送過來的數據;
//                         // alert('接收到來自 [ ' + event.origin + ' ] 發送的消息:\n' + event.data);

//                         // request_data = JSON.parse(event.data["data"]);

//                         // 驗證消息源地址;
//                         if (event.origin === "https://www.baidu.com/") {
//                             if (event.data["message"] === "injectedScript -> contentScript" && event.data["data"] === "How are you.") {
//                                 console.log('接收到來自 [ ' + event.origin + ' ] 發送的消息: ', + event.data);
//                                 console.log(event.source);  // .source 表示消息源，指消息的發送窗口對象 /iframe ;
//                                 console.log(event.origin);  // .origin 表示消息源的 URI（可能包含協議、域名、埠號），用來驗證數據源;
//                                 console.log(event.data);  // .data 表示發送過來的數據;
//                                 console.log('event.data ~ message: ' + event.data["message"]);
//                                 console.log('event.data ~ data: ' + event.data["data"]);
//                                 alert('接收到來自 [ ' + event.origin + ' ] 發送的消息:\n' + event.data);
//                             };
//                         };

//                         if (event.data["message"] === "invoke_background_test()") {
//                             // event.data["url"] === "test()"
//                             // console.log("response.message: " + event.data["message"]);
//                             // console.log("response.data: " + event.data["data"]);
//                             chrome.runtime.sendMessage(
//                                 {
//                                     "message": event.data["message"],
//                                     "url": event.data["url"],
//                                     "data": event.data["data"]
//                                 },  // 發送的具體數據，可以是 JSON 對象;
//                                 // (response_Data) => {
//                                 //     console.log(response_Data);
//                                 // }
//                             );
//                             // alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + event.data);
//                         };
//                     },
//                     false
//                 );

//                 // // 在自定義的網頁包含脚本(content-script.js)進程中主動向自定義注入網頁的插入脚本(injected-script.js)進程傳遞指令;
//                 // // 注意，window 對象為目標到達的窗口對象，假如有一個 Window-2 窗口對象，如果想在本窗口中向 Window-2 窗口發送消息，可以使用 Window-2.postMessage() 方法;
//                 // // 在本例中，因爲插入脚本(injected-script.js)與包含脚本(content-script.js)都同時包含在一個網頁窗口中，只是處於兩個進程不能共享數據，所以可以直接直接使用當前的窗口對象 window 來發送消息;
//                 // window.postMessage(
//                 //     {
//                 //         "message": 'contentScript -> injectedScript',
//                 //         "url": String(window.document.location.href),
//                 //         "data": request_String
//                 //     },  // 發送的具體數據，可以是 JSON 對象;
//                 //     '*'  // 該參數為指定哪些窗口能接收到消息事件，星號 * 表示無限制，也可以輸入一個 URI 限定窗口;
//                 // );
//                 // // window.postMessage(
//                 // //     request_Dict,  // 發送的具體數據，可以是 JSON 對象;
//                 // //     '*'  // 該參數為指定哪些窗口能接收到消息事件，星號 * 表示無限制，也可以輸入一個 URI 限定窗口;
//                 // // );

//                 // 在自定義的網頁包含脚本(content-script.js)進程中監聽後臺頁面(background.html)進程傳遞過來的指令;
//                 chrome.runtime.onMessage.addListener(
//                     (request, sender, sendResponse) => {
//                         // console.log('收到來自' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "後臺頁面(background.html)進程") + '傳遞過來的消息: ', request);
//                         // console.log(request);
//                         // console.log(sender);
//                         // console.log(sendResponse);
//                         // alert('後臺頁面(background.html)進程中傳遞過來消息.\n' + 'request:\n' + request + '\nsender:\n' + sender + '\nsendResponse:\n' + sendResponse);

//                         // request_Dict = JSON.parse(request["data"]);
//                         // response_String = JSON.stringify(request);
//                         // 自定義的網頁包含脚本(content-script.js)進程向後臺頁面(background.html)進程發送答復信息;
//                         // sendResponse(response_Dict);
//                         // sendResponse(
//                         //     {
//                         //         "message": 'contentScript -> background',
//                         //         "data": response_String
//                         //     }
//                         // );

//                         if (request["message"] === "background -> contentScript" && request["data"] === "How are you.") {
//                             // console.log('收到來自' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "後臺頁面(background.html)進程") + '傳遞過來的消息: ', request);
//                             // 自定義的網頁包含脚本(content-script.js)進程向後臺頁面(background.html)進程發送答復信息;
//                             // sendResponse(response_Dict);
//                             sendResponse(
//                                 {
//                                     "message": 'contentScript -> background',
//                                     "data": response_String
//                                 }
//                             );
//                             // alert('收到來自' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "後臺頁面(background.html)進程") + '傳遞過來的消息:\n' + request);
//                         };

//                         if (request["message"] === "invoke_injectedScript_test()") {
//                             // console.log('收到來自' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "後臺頁面(background.html)進程") + '傳遞過來的消息: ', request);
//                             // 自定義的網頁包含脚本(content-script.js)進程向後臺頁面(background.html)進程發送答復信息;
//                             window.postMessage(
//                                 {
//                                     "message": request["message"],
//                                     "url": request["url"],
//                                     "data": request["data"]
//                                 },  // 發送的具體數據，可以是 JSON 對象;
//                                 '*'  // 該參數為指定哪些窗口能接收到消息事件，星號 * 表示無限制，也可以輸入一個 URI 限定窗口;
//                             );
//                             // alert('收到來自' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "後臺頁面(background.html)進程") + '傳遞過來的消息:\n' + request);
//                         };
//                     }
//                 );

//                 // // 在自定義的網頁包含脚本(content-script.js)進程中主動向後臺頁面(background.html)進程傳遞指令;
//                 // chrome.runtime.sendMessage(
//                 //     {
//                 //         "message": 'contentScript -> background',
//                 //         "url": String(window.document.location.href),
//                 //         "data": request_String
//                 //     },  // 發送的具體數據，可以是 JSON 對象;
//                 //     (response_Data) => {
//                 //         console.log('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息.');
//                 //         console.log(response_Data);
//                 //         // response_data = JSON.parse(response_Data["data"]);

//                 //         // if (response_Data["message"] === "background -> contentScript" && response_Data["data"] === "Fine, thank you, and you ?") {
//                 //         //     console.log("response.message: " + response_Data["message"]);
//                 //         //     console.log("response.data: " + response_Data["data"]);
//                 //         //     alert('收到來自自定義的網頁包含脚本(content-script.js)進程中傳遞過來的答復信息:\n' + response_Data);
//                 //         // };
//                 //     }
//                 // );

//                 // 在自定義的網頁包含脚本(content-script.js)進程中主動建立長鏈接通道，並向後臺頁面(background.html)進程中發送長鏈接通道信息;
//                 let port = chrome.runtime.connect(
//                     {
//                         name: 'connect-contentScript-background'
//                     }
//                 );
//                 // 在自定義的網頁包含脚本(content-script.js)進程中監聽來自於後臺頁面(background.html)進程中發送的長鏈接通道信息;
//                 port.onMessage.addListener(
//                     (message) => {
//                         console.log(message);
//                     }
//                 );
//                 // // 在自定義的網頁包含脚本(content-script.js)進程中主動向後臺頁面(background.html)進程中發送長鏈接通道信息;
//                 // port.postMessage(
//                 //     {
//                 //         "message": 'contentScript -> background',
//                 //         "url": String(window.document.location.href),
//                 //         "data": request_String
//                 //     }
//                 // );

//                 // 在自定義的網頁包含脚本(content-script.js)進程中監聽來自後臺頁面(background.html)進程中發送的長鏈接通道信息;
//                 chrome.runtime.onConnect.addListener(
//                     (port) => {
//                         // console.log("長鏈接通道接口:\n", port);
//                         if (port.name === "connect-background-contentScript") {
//                             port.onMessage.addListener(
//                                 (message) => {
//                                     // console.log('收到來自長鏈接 (name = "' + port.name + '") 發送過來的消息.');
//                                     // console.log(message);
//                                     // alert('收到來自長鏈接 (name = "' + port.name + '") 發送過來的消息:\n' + message);

//                                     // request_data = JSON.parse(message["data"]);
//                                     // response_String = JSON.stringify(message);
//                                     // 自定義的網頁包含脚本(content-script.js)進程向後臺頁面(background.html)進程發送答復信息;
//                                     // port.postMessage(
//                                     //     {
//                                     //         "message": 'contentScript -> background',
//                                     //         "data": response_String
//                                     //     }
//                                     // );

//                                     if (message["message"] === "background -> contentScript" && message["data"] === "How are you.") {
//                                         port.postMessage(
//                                             {
//                                                 "message": 'contentScript -> background',
//                                                 "data": response_String
//                                             }
//                                         );
//                                     };
//                                 }
//                             );
//                         };
//                     }
//                 );
            };

            for (let key in ContainDataWebPageURL) {

                let break_flag = false;

                for (let i = 0; i < ContainDataWebPageURL[key].length; i++) {

                    if (String(window.document.location.href).indexOf(ContainDataWebPageURL[key][i]) !== parseInt(-1)) {

                        injected_Script_path = 'CrawlerStrategyServer/' + String(key) + '/' + String(key) + '_injected.js';

                        // 向網頁注入自定義的 JavaScript 脚本代碼;
                        let tempScript = window.document.createElement("script");  // 創建一個用於注入網頁的 <script></script> 標簽對象;
                        tempScript.setAttribute("type", "text/javascript");
                        tempScript.setAttribute("id", String(key).concat("ContainDataWebPage", "_injected_script"));
                        // tempScript.setAttribute("defer", "defer");
                        // tempScript.setAttribute("async", "async");
                        // 使用 chrome.runtime.getURL() 函數拼接的路徑全名，類似："chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/injected_script.js";
                        // tempScript.src = chrome.runtime.getURL(injected_Script_path);
                        tempScript.setAttribute("src", chrome.runtime.getURL(injected_Script_path));
                        // 如果想在自定義注入的 JavaScript 代碼脚本執行完畢之後，將它從原網頁中刪除，可以加入如下代碼;
                        // tempScript.onload = function() {
                        //     this.parentNode.removeChild(this);  // 移除對象自身;
                        //     // alert('自定義注入網頁的 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 已被移除.');
                        //     console.log('自定義注入網頁的 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 已被移除.');
                        // };
                        // window.document.getElementById("injected_script").addEventListener("load", async () => {
                        //     this.parentNode.removeChild(this);  // 移除對象自身;
                        //     // alert('自定義注入網頁的 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 已被移除.');
                        //     console.log('自定義注入網頁的 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 已被移除.');
                        // });
                        window.document.body.appendChild(tempScript);  // 將自定義 <script id="injected_script" src=' + chrome.runtime.getURL(injected_Script_path) + '></script> 標簽注入網頁 DOM 樹;
    
                        break_flag = true;
                        break;
                    };
                };

                if (break_flag) { break; };
            };

//         // };
//     }
// );

// 查詢 Chrome 瀏覽器當前標籤頁的 ID 號碼;
// let CFDA_injected_script_tab_id = null;  // 當前插入 content-script 脚本的標籤頁的 ID 號碼;
// chrome.tabs.query(
//     {
//         active: true,
//         currentWindow: true
//     },
//     (tabs) => {
//         CFDA_injected_script_tab_id = tabs.length ? tabs[0].id: null;
//     }
// );

// 在自定義的網頁包含脚本(content-script.js)進程中監聽自定義注入網頁的插入脚本(injected-script.js)進程中傳遞過來的指令;
window.addEventListener(
    "message",
    (event) => {
        // console.log('接收到來自 [ ' + event.origin + ' ] 發送的消息: ', + event.data);
        // console.log(event.source);  // .source 表示消息源，指消息的發送窗口對象 /iframe ;
        // console.log(event.origin);  // .origin 表示消息源的 URI（可能包含協議、域名、埠號），用來驗證數據源;
        // console.log(event.data);  // .data 表示發送過來的數據;
        // alert('接收到來自 [ ' + event.origin + ' ] 發送的消息:\n' + event.data);
        // JSON.parse(String, function (key, value) {});
        // JSON.stringify(Dict, function (key, value) {}, 4);

        // 驗證消息源地址;
        // if (String(event.origin) === String(window.document.location.href)) {
        //     if (event.data["message"] === "contentScript->injectedScript:StandBy") {
        //         console.log(event.source);  // .source 表示消息源，指消息的發送窗口對象 /iframe ;
        //         console.log(event.origin);  // .origin 表示消息源的 URI（可能包含協議、域名、埠號），用來驗證數據源;
        //         console.log(event.data);  // .data 表示發送過來的數據;
        //         alert('接收到來自 [ ' + event.origin + ' ] 發送的消息:\n' + event.data);
        //         console.log('background instruction: { StandBy }.');
        //     };
        // };

        if ((typeof (event.data) === 'object' && Object.prototype.toString.call(event.data).toLowerCase() === '[object object]' && !(event.data.length)) && event.data.hasOwnProperty("message") && event.data["message"].indexOf("injectedScript->contentScript:") !== parseInt(-1)) {

            let temp_Message = event.data;
            temp_Message["message"] = 'contentScript->background:'.concat(event.data["message"].split("injectedScript->contentScript:")[1]);
            // temp_Message["content_script_tab_id"] = CFDA_injected_script_tab_id;  // event.data["injected_script_tab_id"];
            // 在自定義的網頁包含脚本(content-script.js)進程中主動向後臺頁面(background.html)進程傳遞指令;
            chrome.runtime.sendMessage(
                temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                // (response_Data) => {
                //     // console.log(response_Data);
                //     // response_data = JSON.parse(response_Data["data"], function (key, value) {});

                //     if ((typeof (response_Data) === 'object' && Object.prototype.toString.call(response_Data).toLowerCase() === '[object object]' && !(response_Data.length)) && response_Data.hasOwnProperty("message") && response_Data["message"].indexOf("background->contentScript:") !== parseInt(-1)) {
                //         temp_Message = response_Data;
                //         temp_Message["message"] = 'contentScript->injectedScript:'.concat(response_Data["message"].split("background->contentScript:")[1]);
                //         window.postMessage(
                //             temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                //             '*'  // 該參數為指定哪些窗口能接收到消息事件，星號 * 表示無限制，也可以輸入一個 URI 限定窗口;
                //         );
                //     } else {};
                // }
            );
        };
    }
);

// 在自定義的網頁包含脚本(content-script.js)進程中監聽後臺頁面(background.html)進程傳遞過來的指令;
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        // console.log('收到來自' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "後臺頁面(background.html)進程") + '傳遞過來的消息: ', request);
        // console.log(request);
        // console.log(sender);
        // console.log(sendResponse);
        // alert('後臺頁面(background.html)進程中傳遞過來消息.\n' + 'request:\n' + request + '\nsender:\n' + sender + '\nsendResponse:\n' + sendResponse);

        if ((typeof (request) === 'object' && Object.prototype.toString.call(request).toLowerCase() === '[object object]' && !(request.length)) && request.hasOwnProperty("message") && request["message"].indexOf("background->contentScript:") !== parseInt(-1)) {

            let temp_Message = request;
            temp_Message["message"] = 'contentScript->injectedScript:'.concat(request["message"].split("background->contentScript:")[1]);

            // 在自定義注入網頁的插入脚本(injected-script.js)進程中主動向自定義的網頁包含脚本(content-script.js)進程傳遞指令;
            // 注意，window 對象為目標到達的窗口對象，假如有一個 Window-2 窗口對象，如果想在本窗口中向 Window-2 窗口發送消息，可以使用 Window-2.postMessage() 方法;
            // 在本例中，因爲插入脚本(injected-script.js)與包含脚本(content-script.js)都同時包含在一個網頁窗口中，只是處於兩個進程不能共享數據，所以可以直接直接使用當前的窗口對象 window 來發送消息;
            // JSON.parse(String, function (key, value) {});
            // JSON.stringify(Dict, function (key, value) {}, 4);
            window.postMessage(
                temp_Message,  // 發送的具體數據，可以是 JSON 對象;
                '*'  // 該參數為指定哪些窗口能接收到消息事件，星號 * 表示無限制，也可以輸入一個 URI 限定窗口;
            );

            // sendResponse(
            //     {
            //         "message": request["message"],  // 'background->contentScript:', 'injectedScript->contentScript:',
            //         "data": ""
            //     }
            // );

        } else {

            // sendResponse(
            //     {
            //         "message": "",  // 'background->contentScript:', 'injectedScript->contentScript:',
            //         "data": ""
            //     }
            // );
        };

        // request_Dict = JSON.parse(request["data"]);
        // response_String = JSON.stringify(request);
        // 自定義的網頁包含脚本(content-script.js)進程向後臺頁面(background.html)進程發送答復信息;
        // sendResponse(response_Dict);
        // sendResponse(
        //     {
        //         "message": 'contentScript->background:',
        //         "data": response_String
        //     }
        // );
    }
);
