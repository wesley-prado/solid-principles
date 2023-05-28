import { ICartItem, IFormatter } from './interfaces';

export default class ShoppingCart {
	private readonly _itens: ICartItem[] = [];

	private readonly formatter: IFormatter;

	constructor(formatter: IFormatter) {
		this.formatter = formatter;
	}

	addItem(item: ICartItem): void {
		this._itens.push(item);
	}

	removeItem(id: string): ICartItem | null {
		let removedItem: ICartItem | null = null;
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

	clear(): void {
		this._itens.length = 0;
	}

	isEmpty() {
		return this._itens.length === 0;
	}

	get items(): Readonly<ICartItem[]> {
		return this._itens;
	}
}
