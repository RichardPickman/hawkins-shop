import * as noUiSlider from 'nouislider';
import items from '../../db/items';
import { Db, Options } from '../../types';
import { statesTemplate } from './helpers';
import Builder from './Builder';
import Sort from '../sort';
import Cart from '../../cart/cart';

export default class Application {
    currentItems: Db[];
    states: Options;
    sort = new Sort();
    builder = new Builder();
    cart = new Cart();

    constructor() {
        const hasStates = localStorage.getItem('filters');
        this.currentItems = items;
        this.states = hasStates ? JSON.parse(hasStates) : { ...statesTemplate };
        this.handleFirstLoad();
        this.builder.createCart();
    }

    render() {
        const product = document.querySelector('.products') as HTMLElement;
        const children = Array.from(product?.childNodes);
        const cardsAmount = children.length;
    
        for (let i = 0; i < cardsAmount; i++) {
            children[i].remove();
        }

        this.builder.parseToHtml(this.currentItems);
        localStorage.setItem('filters', JSON.stringify(this.states));
    }

    clearState(item: string) {
        const state: { [k: string]: Array<unknown> } = { ...this.states };

        state[item] = [];

        this.states = state;
    }

    updateProducts() {
        this.currentItems = this.sort.filter(items, this.states);
        this.render();
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
                    (document.querySelector(`.${key}`) as HTMLInputElement).checked = true;
                }
            }
        });

        const getLastPrice = this.states?.price ? this.states?.price[0] : 0;
        (document.querySelector('.slider-label') as HTMLElement).textContent = getLastPrice.toString();
        (document.querySelector('#slider-round') as noUiSlider.target).noUiSlider?.set(getLastPrice);
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

    handleFilterStyle(e: Event, action?: string) {
        const currentTarget = e.target as HTMLElement;
        const parent = currentTarget.parentNode as HTMLElement;
        const children = parent?.childNodes;

        if (action) {
            children?.forEach(node => (node as HTMLElement).classList.remove('selected-filter', 'chosed'));
            (children[0] as HTMLElement).classList.add('selected-filter');
            
            this.clearState(parent.dataset.filter as string);

            this.updateProducts();
            
        } else {
            (parent.firstChild as HTMLElement)?.classList.remove('selected-filter');
            currentTarget.classList.toggle('selected-filter');
            const isAllSelected = Array.from(parent.children).slice(1)
            .every(item => item.classList.contains('selected-filter'));

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
            const allLi = Array.from(item.children);
            allLi.forEach(node => (node as HTMLElement).classList.remove('selected-filter', 'chosed'))
            allLi[0].classList.add('selected-filter')
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

        selectorsArray.forEach(selector => selector.addEventListener('click', (e) => {
            const parent = selector.parentNode as HTMLElement;
            const filter = parent?.dataset.filter as string;

            this.handleAction(e, filter);
        }));

        colors.forEach(item => item.addEventListener('click', (e) => {
            (e.target as HTMLElement).classList.toggle('chosed');
        }));

        document.querySelector('.discount')?.addEventListener('change', (e) => {
            this.handleCheckbox(e, this.states.discount);
        });

        document.querySelector('.shipping')?.addEventListener('change', (e) => {
            this.handleCheckbox(e, this.states.shipping);
        });
        
        document.querySelector('.reset-btn')?.addEventListener('click', () => {
            Object.entries(this.states).forEach(([k, v]) => this.clearState(k));
            localStorage.removeItem('filters');
            
            this.currentItems = items;
            (document.querySelector('#slider-round') as noUiSlider.target).noUiSlider?.set(0);

            this.setAllStyle();
            document.querySelectorAll('input').forEach(item => item.checked = false);
            this.updateProducts();
            
        });

        (document.querySelector('#slider-round') as noUiSlider.target).noUiSlider?.on('update', () => {
            const label = document.querySelector('.slider-label') as HTMLElement;
            const currentData = (document.querySelector('#slider-round') as noUiSlider.target).noUiSlider?.get() as string;
            label.textContent = currentData;

            this.states.price = [parseInt(currentData)];
            
            this.updateProducts();
        });

        document.querySelector('.product-visual__blocks')?.addEventListener('click', () => {
            document.querySelector('.products')?.classList.remove('product-list');

            document.querySelectorAll('.card').forEach(item => item.classList.remove('card-list'));
        })

        document.querySelector('.product-visual__list')?.addEventListener('click', () => {
            document.querySelector('.products')?.classList.add('product-list');

            document.querySelectorAll('.card').forEach(item => item.classList.add('card-list'));
        })

        document.querySelector('.searchInput')?.addEventListener('submit', () => {
            const inputText = (document.querySelector('.searchInput') as HTMLInputElement).value as string;
            
            this.clearState('search');
            inputText && this.states.search?.push(inputText);
            this.updateProducts();
        })

        document.querySelector('.searchInput')?.addEventListener('change', () => {
            const inputText = (document.querySelector('.searchInput') as HTMLInputElement).value as string;
            
            this.clearState('search');
            inputText && this.states.search?.push(inputText);
            this.updateProducts();
        })

        document.querySelector('.low')?.addEventListener('click', () => {
            
        })
    }
}
