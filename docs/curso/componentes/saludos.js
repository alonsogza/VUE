//Para crear un COMPONENTE es: Vue.componet('')
// El primer parametro es la ETIQUETA que asignamos, en este caso <saludo>
Vue.component('saludo',{
    // template:`<h3>Saludo de Forma estático</h3>`,
    template:`
        <div>
            <h3>{{titulo}}</h3>
            <h4>Hola !!!</h4>
        </div>            
        `,
        // IMPORTANTE, los template deben estar envueltos de un contenedor (div), siempre y cuando uses más de una etiqueta HTML
    data(){
        return {
            titulo: 'Uso de Componente',
        }
    }
})