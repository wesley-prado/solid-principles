import { IOrder } from '../classes/interfaces/IOrder';
import { IObjectRepository } from '../classes/interfaces';

export default class OrderRepository implements IObjectRepository<IOrder> {
	save(record: IOrder): void {
		console.log(`Record saved with success!`);
		console.log({ record });
	}
}
