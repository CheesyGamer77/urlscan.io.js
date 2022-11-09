import { VERSION, API_URL } from '..';
import { ClientOptions, SearchOptions } from './types';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { APISearchResponse } from '../entities/search/types';

function wasSuccessful(response: AxiosResponse<any, any>) {
    return response.status < 400;
}

export class Client {
    private readonly apiKey: string | undefined;
    private readonly userAgent: string;
    private readonly http: AxiosInstance;

    constructor(opts?: ClientOptions) {
        this.apiKey = opts?.apiKey;
        this.userAgent = opts?.agent ?? `urlscan.io.js (https://github.com/CheesyGamer77/urlscan.io.js, ${VERSION})`;

        this.http = axios.create({
            baseURL: API_URL,
            headers: {
                'API-Key': this.apiKey,
                'User-Agent': this.userAgent
            },
            validateStatus: function(status: number) {
                return status < 500;
            }
        });
    }

    async search(opts: SearchOptions) {
        const response = await this.http.get('/search', {
            params: opts
        });

        if (!wasSuccessful(response)) {
            return;
        }

        // TODO: Caching
        // TODO: Rate limiting

        return response.data as APISearchResponse;
    }
}
