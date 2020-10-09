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
            {tip: '@click="agregarTarea" // click al mouse'},
            {tip: '@keyup.enter="agregarTarea" // enter desde teclado'},            
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
        }
    }

})