export interface IEncryptManager {
	encrypt(string: string, salt?: number): Promise<string>
	compare(string: string, hash: string): Promise<boolean>
}
