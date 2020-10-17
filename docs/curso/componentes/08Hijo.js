//Para crear un COMPONENTE es: Vue.componet('')
// El primer parametro es la ETIQUETA que asignamos, en este caso <saludo>
Vue.component('hijo',{
    template: /*html*/`
    <div class='py-5 bg-success'>
        <h4>Componente Hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Akroma'
        }
    },
    // Cuando termine de Ejecutar el DOM requerimos ejecutar un evento: mounted()
    mounted(){
        // Cuando ya tiene el DOM cargado 
        this.$emit('nombreHijo', this.nombre);
    }


})
// IMPORTANTE en el props: tiene el nombre ('numero') que le mande el padre.
// En el hijo recibe el "5" que crea el props y se agrega un arreglo
// props: ['numero']
// para insertarlo es solo con doble llaves, como se hace normalmente lo demas {{}}
// <h5>{{numero}}</h5>

// IMPORTANTE en la data: es para retornan una funcion u objeto
// para este caso es de HIJO al PADRE

/* 

IMPORTANTE 02: dentro del template se puede ver el codgio HTML de color se requiere instalar
la extension --> es6-string-html

*/
