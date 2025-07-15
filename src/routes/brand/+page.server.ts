import { brands } from "$lib/data/brands";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        brands
    };
};
