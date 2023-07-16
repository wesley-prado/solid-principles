import { IShoppingCart } from '../interfaces/';

export const mockShoppingCart: IShoppingCart = {
	addItem: jest.fn(),
	removeItem: jest.fn(),
	total: jest.fn().mockReturnValue(100.0),
	formattedTotal: jest.fn().mockReturnValue('R$ 100,00'),
	totalWithDiscount: jest.fn().mockReturnValue(90.0),
	clear: jest.fn(),
	isEmpty: jest.fn().mockReturnValue(false),
	items: [],
};
