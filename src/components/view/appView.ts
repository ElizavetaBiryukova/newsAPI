import News from './news/news';
import Sources from './sources/sources';
import Filter from './filter/filter';
import { NewsApi, NewsStatus, NewsInterface, NewsApiEntry } from '../../types';

export class AppView {
    constructor(
        private news: News = new News(),
        private sources: Sources = new Sources(),
        private filter: Filter = new Filter()
    ) {}

    drawNews(data: Readonly<NewsStatus>): void {
        const values: Array<NewsInterface> | [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Readonly<NewsApi>, letter: string | null): void {
        let values: Array<NewsApiEntry> | [];

        if (letter === 'all') {
            values = data?.sources ? data?.sources : [];
            (document.querySelector('.sources') as HTMLElement).style.height = 'max-content';
        } else if (letter === 'start') {
            values = data?.sources ? data?.sources : [];
            (document.querySelector('.sources') as HTMLElement).style.height = '140px';
        } else {
            values = data?.sources ? data?.sources.filter((data) => data.name.split('')[0] === letter) : [];
            (document.querySelector('.sources') as HTMLElement).style.height = 'max-content';
        }

        this.sources.draw(values);
    }

    drawFilter(): void {
        this.filter.draw();
    }
}

export default AppView;
