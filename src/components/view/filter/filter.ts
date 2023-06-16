import './filter.css';
import { letters } from '../../../util/const';

class Filter {
    draw(): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const filterItemTemp: HTMLTemplateElement = document.querySelector('#filterItemTemp') as HTMLTemplateElement;

        const values = ['start', 'all', ...letters.split('')];

        values.forEach((item: string) => {
            const filterClone: HTMLElement = filterItemTemp.content.cloneNode(true) as HTMLElement;

            (filterClone.querySelector('.filter__item') as HTMLElement).textContent = item;
            (filterClone.querySelector('.filter__item') as HTMLElement).setAttribute('data-filter', item);
            (filterClone.querySelector('.filter__item') as HTMLElement).classList.add(item);
            fragment.append(filterClone);
        });

        (document.querySelector('.filters') as HTMLElement).append(fragment);
        (document.querySelector('.start') as HTMLElement).classList.add('filter__current');
    }
}

export default Filter;
