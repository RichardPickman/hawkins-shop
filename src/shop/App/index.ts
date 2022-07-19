import * as noUiSlider from 'nouislider';
import items from '../../db/items';
import { Db, Options } from '../../types';
import { statesTemplate } from './helpers';
import Builder from './Builder';
import Sort from '../sort';
import Cart from './Cart';

export default class Application {
    currentItems: Db[];
    states: Options;
    sort = new Sort();
    builder = new Builder();
    cart = new Cart();
    showStyle: string = '';
    sortItems = 'low';

    constructor() {
        const hasStates = localStorage.getItem('filters');
        this.currentItems = items;
        this.states = hasStates ? JSON.parse(hasStates) : { ...statesTemplate };
        this.handleFirstLoad();
        this.builder.createCart();
    }

    render() {
        const product = document.querySelector('.products') as HTMLElement;
        const resultLength = document.querySelector('.product-visual__result-amount') as HTMLElement;
    
        Array.from(product?.childNodes).forEach(elem => elem.remove());
        this.builder.parseToHtml(this.currentItems, product, this.showStyle);
        resultLength.textContent = `${this.currentItems.length} results found`;
    }

    clearState(item: string) {
        const state: { [k: string]: Array<unknown> } = { ...this.states };

        state[item] = [];

        this.states = state;
    }

    updateProducts(saveLocal: boolean = true) {
        this.currentItems = this.sort.filter(items, this.states, this.sortItems);
        this.render();
        
        saveLocal && localStorage.setItem('filters', JSON.stringify(this.states));
        !saveLocal && localStorage.removeItem('filters');
    }

    async handleFirstLoad() {
        Object.entries(this.states).forEach(([key, value]) => {
            if (value.length > 0) {
                value.forEach(item => {
                    const filter = document.querySelector(`[data-${key}="${item}"]`);

                    filter?.classList.add('selected-filter');
                })
            } else {
                const filter = document.querySelector(`[data-${key}="${key === 'season' ? '0' : 'all'}"]`);
                
                filter?.classList.add('selected-filter');
            }

            if (key === 'discount' || key === 'shipping') {
                if (value.length > 0) {
                    (document.querySelector(`.choises__${key}-input`) as HTMLInputElement).checked = true;
                }
            }
        });

        const getLastPrice: number[] = ((this.states?.price as []).length > 0 ? this.states?.price : [0, 3500]) as number[];
        (document.querySelector('.slider-min') as HTMLElement).textContent = getLastPrice[0].toString();
        (document.querySelector('.slider-max') as HTMLElement).textContent = getLastPrice[1].toString();
        (document.querySelector('#slider-round') as noUiSlider.target).noUiSlider?.set(getLastPrice);
        (document.querySelector('.search__input') as HTMLInputElement).value = this.states.search?.join('') as string;
    }

    handleItem(key: string, item: unknown) {
        const state: { [k: string]: Array<unknown> } = { ...this.states }
        const value = Object.entries(state);
        
        value.forEach(([k, v]) => {
            if (k === key) {
                v.includes(item) ? state[k] = v.filter(flag => flag !== item) : v.push(item);
            }
        });

        this.states = state;
    }

    handleFilterStyle(e: Event, action?: 'all' | '0') {
        const currentTarget = e.target as HTMLElement;
        const parent = currentTarget.parentNode as HTMLElement;
        const [first, ...other] = parent?.childNodes;

        if (action) {
            other?.forEach(node => (node as HTMLElement).classList.remove('selected-filter', 'chosed'));
            (first as HTMLElement).classList.add('selected-filter');
            this.clearState(parent.dataset.filter as string);
            this.updateProducts();
            
        } else {
            (first as HTMLElement)?.classList.remove('selected-filter');
            currentTarget.classList.toggle('selected-filter');
            const isAllSelected = Array.from(other as HTMLElement[]).every(item => item.classList.contains('selected-filter'));

            isAllSelected && this.handleFilterStyle(e, 'all');
        }
    }

    handleAction(e: Event, item: string) {
        const currentTarget = e.target as HTMLElement;
        const dataOutput = (item === 'season') ? Number(currentTarget.dataset[item]) : currentTarget.dataset[item] as string;
        
        if (dataOutput === 'all' || dataOutput === 0) {
            this.handleFilterStyle(e, 'all');
            this.clearState(item);
        } else {
            this.handleItem(item, dataOutput);
            this.handleFilterStyle(e);
        }
        
        this.updateProducts();
    }

