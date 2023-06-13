import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources<T>(callback: (data: T) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Readonly<Event>, callback: (data: T) => void): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId: string | null = (target as HTMLElement).getAttribute('data-source-id');
                if ((newsContainer as HTMLElement).getAttribute('data-source') !== sourceId) {
                    (newsContainer as HTMLElement).setAttribute('data-source', sourceId as string);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as HTMLElement).parentNode;
        }
    }

    getFilter(e: Readonly<Event>): void {
        const target = e.target;
        const filters = document.querySelectorAll('.filter__item');

        filters.forEach((el) => {
            el.classList.remove('filter__current');
        });
        if (!target) return;
        (target as HTMLElement).classList.add('filter__current');
    }
}

export default AppController;
