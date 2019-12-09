export class LocalStorage {

    public static set(item: string, value: any): any {
        localStorage.setItem(item, JSON.stringify(value));
    }

    public static get(item: string, fallback = null): any {
        const data = localStorage.getItem(item);
        if (data !== null) {
            return JSON.parse(data);
        }
        return fallback;
    }
}
