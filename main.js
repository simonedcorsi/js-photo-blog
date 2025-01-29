const card = document.getElementById('gallery');

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        // codice per far qualcosa con la risposta
        data.forEach(element => {
            const cards = document.createElement('div')
            cards.className = "col-md-4 d-flex justify-content-center col-sm-6";
            const elements = `<div class= "bCard"> 
            <img id="pin" src="img/pin.svg" alt="pin">
                <img id="img" src="${element.url}" alt="${element.title}">
                <p>${element.title}</p>
                <p class ="fontData">${element.date}</p>
            </div>`

            cards.innerHTML = elements;
            card.appendChild(cards);
        });

    })
    