    handleCheckbox(e: Event, checkbox: Options['discount' | 'shipping']) {
        const currentTarget = e.target as HTMLInputElement;
        const filter = currentTarget.name as string;
            
        currentTarget.checked ? checkbox?.push(1) : this.clearState(filter);

        this.updateProducts();
    }

    async setAllStyle() {
        const filter = document.querySelector('.filters');
        const ul = filter?.querySelectorAll('ul');

        ul?.forEach(item => {
            const [first, ...other] = Array.from(item.children);
            other.forEach(node => (node as HTMLElement).classList.remove('selected-filter', 'chosed'))
            first.classList.add('selected-filter')
        })

    }
    
    listeners() {
        const selectorsArray = [
            ...document.querySelectorAll('.categories__item'),
            ...document.querySelectorAll('.seasons__item'),
            ...document.querySelectorAll('.colors__item'),
            ...document.querySelectorAll('.characters__item'),
        ];

        const colors = [...document.querySelectorAll('.color-circle')];

        const sortOption = [...document.querySelector('.product-visual__sort')?.children as HTMLCollection];

        (document.querySelector('.search__input') as HTMLElement)?.focus();

        (document.querySelector('.search__clear') as HTMLElement)?.addEventListener('click', () => {
            this.clearState('search');
            (document.querySelector('.search__input') as HTMLInputElement).value = '';

            this.updateProducts();
        });

        selectorsArray.forEach(selector => selector.addEventListener('click', (e) => {
            const parent = selector.parentNode as HTMLElement;
            const filter = parent?.dataset.filter as string;

            this.handleAction(e, filter);
        }));

        colors.forEach(item => item.addEventListener('click', (e) => {
            (e.target as HTMLElement).classList.toggle('chosed');
        }));

        document.querySelector('.choises__discount-input')?.addEventListener('change', (e) => {
            this.handleCheckbox(e, this.states.discount);
        });

        document.querySelector('.choises__shipping-input')?.addEventListener('change', (e) => {
            this.handleCheckbox(e, this.states.shipping);
        });
        
        document.querySelector('.reset-btn')?.addEventListener('click', (e) => {
            Object.keys(this.states).forEach((k) => this.clearState(k));
            
            this.currentItems = items;
            (document.querySelector('#slider-round') as noUiSlider.target).noUiSlider?.set([0, 3500]);

            this.setAllStyle();
            document.querySelectorAll('input').forEach(item => item.checked = false);
            (document.querySelector('.search__input') as HTMLInputElement).value = '';
            this.updateProducts(false);
        });

        (document.querySelector('#slider-round') as noUiSlider.target).noUiSlider?.on('update', () => {
            const labelMin = document.querySelector('.slider-min') as HTMLElement;
            const labelMax = document.querySelector('.slider-max') as HTMLElement;
            const [min, max] = (document.querySelector('#slider-round') as noUiSlider.target).noUiSlider?.get(true) as number[];
            labelMin.textContent = min.toFixed(2).toString();
            labelMax.textContent = max.toFixed(2).toString();

            this.states.price = [min, max];
            
            this.updateProducts();
        });

        document.querySelector('.product-visual__blocks')?.addEventListener('click', () => {
            document.querySelector('.products')?.classList.remove('product-list');
            this.showStyle = '';
            document.querySelectorAll('.card').forEach(item => item.classList.remove('card-list'));
        })

        document.querySelector('.product-visual__list')?.addEventListener('click', () => {
            document.querySelector('.products')?.classList.add('product-list');
            this.showStyle = 'card-list';
            document.querySelectorAll('.card').forEach(item => item.classList.add('card-list'));
        })

        document.querySelector('.search__input')?.addEventListener('submit', () => {
            const inputText = (document.querySelector('.search__input') as HTMLInputElement).value as string;
            
            this.clearState('search');
            inputText && this.states.search?.push(inputText);
            this.updateProducts();
        })

        document.querySelector('.search__input')?.addEventListener('change', () => {
            const inputText = (document.querySelector('.search__input') as HTMLInputElement).value as string;
            
            this.clearState('search');
            inputText && this.states.search?.push(inputText);
            this.updateProducts();
        })

        sortOption.forEach(selector => selector.addEventListener('click', (e) => {
            const parent = (e.target as HTMLElement).parentElement as HTMLElement;
            Array.from(parent.children).forEach(item => item.classList.remove('selected-filter'));
            this.sortItems = (e.target as HTMLElement).dataset.sort as string;
            this.handleFilterStyle(e)
            
            this.updateProducts();
        }));
    }
}
