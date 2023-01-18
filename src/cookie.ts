
export class Cookie {
    cookie: any = {};

    constructor() {
        this.build()
    }

    get(key: string) {
        return this.cookie[key]
    }

    build() {
        const arr = document.cookie.split(';')
        for (const item of arr) {
            const [key, value] = item.split('=')
            this.cookie[key.trim()] = value;
        }
    }
}