//Para crear un COMPONENTE es: Vue.componet('')
// El primer parametro es la ETIQUETA que asignamos, en este caso <saludo>
Vue.component('padre', {
            template: /*html*/`
        <div class='p-5 bg-dark text-white'>
            <h2>Componente Padre: {{numeroPadre}} </h2>
            <button class='btn btn-danger' @click='numeroPadre++'>+</button>
            <!-- <hijo numero="5"></hijo> -->
            {{nombrePadre}}
            <!-- <hijo :numero="numeroPadre"></hijo> -->
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo> <!-- recibimos el valor del hijo en @nombreHijo -->
        </div>
        `,
            data() {
                return {
                    numeroPadre: 0,
                    nombrePadre: '' //Se crea esta variable para recibir el nombre del hijo
                }
            }
    
})
// aqui estamos asignando un nuevo componente <hijo></hijo>
// archivo 07Hijo.js

// los PROPS nos permite tener comunicacion entre los componentes
// <hijo numero="5"></hijo> aqui estamos enviando el 5 al componente HIJO
// *** numero="5"
// En el hijo se crea el props y se agrega un arrego
// Este codigo se encuentra en el 07Hijo.js
// props: ['numero']

/* 

IMPORTANTE 02: dentro del template se puede ver el codgio HTML de color se requiere instalar
la extension --> es6-string-html

*/
