import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { products } from "./data-brand-product";

export const load: PageServerLoad = async ({ params }) => {
    const { name } = params;
    if (!name) error(404, "Brand not found");

    const brandProducts = products.filter(
        (product) => product.brand.toLowerCase() === name.toLowerCase()
    );

    return {
        name,
        products: brandProducts
    };
};
