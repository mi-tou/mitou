import type { PageServerLoad } from "./$types";
import * as data from "./data-powdered-milk";

export const load: PageServerLoad = async () => {
    const { powderedMilk } = data;

    return {
        powderedMilk
    };
};
