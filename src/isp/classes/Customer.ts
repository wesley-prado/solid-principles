import {
	ICustomer,
	IPhysicalPersonCustomer,
	ILegalPersonCustomer,
	IndustryEnum,
} from './interfaces/ICustomer';

export class PhysicalPersonCustomer
	implements ICustomer, IPhysicalPersonCustomer
{
	id: string;
	firstName: string;
	lastName: string;
	cpf: string;

	constructor(firstName: string, lastName: string, cpf: string) {
		this.id = (Math.random() * Date.now()).toString(); // This is just to simulate a random ID
		this.firstName = firstName;
		this.lastName = lastName;
		this.cpf = cpf;
	}

	getName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	getIDN(): string {
		return this.cpf;
	}
}

export class LegalPersonCustomer implements ICustomer, ILegalPersonCustomer {
	id: string;
	fantasyName: string;
	cnpj: string;
	industry: IndustryEnum;

	constructor(fantasyName: string, cnpj: string, industry: IndustryEnum) {
		this.id = (Math.random() * Date.now()).toString(); // This is just to simulate a random ID
		this.fantasyName = fantasyName;
		this.cnpj = cnpj;
		this.industry = industry;
	}

	getName(): string {
		return this.fantasyName;
	}

	getIDN(): string {
		return this.cnpj;
	}
}
