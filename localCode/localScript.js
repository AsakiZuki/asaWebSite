window.onload = () => {
    asaWebsiteImgLoaded();
}

asaWebsiteImgLoaded = () => {
    let asaImgLength = document.getElementsByTagName('img').length;
    for (let index = 0; index < asaImgLength; index++) {
        document.getElementsByTagName('img')[index].draggable = false;
    }

    //Font Family Import
    let asaFontFamily = [
        "https://fonts.googleapis.com/css?family=Inconsolata"
    ]

    for (let index = 0; index < asaFontFamily.length; index++) {
        let asaGetFontAPI = document.createElement('link');
        asaGetFontAPI.rel = 'stylesheet';
        asaGetFontAPI.href = asaFontFamily[index];
        document.getElementsByTagName('head')[0].appendChild(asaGetFontAPI);
    }
}