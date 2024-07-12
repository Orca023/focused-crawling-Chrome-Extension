'use strict'
// 彈出頁脚本 popup.js ;

let background_ID = "";
// chrome.action.onClicked.addListener(
//     function (tabPage) {
//         chrome.tabs.query(
//             {
//                 // url: '*/background/background.html'
//                 title: "網頁操作自動化工具(background.html 頁面)"
//             },
//             function(tabsPage) {
//                 if (tabsPage === null || tabsPage.length <= 0) {
//                     // window.open(chrome.runtime.getURL('./background/background.html'), "background");
//                     chrome.tabs.create(
//                         {
//                             // windowId: 1,
//                             selected: true,
//                             "url": chrome.runtime.getURL("./background/background.html")
//                         },
//                         (tabPage) => {
//                             // console.log(tabPage.id);
//                             // alert(tabPage.id);
//                             background_ID = tabPage.id;
//                         }
//                     );
//                 } else {
//                     // background_ID = tabsPage[0].id;
//                     // background_ID = tabsPage[0].windowId;
//                     chrome.tabs.update(
//                         tabsPage[0].id,
//                         {
//                             // url: tabsPage[0].url,
//                             selected: true
//                         }
//                     );
//                 };
//             }
//         );
//     }
// );



// popup.html 頁面可以直接訪問 background.html 頁面的 DOM，也可以直接調用 background.html 頁面的 JavaScript 代碼;
// 例如，在 background.html 頁面的 JavaScript 代碼中 有一個 test() 函數，即可使用如下方法直接在 popup.html 頁面中調用該函數;
let bgP = chrome.extension.getBackgroundPage();
// bgP.test(); // 調用執行 background.html 頁面的 test() 函數;
// alert('後臺頁面（background.html）中 body 的代碼:\n' + bgP.document.body.innerHTML); // 訪問 background.html 頁面的 DOM;

// 測試後臺頁面（background.html）;
window.document.getElementById("invoke_background_js").addEventListener("click", async () => {
    // popup.html 頁面可以直接訪問 background.html 頁面的 DOM，也可以直接調用 background.html 頁面的 JavaScript 代碼;
    // 例如，在 background.html 頁面的 JavaScript 代碼中 有一個 test() 函數，即可使用如下方法直接在 popup.html 頁面中調用該函數;
    // let bgP = chrome.extension.getBackgroundPage((backgroundPage) => {});
    bgP.test(window.document.getElementById("invoke_background_js")); // 調用執行 background.html 頁面的 test() 函數;
    alert('後臺頁面（background.html）中 body 的代碼:\n' + bgP.document.body.innerHTML); // 訪問 background.html 頁面的 DOM;
});

// 創建並打開後臺頁面（background.html）;
window.document.getElementById("open_background").addEventListener("click", async () => {
    // window.open(chrome.runtime.getURL('./background/background.html'), "background");
    chrome.tabs.create(
        {
            // windowId: 1,
            // selected: true,
            url: chrome.runtime.getURL('./background/background.html')  // Manifest V3 的 API;
            // url: chrome.extension.getURL('./background/background.html')  // API 接口：chrome.extension.getURL() 是 Manifest V2 獨有的 API;
        },
        (tabPage) => {
            // console.log(tabPage.id);
            // alert(tabPage.id);
            background_ID = tabPage.id;
        }
    );
    // chrome.tabs.get(tabPage.id, (tabPage) => {
    //     console.log(tabPage.id);
    //     alert(tabPage.id);
    // });
    // chrome.tabs.getSelected(tabPage.windowId, (tabPage) => {
    //     console.log(tabPage.id);
    //     alert(tabPage.id);
    // });
    // chrome.tabs.query(
    //     {
    //         // active: true,
    //         // status: "complete",  // "loading";
    //         // title: "",
    //         url: chrome.runtime.getURL('./background/background.html')  // Manifest V3 的 API;
    //         // url: chrome.extension.getURL('./background/background.html')  // API 接口：chrome.extension.getURL() 是 Manifest V2 獨有的 API;
    //     },
    //     function(tabs) {
    //         alert(tabs.length ? tabs[0].id: null);
    //         alert(tabs.length ? tabs[0].windowId: null);
    //     }
    // );
    // chrome.tabs.update(
    //     tabsPage[0].id,
    //     {
    //         // url: tabsPage[0].url,
    //         selected: true
    //     }
    // );
    // chrome.windows.remove(tabPage.id, function() {});  // 關閉標籤頁;
});

let test_file_path = chrome.runtime.getURL("CrawlerStrategyServer/test/test.html");
let test_http_url = "http://localhost:9001/CrawlerStrategyServer/test/test.html";

