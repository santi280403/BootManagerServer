import IAuthService from '@domain/services/Authentication'
import UserRepo from '@domain/repositories/UserRepo'
import User from '@domain/entities/User'
import { IEncryptManager } from '@application/security/password'

export default class AuthService implements IAuthService {
	constructor(
		private userRepository: UserRepo,
		private encryptManager: IEncryptManager
	) {}

	async login(email: string, password: string): Promise<number | null> {
		const user = await this.userRepository.getUserByEmail(email)
		if (!user) {
			return null
		}

		const matchPassword = await this.encryptManager.compare(
			password,
			user.password
		)
		if (!matchPassword) return null

		return user.id
	}

	async register(user: User): Promise<User> {
		return this.userRepository.createUser(user)
	}
}
