import ShoppingCart from './ShoppingCart';
import { ICustomer } from './interfaces/ICustomer';
import OrderRepository from '../repository/OrderRepository';

enum CartStatus {
	OPEN = 'open',
	CLOSED = 'closed',
}

export default class Order {
	private _cartStatus: CartStatus = CartStatus.OPEN;
	private readonly _shoppingCart: ShoppingCart;
	private readonly _repository: OrderRepository;
	private readonly _customer: ICustomer;

	constructor(
		cart: ShoppingCart,
		repository: OrderRepository,
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
		this._cartStatus = CartStatus.CLOSED;
	}

	private saveOrder(): void {
		this._repository.save(this);
	}

	get status(): Readonly<CartStatus> {
		return this._cartStatus;
	}

	get cart(): ShoppingCart {
		return this._shoppingCart;
	}

	get customerName(): string {
		return this._customer.getName();
	}

	get customerIDN(): string {
		return this._customer.getIDN();
	}
}
