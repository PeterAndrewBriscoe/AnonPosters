const publish = document.querySelector('#writeAPost')

publish.addEventListener('submit', e => postPost(e))

// window.addEventListener('hashchange', updateContent);

urlNumber = parseInt(window.location.hash.substring(1))

if (typeof(urlNumber) == "number") {
    getPost(urlNumber)
} else if (typeof(urlNumber) == "NaN") {
    window.location.href="./index.html"
}

