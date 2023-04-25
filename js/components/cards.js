export default {
    async setData() {
        const ws = new Worker('js/workers/wsMyPokemon.js', {type:'module'})
        ws.postMessage({id:98})
        ws.addEventListener('message', r => { 
            document.querySelector("#template").insertAdjacentHTML("beforeend",r.data)
        })
    }
}