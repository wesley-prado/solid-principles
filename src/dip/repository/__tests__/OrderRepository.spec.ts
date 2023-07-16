import OrderRepository from '../OrderRepository';
import { OrderMock } from '../../classes/__mocks__/Order.mock';

type SutTypes = {
	sut: OrderRepository;
};

const sutFactory = (): SutTypes => {
	return {
		sut: new OrderRepository(),
	};
};

describe('OrderRepository', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should save an order', () => {
		const expectedMessage = 'Record saved with success!';
		const order = OrderMock;
		const consoleSpy = jest.spyOn(console, 'log');

		const { sut } = sutFactory();

		sut.save(order);

		const expectedConsoleBehavior = expect(consoleSpy);
		expectedConsoleBehavior.toHaveBeenNthCalledWith(1, expectedMessage);
		expectedConsoleBehavior.toHaveBeenNthCalledWith(2, { record: order });
	});
});
