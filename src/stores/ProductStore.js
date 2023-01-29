import { defineStore } from "pinia";
import { collection, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { useCollection } from "vuefire";
import { menProductsQuery, womenProductsQuery, electronicsProductsQuery, jewelryProductsQuery } from "../firebase.js";

export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            isLoading: true,
            loader: "spinners",
            color: "#2591D8",
            products: useCollection(collection(db, 'products')),
            newProductName: "",
            newProductDescription: "",
            newProductPrice: "",
            newProductImageURL: "",
            newProductCategory: "men",
            editProductId: "",
            editProductName: "",
            editProductDescription: "",
            editProductPrice: "",
            editProductImageURL: "",
            editProductCategory: "",
            activeProduct: "",
            quantity: 1,
            shoppingCart: (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []),
        }
    },
    getters: {
        getLoader() {
            return this.loader;
        },
        getProducts() {
            return this.products;
        },
        getMenProducts() {
            return this.products.filter((p) => {
                return p.category == "men"
            });
        },
        getWomenProducts() {
            return this.products.filter((p) => {
                return p.category == "women"
            });
        },
        getElectronicsProducts() {
            return this.products.filter((p) => {
                return p.category == "electronics"
            });
        },
        getJewelryProducts() {
            return this.products.filter((p) => {
                return p.category == "jewelry"
            });
        },
        getCart() {
            return this.shoppingCart;
        },
        getCartPrice() {
            let price = 0;
            for (let product of this.shoppingCart) {
                price += product.price * product.quantity
            }
            return price;
        }
    },
    actions: {
        addNewProduct() {
            const docRef = addDoc(collection(db, "products"), {
                name: this.newProductName,
                description: this.newProductDescription,
                price: this.newProductPrice,
                img_url: this.newProductImageURL,
                category: this.newProductCategory
            })
            this.newProductName = '';
            this.newProductDescription = '';
            this.newProductPrice = '';
            this.newProductImageURL = '';
            this.newProductCategory = 'men';

        },
        deleteProduct(product_id) {
            const docRef = doc(db, "products", product_id);
            deleteDoc(docRef);
        },
        setActiveProduct(product) {
            this.activeProduct = product;
        },
        addProductToCart() {
            if (this.shoppingCart.filter((p) => { return p.id == this.activeProduct.id }).length > 0) {
                this.shoppingCart.filter((p) => { return p.id == this.activeProduct.id })[0].quantity++;
                localStorage.setItem('cart', JSON.stringify(this.shoppingCart));
            } else {
                this.shoppingCart.push({
                    id: this.activeProduct.id,
                    name: this.activeProduct.name,
                    description: this.activeProduct.description,
                    price: this.activeProduct.price,
                    category: this.activeProduct.category,
                    img_url: this.activeProduct.img_url,
                    quantity: this.quantity
                })
                localStorage.setItem('cart', JSON.stringify(this.shoppingCart));
            }
            this.quantity = 1;
        },
        addUnitToProductCart(productId) {
            this.shoppingCart.filter((p) => { return p.id == productId })[0].quantity++;
            localStorage.setItem('cart', JSON.stringify(this.shoppingCart));
        },
        removeUnitToProductCart(productId) {
            if (this.shoppingCart.filter((p) => { return p.id == productId })[0].quantity > 1) {
                this.shoppingCart.filter((p) => { return p.id == productId })[0].quantity--;
                localStorage.setItem('cart', JSON.stringify(this.shoppingCart));
            }
        },
        removeProductFromCart(productId) {
            this.shoppingCart = this.shoppingCart.filter((p) => { return p.id != productId });
            localStorage.setItem('cart', JSON.stringify(this.shoppingCart));

        },
        setProductToEdit(product) {
            this.editProductId = product.id;
            this.editProductName = product.name;
            this.editProductDescription = product.description;
            this.editProductPrice = product.price;
            this.editProductImageURL = product.img_url;
            this.editProductCategory = product.category;
        },
        updateProduct() {
            const docRef = doc(db, 'products', this.editProductId);
            // Update the timestamp field with the value from the server
            updateDoc(docRef, {
                name: this.editProductName,
                description: this.editProductDescription,
                price: this.editProductPrice,
                img_url: this.editProductImageURL,
                category: this.editProductCategory
            });
        }
    }
})