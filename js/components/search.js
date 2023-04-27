export default {
    async setDataSearch(){    
        document.querySelector("#buscar").addEventListener("click",()=>{
            let val= document.querySelector("#busqueda").value;
            const worker = new Worker('./js/workers/wsMySearch.js');
            worker.postMessage({val:val});
            worker.onmessage = function(e) {
                console.log(e.data)
                document.querySelector("#searchs").innerHTML = e.data
                worker.terminate();

            };       
        })
    }
}
