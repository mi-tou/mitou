import type { PageServerLoad } from "./$types";
import * as data from "./data-brands";

export const load: PageServerLoad = async () => {
    const { brands } = data;

    return {
        brands
    };
};
