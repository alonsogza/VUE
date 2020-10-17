const app = new Vue({
    el: "#app",
    data: {
        titulo: 'Comunicacion entre Componentes (De: Hijo a Padre)',
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

/* 

IMPORTANTE 02: dentro del template se puede ver el codgio HTML de color se requiere instalar
la extension --> es6-string-html

*/
