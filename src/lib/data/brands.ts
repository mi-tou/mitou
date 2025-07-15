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
        image: "/image/brand/mamypoko.png"
    },
    {
        id: "huggies",
        name: "好奇",
        href: "https://www.huggies.com.tw/",
        owner: "Kimberly Clark",
        country: "日本",
        image: "/image/brand/huggies.png"
    },
    {
        id: "libero",
        name: "麗貝樂",
        href: "https://www.libero.com/",
        owner: "維達",
        country: "中國",
        image: "/image/brand/libero.png"
    },
    {
        id: "merries",
        name: "妙而舒",
        href: "https://www.kao.com/tw/products/merries/",
        owner: "花王株式会社",
        country: "日本",
        image: "/image/brand/merries.png"
    },
    {
        id: "carnation",
        name: "寶貝天使",
        href: "https://www.knh.com.tw/product-detail-2153046.html",
        owner: "康那香企業股份有限公司",
        country: "台灣",
        image: "/image/brand/carnation.png"
    },
    {
        id: "purebaby",
        name: "波比",
        href: "https://www.yome.in/",
        owner: "釉暉國際有限公司",
        country: "台灣",
        image: "/image/brand/purebaby.png"
    },
    {
        id: "noopii",
        name: "美好",
        href: "https://www.goodgoods.design/",
        owner: "拾物工作室",
        country: "台灣",
        image: "/image/brand/noopii.png"
    },
    {
        id: "goo.n",
        name: "大王",
        href: "https://www.goondiaper.com/",
        owner: "大王製紙株式會社",
        country: "日本",
        image: "/image/brand/goo.n.png"
    },
    {
        id: "nepia-genki",
        name: "日本王子",
        href: "https://cdn.e-nepia.com/genki/pc/product/overseas.html",
        owner: "王子製紙株式会社",
        country: "日本",
        image: "/image/brand/nepia-genki.png"
    }
];
