const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Uso de Compute',
        mensaje: 'Hola !!!',
        contador: 0,
        //-- Mis Notas de lo que se aplica --
        aplica: [
            {tip: 'interpolacion {{titulo}} // de JS a HTML'},
            {tip: 'computed: // Computed en JS'},            
        ]
    },
    computed:{
        // La ventaja de los COMPUTED es que se queda almacenada en el cache.
        invertido(){
            // Siempre lleva el RETURN porque regresa algo
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            // Para este ejercicio RETORNAMOS un OBJETO
            return{
                'bg-success' : this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20
            }
        }
    }
})