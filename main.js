const app = Vue.createApp({
    data: function() {
        return {
            cart: 0,
            product: 'Coffee Machine',
            brand:'V-comerce',
            selectedVariant: 0,
            details: ['with grinder', 'espresso maker', 'steam milk'],
            variants: [
                { id: 1123, color: 'black', image: './assets/coffee-machine-black.jpg', quantity: 30 },
                { id: 1124, color: 'white', image: './assets/coffee-machine-white.jpg', quantity: 0 }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
});