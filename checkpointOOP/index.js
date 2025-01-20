import { Product } from './Product.js';
import { ShoppingCartItem } from './ShoppingCartItem.js';
import { ShoppingCart } from './shoppingCart.js';


const product1 = new Product(1, 'Apple', 1.99, 'apple.jpg');
const product2 = new Product(2, 'Banana', 0.99, 'banana.jpg');

const cart = new ShoppingCart();
cart.addItem(new ShoppingCartItem(product1, 2));
cart.addItem(new ShoppingCartItem(product2, 3));

cart.displayCart();