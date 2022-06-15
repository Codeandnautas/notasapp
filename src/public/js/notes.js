async function getData(){
    const response = await fetch('/api/getnotes');
    const data = await response.json();
    console.log(data);

    for(let i = 0; i < data.notes.length; i++){
        //1 columna  
        const column = document.createElement('div');
        column.className = 'col';

        //2 Tarjeta
        const card = document.createElement('div');
        card.className = 'card mb-3';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        //3 Datos
        const title = document.createElement('h4');
        title.innerHTML = data.notes[i].title;

        const note = document.createElement('p');
        note.innerHTML = data.notes[i].note;

        const author = document.createElement('p');
        author.innerHTML = data.notes[i].author;

        const date = document.createElement('p');
        date.innerHTML = data.notes[i].date;

        //Insertamos los elementos html en su correspondiente lugar  
        cardBody.append(title);
        cardBody.append(note);
        cardBody.append(author);
        cardBody.append(date);

        //Creamos el botón de eliminar

        const button = document.createElement('button');
        button.className = 'btn btn-danger';
        button.innerHTML = 'Eliminar';
        cardBody.append(button);
        card.append(cardBody);
        column.append(card);
        document.getElementById('portfolio').append(column);

        button.onclick = async () =>{

            await fetch('/api/delete/' + data.notes[i]._id, {
                method: 'DELETE',
            }).then(res => res.text().then(res => console.log(res)));

            window.location.href = 'notes.html';

        }

    }

    




}

getData();