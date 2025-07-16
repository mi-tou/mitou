import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const { name } = params;
    if (!name) error(404, "Diaper not found");

    return {
        name
    };
};
