import IUserService from '@domain/services/User'
import UserRepo from '@domain/repositories/UserRepo'
import User from '@domain/entities/User'

export default class UserService implements IUserService {
	constructor(private userRepository: UserRepo) {}

	public async createUser(user: User): Promise<User> {
		return await this.userRepository.createUser(user)
	}

	public async updateUser(uid: number, user: User): Promise<User> {
		return await this.userRepository.updateUser(uid, user)
	}

	public async getUser(uid: number): Promise<User | null | undefined> {
		return this.userRepository.getUser(uid)
	}
}
