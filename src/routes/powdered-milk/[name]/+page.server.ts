import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const { name } = params;
    if (!name) error(404, "Powdered milk not found");

    return {
        name
    };
};
