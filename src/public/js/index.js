const btn = document.getElementById('btn');

//Evento al hacer click al botón
btn.onclick = () => {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const note = document.getElementById('note').value;
    postData(author, title, note);

}

async function postData(author, title, note){

    const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'author': author,
            'title': title,
            'note': note
        })

    })
    const data = await response.json();
    console.log(data);

    document.getElementById('author').value = "";
    document.getElementById('title').value = "";
    document.getElementById('note').value = "";

}