export interface NewsApiEntry {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface NewsApi {
    status: string;
    sources: Array<NewsApiEntry>;
}

export interface NewsInterface {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string | null;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface NewsStatus {
    status: string;
    totalResults: number;
    articles: Array<NewsInterface>;
}

export interface GetResp {
    endpoint: string;
    options?: Partial<Options>;
}

interface Options {
    sources: string | null;
}

export enum ErrorStatus {
    Unauthorized = 401,
    NotFound = 404,
}

export enum URLconfig {
    baselink = 'https://rss-news-api.onrender.com/',
    apiKey = '0db2469fadcc42e38b7d833cf5bae597',
}
