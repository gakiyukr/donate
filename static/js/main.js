window.addEventListener("load", () => {
    const img = document.querySelectorAll("img");
    const imgWindow = document.querySelector("[img-window]");
    for(let i = 0; i < img.length; i++){
        img[i].setAttribute("draggable", "false");
    }

    document.querySelector("[cn] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/alwxcnqr.png" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[hk] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/alwxhkqr.png" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[mo] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/alipaymoqr.png" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[ECNY] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/ecnypay.jpg" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[USDT] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/usdtpay.png" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[patreon] [pay-btn]").addEventListener("click", () => {
        window.open("https://www.patreon.com/gakiyukr", "_blank");
    });

    imgWindow.addEventListener("click", () => {
        imgWindow.innerHTML = "";
        imgWindow.removeAttribute("style");
    })
});
