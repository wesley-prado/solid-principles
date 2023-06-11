//Design pattern : Strategy
export abstract class Discount {
	constructor(protected readonly discount: number = 0) {}

	calculate(price: number): number {
		return price - price * (this.discount / 100);
	}
}

export class FiftyPercentDiscount extends Discount {
	constructor() {
		super(50);
	}
}

export class TenPercentDiscount extends Discount {
	constructor() {
		super(10);
	}
}

export class NoDiscount extends Discount {}