let CFDA_file_path = chrome.runtime.getURL("CrawlerStrategyServer/CFDA/CFDA.html");
let CFDA_http_url = "http://localhost:9001/CrawlerStrategyServer/CFDA/CFDA.html";
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
                                window.document.getElementById("test_import_path_textarea").textContent = test_http_url;
                            };
                            if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].value === "file") {
                                window.document.getElementById("test_import_path_textarea").textContent = test_file_path;
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
                                window.document.getElementById("CFDA_import_path_textarea").textContent = CFDA_http_url;
                            };
                            if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].value === "file") {
                                window.document.getElementById("CFDA_import_path_textarea").textContent = CFDA_file_path;
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
                                window.document.getElementById("TFDA_import_path_textarea").textContent = TFDA_http_url;
                            };
                            if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].value === "file") {
                                window.document.getElementById("TFDA_import_path_textarea").textContent = TFDA_file_path;
                            };
                        };
                    };
                };
            });
        };
    };
};











// let Import_Acquisition_Strategy_Button_test = null;
// Import_Acquisition_Strategy_Button_test = window.document.getElementById("test_import_button");
// if (window.document.getElementById("test_import_button") === null) {
//     if (window.console) { window.console.log('網頁中無法獲取 id 值為: "test" 的自定義元素.'); } else { window.console = { log: function () { } }; };
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

    // popup.html 頁面可以直接訪問 background.html 頁面的 DOM，也可以直接調用 background.html 頁面的 JavaScript 代碼，例如，可以使用 chrome.extension.getBackgroundPage() 方法獲取後臺頁面（background.html）對象的句柄;
    // let bgP = chrome.extension.getBackgroundPage((backgroundPage) => {});

    // 傳入自定義輸入的采集策略導入源類型是從 http web 還是本地硬盤文檔系統 file;
    let is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = "";
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
    if (is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value !== "") {
        if (bgP.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && bgP.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
            // bgP.document.getElementsByName("test_acquisition_strategy_import_source_type_radio");
            // bgP.document.getElementById("test_acquisition_strategy_import_source_http_radio");
            // bgP.document.getElementById("test_acquisition_strategy_import_source_file_radio");
            for (let i = 0; i < bgP.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
                if (bgP.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].value === is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value) {
                    bgP.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].checked = true;
                } else {
                    bgP.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].checked = false;
                };
            };
        };
    };

    let Acquisition_Strategy_Import_Source_Path_textarea_Value = "";
    if (window.document.getElementById("test_import_path_textarea") !== null && window.document.getElementById("test_import_path_textarea").textContent !== "") {

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

        Acquisition_Strategy_Import_Source_Path_textarea_Value = window.document.getElementById("test_import_path_textarea").textContent;
    };
    if (Acquisition_Strategy_Import_Source_Path_textarea_Value !== "") {
        if (bgP.document.getElementById("test_import_path_textarea") !== null) {

            // bgP.document.getElementById("test_import_path_textarea").style.paddingleft = "5px";
            // bgP.document.getElementById("test_import_path_textarea").style.verticalalign = "top";
            // bgP.document.getElementById("test_import_path_textarea").style.textalign = "left";
            // bgP.document.getElementById("test_import_path_textarea").style.fontfamily = '"Times New Roman, FangSong"' + ', serif';
            // bgP.document.getElementById("test_import_path_textarea").style.fontstyle = "normal";
            // bgP.document.getElementById("test_import_path_textarea").style.fontsize = "1em";
            // bgP.document.getElementById("test_import_path_textarea").style.color = "rgba(0,0,0,0.7)";
            // bgP.document.getElementById("test_import_path_textarea").style.width = "100%";  // "auto", "100px";
            // bgP.document.getElementById("test_import_path_textarea").style.height = "100%";  // "auto", "100px";
            // // bgP.document.getElementById("test_import_path_textarea").style.overflow_x = "hidden";  // visible(默認取值),hidden,auto,scroll;
            // // bgP.document.getElementById("test_import_path_textarea").style.overflow_y = "hidden";  // visible(默認取值),hidden,auto,scroll;
            // bgP.document.getElementById("test_import_path_textarea").style.display = "none";  // "block";
            // // bgP.document.getElementById("test_import_path_textarea").style.resize = none; // 禁用右下角的拖動圖標;
            // // bgP.document.getElementById("test_import_path_textarea").defaultValue = "初始值" ; // 文本框初始值;
            // // bgP.document.getElementById("test_import_path_textarea").hidden = "hidden";  // .style.visibility = "hidden";
            // bgP.document.getElementById("test_import_path_textarea").lang = "en";
            // bgP.document.getElementById("test_import_path_textarea").translate = "no";
            // // bgP.document.getElementById("test_import_path_textarea").readonly = "readonly";
            // // bgP.document.getElementById("test_import_path_textarea").disabled = "disabled";
            // // bgP.document.getElementById("test_import_path_textarea").rows = "5";
            // // bgP.document.getElementById("test_import_path_textarea").cols = "160";
            // // bgP.document.getElementById("test_import_path_textarea").maxlength = "160";
            // // bgP.document.getElementById("test_import_path_textarea").wrap = "soft";  // "hard"，用 "%OD%OA" （回車/換行）進行分隔;
            // // bgP.document.getElementById("test_import_path_textarea").contenteditable = "true";  // "false";
            // bgP.document.getElementById("test_import_path_textarea").placeholder = "input import test acquisition strategy file path or URL.";
    
            bgP.document.getElementById("test_import_path_textarea").textContent = Acquisition_Strategy_Import_Source_Path_textarea_Value;
        };
    };

    bgP.document.getElementById("test_import_button").click();

    window.setTimeout(function () {
        if (window.document.getElementById("test_import_button") !== null) { window.document.getElementById("test_import_button").removeAttribute("disabled"); };

        if (window.document.getElementById("test_import_path_textarea") !== null) { window.document.getElementById("test_import_path_textarea").removeAttribute("disabled"); };

        if (window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length > 0) {
            for (let i = 0; i < window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio").length; i++) {
                window.document.getElementsByName("test_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
            };
        };
    }, 3000);
});

