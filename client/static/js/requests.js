async function getPost(id) {
    try {
        const response = await fetch(`http://localhost:3000/${id}`);
        const data = await response.json()
        return data
    } catch (err) {
        console.warn(err)
    }
}

async function postPost(e) {
    e.preventDefault()
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const response = await fetch('http://localhost:3000/', options)
        const { id, err } = await response.json()
        if (err) {
            throw Error(err)
        } else {
            console.log('hello')
        }
    } catch (err) {
        console.warn(err)
    }
}