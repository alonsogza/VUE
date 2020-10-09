const app = new Vue({
    el: '#app',
    data:{
        titulo: 'GYM con VUE',
        tareas: [],
        nuevaTarea: '',
        //-- Mis Notas de lo que se aplica --
        aplica: [
            {tip: 'interpolacion {{titulo}} // de JS a HTML'},
            {tip: 'v-model="nuevaTarea" // de HTML a JS'},
            {tip: 'v-on:click="fn" / @click="fn" // click con mouse activa funcion "agregarTarea" '},
            {tip: 'v-on:keyup.enter="fn" / @keyup.enter="fn" ("agregarTarea") // enter desde teclado activa funcion "agregarTarea" '},
            {tip: ':class[ ]" // clases de VUE'},
            {tip: 'methods:" // Metodos en JS'},            
            {tip: 'created:" // Creacion en JS ( uso del LocalStorage )'},                        
        ]

    },
    methods:{
        agregarTarea: function(){
            // console.log(`Distinte clik ${this.nuevaTarea}`)
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = "";
            // localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
            this.actualizaStorage();
        },
        editarTarea: function(index = 0){
            // console.log( `Click en el Index: ${index}` );
            this.tareas[index].estado = true;
            // localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
            this.actualizaStorage();
        },
        eliminarTarea: function(index){
            this.tareas.splice(index ,1);
            // localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
            this.actualizaStorage();
        },
        actualizaStorage: function(){
            // console.log( `entra en funcion actualizaStorage` );
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }

    },
    created: function(){
        // Esta parte CARGA primero cuando lee nuestro archivo, en este caso "03.js" *** IMPORTANTE ***
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if( datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB
        }
        // console.log(datosDB);
    }

})