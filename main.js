const app = Vue.createApp({
    data: function() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeById(id) {
            // find the index of the id in the cart
            const index = this.cart.indexOf(id)

            // if the id is found, remove it from the cart
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        }

    }
});