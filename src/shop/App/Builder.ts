import Cart from "./Cart";
import { Db } from "../../types";

class Builder {
    cart = new Cart();

    parseToHtml(items: Db[]) {
        const products = document.querySelector('.products') as HTMLElement;
        const cardItemTemp = document.querySelector('#cardItemTemp') as HTMLTemplateElement;
        const resultLength = document.querySelector('.product-visual__result-amount') as HTMLElement;
    
        resultLength.textContent = `${items.length} results found`;
    
        items.forEach((item) => {
            const newsClone = cardItemTemp.content.cloneNode(true) as HTMLElement;
            const data = newsClone.querySelector('.card__data') as HTMLElement;
            const { price, discount } = item;
    
            (newsClone.querySelector('.card') as HTMLElement).dataset.id = item.id.toString();
            (newsClone.querySelector('.card__image') as HTMLElement).style.backgroundImage = `url(${item.thumbnail})`;
            (data.querySelector('.card__title') as HTMLElement).textContent = item.name;
            (data.querySelector('.card__count') as HTMLElement).textContent = item.count > 0 ? item.count.toString() : 'out of stock';
            (data.querySelector('.card__color-block') as HTMLElement).classList.add(item.color);
            if (item.color === 'mixed') {
                (data.querySelector('.card__color-block') as HTMLElement).textContent = item.color;
            }
            (data.querySelector('.card__price') as HTMLElement).textContent = `$${price.toFixed(2)}`;
            if (item.discount > 0) {
                (data.querySelector('.card__discount-price') as HTMLElement).textContent = `${discount}% -  $${((price - (price / 100) * discount) - 0.01).toFixed(2)}`;
                (data.querySelector('.card__price') as HTMLElement).textContent = `$${price.toFixed(2)}`;
                (data.querySelector('.card__price') as HTMLElement).classList.add('crossed')
            }
            (newsClone.querySelector('.card') as HTMLElement).setAttribute('color', item.color);
            (newsClone.querySelector('.card') as HTMLElement).setAttribute('category', item.category);
            (newsClone.querySelector('.card') as HTMLElement).setAttribute('shipping', item.shipping.toString());
            (newsClone.querySelector('.card') as HTMLElement).setAttribute('discount', item.discount === 0 ? 'false' : 'true');
    
            products.append(newsClone);
        });

        document.querySelectorAll('.card').forEach(item => item?.addEventListener('click', (e) => {
            const itemId = (e.target as HTMLElement).dataset.id as string;
            const findItem = items.find(item => item.id === parseInt(itemId)) as Db;

            this.createPopup(findItem);

            (document.querySelector('.popup-background') as HTMLElement).style.display = 'block';

            (document.querySelector('.popup-background') as HTMLElement).addEventListener('click', () => {
                document.querySelector('.popup')?.remove();
                (document.querySelector('.popup-background') as HTMLElement).style.display = 'none';
            });

            (document.querySelector('.popup__btn') as HTMLElement).addEventListener('click', (e) => {
                const itemId = (e.target as HTMLElement).parentElement?.dataset.id as string;
                const findItem = items.find(item => item.id === parseInt(itemId)) as Db;

                this.cart.add(findItem);
            });
        }));
    }

    createPopup(item: Db) {
        const main = document.querySelector('.main-shop') as HTMLElement;
        const popupItemTemp = document.querySelector('#popupItemTemp') as HTMLTemplateElement;
    
        const newsClone = popupItemTemp.content.cloneNode(true) as HTMLElement;
        const data = newsClone.querySelector('.popup__block') as HTMLElement;

        const { price, discount } = item;

        (newsClone.querySelector('.popup__image') as HTMLElement).style.backgroundImage = `url(${item.thumbnail})`;
        (data.querySelector('.popup__title') as HTMLElement).textContent = item.name;
        (data.querySelector('.popup__color-block') as HTMLElement).classList.add(item.color);
        const chars = item.characters.reduce((acc: string[], char) => { acc.push(char); return acc }, []);
        (data.querySelector('.popup__chars') as HTMLElement).textContent = chars.join(' ');
        (data.querySelector('.popup__size') as HTMLElement).textContent = item.size;
        (data.querySelector('.popup__count') as HTMLElement).textContent = (item.count > 0 ? item.count.toString() : 'out of stock');
        (data.querySelector('.popup__price') as HTMLElement).textContent = `$${price.toFixed(2)}`;
        if (item.discount > 0) {
            (data.querySelector('.popup__discount-price') as HTMLElement).textContent = `${discount}% -  $${((price - (price / 100) * discount) - 0.01).toFixed(2)}`;
            (data.querySelector('.popup__price') as HTMLElement).textContent = `$${price.toFixed(2)}`;
            (data.querySelector('.popup__price') as HTMLElement).classList.add('crossed')
        }
        (newsClone.querySelector('.popup__data') as HTMLElement).dataset.id = item.id.toString();
        main.append(newsClone);
    }

    createCart() {
        const main = document.querySelector('.main-shop') as HTMLElement;
        const cartLayoutTemp = document.querySelector('#cartLayoutTemp') as HTMLTemplateElement;
        const newsClone = cartLayoutTemp.content.cloneNode(true) as HTMLElement;

        main.append(newsClone);

        (document.querySelector('.panel__item') as HTMLElement).addEventListener('click', () => {
            (document.querySelector('.popup-background') as HTMLElement).style.display = 'block';

            (document.querySelector('.popup-background') as HTMLElement).addEventListener('click', () => {
                (document.querySelector('.cart') as HTMLElement).style.display = 'none';
                (document.querySelector('.popup-background') as HTMLElement).style.display = 'none';
            });

            (document.querySelector('.cart') as HTMLElement).style.display = 'flex';
            (document.querySelector('.main-shop') as HTMLElement).style.overflowY = 'hidden';
        });
    }
}

export default Builder;
