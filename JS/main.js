 const pokemonName = document.querySelector('.PokeName');
 const pokemonName2 = document.querySelector('.PokeName2');
 const pokemonNumber = document.querySelector('.number');
 const pokeImg = document.querySelector('.pokeImg')
 const pokeStat1 = document.querySelector('.stat1')
 const pokeStat2 = document.querySelector('.stat2')
 const pokeStat3 = document.querySelector('.stat3')
 const pokeStat4 = document.querySelector('.stat4')
 const input = document.querySelector('.search-txt')
 const form =  document.querySelector('.form')
 const btnPrev=document.querySelector('.btn1')
 const btnNext=document.querySelector('.btn2')
 const pokeType=document.querySelector(".typePhoto")
 const lupa=document.querySelector(".src-btn")
const pokeClass1 =document.getElementById("body")

 const fetchPokemon = async (pokemon) => {

    const APIResponse =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponse.status===200){
        const data = await APIResponse.json();
        return data;
    }
   
    
   
}


let searchPokemon = 1
const renderPokemon = async  (pokemon) => {
    pokemonName.innerHTML = "Loading..."
    
    const data = await fetchPokemon(pokemon)
    
    if(data){
        pokemonName.innerHTML = data.name;
        pokemonName2.innerHTML =data.name;
        if (data.id<100 && data.id>=10){
            pokemonNumber.innerHTML= "#0"+data.id;
        } 
        else if(data.id<10){
            pokemonNumber.innerHTML= "#00"+data.id
        }
        else{
            pokemonNumber.innerHTML= "#"+data.id
        }
        
        pokeImg.src = data['sprites']['other']['official-artwork']['front_default'];
        pokeStat1.innerHTML  = data['stats']['0']['stat']['name'],data['stats']['0']['base_stat'];
        pokeStat1.innerHTML = data['moves']['0']['move']['name'];
        pokeStat2.innerHTML = data['moves']['1']['move']['name'];
        pokeStat3.innerHTML = data['moves']['2']['move']['name'];
        pokeStat4.innerHTML = data['moves']['3']['move']['name'];
        input.value='';
        searchPokemon=data.id
        const class1 = data['types']['0']['type']['name'];
        const className = document.getElementById("body").className
        pokeClass1.classList.remove(className)
        pokeClass1.classList.add(class1)
        console.log(class1)

        if (class1=='fire'){
            pokeType.src=(src="../img/fire.svg")
        }
        else if(class1=='grass'){
            pokeType.src=(src="../img/grass.svg")
        }
        else if(class1=='bug'){
            pokeType.src=(src="../img/bug.svg")
        }
        else if(class1=='dark'){
            pokeType.src=(src="../img/dark.svg")
        }
        else if(class1=='dragon'){
            pokeType.src=(src="../img/grass.svg")
        }
        else if(class1=='electric'){
            pokeType.src=(src="../img/eletric.svg")
        }
        else if(class1=='fairy'){
            pokeType.src=(src="../img/fairy.svg")
        }
        else if(class1=='fighting'){
            pokeType.src=(src="../img/fighting.svg")
        }
        else if(class1=='flying'){
            pokeType.src=(src="../img/flying.svg")
        }
        else if(class1=='ghost'){
            pokeType.src=(src="../img/ghost.svg")
        }
        else if(class1=='ground'){
            pokeType.src=(src="../img/ground.svg")
        }
        else if(class1=='ice'){
            pokeType.src=(src="../img/ice.svg")
        }
        else if(class1=='normal'){
            pokeType.src=(src="../img/normal.svg")
        }
        else if(class1=='poison'){
            pokeType.src=(src="../img/poison.svg")
        }
        else if(class1=='psychic'){
            pokeType.src=(src="../img/psychc.svg")
        }
        else if(class1=='rock'){
            pokeType.src=(src="../img/rock.svg")
        }
        else if(class1=='steel'){
            pokeType.src=(src="../img/steel.svg")
        }
        else if(class1=='water'){
            pokeType.src=(src="../img/water.svg")
        }
        
            
        
    }
    else{
        pokeStat1.innerHTML = 'No moves here';
        pokeStat2.innerHTML = 'No moves here';
        pokeStat3.innerHTML = 'No moves here';
        pokeStat4.innerHTML = 'No moves here';
        
        pokemonName2.innerHTML ='Try again with another number or name :)    ';
        pokemonName.innerHTML='Not found :('
        pokemonNumber.innerHTML="#000";
        pokeImg.src = (src='img/Cubone-Pokemon-No-Background-Clip-Art.png')
        
        const className = document.getElementById("body").className
        pokeClass1.classList.remove(className)
        const class2 = "noth"
        pokeClass1.classList.add(class2)
      
    
        if (class2=='noth'){
            pokeType.src=(src="img/NOT.svg")
            console.log("passou")
        }

        
        
    }

    
}





form.addEventListener('submit',(event) =>{
    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase());
    
})

lupa.addEventListener('click', (event) =>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

btnPrev.addEventListener('click',() =>{
    if (searchPokemon>1){
        searchPokemon-=1
        renderPokemon(searchPokemon)
    }
    
    
})
btnNext.addEventListener('click',() =>{
    if(searchPokemon<=905){
    searchPokemon+=1
    renderPokemon(searchPokemon)
    }
    else if(searchPokemon>=906){
        let searchPokemon = 1
        renderPokemon(searchPokemon)
    }
    
    
})

renderPokemon(searchPokemon);



