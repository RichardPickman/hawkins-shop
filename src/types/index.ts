export type Db = {
    id: number,
    name: string,
    thumbnail: string,
    characters: string[],
    season: number[],
    category: string,
    count: number,
    year: string,
    color: string,
    size: string,
    favorite: boolean,
    price: number,
    discount: number,
    shipping: number,
}

export type Options = {
    category?: string[],
    season?: number[],
    color?: string[],
    characters?: number[]
    price?: number[],
    choises?: string[],
    sortOption?: string[],
    shipping?: number[],
    discount?: number[],
    search?: string[]
}

export type cartProduct = {
    amount: number,
    itemId: number,
}
