export interface ICustomer {
	id: string;

	getName(): string;
	getIDN(): string;
}

export type IPhysicalPersonCustomer = {
	firstName: string;
	lastName: string;
	cpf: string;
} & ICustomer;

export enum IndustryEnum {
	IT = 'IT',
	Finance = 'Finance',
	Health = 'Health',
	Food = 'Food',
	Education = 'Education',
	Other = 'Other',
}
export type ILegalPersonCustomer = {
	fantasyName: string;
	cnpj: string;
	industry: IndustryEnum;
} & ICustomer;
