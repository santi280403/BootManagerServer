import bcrypt from 'bcryptjs'
import { IEncryptManager } from '@application/security/password'

export default class EncryptManager implements IEncryptManager {
	async encrypt(string: string, salt?: number | undefined): Promise<string> {
		const gentSalt = await bcrypt.genSalt(salt ?? 10)
		return await bcrypt.hash(string, gentSalt)
	}

	async compare(string: string, hash: string): Promise<boolean> {
		return await bcrypt.compare(string, hash)
	}
}
