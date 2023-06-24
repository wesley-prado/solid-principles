import Order from '../classes/Order';
import { IObjectRepository } from '../classes/interfaces';

export default class OrderRepository implements IObjectRepository<Order> {
	save<Order>(record: Order): void {
		console.log(`Record saved with success!`);
		console.log({ record });
	}
}
