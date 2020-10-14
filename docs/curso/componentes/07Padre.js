//Para crear un COMPONENTE es: Vue.componet('')
// El primer parametro es la ETIQUETA que asignamos, en este caso <saludo>
Vue.component('padre', {
            template: `
        <div class='p-5 bg-dark text-white'>
            <h2>Componente Padre: {{numeroPadre}} </h2>
            <button class='btn btn-danger' @click='numeroPadre++'>+</button>
            <!-- <hijo numero="5"></hijo> -->
            <hijo :numero="numeroPadre"></hijo>
        </div>
        `,
            data() {
                return {
                    numeroPadre: 0
                }
            }
    
})
// aqui estamos asignando un nuevo componente <hijo></hijo>
// archivo 07Hijo.js

// los PROPS nos permite tener comunicacion entre los componentes
// <hijo numero="5"></hijo> aqui estamos enviando el 5 al componente HIJO
// *** numero="5"
// En el hijo se crea el props y se agrega un arrego
// Este codigo se encuentra en el 07Hijo.js
// props: ['numero']