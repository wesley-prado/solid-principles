import {IFisicalPersonCustomer, ILegalPersonCustomer, IndustryEnum} from './interfaces/ICustomer';

export class FisicalPersonCustomer implements IFisicalPersonCustomer{
	firstName: string;
	lastName: string;
	cpf: string;

	constructor(firstName: string, lastName: string, cpf: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.cpf = cpf;
	}
}

export class LegalPersonCustomer implements ILegalPersonCustomer{
	fantasyName: string;
	cnpj: string;
	industry: IndustryEnum;

	constructor(fantasyName: string, cnpj: string, industry: IndustryEnum) {
		this.fantasyName = fantasyName;
		this.cnpj = cnpj;
		this.industry = industry;
	}
}
