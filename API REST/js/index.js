const contenedor = document.getElementById('contenedor');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
let pagina = 1;

const obtenerPersonajes = async() => {
    try {
        // funcion fetch trae una promesa y la esperamos con await
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${ pagina }`);
        const data = await respuesta.json();
        console.log(data);
        contenedor.innerHTML = '';
        data.results.forEach(personaje => {
            contenedor.innerHTML += `
                <div class="col-md-4 col-lg-3 text-center">
                    <div class="card h-100">
                        <img
                            alt="${ personaje.name }"
                            class="card-img-top"
                            src="${ personaje.image }"
                        >
                        <div class="card-body>
                            <h5>${ personaje.name }</h5>
                            <p class="card-text">
                                Estado: ${ personaje.status }
                            </p>
                            <p class="card-text">
                                Especie: ${ personaje.species }                            
                            </p>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch(error) {
        console.log(`Este es un error atrapado por el catch: ${ error }`);
        contenedor.innerHTML = `
            <span class="text-danger text-center">
                Ocurrió un error al cargar los personajes
            </span>
        `;
    }
};

btnSiguiente.addEventListener('click', () => {
    pagina++;
    obtenerPersonajes();
});

btnAnterior.addEventListener('click', () => {
    pagina--;
    obtenerPersonajes();
});

obtenerPersonajes();