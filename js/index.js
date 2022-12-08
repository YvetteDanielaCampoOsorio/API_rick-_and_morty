function getCharacters(done) {

const results = fetch("https://rickandmortyapi.com/api/character");

results
       .then(response => response.json())
       .then(data => {
            done(data)
        });
}

getCharacters( data => {

        data.results.forEach(personaje => {

            const article = document.createRange().createContextualFragment(/* html */`
            <article class="personaje">

                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>  

                <h2 class="personaje">${personaje.name}</h2>
                <ul>
                    <li>${personaje.status}</li>
                    <li>${personaje.species}</li>
                    <li>${personaje.gender}</li>
                </ul>
                </article>`);

            const main = document.querySelector("main");

            main.append(article);
        });
});

document.addEventListener("keyup" , e=>{

    if (e.target.matches("#searcher")){    
            document.querySelectorAll(".personaje").forEach(card =>{
                card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?card.classList.remove("filtro")
                :card.classList.add("filtro")
            })
        }
    })