// use PChome https://24h.pchome.com.tw/category/DAAO05C
type Price = {
    size: "NB" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
    pricing: number;
    numberOfItems: number;
};

export type Diaper = {
    brand: string;
    name: string;
    type: "adhesive" | "pullUps" | "overnight";
    countryOfOrigin: string;
    image: string;
    prices: Price[];
};

export const diaperTypes = ["adhesive", "pullUps", "overnight"];

export const diaperSizes = ["NB", "S", "M", "L", "XL", "XXL", "XXXL"];

const pampers: Diaper[] = [
    {
        brand: "幫寶適",
        name: "奢寵幫",
        type: "adhesive",
        countryOfOrigin: "中國",
        image: "/image/diaper/pampers-奢寵幫.webp",
        prices: [
            { size: "NB", pricing: 499, numberOfItems: 54 },
            { size: "S", pricing: 499, numberOfItems: 48 },
            { size: "M", pricing: 499, numberOfItems: 38 },
            { size: "L", pricing: 499, numberOfItems: 32 }
        ]
    },
    {
        brand: "幫寶適",
        name: "奢寵幫",
        type: "pullUps",
        countryOfOrigin: "中國",
        image: "/image/diaper/pampers-奢寵幫.webp",
        prices: [
            { size: "L", pricing: 599, numberOfItems: 34 },
            { size: "XL", pricing: 599, numberOfItems: 30 },
            { size: "XXL", pricing: 599, numberOfItems: 24 }
        ]
    },
    {
        brand: "幫寶適",
        name: "極上守護",
        type: "adhesive",
        countryOfOrigin: "中國",
        image: "/image/diaper/pampers-極上守護.webp",
        prices: [
            { size: "NB", pricing: 1980, numberOfItems: 64 * 4 },
            { size: "S", pricing: 1980, numberOfItems: 56 * 4 },
            { size: "M", pricing: 2340, numberOfItems: 54 * 4 },
            { size: "L", pricing: 2340, numberOfItems: 44 * 4 },
            { size: "XL", pricing: 2340, numberOfItems: 34 * 4 }
        ]
    },
    {
        brand: "幫寶適",
        name: "極上守護",
        type: "pullUps",
        countryOfOrigin: "中國",
        image: "/image/diaper/pampers-極上守護.webp",
        prices: [
            { size: "M", pricing: 1500, numberOfItems: 42 * 3 },
            { size: "L", pricing: 1956, numberOfItems: 34 * 3 },
            { size: "XL", pricing: 1752, numberOfItems: 32 * 3 },
            { size: "XXL", pricing: 1752, numberOfItems: 24 * 3 }
        ]
    },
    {
        brand: "幫寶適",
        name: "清新幫",
        type: "pullUps",
        countryOfOrigin: "中國",
        image: "/image/diaper/pampers-清新幫.webp",
        prices: [
            { size: "L", pricing: 439, numberOfItems: 42 },
            { size: "XL", pricing: 439, numberOfItems: 38 },
            { size: "XXL", pricing: 439, numberOfItems: 26 },
            { size: "XXXL", pricing: 439, numberOfItems: 22 }
        ]
    },
    {
        brand: "幫寶適",
        name: "巧虎安睡褲",
        type: "overnight",
        countryOfOrigin: "中國",
        image: "/image/diaper/pampers-巧虎安睡褲.jpg",
        prices: [
            { size: "XL", pricing: 439, numberOfItems: 26 * 4 },
            { size: "XXL", pricing: 2470, numberOfItems: 22 * 4 }
        ]
    }
];

const mamypoko: Diaper[] = [
    {
        brand: "滿意寶寶",
        name: "極上呵護",
        type: "adhesive",
        countryOfOrigin: "日本",
        image: "/image/diaper/mamypoko-極上呵護.webp",
        prices: [
            { size: "NB", pricing: 1668, numberOfItems: 66 * 4 },
            { size: "S", pricing: 1596, numberOfItems: 60 * 4 },
            { size: "M", pricing: 2156, numberOfItems: 62 * 4 },
            { size: "L", pricing: 2156, numberOfItems: 52 * 4 },
            { size: "XL", pricing: 2156, numberOfItems: 40 * 4 }
        ]
    },
    {
        brand: "滿意寶寶",
        name: "極上呵護",
        type: "pullUps",
        countryOfOrigin: "日本",
        image: "/image/diaper/mamypoko-極上呵護.webp",
        prices: [
            { size: "M", pricing: 978, numberOfItems: 46 * 2 },
            { size: "L", pricing: 2100, numberOfItems: 42 * 4 },
            { size: "XL", pricing: 2100, numberOfItems: 32 * 4 },
            { size: "XXL", pricing: 599, numberOfItems: 26 }
        ]
    },
    {
        brand: "滿意寶寶",
        name: "瞬潔乾爽",
        type: "adhesive",
        countryOfOrigin: "日本",
        image: "/image/diaper/mamypoko-瞬潔乾爽.webp",
        prices: [
            { size: "NB", pricing: 1199, numberOfItems: 56 * 4 },
            { size: "S", pricing: 375, numberOfItems: 74 },
            { size: "M", pricing: 2099, numberOfItems: 60 * 4 },
            { size: "L", pricing: 2099, numberOfItems: 49 * 4 + 2 },
            { size: "XL", pricing: 2099, numberOfItems: 42 * 4 },
            { size: "XXL", pricing: 1919, numberOfItems: 30 * 4 }
        ]
    },
    {
        brand: "滿意寶寶",
        name: "瞬潔乾爽",
        type: "pullUps",
        countryOfOrigin: "日本",
        image: "/image/diaper/mamypoko-瞬潔乾爽.webp",
        prices: [
            { size: "M", pricing: 479, numberOfItems: 58 },
            { size: "L", pricing: 1756, numberOfItems: 44 * 4 },
            { size: "XL", pricing: 1756, numberOfItems: 38 * 4 },
            { size: "XXL", pricing: 1756, numberOfItems: 25 * 4 + 2 },
            { size: "XXXL", pricing: 799, numberOfItems: 14 * 2 }
        ]
    },
    {
        brand: "滿意寶寶",
        name: "兒童系列",
        type: "overnight",
        countryOfOrigin: "日本",
        image: "/image/diaper/mamypoko-兒童系列.webp",
        prices: [
            { size: "L", pricing: 1370, numberOfItems: 30 * 3 },
            { size: "XL", pricing: 1370, numberOfItems: 22 * 3 },
            { size: "XXL", pricing: 1370, numberOfItems: 22 * 3 },
            { size: "XXXL", pricing: 1370, numberOfItems: 12 * 3 }
        ]
    }
];

export const diapers: Diaper[] = [...pampers, ...mamypoko];
