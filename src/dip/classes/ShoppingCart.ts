import { ICartItem, IFormatter } from './interfaces';
import IShoppingCart from './interfaces/IShoppingCart';
import IDiscount from '../../isp/classes/interfaces/IDiscount';

export default class ShoppingCart implements IShoppingCart {
	private readonly _itens: ICartItem[] = [];

	constructor(
		private readonly formatter: IFormatter,
		private readonly discount: IDiscount
	) {}

	addItem(item: ICartItem): void {
		this._itens.push(item);
	}

	removeItem(id: string): ICartItem | null {
		const index = this._itens.findIndex((item) => item.id === id);

		if (index === -1) {
			throw new Error('Item not found in cart');
		}

		const removedItem = this._itens[index];
		this._itens.splice(index, 1);

		return removedItem;
	}

	total(): number {
		const total: string = this._itens
			.reduce((total, item) => (total += item.price), 0)
			.toFixed(2);

		return Number(total);
	}

	formattedTotal(total: number): string {
		return this.formatter.toBRL(total);
	}

	totalWithDiscount(): number {
		const total: string = this.discount.calculate(this.total()).toFixed(2);
		return Number(total);
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
