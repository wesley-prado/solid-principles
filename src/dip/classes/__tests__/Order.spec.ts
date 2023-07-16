import { mockShoppingCart } from '../__mocks__/ShoppingCart.mock';
import { OrderRepositoryMock } from '../__mocks__/OrderRepository.mock';
import { LegalPersonCustomerMock } from '../__mocks__/Customer.mock';
import { OrderStatus } from '../interfaces/IOrder';
import Order from '../Order';

type SutTypes = {
	sut: Order;
	shoppingCart: typeof mockShoppingCart;
	orderRepository: typeof OrderRepositoryMock;
	legalPersonCustomer: typeof LegalPersonCustomerMock;
};

const sutFactory = (): SutTypes => {
	const order = new Order(
		mockShoppingCart,
		OrderRepositoryMock,
		LegalPersonCustomerMock,
	);

	return {
		sut: order,
		shoppingCart: mockShoppingCart,
		orderRepository: OrderRepositoryMock,
		legalPersonCustomer: LegalPersonCustomerMock,
	};
};

describe('Order', () => {
	it('should return the total of the order', () => {
		const { sut, shoppingCart } = sutFactory();

		const total = sut.total();
		expect(total).toBe(shoppingCart.total());
	});

	it('should return the total with discount of the order', () => {
		const { sut, shoppingCart } = sutFactory();

		const totalWithDiscount = sut.totalWithDiscount();
		expect(totalWithDiscount).toBe(shoppingCart.totalWithDiscount());
	});

	it('should close and save the order', () => {
		const { sut, orderRepository } = sutFactory();
		const orderRepositorySpy = jest.spyOn(orderRepository, 'save');

		sut.checkout();

		expect(sut.status).toBe(OrderStatus.CLOSED);
		expect(orderRepositorySpy).toHaveBeenCalledTimes(1);
		expect(orderRepositorySpy).toHaveBeenCalledWith(sut);
	});

	it('should return the customer name', () => {
		const { sut, legalPersonCustomer } = sutFactory();

		const customerName = sut.customerName;
		expect(customerName).toBe(legalPersonCustomer.getName());
	});

	it('should return the customer IDN', () => {
		const { sut, legalPersonCustomer } = sutFactory();

		const customerIDN = sut.customerIDN;
		expect(customerIDN).toBe(legalPersonCustomer.getIDN());
	});

	it('should return the shopping cart', () => {
		const { sut, shoppingCart } = sutFactory();

		const cart = sut.cart;
		expect(cart).toBe(shoppingCart);
	});

	it('should return the order status', () => {
		const { sut } = sutFactory();

		const status = sut.status;
		expect(status).toBe(OrderStatus.OPEN);
	});
});
