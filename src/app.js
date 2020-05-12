import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            currencies: []
        },
        mounted(){
            this.getCurrencies()
        },
        methods: {
            getCuurrencies: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(resolve => resolve.json())
                .then(currencies => this.currencies = currencies)
            }
        }


    })
})