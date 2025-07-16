import { diapers, diaperSizes, diaperTypes } from "$lib/data/diapers";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        diapers,
        types: diaperTypes,
        sizes: diaperSizes
    };
};
