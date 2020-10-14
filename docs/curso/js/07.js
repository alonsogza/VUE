const app = new Vue({
    el: "#app",
    data: {
        titulo: 'Comunicacion entre Componentes',
        mensaje: 'Componente',
        //-- Mis Notas de lo que se aplica --
        aplica: [
            {tip: 'interpolacion funcionan igual: v-text="titulo" ó {{titulo}}'},
            {tip: 'interpolacion {{titulo}} // de JS a HTML'},
            {tip: 'interpolacion v-text="titulo" // de JS a HTML'},
            {tip: 'Componente: // Componente en JS'},            
            {tip: 'Templeate: // Componente en JS'},                        
            {tip: 'Props: // Componente en JS'},                        
        ]
    }        

})