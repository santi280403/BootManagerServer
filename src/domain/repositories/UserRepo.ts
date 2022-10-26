import User from '@domain/entities/User'

export default abstract class UserRepo {
	abstract createUser(user: User): Promise<User>
	abstract updateUser(uid: number, user: User): Promise<User>
	abstract getUser(uid: number): Promise<User | null | undefined>
	abstract getUserByEmail(email: string): Promise<User | null | undefined>
}
