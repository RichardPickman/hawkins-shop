import { Db } from '../../types';

class Sort {
    checkArrays(haystack: string[], arr: string[]) {
        return arr.some((v) => haystack.indexOf(v) >= 0)
    }

    showFilter(items: Db[]) {
        
    }
    
    filter(items: Db[], options: { [key: string]: any }, sortOption: string) {
        const copyOption = { ...options };

        const res = items.filter((obj: {[key: string]: any}) =>  
            Object.entries(copyOption).every(([prop, find]) => {
                if (find.length === 0 || find === 'all') {
                    return true;
                }

                if (prop === 'search') {
                    if (!find[0]) return true;

                    return obj['name'].toLowerCase().includes(find[0].toLowerCase()) > 0 ? true : false;
                }

                if (prop === 'price') {
                    return obj[prop] > find[0] && obj[prop] < find[1] ? true : false
                }

                if (prop === 'discount') {
                    return obj[prop] > 0 ? true : false
                }

                if (Array.isArray(obj[prop])) {
                    return this.checkArrays(find, obj[prop]);
                } else {
                    return find.includes(obj[prop]);
                }
                
            })
        );

        const sorted = this.sortCards(sortOption, res) as Db[];
        
        return sorted;
    }

    sortCards(action: string, items: Db[]) {
        switch(action) {
            case 'low':
                return items.sort((a, b) => {
                    if (a.discount > 0 && b.discount > 0) {
                        return (a.price / 100) * a.discount - (b.price / 100) * b.discount;
                    } else {
                        return a.price - b.price;
                    }
                });
            case 'high':
                return items.sort((a, b) => {
                    if (a.discount > 0 && b.discount > 0) {
                        return (b.price / 100) * b.discount - (a.price / 100) * a.discount;
                    } else {
                        return b.price - a.price;
                    }
                });
            case 'descending': 
                return items.sort((a, b) => a.name > b.name ? 1 : -1);
            case 'ascending': 
                return items.sort((a, b) => a.name > b.name ? 1 : -1).reverse();
            case 'rate': 
                return items.sort((a, b) => b.rating - a.rating);
        }
    }
}

export default Sort;
