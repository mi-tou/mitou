export type Brand = {
    id: string;
    name: string;
    href: string;
    mainProducts: string[];
};

export const brands: Brand[] = [
    {
        id: "Procter & Gamble",
        name: "寶僑家品",
        href: "https://www.pgtaiwan.com.tw/",
        mainProducts: ["幫寶適", "好自在"]
    },
    {
        id: "Unicharm",
        name: "嬌聯",
        href: "https://www.ucc.com.tw/",
        mainProducts: ["滿意寶寶", "蘇非"]
    }
];
