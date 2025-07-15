export type Disper = {
    id: string;
    brand: string;
    name: string;
    type: string;
    manufacturer: string;
    countryOfOrigin: string;
    price: number;
    unitCount: number;
};

export const diapers: Disper[] = [
    {
        id: "pampers0",
        brand: "幫寶適",
        name: "奢寵幫",
        type: "黏貼型",
        manufacturer: "Procter & Gamble",
        countryOfOrigin: "china",
        price: 299,
        unitCount: 30
    },
    {
        id: "pampers1",
        brand: "幫寶適",
        name: "奢寵幫",
        type: "黏貼型",
        manufacturer: "Procter & Gamble",
        countryOfOrigin: "china",
        price: 100000,
        unitCount: 10
    },
    {
        id: "mamypoko0",
        brand: "滿意寶寶",
        name: "極上呵護",
        type: "黏貼型",
        manufacturer: "Unicharm",
        countryOfOrigin: "japan",
        price: 30,
        unitCount: 3
    }
];
