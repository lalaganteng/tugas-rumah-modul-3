Vue.component('showform', {
    template: '#show-form' ,
    data(){
        return {
            data: {judul: '', penulis: '',penerbit: '', harga: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.judul = "";
            this.data.penulis = "";
            this.data.penerbit = "";
            this.data.harga = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data:{
        tokobuku: {
        }
    },
    methods: {
        getData: function (value) {    
            this.tokobuku = {
                judul : value.judul,
                penulis : value.penulis,
                penerbit : value.penerbit,
                harga : value.harga
                
            }
        }
    }
})