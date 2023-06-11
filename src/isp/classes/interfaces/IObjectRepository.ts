export interface IObjectRepository {
	save<T>(record: T): void;
}
