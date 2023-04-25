import cards from "./components/cards.js"
import search from "./components/search.js";

cards.setData();
search.setDataSearch();


// const pintarCard = (pokemon) => {
//     console.log(pokemon)
//     const flex = document.querySelector('.flex')
//     const template = document.querySelector('#template').content
//     const clone = template.cloneNode(true)
//     const fragment = document.createDocumentFragment()

//     clone.querySelector('.card-body-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
//     fragment.appendChild(clone)

//     flex.appendChild(fragment)


// }