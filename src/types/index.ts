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

export interface getResp {
    endpoint: string;
    options?: Partial<Options>;
}

interface Options {
    sources: string | null;
}
