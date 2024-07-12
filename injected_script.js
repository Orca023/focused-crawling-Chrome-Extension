'use strict'
// 網頁插入脚本 injected-script.js ;


// 自定義一個用於測試包含脚本(content-script)進程調用的示例函數;
function test(element) {
    alert('您單擊了元素:\n' + element.outerHTML);
};

// 自定義一個用於測試網頁插入脚本(injected-script)進程通過包含脚本(content-script)進程中介調用後臺頁面(background)進程中代碼的示例函數;
function test_invoke_background(element) {
    window.postMessage(
        {
            "message": 'invoke_background_test()',
            "url": String(window.document.location.href),
            "data": String(element.outerHTML)
        },  // 發送的具體數據，可以是 JSON 對象;
        '*'  // 該參數為指定哪些窗口能接收到消息事件，星號 * 表示無限制，也可以輸入一個 URI 限定窗口;
    );
};

// 自定義函數移除百度首頁右側廣告推廣欄;
function fuckBaiduAD() {
    if(window.document.getElementById('my_custom_css')) return;
    let temp = window.document.createElement('style');
    temp.id = 'my_custom_css';
    (window.document.head || window.document.body).appendChild(temp);
    let css = `
/* 移除百度右側廣告推廣欄 */
#content_right{display:none;}
/* 覆蓋整個屏幕的相關推薦 */
.rrecom-btn-parent{display:none;}'
/* 磕磣的按鈕樣式 */
.result-op.xpath-log{display:none !important;}
`;
    temp.innerHTML = css;
    console.log('已經注入自定義 CSS 樣式！');
    $('[data-tuiguang]').parents('[data-click]').remove();  // 屏蔽百度推廣信息;
    // 因爲這種必須調用 JS 代碼才能移除的廣告一般會有延遲，所以，索性每隔 2 秒鈡就循環執行清除一次;
    let interval = setInterval(
        function() {
            $('[data-tuiguang]').parents('[data-click]').remove();  /* 屏蔽百度推廣信息 */;
        },
        2000
    );
    // 重新搜索時，頁面不會刷新，但是，被注入的 style 會被移除，所以需要重新執行;
    temp.addEventListener('DOMNodeRemoved', function(e) {
        console.log('自定義注入的 CSS 樣式被移除，重新注入！');
        if(interval) clearInterval(interval);  // 清除上次加載殘留的延時循環釋放内存;
        fuckBaiduAD();
    });
};

