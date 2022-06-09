import './styles.css';
import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartIndex';

mountProducts(document.querySelector('.products'));
mountCart(document.querySelector('.cart'));

console.log('Container!');
