const pokeapi = async()=>{
        try {
            const res = await fetch (`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281`)
            const data = await res.json()
            let results =""
            for (let i = 0; i < 120; i++) {
                const pokemon = await fetch(data.results[i].url);
                const datap = await pokemon.json();
                
            
            let plantilla = `
            <article class="card">
            <img src="./images/card1.jpeg" alt="imagen header card" class="card-header">
            <div class="card-body">
                <img src=${datap.sprites.other.dream_world.front_default} class="card-body-img">
                <h1 class="card-body-title">
                    ${datap.name}
                    <span> <p>Experience </p>${datap.base_experience}</span>
                </h1>
                <p class="card-body-text"></p>
            </div>
            <div class="card-footer">
                <div class="card-footer-social">
                    <h3>${datap.moves[0].move.name}</h3>
                    <p>Moves</p>
                </div>
                <div class="card-footer-social">
                    <h3>${datap.stats[0].base_stat}</h3>
                    <p>Stats</p>
                </div>
                <div class="card-footer-social">
                    <h3>${datap.stats[0].stat.name}</h3>
                    <p>Name Stat</p>
                </div>
            </div>
        </article>`;
        results+=(plantilla)
        }   

    return results

        } catch (error) {console.log(error)}
    }


self.addEventListener('message',async event => {
    let resultados= await pokeapi();
    self.postMessage(resultados);
})


