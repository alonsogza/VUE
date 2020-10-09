const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Aprendiendo VUE // CLASS ',        
        //-- Creamos el fondo
        fondo: 'bg-warning',
        color: false,
        ayuda: 'Pudes escribir una clase de bootstrap de background (bg-xxxxx) para cambiar el color',
        //-- Mis Notas de lo que se aplica --
        /* 
        v-bind Abreviado
            <!-- full syntax -->
            <a v-bind:href="url"> ... </a>

            <!-- abreviado -->
            <a :href="url"> ... </a>
        
        v-on Abreviado
            <!-- full syntax -->
            <a v-on:click="doSomething"> ... </a>

            <!-- abreviado -->
            <a @click="doSomething"> ... </a>          
         */
        aplica: [
            {tip: ':class'},
            {tip: ':title'},            
        ]


    },
    methods:{

    }
})