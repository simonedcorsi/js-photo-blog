const card = document.getElementById('gallery');

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json())
    .then(data => {

        let arrayCards = []
        
        data.forEach(element => {
            const cards = document.createElement('div')
            cards.className = "col-md-4 d-flex justify-content-center col-sm-6";
            const elements = `<div class= "bCard" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
            <img id="pin" src="img/pin.svg" alt="pin">
                <img id="img" src="${element.url}" alt="${element.title}">
                <p class ="fontData">${element.date}</p>
                <p>${element.title}</p>
            </div>`

            cards.innerHTML = elements;
            card.appendChild(cards);

            arrayCards = document.querySelectorAll('.bCard')

            arrayCards.forEach(element => {
                element.addEventListener('click', function () {
                    let modal = document.getElementById('modal');
                    modal.className = 'overlay'
                
            })
            document.getElementById("btn").addEventListener("click", function() {
                let btn = document.getElementById("btn1");
                btn.className = 'btn1';
                
            } ) ;
                
        })

    });


})


    


    