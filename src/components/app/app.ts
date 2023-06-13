import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsStatus, NewsApi } from '../../types';

class App {
    constructor(private controller = new AppController(), private view = new AppView()) {}

    public start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: NewsStatus) => this.view.drawNews(data))
        );

        const attribute = 'start';
        this.controller.getSources((data: NewsApi) => this.view.drawSources(data, attribute));
        this.view.drawFilter();
        (document.querySelector('.filters') as HTMLElement).addEventListener('click', (e) => {
            document.querySelectorAll('.source__item').forEach((el) => el.remove());
            document.querySelectorAll('.news__item').forEach((el) => el.remove());
            this.controller.getFilter(e);
            const attribute = (e.target as HTMLElement).getAttribute('data-filter');
            this.controller.getSources((data: NewsApi) => this.view.drawSources(data, attribute));
        });
    }
}

export default App;
