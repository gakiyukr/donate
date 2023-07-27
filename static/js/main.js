window.addEventListener("load", () => {
    const img = document.querySelectorAll("img");
    const imgWindow = document.querySelector("[img-window]");
    for(let i = 0; i < img.length; i++){
        img[i].setAttribute("draggable", "false");
    }

    document.querySelector("[Patreon] [pay-btn]").addEventListener("click", () => {
        window.open("https://www.patreon.com/gakiyukr", "_blank");
    });

    document.querySelector("[Alipay] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/qr/Alipay_Plus_QR.webp" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[HKMO] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/qr/Alipay_HKMO_QR.webp" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[Wechat] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/qr/WechatPay_CNHK_QR.webp" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[QQ] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/qr/QQPAY_QR.webp" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[ECNY] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/alipaymoqr.png" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[USDT] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/qr/Crypto_QR.webp" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    imgWindow.addEventListener("click", () => {
        imgWindow.innerHTML = "";
        imgWindow.removeAttribute("style");
    })
});
