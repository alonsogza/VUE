// Link de VUEX: https://vuex.vuejs.org/#what-is-a-state-management-pattern

// Creamos el COMPONENTE Padre
// Se puede crear un nuevo componente, en este caso es HIJO
Vue.component('titulo',{
    template: /*html*/
        `
        <div>
            <h1 class='text-primary font-weight-light'>numero {{$store.state.numero}}</h1>
            <p class="text-muted">
                Companente Hijo (boton)
            </p>            
            <hijo></hijo>
        </div>        
        `
})

// Creamos el COMPONENTE HIJO
Vue.component('hijo', {
    template: /*html */
        `
        <div>
            <button type="button" class="btn btn-secondary" @click="$store.commit('aumentar')">+</button>
            <!-- Comprobacion que la informacion de NUMERO puede ser leida con el hijo -->
            <h1 class='text-secondary font-weight-light'>numero {{$store.state.numero}}</h1>            
        </div>        
        `
})

// Esta constante la ocupa VUEX para empezar a realizar la comunicacion entr componentes
const store = new Vuex.Store({
    state: {
        numero: 10
    },
    mutations:{
        aumentar(state){
            state.numero ++

        }
    }
})


// Instancia Normal de VUE
const app = new Vue({
    el: "#app",
    store: store, // Es para que funcione VUEX
/* Para JS es lo mismo así:
    --> store: store
    y asi 
    --> store
*/        
    data: {
        titulo: 'Comunicacion entre Componentes ( VUEX )',
        mensaje: 'Componente',
        //-- Mis Notas de lo que se aplica --
        aplica: [
            {tip: 'interpolacion funcionan igual: v-text="titulo" ó {{titulo}}'},
            {tip: 'interpolacion {{titulo}} // de JS a HTML'},
            {tip: 'interpolacion v-text="titulo" // de JS a HTML'},
            {tip: 'Componente: // Componente en JS'},            
            {tip: 'Templeate: // Componente en JS'},                        
            {tip: 'Vuex.Store, state, commit  : // Establecer Comunnicacion entre Componente en JS'},                        
        ]
    }        

})

/* 

IMPORTANTE 02: dentro del template se puede ver el codgio HTML de color se requiere instalar
la extension --> es6-string-html

*/
