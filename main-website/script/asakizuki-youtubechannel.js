youtubeFetch = async (ytbURL, elementID) => {
    let asaKey = 'AIzaSyA-JilwxHUyuA6pL1URp63Gm1JhrpKPCxs';
    let APIFetch = `https://www.googleapis.com/youtube/v3/search?channelId=${ytbURL}&part=snippet,id&order=date&maxResults=120&key=`;
    let asaGetElement = document.getElementById(elementID).getElementsByTagName('div')[2];
    const repos = await fetch(`${APIFetch}${asaKey}`);
    const youtube = await repos.json();
    let asaCount = 0;

    document.getElementById(elementID).getElementsByTagName('button')[0].style.visibility = 'hidden';
    document.getElementById(elementID).getElementsByTagName('button')[1].style.visibility = 'visibility';

    for (let index = 0; index < youtube.items.length; index++) {
        if (!(index === youtube.items.length - 1)) {
            let ytbVidItem = youtube.items[index];

            asaGetElement.innerHTML += `<a href="https://www.youtube.com/watch?v=${ytbVidItem.id.videoId}" target="_blank"> <button class="ytbButton">
            <img class="ytb" src="${ytbVidItem.snippet.thumbnails.medium.url}">
            <a class="ytbTitle">${ytbVidItem.snippet.title}</a> </button> </a>`
        }
    };

    document.getElementById(elementID).getElementsByTagName('button')[0].onclick = () => {
        if (asaCount < 1) { return };
        asaCount--;

        if (asaCount === 0) { document.getElementById(elementID).getElementsByTagName('button')[0].style.visibility = 'hidden'; } else {
            document.getElementById(elementID).getElementsByTagName('button')[0].style.visibility = 'visible';
        }
        if (Math.floor((youtube.items.length / 4 - 1)) === asaCount) { document.getElementById(elementID).getElementsByTagName('button')[1].style.visibility = 'hidden'; } else {
            document.getElementById(elementID).getElementsByTagName('button')[1].style.visibility = 'visible';
        }

        asaGetElement.style.left = `-${asaCount * 672}px`
    }

    document.getElementById(elementID).getElementsByTagName('button')[1].onclick = () => {
        if (asaCount > (youtube.items.length / 4)) { return };
        asaCount++;

        if (asaCount === 0) { document.getElementById(elementID).getElementsByTagName('button')[0].style.visibility = 'hidden'; } else {
            document.getElementById(elementID).getElementsByTagName('button')[0].style.visibility = 'visible';
        }
        if (Math.floor((youtube.items.length / 4 - 1)) === asaCount) { document.getElementById(elementID).getElementsByTagName('button')[1].style.visibility = 'hidden'; } else {
            document.getElementById(elementID).getElementsByTagName('button')[1].style.visibility = 'visible';
        }
        asaGetElement.style.left = `-${asaCount * 672}px`
    }
}

youtubeFetch('UCqz1oL2R-iO9Sw9FlribnXg', 'asakizuki-ytblist');