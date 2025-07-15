<script lang="ts">
    import BrandCard from "$lib/components/brand-card.svelte";
    import { Hero } from "$lib/components/layout";
    import type { PageData } from "./$types";

    const { data }: { data: PageData } = $props();
</script>

<div class="relative w-full">
    <!-- Hero -->
    <Hero
        title="品牌"
        description="我們收集了數個常見的品牌，並提供了相關的資訊和連結。"
        image="pexels-fadime-demirtas-42037863-12603180.jpg"
        imageClass="object-[50%_70%] opacity-60 mask-t-from-50%"
    />

    <section class="relative w-full">
        <div class="container mx-auto">
            <div
                class="grid grid-cols-1 place-content-center gap-8 p-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {#each data.brands as brand}
                    <BrandCard {brand} />
                {/each}
            </div>
        </div>
    </section>
</div>
