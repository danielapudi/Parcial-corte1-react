import RickAndMortyService from './service';


// acá deberás crear una instancia del servicio RickAndMortyService
const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

// valor (1 punto)

async function createCharacterList() {
    const listaPersonajes = document.querySelector('.character-list');
    // llamar primero createCharacterCard(character);
    // llamar segundo addCharacterListeners(character);
    try {
        const personajes = await service.getAllCharacters();

        personajes.forEach(personaje => {
            const card = createCharacterCard(personaje);
            listaPersonajes.appendChild(card);
        });
    } catch (error) {
        console.error("Error cargando personajes: ", error);
    }
}


// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje

// valor (1 punto) HTML

function createCharacterCard(personaje) {
    const card = document.createElement('div');
    card.classList.add('character-card');
    card.innerHTML = `
        
        <div class="personaje">
            <div class="img">
            <img src="${personaje.image}"></div>
            <div class="informacion">
            <h2>${personaje.name}</h2>
            <p> ${personaje.status === 'Alive' ? '<span class="alive"></span> Alive' : personaje.status === 'Dead' ? '<span class="dead"></span> Dead' : '<span class="unknown"></span> Unknown'}
             - ${personaje.species} </p>
            <p1> Last known location:</p1> <p>${personaje.location}</p>         
            <p1>First seen in: </p1> <p>${personaje.firstSeen}</p>   
    </div>
    </div>`
    addCharacterListeners(card, personaje.name)
    return card;
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click
// cuando se seleccione un personaje debe decir hola soy 'nombre personaje', recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners(card, nombrePersonaje) {
    function personajeDice() {
        alert(`Holaa yo soy ${nombrePersonaje} :)`);
    }
    card.addEventListener('click', personajeDice);
}


// por último se llama la función y se renderiza la vista

createCharacterList();

