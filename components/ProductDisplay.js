app.component('product-display', {
    props:  {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        `
            <div class="container">
                <h1>Product</h1>
                <div class="product">
                    <div class="img-product-container">
                        <img class="img-product" :src="image" alt="coffee machine">
                    </div>
                    <div>
                        <h2>{{ title }}</h2>
                        <p v-if="inStock > 10">In Stock</p>
                        <p v-else-if="inStock <= 10 && stock > 0">Almost sold out</p>
                        <p v-else>Out of stock</p>
                        <p>Stock: {{ inStock }}</p>

                        <p>Shipping: {{ shipping }}</p>

                        <ul>
                            <li v-for="detail in details">{{ detail }}</li>
                        </ul>

                        <div
                            class="variants-circle"
                            :style="{ backgroundColor: variant.color }"
                            v-for="(variant,index) in variants"
                            :key="variant.id"
                            @mouseover="updateVariant(index)">
                            {{}}
                        </div>

                        <div class="btn-container">
                            <button
                                class="btn-add-to-cart"
                                :class="{ disabledButton: !inStock }"
                                :disabled="!inStock"
                                @click="addToCart">
                                Add to Cart
                            </button>

                            <button
                                class="btn-remove-from-cart"
                                :class="{ disabledButton: !inStock }"
                                :disabled="!inStock"
                                @click="removeFromCart">
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,
    data: function() {
        return {
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
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
});