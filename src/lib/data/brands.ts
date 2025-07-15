export type Brand = {
    id: string;
    name: string;
    href: string;
    owner: string;
    country: string;
    image: string;
};

export const brands: Brand[] = [
    {
        id: "pampers",
        name: "幫寶適",
        href: "https://pampers.com.tw/",
        owner: "Procter & Gamble",
        country: "美國",
        image: "/image/brand/pampers.png"
    },
    {
        id: "mamypoko",
        name: "滿意寶寶",
        href: "https://www.mamypoko.com.tw/",
        owner: "Unicharm",
        country: "日本",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
        id: "huggies",
        name: "好奇",
        href: "https://www.huggies.com.tw/",
        owner: "Kimberly Clark",
        country: "日本",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
        id: "libero",
        name: "麗貝樂",
        href: "https://www.libero.com/",
        owner: "Vinda",
        country: "中國",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
        id: "merries",
        name: "妙而舒",
        href: "https://www.kao.com/tw/products/merries/",
        owner: "Kao",
        country: "日本",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
        id: "carnation",
        name: "寶貝天使",
        href: "https://www.knh.com.tw/product-detail-2153046.html",
        owner: "KNH",
        country: "台灣",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    }
];
