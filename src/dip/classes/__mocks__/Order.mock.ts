import { IOrder, OrderStatus } from '../interfaces/';
import { mockShoppingCart } from './ShoppingCart.mock';

export const OrderMock: IOrder = {
	customerName: 'John Doe',
	customerIDN: '123456789',
	checkout: jest.fn(),
	total: jest.fn().mockReturnValue(100.0),
	totalWithDiscount: jest.fn().mockReturnValue(90.0),
	status: OrderStatus.CLOSED,
	cart: mockShoppingCart,
};
