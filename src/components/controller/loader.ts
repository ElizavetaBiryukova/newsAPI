import { GetResp } from '../../types';
import { ErrorStatus } from '../../types';

class Loader {
    constructor(private baseLink: string, private options: { apiKey: string }) {}

    public getResp<T>(
        { endpoint, options }: GetResp,
        callback: (data: T) => void = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ErrorStatus.Unauthorized || res.status === ErrorStatus.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: object, endpoint: string): string {
        const urlOptions: { [i: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json() as Promise<T>)
            .then((data: T) => callback(data))
            .catch((err: unknown) => console.error(err));
    }
}

export default Loader;
