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
        cantidadFruta: 0
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
    }
})

// En la consola del browser podemos acceder a los elementos escribiendo IDdelDIV.Propiedad ejemplo
// app.titulo y podemos cambiar su contenido y lo veremos reflejado en el browser
// ejemplo: app.titulo = 'Mi nuevo titulo'