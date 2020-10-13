const app = new Vue({
    el: "#app",
    data:{
        titulo: 'Ciclo de Vida',
        mensaje: 'Abrir la CONSOLA para ver el ciclo de vida',
        //-- Mis Notas de lo que se aplica --
        aplica: [
            {tip: 'interpolacion {{titulo}} // de JS a HTML'},
            {tip: 'Ciclo de Vida de VUE // en JS, revisar en Console.Log'},
            {tip: '@click'},
        ]
    },
    // Es lo PRIMERO que se crea en el Ciclo de Vida antes de la instancia de VUE ( new Vue({}) )
    beforeCreate() {
        console.log('beforeCreate');
    },
    created(){
        // Al crear los metodos, observadores y eventos, pero aún no accede al DOM.
        // Aún no se puede acceder al 'el'
        console.log('created');
    },
    beforeMount(){
        // Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted(){
        // Se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate(){
        // Al detectar un cambio
        console.log('beforeUpdate');
    },
    updated(){
        // Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy(){
        // Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed(){
        // Se destruye toda la instancia :(
        console.log('destroyed');
    },
    methods:{
        destruir(){
            // Con esta accion destruimos (deja de funcionar) el boton "Cambiar Mensaje" 
            this.$destroy();
        }
    }

})