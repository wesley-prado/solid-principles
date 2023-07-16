import { IObjectRepository, IOrder } from '../interfaces/';

export const OrderRepositoryMock: IObjectRepository<IOrder> = {
	save: jest.fn(),
};
