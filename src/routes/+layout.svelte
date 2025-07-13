<script lang="ts">
    import { Footer, Header, Main } from "$lib/components/layout";
    import "../app.css";

    let { children } = $props();

    const brand = {
        title: "MiTou",
        year: "2025"
    };
</script>

<Header title={brand.title} links={[]} />
<Main>
    {@render children()}
</Main>
<Footer title={brand.title} year={brand.year} />
