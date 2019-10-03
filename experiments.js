console.log("Hello world")

const BASE_URL='https://pokeapi.co/api/v2/';

const $pokemonList = document.getElementById('pokemon-list');
var Container = document.getElementById("options");
var buttons= Container.getElementsByTagName('button');
let regionId = 1;
var req = [];
var promises = [];

for (var i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', function (){
      current = document.getElementsByClassName('active')
      current[0].classList.remove('active');
      this.classList.add('active')
      regionId=parseInt(this.dataset.id);
      load();
    })
}
// var req = [];




//  ------------- API - REQUEST ----------------

async function load(){

  async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };


  let{
      pokedexes:{
        0:{
          url: pokedexUrl
        }
      }
  } = await getData(`${BASE_URL}region/${regionId}`)

  let {
    pokemon_entries: PokemonList
  } = await getData(pokedexUrl);

  console.log(PokemonList);
  debugger
  await PokemonList.forEach(async (pkmn) => {
    var pokemon = await getData(`${pkmn.pokemon_species.url}`)
    req.push(`${BASE_URL}pokemon/${pokemon.id}`)
    console.log(req)
  })
  console.log(req)
  req.sort()
  debugger
  promises = req.map( async url => { 
    return await fetch(url);
  });
  console.log(promises)
  Promise
    .all(req)
    .then(function (pokemon) {
      console.log("hi")
      sprites = pokemon.map( id => [id.name, id.sprites.front_default, id.id]);
      sprites.forEach( (element) =>{
        const HTMLString = pokemonItemTemplate(element[1], element[0], element[2]);
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        pokemonElement = html.body.children[0]
        // debugger
        if (element[1])
          $pokemonList.append(pokemonElement);
          addEventClick(pokemonElement);
          return pokemon;
      } );
      } )
    .catch( function (){
      alert('Error');
    })
    function pokemonItemTemplate(src, name, id){
      return `<div class="pokemon-item" data-id="${id}">
      <img src="${src}" alt="">
      <p class="pokemon-name">${name}</p>
    </div>`
        
  }
  
  function addEventClick($element){
    $element.addEventListener('click', () => {
      showModal($element);
    })
  }
  
  function showModal($element){
    // debugger
      pokemon=PokemonList.find( pokemon => pokemon.entry_number===parseInt($element.dataset.id, 10))
      console.log(pokemon.pokemon_species.name)
  }

};
