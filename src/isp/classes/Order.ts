import IShoppingCart from '../../dip/classes/interfaces/IShoppingCart';
import { ICustomer } from './interfaces/ICustomer';

enum CartStatus {
	OPEN = 'open',
	CLOSED = 'closed',
}

export default class Order {
	private _cartStatus: CartStatus = CartStatus.OPEN;
	private readonly _shoppingCart: IShoppingCart;
	private readonly _customer: ICustomer;

	constructor(cart: IShoppingCart, customer: ICustomer) {
		this._shoppingCart = cart;
		this._customer = customer;
	}

	checkout(): void {
		this.closeOrder();
	}

	total(): number {
		return this._shoppingCart.total();
	}

	totalWithDiscount(): number {
		return this._shoppingCart.totalWithDiscount();
	}

	private closeOrder() {
		this._cartStatus = CartStatus.CLOSED;
	}

	get status(): Readonly<CartStatus> {
		return this._cartStatus;
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
