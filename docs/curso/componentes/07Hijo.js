//Para crear un COMPONENTE es: Vue.componet('')
// El primer parametro es la ETIQUETA que asignamos, en este caso <saludo>
Vue.component('hijo',{
    template: 
    `
    <div class='py-5 bg-success'>
        <h4>Componente Hijo: {{numero}}</h4>
        <!-- <h5>{{numero}}</h5> -->
    </div>
    `,
    props: ['numero']
})
// IMPORTANTE en el props: tiene el nombre ('numero') que le mande el padre.
// En el hijo recibe el "5" que crea el props y se agrega un arreglo
// props: ['numero']
// para insertarlo es solo con doble llaves, como se hace normalmente lo demas {{}}
// <h5>{{numero}}</h5>