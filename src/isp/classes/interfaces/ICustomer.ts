export interface IFisicalPersonCustomer{
	firstName: string;
	lastName: string;
	cpf: string;
}

export enum IndustryEnum {
	'IT',
	'Finance',
	'Health',
	'Food',
	'Education',
	'Other'
}
export interface ILegalPersonCustomer{
	fantasyName: string;
	cnpj: string;
	industry: IndustryEnum;
}
