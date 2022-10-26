import User from '@domain/entities/User'

interface IUserService {
	createUser(user: User): Promise<User>
	updateUser(uid: number, user: User): Promise<User>
	getUser(uid: number): Promise<User | null | undefined>
}

export default IUserService
