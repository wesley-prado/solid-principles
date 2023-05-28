import Order from './ocp/classes/Order';
import Product from './ocp/classes/Product';
import ShoppingCart from './ocp/classes/ShoppingCart';
import Formatter from './ocp/adapters/FormatterAdapter';
import { TenPercentDiscount } from './ocp/classes/Discount';

const cart = new ShoppingCart(new Formatter(), new TenPercentDiscount());
const order = new Order(cart);

cart.addItem(new Product('1', 'Café', 14.99));
cart.addItem(new Product('2', 'Arroz', 26.25));
cart.addItem(new Product('3', 'Feijão', 6.4));
cart.addItem(new Product('4', 'Macarrão', 3.8));
cart.addItem(new Product('5', 'Carne', 35.4));
cart.addItem(new Product('6', 'Cerveja', 3.4));
cart.addItem(new Product('7', 'Pão', 2.85));
cart.addItem(new Product('8', 'Leite', 4.69));
cart.addItem(new Product('9', 'Açucar', 14.25));
cart.addItem(new Product('10', 'Sal', 1.4));
cart.addItem(new Product('11', 'Óleo', 6.4));

console.log(order.total());
console.log(order.totalWithDiscount());
cart.removeItem('6');

console.log(order.total());
console.log(order.cart.items)
