const pokeapisearch = async(dato)=>{
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${dato}`)
        const data = await res.json()
        let resultado = ""
        let plantilla = `
        <article class="card">
            <img src="../images/card1.jpeg" alt="imagen header card" class="card-header">
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
                    <h3>${data.moves[0].move.name}</h3>
                    <p>Moves</p>
                </div>
                <div class="card-footer-social">
                    <h3>${data.stats[0].base_stat}</h3>
                    <p>Stats</p>
                </div>
                <div class="card-footer-social">
                    <h3>${data.stats[0].stat.name}</h3>
                    <p>Name Stat</p>
                </div>
            </div>
        </article>
        `;
        resultado+=plantilla
        return resultado
    }catch(e)
   {return "Si existe error"+e.error}

    }
    self.addEventListener('message', async function(e){
        const data = e.data;
        let result;
        result= await pokeapisearch(data.val);
        self.postMessage(result);
    
    });
