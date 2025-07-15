import type { PageServerLoad } from "./$types";
import * as data from "./data-diapers";

export const load: PageServerLoad = async () => {
    const { diapers } = data;

    return {
        diapers
    };
};
