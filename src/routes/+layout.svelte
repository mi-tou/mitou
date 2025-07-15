<script lang="ts">
    import { Footer, Header, Main } from "$lib/components/layout";
    import "../app.css";

    let { children } = $props();

    const brand = {
        title: "MiTou",
        year: "2025"
    };

    const navLinks = [
        { label: "首頁", href: "/" },
        { label: "奶粉", href: "/powdered-milk" },
        { label: "尿布", href: "/diaper" },
        { label: "品牌", href: "/brand" }
    ];
</script>

<Header title={brand.title} links={navLinks} />
<Main>
    {@render children()}
</Main>
<Footer title={brand.title} year={brand.year} />
