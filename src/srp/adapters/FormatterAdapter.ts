import { IFormatter } from '../entities/interfaces';

export default class Formatter implements IFormatter {
	toBRL(argument: number): string {
		return Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(argument);
	}
}
