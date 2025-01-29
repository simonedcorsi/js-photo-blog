const card = document.getElementById('gallery');

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        // codice per far qualcosa con la risposta
        data.forEach(element => {
            const cards = document.createElement('div')
            cards.className = "col-md-4 d-flex justify-content-center col-sm-6";
        });


    })
    