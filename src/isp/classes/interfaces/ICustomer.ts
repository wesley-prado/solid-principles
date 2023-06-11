export interface ICustomer {
	id: string;

	getName(): string;
	getIDN(): string;
}

export interface IPhysicalPersonCustomer {
	firstName: string;
	lastName: string;
	cpf: string;
}

export enum IndustryEnum {
	IT = 'IT',
	Finance = 'Finance',
	Health = 'Health',
	Food = 'Food',
	Education = 'Education',
	Other = 'Other',
}
export interface ILegalPersonCustomer {
	fantasyName: string;
	cnpj: string;
	industry: IndustryEnum;
}
