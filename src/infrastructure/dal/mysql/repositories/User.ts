import { PrismaClient } from '@prisma/client'

import UserRepo from '@domain/repositories/UserRepo'
import User from '@domain/entities/User'
import { IEncryptManager } from '@application/security/password'
import EncryptManager from '@infrastructure/security/password'

export default class UserRepository implements UserRepo {
	private prisma: PrismaClient
	private encryptManager: IEncryptManager

	constructor() {
		this.prisma = new PrismaClient()
		this.encryptManager = new EncryptManager()
	}

	async getUser(uid: number): Promise<User | null | undefined> {
		try {
			const user = await this.prisma.user.findUnique({
				where: {
					id: uid,
				},
			})

			return user
		} catch (error) {
			console.error('Error UserRepository.getUser', error)
			await this.prisma.$disconnect()
			throw new Error(
				error instanceof Error ? error.message : JSON.stringify(error)
			)
		}
	}

	async getUserByEmail(email: string): Promise<User | null | undefined> {
		try {
			const user = await this.prisma.user.findUnique({
				where: {
					email,
				},
			})

			return user
		} catch (error) {
			console.error('Error UserRepository.getUserByEmail', error)
			await this.prisma.$disconnect()
			throw new Error(
				error instanceof Error ? error.message : JSON.stringify(error)
			)
		}
	}

	async createUser(user: User): Promise<User> {
		try {
			const exists = await this.prisma.user.findUnique({
				where: {
					email: user.email,
				},
			})

			if (exists) throw new Error('User already exists.')

			return await this.prisma.user.create({
				data: {
					...user,
					password: await this.encryptManager.encrypt(user.password),
				},
			})
		} catch (error) {
			console.error('Error UserRepository.createUser', error)
			await this.prisma.$disconnect()
			throw new Error(
				error instanceof Error ? error.message : JSON.stringify(error)
			)
		}
	}

	async updateUser(uid: number, user: User): Promise<User> {
		try {
			return await this.prisma.user.update({
				where: {
					id: uid,
				},
				data: user,
			})
		} catch (error) {
			console.error('Error UserRepository.updateUser', error)
			await this.prisma.$disconnect()
			throw new Error(
				error instanceof Error ? error.message : JSON.stringify(error)
			)
		}
	}
}