// let Import_Acquisition_Strategy_Button_CFDA = null;
// Import_Acquisition_Strategy_Button_CFDA = window.document.getElementById("CFDA_import_button");
// if (window.document.getElementById("CFDA_import_button") === null) {
//     if (window.console) { window.console.log('網頁中無法獲取 id 值為: "CFDA" 的自定義元素.'); } else { window.console = { log: function () { } }; };
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

    // popup.html 頁面可以直接訪問 background.html 頁面的 DOM，也可以直接調用 background.html 頁面的 JavaScript 代碼，例如，可以使用 chrome.extension.getBackgroundPage() 方法獲取後臺頁面（background.html）對象的句柄;
    // let bgP = chrome.extension.getBackgroundPage((backgroundPage) => {});

    // 傳入自定義輸入的采集策略導入源類型是從 http web 還是本地硬盤文檔系統 file;
    let is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = "";
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
    if (is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value !== "") {
        if (bgP.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && bgP.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
            // bgP.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio");
            // bgP.document.getElementById("CFDA_acquisition_strategy_import_source_http_radio");
            // bgP.document.getElementById("CFDA_acquisition_strategy_import_source_file_radio");
            for (let i = 0; i < bgP.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                if (bgP.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].value === is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value) {
                    bgP.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].checked = true;
                } else {
                    bgP.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].checked = false;
                };
            };
        };
    };

    let Acquisition_Strategy_Import_Source_Path_textarea_Value = "";
    if (window.document.getElementById("CFDA_import_path_textarea") !== null && window.document.getElementById("CFDA_import_path_textarea").textContent !== "") {

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

        Acquisition_Strategy_Import_Source_Path_textarea_Value = window.document.getElementById("CFDA_import_path_textarea").textContent;
    };
    if (Acquisition_Strategy_Import_Source_Path_textarea_Value !== "") {
        if (bgP.document.getElementById("CFDA_import_path_textarea") !== null) {

            // bgP.document.getElementById("CFDA_import_path_textarea").style.paddingleft = "5px";
            // bgP.document.getElementById("CFDA_import_path_textarea").style.verticalalign = "top";
            // bgP.document.getElementById("CFDA_import_path_textarea").style.textalign = "left";
            // bgP.document.getElementById("CFDA_import_path_textarea").style.fontfamily = '"Times New Roman, FangSong"' + ', serif';
            // bgP.document.getElementById("CFDA_import_path_textarea").style.fontstyle = "normal";
            // bgP.document.getElementById("CFDA_import_path_textarea").style.fontsize = "1em";
            // bgP.document.getElementById("CFDA_import_path_textarea").style.color = "rgba(0,0,0,0.7)";
            // bgP.document.getElementById("CFDA_import_path_textarea").style.width = "100%";  // "auto", "100px";
            // bgP.document.getElementById("CFDA_import_path_textarea").style.height = "100%";  // "auto", "100px";
            // // bgP.document.getElementById("CFDA_import_path_textarea").style.overflow_x = "hidden";  // visible(默認取值),hidden,auto,scroll;
            // // bgP.document.getElementById("CFDA_import_path_textarea").style.overflow_y = "hidden";  // visible(默認取值),hidden,auto,scroll;
            // bgP.document.getElementById("CFDA_import_path_textarea").style.display = "none";  // "block";
            // // bgP.document.getElementById("CFDA_import_path_textarea").style.resize = none; // 禁用右下角的拖動圖標;
            // // bgP.document.getElementById("CFDA_import_path_textarea").defaultValue = "初始值" ; // 文本框初始值;
            // // bgP.document.getElementById("CFDA_import_path_textarea").hidden = "hidden";  // .style.visibility = "hidden";
            // bgP.document.getElementById("CFDA_import_path_textarea").lang = "en";
            // bgP.document.getElementById("CFDA_import_path_textarea").translate = "no";
            // // bgP.document.getElementById("CFDA_import_path_textarea").readonly = "readonly";
            // // bgP.document.getElementById("CFDA_import_path_textarea").disabled = "disabled";
            // // bgP.document.getElementById("CFDA_import_path_textarea").rows = "5";
            // // bgP.document.getElementById("CFDA_import_path_textarea").cols = "160";
            // // bgP.document.getElementById("CFDA_import_path_textarea").maxlength = "160";
            // // bgP.document.getElementById("CFDA_import_path_textarea").wrap = "soft";  // "hard"，用 "%OD%OA" （回車/換行）進行分隔;
            // // bgP.document.getElementById("CFDA_import_path_textarea").contenteditable = "true";  // "false";
            // bgP.document.getElementById("CFDA_import_path_textarea").placeholder = "input import CFDA acquisition strategy file path or URL.";
    
            bgP.document.getElementById("CFDA_import_path_textarea").textContent = Acquisition_Strategy_Import_Source_Path_textarea_Value;
        };
    };

    bgP.document.getElementById("CFDA_import_button").click();

    window.setTimeout(function () {
        if (window.document.getElementById("CFDA_import_button") !== null) { window.document.getElementById("CFDA_import_button").removeAttribute("disabled"); };

        if (window.document.getElementById("CFDA_import_path_textarea") !== null) { window.document.getElementById("CFDA_import_path_textarea").removeAttribute("disabled"); };

        if (window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length > 0) {
            for (let i = 0; i < window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                window.document.getElementsByName("CFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
            };
        };
    }, 3000);
});

