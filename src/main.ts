import Order from './dip/classes/Order';
import Product from './dip/classes/Product';
import ShoppingCart from './dip/classes/ShoppingCart';
import OrderRepository from './dip/repository/OrderRepository';
import Formatter from './dip/adapters/FormatterAdapter';
import { PhysicalPersonCustomer } from './dip/classes/Customer';
import { TenPercentDiscount } from './dip/classes/Discount';

const cart = new ShoppingCart(new Formatter(), new TenPercentDiscount());
const orderRepository = new OrderRepository();
const physicalPerson = new PhysicalPersonCustomer(
	'Wesley',
	'Prado',
	'123.456.789-00'
);

const order = new Order(cart, orderRepository, physicalPerson);

const products = [
	{ id: '1', name: 'Café', price: 14.99 },
	{ id: '2', name: 'Arroz', price: 26.25 },
	{ id: '3', name: 'Feijão', price: 6.4 },
	{ id: '4', name: 'Macarrão', price: 3.8 },
	{ id: '5', name: 'Carne', price: 35.4 },
	{ id: '6', name: 'Cerveja', price: 3.4 },
	{ id: '7', name: 'Pão', price: 2.85 },
	{ id: '8', name: 'Leite', price: 4.69 },
	{ id: '9', name: 'Açucar', price: 14.25 },
	{ id: '10', name: 'Sal', price: 1.4 },
	{ id: '11', name: 'Óleo', price: 6.4 },
];

products.forEach((product) => {
	cart.addItem(new Product(product.id, product.name, product.price));
});

console.log(order.total());
console.log(order.totalWithDiscount());
console.log(order.customerName);
console.log(order.customerIDN);
console.log(order.checkout());
