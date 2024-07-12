## Focused Crawling
#### web power automate using browser google chrome extension.
#### focused crawling using browser google chrome extension.
#### Manifest version 3
#### 使用 Google 瀏覽器 Chrome 擴展插件 ( Extension ) 製作的, 自動化操作網頁讀取資訊, 網頁定向爬蟲工具.
---
<p word-wrap: break-word; word-break: break-all; overflow-x: hidden; overflow-x: hidden;>
一. 啓動測試網站 :  root@localhost:~# /bin/node ./focused-crawling-Chrome-Extension/testWeb/server.js

二. 啓動 Google 瀏覽器 Chrome , 加載 Google 瀏覽器 Chrome 擴展插件 ( Extension ) : focused-crawling-Chrome-Extension

三. 測試 Google 瀏覽器 Chrome 擴展插件 ( Extension ) : focused-crawling-Chrome-Extension
</p>

---

Operating System :

Acer-NEO-2023 Windows10 x86_64 Inter(R)-Core(TM)-m3-6Y30

Google-Pixel-7 Android-11 Termux-0.118 Ubuntu-22.04-LTS-rootfs Arm64-aarch64 MSM8998-Snapdragon835-Qualcomm®-Kryo™-280

---

Browser : Google Chrome ( Chromium )

[作業系統 ( Operating system ) Linux → Ubuntu Arm64 瀏覽器 ( Browser ) 之 Google Chrome Arm64 下載官方網站](http://ports.ubuntu.com/pool/universe/c/chromium-browser/): 
http://ports.ubuntu.com/pool/universe/c/chromium-browser/

[瀏覽器 ( Browser ) 之 Google Chrome 下載官方網站](https://www.google.com/intl/zh-TW/chrome/dev/?standalone=1): 
https://www.google.com/intl/zh-TW/chrome/dev/?standalone=1

[瀏覽器 ( Browser ) 之 Google Chrome ( Chromium ) 開發人員版 ( dev ) 下載中文網站](https://www.google.cn/intl/zh-TW/chrome/dev/?standalone=1&system=true&statcb=1&installdataindex=empty&defaultbrowser=0): 
https://www.google.cn/intl/zh-TW/chrome/dev/?standalone=1&system=true&statcb=1&installdataindex=empty&defaultbrowser=0

[瀏覽器 ( Browser ) 之 Google Chrome 驅動 ( Driver ) 下載官方網站](https://chromedriver.storage.googleapis.com/index.html): 
https://chromedriver.storage.googleapis.com/index.html

[瀏覽器 ( Browser ) 之 Google Chrome 驅動 ( Driver ) 下載官方網站淘寶網鏡像源](https://termux.com/): 
https://termux.com/

[https://npm.taobao.org/mirrors/chromedriver](https://npm.taobao.org/mirrors/chromedriver): 
https://npm.taobao.org/mirrors/chromedriver

Interpreter : Node.js

[程式設計 JavaScript 語言解釋器 ( Interpreter ) 之 Node.js 官方網站](https://node.js.org/): 
https://node.js.org/

[程式設計 JavaScript 語言解釋器 ( Interpreter ) 之 Node.js 官方網站](https://nodejs.org/en/): 
https://nodejs.org/en/

[程式設計 JavaScript 語言解釋器 ( Interpreter ) 之 Node.js 官方下載頁](https://nodejs.org/en/download/package-manager): 
https://nodejs.org/en/download/package-manager

[程式設計 JavaScript 語言解釋器 ( Interpreter ) 之 Node.js 官方 GitHub 網站賬戶](https://github.com/nodejs): 
https://github.com/nodejs

[程式設計 JavaScript 語言解釋器 ( Interpreter ) 之 Node.js 官方 GitHub 網站倉庫](https://github.com/nodejs/node): 
https://github.com/nodejs/node.git

---

瀏覽器 ( Browser : Google Chrome ) 和解釋器 ( Interpreter : Node.js ) 預編譯二進制可執行檔 [百度網盤(pan.baidu.com)](https://pan.baidu.com/s/1sCS63lDJG0hX6yadYEhK5A?pwd=2qq8) 下載頁: 
https://pan.baidu.com/s/1sCS63lDJG0hX6yadYEhK5A?pwd=2qq8

提取碼：2qq8

---

使用 Google 瀏覽器 Chrome 擴展插件 ( Extension ) : focused-crawling-Chrome-Extension 説明 :

1. 首先, 在智能電話 google-pixel-2 搭載的 Android-11 作業系統中, 安裝 Arm64 架構的 Termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 應用 ( com.termux_118.apk ) ；

2. 然後, 在智能電話 google-pixel-2 搭載的 Android-11 作業系統中, 啓動上一步已經安裝成功的 Termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 應用 ( Termux ) ；

3. 然後, 在智能電話 google-pixel-2 搭載的 android-11 → termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 中, 執行如下指令, 配置模擬最高管理員 ( root ) 賬戶權限模式 :

   對於未取得最高管理員 ( root ) 賬戶權限的 Android-11 作業系統, 執行如下指令, 配置模擬最高管理員 ( root ) 賬戶權限模式 :

   ~ $ pkg install proot -y

   然後, 執行如下指令, 開啓模擬最高管理員 ( root ) 賬戶權限模式 :

   ~ $ termux-chroot

   對於已取得最高管理員 ( root ) 賬戶權限的 Android-11 作業系統, 執行如下指令, 配置模擬最高管理員 ( root ) 賬戶權限模式 :

   ~ $ pkg install tsu -y

   然後, 執行如下指令, 開啓模擬最高管理員 ( root ) 賬戶權限模式 :

   ~ $ tsu

4. 然後, 在智能電話 google-pixel-2 搭載的 android-11 → termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 中, 執行如下指令, 配置授予 Termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 應用 ( Termux ) 訪問 Android-11 作業系統硬盤存儲權限 :

   ~ $ termux-setup-storage

5. 然後, 在智能電話 google-pixel-2 搭載的 android-11 → termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 中, 執行如下指令, 進入「 /data/data/com.termux/files/ 」目錄 :

   ~ $ cd /data/data/com.termux/files/

6. 然後, 在智能電話 google-pixel-2 搭載的 android-11 → termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 中, 執行如下指令, 將壓縮檔「 google-pixel-2_android-11_termux-0.118_arm64.tar.gz 」複製到「 /data/data/com.termux/files/ 」目錄 :

   /data/data/com.termux/files $ cp -rf /data/data/com.termux/files/home/storage/downloads/google-pixel-2_android-11_termux-0.118_arm64.tar.gz /data/data/com.termux/files/google-pixel-2_android-11_termux-0.118_arm64.tar.gz

7. 然後, 在智能電話 google-pixel-2 搭載的 android-11 → termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 中, 執行如下指令, 安裝配置 Termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 的解壓縮工具 ( tar ) 應用 :

   ~ $ pkg install tar

8. 然後, 在智能電話 google-pixel-2 搭載的 android-11 → termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 中, 執行如下指令, 解壓縮檔「 google-pixel-2_android-11_termux-0.118_arm64.tar.gz 」覆蓋「 /data/data/com.termux/files/ 」目錄下原有的兩個文件夾「 /data/data/com.termux/files/home/ 」和「 /data/data/com.termux/files/usr/ 」即可 :

   /data/data/com.termux/files $ tar -zxvf /data/data/com.termux/files/google-pixel-2_android-11_termux-0.118_arm64.tar.gz

9. 然後, 在智能電話 google-pixel-2 搭載的 android-11 → termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 中, 執行如下指令, 刪除壓縮檔「 google-pixel-2_android-11_termux-0.118_arm64.tar.gz 」即可 :

   /data/data/com.termux/files $ rm -rf /data/data/com.termux/files/google-pixel-2_android-11_termux-0.118_arm64.tar.gz

10. 然後, 在智能電話 google-pixel-2 搭載的 android-11 → termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 中, 執行如下指令, 退出 Termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 返回至 Android-11 作業系統 ( Operating System ) 桌面 :

    /data/data/com.termux/files $ exit

11. 最後, 在智能電話 google-pixel-2 搭載的 Android-11 系統中, 重新啓動已經安裝配置成功的 Termux-0.118 作業系統 ( Operating System ) 終端模擬器 ( Terminal Emulator ) 應用 ( Termux ) 即可 :

---

![]()