window.document.getElementById("TFDA_import_button").addEventListener("click", async () => {

    if (window.document.getElementById("TFDA_import_button") !== null) { window.document.getElementById("TFDA_import_button").disabled = "disabled"; };
    if (window.document.getElementById("TFDA_import_path_textarea") !== null) { window.document.getElementById("TFDA_import_path_textarea").disabled = "disabled"; };
    if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
        for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
            window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].disabled = "disabled";
        };
    };

    // popup.html 頁面可以直接訪問 background.html 頁面的 DOM，也可以直接調用 background.html 頁面的 JavaScript 代碼，例如，可以使用 chrome.extension.getBackgroundPage() 方法獲取後臺頁面（background.html）對象的句柄;
    // let bgP = chrome.extension.getBackgroundPage((backgroundPage) => {});

    let is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = "";
    if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
        for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
            if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].checked === true) {
                is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value = window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].value;
            };
        };
    };
    if (is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value !== "") {
        if (bgP.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && bgP.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
            for (let i = 0; i < bgP.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                if (bgP.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].value === is_Acquisition_Strategy_Import_Source_Type_Radio_Checked_Value) {
                    bgP.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].checked = true;
                } else {
                    bgP.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].checked = false;
                };
            };
        };
    };

    let Acquisition_Strategy_Import_Source_Path_textarea_Value = "";
    if (window.document.getElementById("TFDA_import_path_textarea") !== null && window.document.getElementById("TFDA_import_path_textarea").textContent !== "") {
        Acquisition_Strategy_Import_Source_Path_textarea_Value = window.document.getElementById("TFDA_import_path_textarea").textContent;
    };
    if (Acquisition_Strategy_Import_Source_Path_textarea_Value !== "") {
        if (bgP.document.getElementById("TFDA_import_path_textarea") !== null) {
            bgP.document.getElementById("TFDA_import_path_textarea").textContent = Acquisition_Strategy_Import_Source_Path_textarea_Value;
        };
    };

    bgP.document.getElementById("TFDA_import_button").click();

    window.setTimeout(function () {
        if (window.document.getElementById("TFDA_import_button") !== null) { window.document.getElementById("TFDA_import_button").removeAttribute("disabled"); };
        if (window.document.getElementById("TFDA_import_path_textarea") !== null) { window.document.getElementById("TFDA_import_path_textarea").removeAttribute("disabled"); };
        if (window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio") !== null && window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length > 0) {
            for (let i = 0; i < window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio").length; i++) {
                window.document.getElementsByName("TFDA_acquisition_strategy_import_source_type_radio")[i].removeAttribute("disabled");
            };
        };
    }, 3000);
});