// // 監聽網頁 DOM 加載完畢事件，注意，必須在 manifest.json 文檔中 "content_scripts": 條目的 "run_at": 參數值配置爲 "document_start"，才會有效;
// window.document.addEventListener(
//     'DOMContentLoaded',  // 'load';
//     () => {
        // 判斷打開的網頁的主機域名，對特定網頁進行操作;
        // "www.baidu.com";
        if (window.document.location.host === "http://app1.nmpa.gov.cn/data_nmpa/face3/dir.html") {

            // fuckBaiduAD();  // 執行自定義函數;

            // // 給網頁元素添加新動作;
            // // window.document.getElementsByTagName("body").item(0).children[0];
            // window.document.getElementsByTagName("button").item(0).addEventListener(
            //     "click",
            //     test(window.document.getElementsByTagName("button").item(0))
            // );

            // // 操作網頁;
            // window.document.getElementsByTagName("button").item(0).click();

            // 不同標籤頁進程之間通信的數據;
            let request_data = null;
            let request_String = "How are you.";
            let request_Dict = {
                "message": 'injectedScript -> contentScript',
                "data": request_String
            };
            let response_String = "Fine, thank you, and you ?";
            let response_Dict = {
                "message": 'injectedScript -> contentScript',
                "data": response_String
            };

            // 在自定義注入網頁的插入脚本(injected-script.js)進程中監聽自定義的網頁包含脚本(content-script.js)進程中傳遞過來的指令;
            window.addEventListener(
                "message",
                (event) => {
                    // console.log('接收到來自 [ ' + event.origin + ' ] 發送的消息: ', + event.data);
                    // console.log(event.source);  // .source 表示消息源，指消息的發送窗口對象 /iframe ;
                    // console.log(event.origin);  // .origin 表示消息源的 URI（可能包含協議、域名、埠號），用來驗證數據源;
                    // console.log(event.data);  // .data 表示發送過來的數據;
                    // alert('接收到來自 [ ' + event.origin + ' ] 發送的消息:\n' + event.data);

                    // request_data = JSON.parse(event.data["data"]);

                    // 驗證消息源地址;
                    if (event.origin === "https://www.baidu.com/") {
                        if (event.data["message"] === "contentScript -> injectedScript" && event.data["data"] === "How are you.") {
                            console.log('接收到來自 [ ' + event.origin + ' ] 發送的消息: ', + event.data);
                            console.log(event.source);  // .source 表示消息源，指消息的發送窗口對象 /iframe ;
                            console.log(event.origin);  // .origin 表示消息源的 URI（可能包含協議、域名、埠號），用來驗證數據源;
                            console.log(event.data);  // .data 表示發送過來的數據;
                            console.log('event.data ~ message: ' + event.data["message"]);
                            console.log('event.data ~ data: ' + event.data["data"]);
                            alert('接收到來自 [ ' + event.origin + ' ] 發送的消息:\n' + event.data);
                        };
                    };

                    // 驗證消息源地址;
                    // if (event.origin === "https://www.baidu.com/") {
                        if (event.data["message"] === "invoke_injectedScript_test()" && event.data["url"] === "background/background.html") {
                            // event.data["url"] === "background/background.js"
                            // console.log('接收到來自 [ ' + event.origin + ' ] 發送的消息: ', + event.data);
                            // console.log(event.source);  // .source 表示消息源，指消息的發送窗口對象 /iframe ;
                            // console.log(event.origin);  // .origin 表示消息源的 URI（可能包含協議、域名、埠號），用來驗證數據源;
                            // console.log(event.data);  // .data 表示發送過來的數據;
                            // console.log('event.data ~ message: ' + event.data["message"]);
                            // console.log('event.data ~ data: ' + event.data["data"]);
                            // alert('接收到來自 [ ' + event.origin + ' ] 發送的消息:\n' + event.data);
                            alert('您單擊了' + '後臺頁面(background)中元素:\n' + event.data["data"] + '\n並且，後臺頁面(background)中元素的單擊(click)事件，通過網頁包含脚本(content-script.js)介導，運行了網頁插入脚本(injected-script.js)中的自定義函數:\n test()');
                        };
                    // };
                },
                false
            );

            // // 在自定義注入網頁的插入脚本(injected-script.js)進程中主動向自定義的網頁包含脚本(content-script.js)進程傳遞指令;
            // // 注意，window 對象為目標到達的窗口對象，假如有一個 Window-2 窗口對象，如果想在本窗口中向 Window-2 窗口發送消息，可以使用 Window-2.postMessage() 方法;
            // // 在本例中，因爲插入脚本(injected-script.js)與包含脚本(content-script.js)都同時包含在一個網頁窗口中，只是處於兩個進程不能共享數據，所以可以直接直接使用當前的窗口對象 window 來發送消息;
            // window.postMessage(
            //     {
            //         "message": 'injectedScript -> contentScript',
            //         "url": String(window.document.location.href),
            //         "data": request_String
            //     },  // 發送的具體數據，可以是 JSON 對象;
            //     '*'  // 該參數為指定哪些窗口能接收到消息事件，星號 * 表示無限制，也可以輸入一個 URI 限定窗口;
            // );
            // // window.postMessage(
            // //     request_Dict,  // 發送的具體數據，可以是 JSON 對象;
            // //     '*'  // 該參數為指定哪些窗口能接收到消息事件，星號 * 表示無限制，也可以輸入一個 URI 限定窗口;
            // // );
        };
//     }
// );
