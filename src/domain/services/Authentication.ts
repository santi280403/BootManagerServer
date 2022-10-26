import User from '@domain/entities/User'

interface IAuthService {
	login(email: string, password: string): Promise<null | number>
	register(user: User): Promise<User>
}

export default IAuthService
