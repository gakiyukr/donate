# Donate-一个漂亮的赞助页源码

## Demo

[vwo50.co](https://vwo50.co/)

## 使用方法

### 初步入门

index.html中的12-47行对应着相应的Logo，如无特殊需求，无需更换。

收款码链接位于 ./static/js/main.js 中

### 如何增加新的付款方式

index.html中，一个完整的付款方式是这样的：

```html
<div card USDT>     <!-- 本行的内容是该付款方式的Tag，需要于main.js中的对应 -->
                <h3>USDT TC20</h3>       
                <div card-content>
                    TRX/TC20链：THqAs7FZXbbp7AuTMqFPPw7pA7TXmPLH2a
                    <img src="https://s3-jp-ap-3.040407.xyz/oss/pay/USDTlogo.png" pay-btn>   <!-- 本行的内容是该付款方式的Logo图片，可以使用本地引用的形式，也可以使用外部图片 -->
                </div>
            </div>
```

那么该付款方式在main.js中则是如下：

```js
    document.querySelector("[USDT] [pay-btn]").addEventListener("click", () => {    <!-- 本行的"USDT"内容是该付款方式的Tag，需要于index.html中的对应 -->
        imgWindow.innerHTML = `<img src="https://3485223468-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3ifq9ZUZjCEA1JvNNCFi%2Fuploads%2FnS8xLLhsmyQkUt6XJu1b%2Fimage.png?alt=media&token=991507c7-0ae6-4fef-9ef9-7013fb052bdf" height="500" draggable="false">`;     <!-- 这里引号里的链接，则是该付款方式收款码的链接，可以使用本地引用的形式，也可以使用外部图片 -->
        imgWindow.style.display = "flex";
```

## 开源许可

本项目采用MIT许可证，您不需要公开修改后的源码，但不可删除相关开发者版权信息。