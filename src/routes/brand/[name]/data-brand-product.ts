export type ProductType = {
    id: string;
    brand: string; // This should match the id of the brand in the brands array
    name: string;
    type: "diaper" | "powdered-milk";
};

export const products: ProductType[] = [
    {
        id: "ooxx",
        brand: "procter & gamble",
        name: "Product 1",
        type: "diaper"
    },
    {
        id: "yyzz",
        brand: "Unicharm",
        name: "Product 2",
        type: "powdered-milk"
    }
];
