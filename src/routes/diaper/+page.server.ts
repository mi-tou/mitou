import type { PageServerLoad } from "./$types";
import * as data from "./data-dispers";

export const load: PageServerLoad = async () => {
    const { dispers } = data;

    return {
        dispers
    };
};
