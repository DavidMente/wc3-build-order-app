import {LocalStorage} from './LocalStorage';

export class PasswordRepository {

    public static savePassword(buildOrderId: number, password: string): void {

        const passwordMap = this.getPasswords();
        passwordMap.set(buildOrderId, password);
        LocalStorage.set('passwords', Array.from(passwordMap.entries()));

    }

    public static getPassword(buildOrderId: number | undefined | null): string | undefined {

        const passwordMap = this.getPasswords();
        if (buildOrderId !== undefined && buildOrderId !== null) {
            return passwordMap.get(buildOrderId);
        }
        return undefined;

    }

    public static getPasswords(): Map<any, any> {

        const passwords = new Map(LocalStorage.get('passwords'));
        if (passwords === null) {
            return new Map<number, string>();
        } else {
            return passwords;
        }

    }

}
