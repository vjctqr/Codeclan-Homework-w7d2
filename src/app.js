import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            currencies: [],
            selectedCurrency: null,
            base: "EUR"
        },
        computed:{
            eurRates: function() {
                return this.currencies.reduce((eurRates, currency) =>
                eurRates + currency.rates, 0)
            }
        },
        mounted(){
            this.fetchCurrencies();
        },
        methods: {
            fetchCurrencies: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(data => this.currencies = data)
            }
        }


    })
})