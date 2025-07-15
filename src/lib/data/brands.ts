export type Channel = {
    name: string;
    href: string;
};

export type Brand = {
    id: string;
    name: string;
    href: string;
    owner: string;
    country: string;
    image: string;
    channels: Channel[];
};

export const brands: Brand[] = [
    {
        id: "pampers",
        name: "幫寶適",
        href: "https://pampers.com.tw/",
        owner: "Procter & Gamble (寶僑)",
        country: "美國",
        image: "/image/brand/pampers.png",
        channels: [
            {
                name: "momo購物網",
                href: "https://www.momoshop.com.tw/category/MgrpCategory.jsp?m_code=2700400054&sourcePageType=4"
            },
            { name: "pchome 24h購物", href: "https://24h.pchome.com.tw/store/DAAO09" },
            { name: "costco", href: "https://www.costco.com.tw/Pampers/c/Pampers" },
            {
                name: "大樹藥局",
                href: "https://shop.greattree.com.tw/campaign?id=b67f45aa-c8ee-4446-bfc2-e77bdd1bfc10"
            }
        ]
    },
    {
        id: "mamypoko",
        name: "滿意寶寶",
        href: "https://www.mamypoko.com.tw/",
        owner: "ユニ·チャーム株式会社 (嬌聯)",
        country: "日本",
        image: "/image/brand/mamypoko.png",
        channels: [
            {
                name: "momo購物網",
                href: "https://www.momoshop.com.tw/category/MgrpCategory.jsp?m_code=2700400049&sourcePageType=4"
            },
            { name: "pchome 24h購物", href: "https://24h.pchome.com.tw/store/DAAO00" },
            {
                name: "蝦皮購物",
                href: "https://shopee.tw/unicharm_taiwan"
            },
            {
                name: "大樹藥局",
                href: "https://shop.greattree.com.tw/productlist?item1=01&item2=0199&item3=019914"
            },
            {
                name: "丁丁藥局",
                href: "https://www.norbelbaby.com.tw/nec/search?keyword=%E6%BB%BF%E6%84%8F%E5%AF%B6%E5%AF%B6"
            }
        ]
    },
    {
        id: "huggies",
        name: "好奇",
        href: "https://www.huggies.com.tw/",
        owner: "Kimberly-Clark Corporation",
        country: "美國",
        image: "/image/brand/huggies.png",
        channels: [
            {
                name: "momo購物網",
                href: "https://www.momoshop.com.tw/category/MgrpCategory.jsp?m_code=2700400108&sourcePageType=4"
            },
            { name: "pchome 24h購物", href: "https://24h.pchome.com.tw/store/DAAOAL" },
            {
                name: "costco",
                href: "https://www.costco.com.tw/Household-Baby-Toys/Baby/Baby-Diapers-Wipes/c/130501?q=:relevance:Brand:Huggies"
            }
        ]
    },
    {
        id: "libero",
        name: "麗貝樂",
        href: "https://www.libero.com/",
        owner: "Essity",
        country: "瑞典",
        image: "/image/brand/libero.png",
        channels: [
            {
                name: "momo購物網",
                href: "https://www.momoshop.com.tw/category/MgrpCategory.jsp?m_code=2700400508&sourcePageType=4"
            },
            { name: "pchome 24h購物", href: "https://24h.pchome.com.tw/store/DAAO1R" },
            {
                name: "costco",
                href: "https://www.costco.com.tw/Household-Baby-Toys/Baby/Baby-Diapers-Wipes/c/130501?q=:relevance:Brand:Libero"
            }
        ]
    },
    {
        id: "merries",
        name: "妙而舒",
        href: "https://www.kao.com/tw/products/merries/",
        owner: "花王株式会社",
        country: "日本",
        image: "/image/brand/merries.png",
        channels: [
            {
                name: "momo購物網",
                href: "https://www.momoshop.com.tw/category/MgrpCategory.jsp?m_code=2700400058&sourcePageType=4"
            },
            { name: "pchome 24h購物", href: "https://24h.pchome.com.tw/store/DAAO3B" },
            {
                name: "costco",
                href: "https://www.costco.com.tw/Merries/c/Merries"
            },
            {
                name: "大樹藥局",
                href: "https://shop.greattree.com.tw/campaign?id=092d4dd6-51e3-4078-85a9-90e11947107e"
            }
        ]
    },
    {
        id: "carnation",
        name: "寶貝天使",
        href: "https://www.knh.com.tw/product-detail-2153046.html",
        owner: "康那香企業股份有限公司",
        country: "台灣",
        image: "/image/brand/carnation.png",
        channels: []
    },
    {
        id: "purebaby",
        name: "波比",
        href: "https://www.yome.in/",
        owner: "釉暉國際有限公司",
        country: "台灣",
        image: "/image/brand/purebaby.png",
        channels: []
    },
    {
        id: "noopii",
        name: "美好",
        href: "https://www.goodgoods.design/",
        owner: "拾物工作室",
        country: "台灣",
        image: "/image/brand/noopii.png",
        channels: [
            {
                name: "momo購物網",
                href: "https://www.momoshop.com.tw/category/MgrpCategory.jsp?m_code=2700400751&sourcePageType=4"
            }
        ]
    },
    {
        id: "goo.n",
        name: "日本大王",
        href: "https://www.goondiaper.com/",
        owner: "大王製紙株式會社",
        country: "日本",
        image: "/image/brand/goo.n.png",
        channels: [
            {
                name: "momo購物網",
                href: "https://www.momoshop.com.tw/category/MgrpCategory.jsp?m_code=2700400062&sourcePageType=4"
            },
            { name: "pchome 24h購物", href: "https://24h.pchome.com.tw/store/DAAO0F" }
        ]
    },
    {
        id: "nepia-genki",
        name: "日本王子",
        href: "https://cdn.e-nepia.com/genki/pc/product/overseas.html",
        owner: "王子製紙株式会社",
        country: "日本",
        image: "/image/brand/nepia-genki.png",
        channels: [
            {
                name: "momo購物網",
                href: "https://www.momoshop.com.tw/category/MgrpCategory.jsp?m_code=2700400610&sourcePageType=4"
            },
            { name: "pchome 24h購物", href: "https://24h.pchome.com.tw/store/DAAO54" }
        ]
    }
];
