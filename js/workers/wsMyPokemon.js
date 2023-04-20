
const fetchData = async (id) => {
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        pintarCard(data)
        console.log(data)


document.addEventListener('DOMContentLoaded',() => {
    const random =  getRandomInt(1,151)
     fetchData(random)
 })
 const getRandomInt = (min, max) => {
     return Math.floor(Math.random() * (max-min))+ min;
 }
 
 
    
    } catch (error) {
        console.log(error)
    }
}
self.addEventListener('message', async function (event){
    const data = event.data;
    let resultado;
})
switch (data.type) {
    case 'showpokemon':
        resultado= await fetchData();
        break;

    default:
        resultado= "false"
}
self.postMessage(resultado);
