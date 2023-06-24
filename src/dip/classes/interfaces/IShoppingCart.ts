import { ICartItem } from './ICartItem';

export default interface IShoppingCart {
	addItem(item: ICartItem): void;
	removeItem(id: string): ICartItem | null;
	total(): number;
	formattedTotal(total: number): string;
	totalWithDiscount(): number;
	clear(): void;
	isEmpty(): boolean;
	get items(): Readonly<ICartItem[]>;
}
