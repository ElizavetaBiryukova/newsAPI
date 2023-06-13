import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '0db2469fadcc42e38b7d833cf5bae597', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
