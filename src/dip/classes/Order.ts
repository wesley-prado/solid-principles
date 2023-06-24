import { ICustomer } from './interfaces/ICustomer';
import IShoppingCart from './interfaces/IShoppingCart';
import { IObjectRepository } from './interfaces';

enum OrderStatus {
	OPEN = 'open',
	CLOSED = 'closed',
}

export default class Order {
	private _orderStatus: OrderStatus = OrderStatus.OPEN;
	private readonly _shoppingCart: IShoppingCart;
	private readonly _repository: IObjectRepository<Order>;
	private readonly _customer: ICustomer;

	constructor(
		cart: IShoppingCart,
		repository: IObjectRepository<Order>,
		customer: ICustomer
	) {
		this._shoppingCart = cart;
		this._repository = repository;
		this._customer = customer;
	}

	checkout(): void {
		this.closeOrder();
		this.saveOrder();
	}

	total(): number {
		return this._shoppingCart.total();
	}

	totalWithDiscount(): number {
		return this._shoppingCart.totalWithDiscount();
	}

	private closeOrder(): void {
		this._orderStatus = OrderStatus.CLOSED;
	}

	private saveOrder(): void {
		this._repository.save(this);
	}

	get status(): Readonly<OrderStatus> {
		return this._orderStatus;
	}

	get cart(): IShoppingCart {
		return this._shoppingCart;
	}

	get customerName(): string {
		return this._customer.getName();
	}

	get customerIDN(): string {
		return this._customer.getIDN();
	}
}
