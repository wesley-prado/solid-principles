import { IShoppingCart } from './';

export enum OrderStatus {
	OPEN = 'OPEN',
	CLOSED = 'CLOSED',
}

export interface IOrder {
	checkout(): void;
	total(): number;
	totalWithDiscount(): number;
	get status(): Readonly<OrderStatus>;
	get cart(): IShoppingCart;
	get customerName(): string;
	get customerIDN(): string;
}
