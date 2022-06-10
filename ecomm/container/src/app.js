import './styles.css';
import { Cart } from 'cart/CartIndex';
import { Products } from 'products/ProductsIndex';

new Cart(document.querySelector('.cart'));
new Products(document.querySelector('.products'));

console.log('Container!');
