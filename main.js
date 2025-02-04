// seleziono elemento HTML con id e assegno una variabile
const card = document.getElementById('gallery');

// effettuo chiamata con metodo get all'api per ottenere dati
fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
.then(response => response.json())
.then(data => { //dopo che ottengo i dati
    
    // inizializzo array vuoto per contenere le card
    let arrayCards = []
    
    data.forEach(element => {
        const cards = document.createElement('div')  //creo nuovo elemento div per ogni card e gli aggiungo le classi bootstrap per lo stile 
        cards.className = "col-md-4 d-flex justify-content-center col-sm-6";
        const elements = `<div class= "bCard" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
        <img id="pin" src="img/pin.svg" alt="pin">
            <img id="img" src="${element.url}" alt="${element.title}">
            <p class ="fontData">${element.date}</p>
            <p>${element.title}</p>
        </div>`

        cards.innerHTML = elements; // inserisco il contenuo HTML nella card
        card.appendChild(cards);    // aggiungo le card alla galleria      
    })
    arrayCards = document.querySelectorAll('.bCard') // seleziono tutte le card e le memorizzo nel array vuoto

    arrayCards.forEach(element => {  
        element.addEventListener('click', function () { // funzione per click a ogni card
            let modal = document.getElementById('modal');
            modal.className = 'overlay' // classe per mostrare la modale

            const pathImmagine = element.querySelectorAll("img")[1].src; // impostare immagine della modale corrispondente alla card
            document.getElementById('preview_img').src = pathImmagine;
            console.log(pathImmagine);

            document.getElementById("btn").addEventListener("click", function () {
                modal.className = 'overlay1'
            });
        })
    });

})


    


    