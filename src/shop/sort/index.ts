import { Db } from '../../types';

class Sort {
    checkArrays(haystack: string[], arr: string[]) {
        return arr.some((v) => haystack.indexOf(v) >= 0)
    }

    showFilter(items: Db[]) {
        
    }
    
    filter(items: Db[], options: { [key: string]: any }) {
        const copyOption = { ...options };

        let res = items.filter((obj: {[key: string]: any}) =>  
            Object.entries(copyOption).every(([prop, find]) => {
                if (find.length === 0 || find === 'all') {
                    return true;
                }

                if (prop === 'search') {
                    if (!find[0]) return true;

                    return obj['name'].toLowerCase().includes(find[0].toLowerCase()) > 0 ? true : false;
                }

                if (prop === 'price') {
                    return obj[prop] > find[0] ? true : false
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
        
        return res;
    }
}

export default Sort;
