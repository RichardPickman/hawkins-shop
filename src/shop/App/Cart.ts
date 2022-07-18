import '../../sass/style.scss'
import items from "../../db/items";
import { Db, cartProduct } from '../../types'


class Cart {
    _products: cartProduct[];
    _productsCash = new Map();

    constructor() {
        this._products = [];
    }

    add(item: Db) {
        const { id } = item;
        const productInstance = { itemId: id, amount: 1 };

        if (this._getAmountProducts() === 20) {
            alert('Извините, все слоты заняты');
            return;
        }

        if (this._getFromCache(item.id)) {
            this.increase(item.id);
        } else {
            this._products.push(productInstance);
            this._setToCash(item.id, this._products.at(-1) as cartProduct);
            this.appendCart(item);
            this._changeTotal();
            this._addItemStyle(this._getAmountProducts());
        }

        return;
    }

    remove(id: number) {
        this._products = this._products.filter(product => product.itemId !== id);
        
        this._removeFromCash(id);
        document.querySelector(`[data-card-id="${id}"]`)?.remove();
        this._changeTotal();
        this._addItemStyle(this._getAmountProducts());

        return;
    }

    increase(id: number) {
        const cartItem = this._products.find(elem => elem.itemId === id) as cartProduct;

        if (this._getAmountProducts() === 20) {
            alert('Извините, все слоты заняты');
            return;
        }

        cartItem.amount += 1;
        this._changeStates(id, cartItem);
        
        return;
    }

    decrease(id: number) {
        const cartItem = this._products.find(elem => elem.itemId === id) as cartProduct;
        
        if (cartItem.amount > 1) {
            cartItem.amount -= 1;
            this._changeStates(id, cartItem);
        } else {
            this.remove(cartItem.itemId);
        }

        return;
    }

    _getAmountProducts() {
        return this._products.reduce((acc, item) => acc + item.amount, 0);
    }

    _changeStates(id: number, cartItem: cartProduct) {
        this._setToCash(id, cartItem);
        this._changePrice(id, cartItem.amount);
        this._changeTotal();
        this._addItemStyle(this._getAmountProducts());
    }

    _addItemStyle(amount: number) {
        const icon = document.querySelector('.panel__amount') as HTMLElement;

        if (amount > 0) {
            icon.textContent = amount.toString();
            icon.style.display = 'flex'
        } else {
            icon.textContent = amount.toString();
            icon.style.display = 'none';
        }

    }

    _getFromCache(id: number) {
        if (this._productsCash.has(id)) {
            return this._productsCash.get(id);
        }
    }

    _setToCash(id: number, product: cartProduct) {
        this._productsCash.set(id, product);
    }

    _removeFromCash(id: number) {
        this._productsCash.delete(id);
    }

    _changePrice(id: number, amount: number) {
        const card = document.querySelector(`[data-card-id="${id}"]`)?.querySelector('.item__amount') as HTMLElement;

        card.textContent = amount.toString();
        const currentItem = items.find(item => item.id === id) as Db;
        const sum = document.querySelector(`[data-card-id="${id}"]`)?.querySelector('.item__sum') as HTMLElement;

        sum.textContent = (currentItem.price * amount).toFixed(2).toString();
    }

    _changeTotal() {
        const subTotal = document.querySelector('.calculate-total__subtotal-price') as HTMLElement;
        const summ = document.querySelector('.total__sum') as HTMLElement;
        const calculateTotal = this._products.reduce((acc, elem) => {
            const itemPrice = items.find(item => elem.itemId === item.id)?.price as number;

            acc += itemPrice * elem.amount

            return acc;
        }, 0).toFixed(2);

        subTotal.textContent = `$${parseInt(calculateTotal)}`
        summ.textContent = `$${parseInt(calculateTotal) + 5.34}`
    }

    appendCart(item: Db) {
        const orders = document.querySelector('.orders') as HTMLElement;
        const cartItemTemp = document.querySelector('#cartItemTemp') as HTMLTemplateElement;
        
        const newsClone = cartItemTemp.content.cloneNode(true) as HTMLElement;
        const data = newsClone.querySelector('.item') as HTMLElement;
        
        data.dataset.cardId = item.id.toString();

        (data.querySelector('.item__image') as HTMLElement).style.backgroundImage = `url(${item.thumbnail})`;
        (data.querySelector('.item__title') as HTMLElement).textContent = item.name;
        (data.querySelector('.item__chosen-color') as HTMLElement).classList.add(item.color);
        (data.querySelector('.item__price') as HTMLElement).textContent = item.price.toString();
        (data.querySelector('.item__amount') as HTMLElement).textContent = this._getFromCache(item.id).amount;
        (data.querySelector('.item__sum') as HTMLElement).textContent = (this._getFromCache(item.id).amount * item.price).toFixed(2);
        
        orders.append(newsClone);

        (data.querySelector('.item__minus') as HTMLElement).addEventListener('click', (e) => {        
            const item = (e.target as HTMLElement).parentElement?.parentElement;
            const id = item?.dataset.cardId as string;

            this.decrease(parseInt(id));

            return;
        });

        (data.querySelector('.item__plus') as HTMLElement).addEventListener('click', (e) => {        
            const parent = (e.target as HTMLElement).parentElement?.parentElement;
            const parentId = parent?.dataset.cardId as string;
            
            this.increase(parseInt(parentId));

            return;
        });

        (document.querySelectorAll('.item__delete-btn')).forEach(selector => selector.addEventListener('click', (e) => {
            const parent = (e.target as HTMLElement).parentElement?.parentElement;
            const parentId = parent?.dataset.cardId as string;
        
            this.remove(parseInt(parentId));

            return;
        }));

        document.querySelector('.cart__clear-products')?.addEventListener('click', () => {
            const cartProducts = Array.from(document.querySelectorAll('.item')) as HTMLElement[];

            if (cartProducts.length > 0) {
                cartProducts.forEach((item) => this.remove(parseInt(item.dataset.cardId as string)));
            };
        })
    }
}

export default Cart;
