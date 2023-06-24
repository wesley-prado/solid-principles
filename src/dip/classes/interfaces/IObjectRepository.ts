export interface IObjectRepository<T> {
	save(record: T): void;
}
