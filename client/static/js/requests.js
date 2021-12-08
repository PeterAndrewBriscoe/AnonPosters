async function getPost(id) {
    try {
        const response = await fetch(`http://localhost:3000/${id}`);
        const data = await response.json()
        const postData = data.post
        document.querySelector('#writeAPost').style.display = "none"
        showPost(postData)
        return postData
    } catch (err) {
        console.warn(err)
    }
}

async function postPost(e) {
    e.preventDefault()
    let formData = new FormData(e.target)
    let formedData = {
        title: formData.get('title'),
        pseudonym: formData.get('pseudonym'),
        message: formData.get('message')}
    let JSONformedData = JSON.stringify(formedData)
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSONformedData
        }
        const response = await fetch('http://localhost:3000/', options)
        const { id, err } = await response.json()
        if (err) {
            throw Error(err)
        } else {
            getPost(id)
            window.location.hash = `#${id}`
        }
    } catch (err) {
        console.warn(err)
    }
}

function showPost(data) {
    const post = document.createElement('div')
    for (const [key, value] of Object.entries(data)) {
        const item = document.createElement('p')
        item.setAttribute('id', key)
        item.textContent = data[key]
        post.append(item)
    }
    document.body.append(post)
}