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
	{ id: '1', name: 'Coffee', price: 14.99 },
	{ id: '2', name: 'Rice', price: 26.25 },
	{ id: '3', name: 'Beans', price: 6.4 },
	{ id: '4', name: 'Pasta', price: 3.8 },
	{ id: '5', name: 'Meat', price: 35.4 },
	{ id: '6', name: 'Beer', price: 3.4 },
	{ id: '7', name: 'Bread', price: 2.85 },
	{ id: '8', name: 'Milk', price: 4.69 },
	{ id: '9', name: 'Sugar', price: 14.25 },
	{ id: '10', name: 'Salt', price: 1.4 },
	{ id: '11', name: 'Oil', price: 6.4 },
];

products.forEach((product) => {
	cart.addItem(new Product(product.id, product.name, product.price));
});

console.log(order.total());
console.log(order.totalWithDiscount());
console.log(order.customerName);
console.log(order.customerIDN);
console.log(order.checkout());
