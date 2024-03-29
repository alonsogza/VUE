function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

if (isMobile()){
    alert('Visto desde un Mobil');
    document.querySelector('#cantidadFruta').type = 'number';
}else{
    alert('NO Visto desde un Mobil');
    document.querySelector('#cantidadFruta').type = 'text';
}        



const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue, aprendiendo este Framework :)',
        texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        // 1) ejemplo de arreglo
        // frutas: ['Manzana', 'Pera', 'Platano']

        // 2) ejemplo de arreglo que contiene objetos
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Platano', cantidad: 11}            
        ],
        nuevaFruta:'',
        cantidadFruta: 0, //La utilizo para agregar una fruta con una cantidad
        total: 0, //Se usa en el computed
        //-- Mis Notas de lo que se aplica --
        aplica: [
            {tip: 'usando arreglos y objetos JSON en las listas'},
            {tip: 'v-on:click / @click'},
            {tip: 'v-model'},
            {tip: 'v-model.number'},
            {tip: '@keyup.enter'},
            {tip: 'v-for'},
            {tip: 'v-if'},
            {tip: 'methods'},
            {tip: 'computed'},
            {tip: 'v-cloak'}, // Lo uso para eliminar {{}} cuando la pagina esta cargando
        ],
        miarreglo: ['batman', 'superman', 'x-men', 'four fantastic', 'spiderman']
    },
    methods:{
        agregarFruta (){
            // console.log(`Diste Click`);
            //  SIEMPRE usar THIS para acceder al DATA
            this.frutas.push({
                nombre: this.nuevaFruta,
                // cantidad: 0
                cantidad: this.cantidadFruta
            }),
            // alert(`vas bien campeon, agregaste ${this.nuevaFruta}`),
            this.nuevaFruta = "", //Con esta linea limpiamos el Input despues de dar agregar 
            this.cantidadFruta = 0 //Con esta linea limpiamos el Input despues de dar agregar 

        },
        otroMetodo (){
            console.log(`Metodo Vacio, ahorita esta de ocio`);
            alert(`Click en el boton`);
        }
    },
    // 6) este ejemplo es para agregar una funcion para sumarFrutas pero es usando COMPUTED
    // computed: Una vez que se modifica una propiedad de la cual esta en el COMPUTED, esta de forma automatica 
    // nos realiza la suma, ya que reconoce que una de las propiedades de la fruta se ha modificado.
    computed:{
        sumarFurtas(){
            this.total = 0;
            for(fruta of this.frutas){
                // un recorrido normal del arrego ( frutas )
                this.total += parseInt(fruta.cantidad);
            }
            return this.total; //Se regresa la sumatoria
        }
    }
})

// En la consola del browser podemos acceder a los elementos escribiendo IDdelDIV.Propiedad ejemplo
// app.titulo y podemos cambiar su contenido y lo veremos reflejado en el browser
// ejemplo: app.titulo = 'Mi nuevo titulo'
