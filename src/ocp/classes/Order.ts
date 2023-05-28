import ShoppingCart from './ShoppingCart';

enum CartStatus {
	OPEN = 'open',
	CLOSED = 'closed',
}

export default class Order {
	private _cartStatus: CartStatus = CartStatus.OPEN;
	private readonly _shoppingCart: ShoppingCart;

	constructor(cart: ShoppingCart) {
		this._shoppingCart = cart;
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

	get cart(): ShoppingCart {
		return this._shoppingCart;
	}
}
