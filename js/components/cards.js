export default {
    async setData() {
        const ws = new Worker('js/workers/wsMyPokemon.js', {type:'module'})
        ws.postMessage({data: true})
        ws.addEventListener('message', r => { 
            document.querySelector("#template").insertAdjacentHTML("beforeend",r.data)
        })
    }
}