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
        imgWindow.innerHTML = `<img src="https://s3-jp-ap-3.040407.xyz/oss/pay/alipaymoqr.png" height="500" draggable="false">`;
        imgWindow.style.display = "flex";
    });

    document.querySelector("[USDT] [pay-btn]").addEventListener("click", () => {
        imgWindow.innerHTML = `<img src="https://3485223468-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3ifq9ZUZjCEA1JvNNCFi%2Fuploads%2FnS8xLLhsmyQkUt6XJu1b%2Fimage.png?alt=media&token=991507c7-0ae6-4fef-9ef9-7013fb052bdf" height="500" draggable="false">`;
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
