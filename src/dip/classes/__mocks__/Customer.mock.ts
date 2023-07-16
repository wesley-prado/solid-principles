import {
	ILegalPersonCustomer,
	IPhysicalPersonCustomer,
	IndustryEnum,
} from '../interfaces/ICustomer';

export const LegalPersonCustomerMock: ILegalPersonCustomer = {
	id: '1',
	getIDN: jest.fn(),
	getName: jest.fn(),
	cnpj: '00.000.000/0000-00',
	fantasyName: 'Acme Corporation',
	industry: IndustryEnum.IT,
};

export const PhysicalPersonCustomerMock: IPhysicalPersonCustomer = {
	id: '2',
	getIDN: jest.fn(),
	getName: jest.fn(),
	cpf: '000.000.000-00',
	firstName: 'John',
	lastName: 'Doe',
};
