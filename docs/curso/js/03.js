const app = new Vue({
    el: '#app',
    data:{
        titulo: 'GYM con VUE',
        //-- Mis Notas de lo que se aplica --
        aplica: [
            {tip: 'interpolacion {{titulo}}'},
        ]

    }

})