document.getElementById('fetchData').addEventListener('click', function () {
    const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    const amiiboApiUrl = 'https://amiiboapi.com/api/amiibo/?gameseries=Pokemon';

    fetch(pokemonApiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonList = data.results;
            const pokemonInfoDiv = document.getElementById('pokemonInfo');
            pokemonInfoDiv.innerHTML = '<h2>Pokémon</h2>';
            pokemonList.forEach(pokemon => {
                pokemonInfoDiv.innerHTML += `<p>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>`;
            });

            return fetch(amiiboApiUrl);
        })
        .then(response => response.json())
        .then(data => {
            const amiiboList = data.amiibo;
            const amiiboInfoDiv = document.getElementById('amiiboInfo');
            amiiboInfoDiv.innerHTML = '<h2>Amiibo</h2>';
            amiiboList.forEach(amiibo => {
                amiiboInfoDiv.innerHTML += `
                    <div class="amiibo">
                        <img src="${amiibo.image}" alt="${amiibo.name}">
                        <p>${amiibo.name}</p>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
