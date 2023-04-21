export let wsPokemon = {
    async fetchData(id){
        try {
            const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json()
            let plantilla = `
            <article class="card">
            <img src="./images/bg-pattern-card.svg" alt="imagen header card" class="card-header">
            <div class="card-body">
                <img src=${data.sprites.other.dream_world.front_default} alt="imagen de vitoko" class="card-body-img">
                <h1 class="card-body-title">
                    ${data.name}
                    <span> <p>Experience </p>${data.base_experience}</span>
                </h1>
                <p class="card-body-text"></p>
            </div>
            <div class="card-footer">
                <div class="card-footer-social">
                    <h3>80K</h3>
                    <p>Followers</p>
                </div>
                <div class="card-footer-social">
                    <h3>803K</h3>
                    <p>Likes</p>
                </div>
                <div class="card-footer-social">
                    <h3>1.4K</h3>
                    <p>Photos</p>
                </div>
            </div>
        </article>`;
            return plantilla
        } catch (error) {console.log(error)}
    }
}


self.addEventListener('message', event => {
    const data = event.data;
    wsPokemon.fetchData(data.id).then(res => {
        postMessage(res)

    }) 
})


