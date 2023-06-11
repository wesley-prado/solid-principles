import IFormatter from '../interfaces/IFormatter';

type CartItem = { id: string; name: string; price: number };
enum CartStatus {
	OPEN = 'open',
	CLOSED = 'closed',
}

export default class ShoppingCartLegacy {
	private readonly _itens: CartItem[] = [];
	private _cartStatus: CartStatus = CartStatus.OPEN;

	private readonly formatter: IFormatter;

	constructor(formatter: IFormatter) {
		this.formatter = formatter;
	}

	addItem(item: CartItem): void {
		if (this._cartStatus === CartStatus.OPEN) {
			this._itens.push(item);
		} else throw new Error('Só é permitido inserir itens em um carrinho com status OPEN.');
	}

	removeItem(id: string): CartItem | null {
		let removedItem: CartItem | null = null;
		let index: number = -1;

		for (let i = 0; i < this._itens.length; i++) {
			if (this._itens[i].id === id) {
				removedItem = this._itens[i];
				index = i;
				break;
			}
		}

		if (index !== -1) this._itens.splice(index, 1);

		return removedItem;
	}

	total(): string {
		const total = this._itens.reduce((total, item) => (total += item.price), 0);

		return this.formatter.toBRL(total);
	}

	checkout(): void {
		this.clear();
		this.closeCart();
	}

	private closeCart() {
		this._cartStatus = CartStatus.CLOSED;
	}

	clear(): void {
		this._itens.length = 0;
	}

	get items(): Readonly<CartItem[]> {
		return this._itens;
	}

	get status(): Readonly<CartStatus> {
		return this._cartStatus;
	}
}
