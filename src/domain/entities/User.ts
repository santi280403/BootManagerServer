export interface IUser {
	id: number
	name: string
	email: string
	password: string
	createdAt: Date
	updatedAt: Date
}

export default class User implements IUser {
	constructor(
		public id: number,
		public name: string = '',
		public email: string = '',
		public password: string = '',
		public createdAt: Date = new Date(),
		public updatedAt: Date = new Date()
	) {}
}
