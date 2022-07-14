import imgs from './images';
import { Db } from '../types';


const items: Db[] = [
    {
        id: 1,
        name: 'Hawkins Jacket',
        thumbnail: imgs.bomber,
        characters: [],
        season: [4],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'green',
        size: 'big',
        favorite: false,
        price: 1000.99,
        discount: 15,
        shipping: 0,
    },
    {
        id: 2,
        name: 'Chevrolet Camaro',
        thumbnail: imgs.camaro,
        characters: ['Max', 'Billy'],
        season: [2, 3],
        category: 'car',
        count: 2,
        year: '1960',
        color: 'blue',
        size: 'big',
        favorite: false,
        price: 15500,
        discount: 15,
        shipping: 1,
    },
    {
        id: 3,
        name: 'Dungeons \'n Dragons',
        thumbnail: imgs.dnd,
        characters: ['Mike', 'Eleven', 'Will', 'Max', 'Lucas', 'Dustin'],
        season: [1, 2, 3, 4],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'red',
        size: 'big',
        favorite: false,
        price: 1000.99,
        discount: 15,
        shipping: 1,
    },
    {
        id: 4,
        name: 'Faberge',
        thumbnail: imgs.faberge,
        characters: ['Dustin', 'Steve'],
        season: [1, 2, 3],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'yellow',
        size: 'big',
        favorite: false,
        price: 1000.99,
        discount: 15,
        shipping: 1,
    },
    {
        id: 5,
        name: 'Legendary Eddies Guitar',
        thumbnail: imgs.guitar,
        characters: ['Eddie'],
        season: [4],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'red',
        size: 'big',
        favorite: false,
        price: 1000.99,
        discount: 15,
        shipping: 1,
    },
    {
        id: 6,
        name: 'Lights',
        thumbnail: imgs.lights,
        characters: ['Joyce', 'Will'],
        season: [1],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'big',
        favorite: false,
        price: 1000.99,
        discount: 15,
        shipping: 1,
    },
    {
        id: 7,
        name: 'Scoops Ahoy!',
        thumbnail: imgs.scoops,
        characters: ['Robin', 'Steve'],
        season: [3],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'blue',
        size: 'big',
        favorite: false,
        price: 1000.99,
        discount: 15,
        shipping: 0,
    },
    {
        id: 8,
        name: 'Madrid Skateboards',
        thumbnail: imgs.skate,
        characters: ['Max'],
        season: [2],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'yellow',
        size: 'big',
        favorite: false,
        price: 1000.99,
        discount: 15,
        shipping: 1,
    },
    {
        id: 9,
        name: 'Thinking cap',
        thumbnail: imgs.thinking_cap,
        characters: ['Dustin'],
        season: [4],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'big',
        favorite: false,
        price: 1000.99,
        discount: 15,
        shipping: 1,
    },
    {
        id: 10,
        name: 'AKSU',
        thumbnail: imgs.AKMSU,
        characters: ['Hopper', 'Joyce', 'Murray'],
        season: [3],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'brown',
        size: 'big',
        favorite: false,
        price: 3000.99,
        discount: 15,
        shipping: 0,
    },
    {
        id: 11,
        name: 'AR15',
        thumbnail: imgs.Bushmaster,
        characters: ['Hopper', 'Joyce'],
        season: [1, 2, 3, 4],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'black',
        size: 'big',
        favorite: false,
        price: 1500.99,
        discount: 5,
        shipping: 1,
    },
    {
        id: 12,
        name: 'Python',
        thumbnail: imgs.Colt,
        characters: ['Hopper'],
        season: [1, 2],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'silver',
        size: 'big',
        favorite: false,
        price: 700.99,
        discount: 5,
        shipping: 1,
    },
    {
        id: 13,
        name: 'Ethaca',
        thumbnail: imgs.Ithaca,
        characters: ['Will'],
        season: [3],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'brown',
        size: 'big',
        favorite: false,
        price: 1200.99,
        discount: 5,
        shipping: 1,
    },
    {
        id: 14,
        name: 'Mossberg',
        thumbnail: imgs.Mossberg,
        characters: ['Nancy', 'Jonathan'],
        season: [1],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'brown',
        size: 'big',
        favorite: false,
        price: 1500.99,
        discount: 5,
        shipping: 1,
    },
    {
        id: 15,
        name: 'MP5KA3',
        thumbnail: imgs.MP5KA3,
        characters: ['Hopper', 'Joyce'],
        season: [2],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'black',
        size: 'big',
        favorite: false,
        price: 2500.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 16,
        name: 'Remington',
        thumbnail: imgs.Remington,
        characters: ['Nancy'],
        season: [2, 3],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'brown',
        size: 'big',
        favorite: false,
        price: 500.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 17,
        name: 'Smith & Wesson',
        thumbnail: imgs.SmithModel10,
        characters: ['Hopper'],
        season: [1, 2],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'silver',
        size: 'big',
        favorite: false,
        price: 600.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 18,
        name: 'Smith & Wesson',
        thumbnail: imgs.SmithModel66,
        characters: ['Hopper'],
        season: [2, 3],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'silver',
        size: 'big',
        favorite: false,
        price: 900.99,
        discount: 0,
        shipping: 0,
    },
    {
        id: 19,
        name: 'Double barrel shotgun',
        thumbnail: imgs.doubleBarrel,
        characters: ['Murray'],
        season: [2, 3],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'brown',
        size: 'big',
        favorite: false,
        price: 120.99,
        discount: 0,
        shipping: 0,
    },
    {
        id: 20,
        name: 'Winchester',
        thumbnail: imgs.Winchester,
        characters: ['Nancy'],
        season: [2, 3],
        category: 'gun',
        count: 2,
        year: '1960',
        color: 'black',
        size: 'middle',
        favorite: false,
        price: 1300.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 21,
        name: 'Eleven poster',
        thumbnail: imgs.elevenPoster,
        characters: ['Eleven'],
        season: [1],
        category: 'poster',
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'middle',
        favorite: false,
        price: 80.99,
        discount: 30,
        shipping: 1,
    },
    {
        id: 22,
        name: 'Hawkins High School',
        thumbnail: imgs.hawkinsSchool,
        season: [4],
        category: 'poster',
        characters: [],
        count: 2,
        year: '1960',
        color: 'green',
        size: 'middle',
        favorite: false,
        price: 80.99,
        discount: 30,
        shipping: 1,
    },
    {
        id: 23,
        name: 'Halloween Horror Nights',
        thumbnail: imgs.halloweenHorror,
        category: 'poster',
        characters: ['Will', 'Dustin', 'Eleven', 'Lucas', 'Max', 'Mike'],
        season: [2],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'middle',
        favorite: false,
        price: 80.99,
        discount: 30,
        shipping: 1,
    },
    {
        id: 24,
        name: 'Were not in Hawkins anymore',
        thumbnail: imgs.notIn,
        category: 'poster',
        season: [3],
        characters: ['Will', 'Dustin', 'Eleven', 'Lucas', 'Mike'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'middle',
        favorite: false,
        price: 80.99,
        discount: 30,
        shipping: 0,
    },
    {
        id: 25,
        name: 'Stranger Things Season 2',
        thumbnail: imgs.season2,
        category: 'poster',
        season: [3],
        characters: ['Will', 'Dustin', 'Eleven', 'Lucas', 'Mike'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'middle',
        favorite: false,
        price: 80.99,
        discount: 30,
        shipping: 1,
    },
    {
        id: 26,
        name: 'One Summer Can Change Everything',
        thumbnail: imgs.oneSummer,
        category: 'poster',
        season: [3],
        characters: ['Will', 'Mike', 'Dustin', 'Eleven', 'Lucas', 'Billy', 'Steve', 'Nancy', 'Hopper', 'Joyce', 'Jonathan'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'middle',
        favorite: false,
        price: 80.99,
        discount: 30,
        shipping: 1,
    },
    {
        id: 27,
        name: 'One summer can change everything',
        thumbnail: imgs.oneSummer,
        category: 'poster',
        season: [3],
        characters: ['Will', 'Dustin', 'Eleven', 'Lucas', 'Mike', 'Billy', 'Steve', 'Nancy', 'Hopper', 'Joyce', 'Jonathan', 'Erica'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'middle',
        favorite: false,
        price: 80.99,
        discount: 30,
        shipping: 1,
    },
    {
        id: 28,
        name: 'All characters',
        thumbnail: imgs.allSeasons,
        category: 'poster',
        season: [1, 2, 3, 4],
        characters: ['Will', 'Dustin', 'Eleven', 'Lucas', 'Mike', 'Billy', 'Steve', 'Nancy', 'Hopper', 'Joyce', 'Murray', 'Erica'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 30,
        shipping: 1,
    },
    {
        id: 29,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.elevenSolo,
        category: 'poster',
        season: [3],
        characters: ['Eleven'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 30,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.maxSolo,
        category: 'poster',
        season: [3],
        characters: ['Max'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 31,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.steveSolo,
        category: 'poster',
        season: [3],
        characters: ['Steve'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 32,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.dustinSolo,
        category: 'poster',
        season: [3],
        characters: ['Dustin'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 33,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.robinSolo,
        category: 'poster',
        season: [3],
        characters: ['Robin'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 0,
    },
    {
        id: 34,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.ericaSolo,
        category: 'poster',
        season: [3],
        characters: ['Erica'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 35,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.hopperSolo,
        category: 'poster',
        season: [3],
        characters: ['Hopper'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 0,
    },
    {
        id: 36,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.joyceSolo,
        category: 'poster',
        season: [3],
        characters: ['Joyce'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 37,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.nancySolo,
        category: 'poster',
        season: [3],
        characters: ['Nancy'],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 38,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.jonathanSolo,
        category: 'poster',
        characters: ['Jonathan'],
        season: [3],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 39,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.billySolo,
        category: 'poster',
        characters: ['Billy'],
        season: [3],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 40,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.lucasSolo,
        category: 'poster',
        characters: ['Lucas'],
        season: [3],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 41,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.mikeSolo,
        category: 'poster',
        characters: ['Mike'],
        season: [3],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 42,
        name: 'Stranger Things Season 3',
        thumbnail: imgs.willSolo,
        category: 'poster',
        characters: ['Will'],
        season: [3],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 80.99,
        discount: 0,
        shipping: 1,
    },
    {
        id: 43,
        name: 'Vodka stolichnaya',
        thumbnail: imgs.vodka,
        category: 'common',
        characters: ['Murray'],
        season: [3],
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 5.99,
        discount: 10,
        shipping: 1,
    },
    {
        id: 44,
        name: 'Shout At The Devil',
        thumbnail: imgs.motley,
        characters: ['Billy'],
        season: [2, 3],
        category: 'poster',
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 15,
        discount: 15,
        shipping: 1,
    },
    {
        id: 45,
        name: 'Kill em all',
        thumbnail: imgs.metallica,
        characters: ['Billy'],
        season: [2, 3],
        category: 'poster',
        count: 2,
        year: '1960',
        color: 'mixed',
        size: 'small',
        favorite: false,
        price: 20,
        discount: 15,
        shipping: 1,
    },
    {
        id: 46,
        name: 'Eggos',
        thumbnail: imgs.eggos,
        characters: ['Eleven'],
        season: [2, 3],
        category: 'common',
        count: 2,
        year: '1960',
        color: 'yellow',
        size: 'small',
        favorite: false,
        price: 4.99,
        discount: 0,
        shipping: 1,
    },
];

export default items;
