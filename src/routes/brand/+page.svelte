<script lang="ts">
    import { Hero } from "$lib/components/layout";
    import type { PageData } from "./$types";
    import type { Brand } from "./data-brands";

    const { data }: { data: PageData } = $props();
</script>

{#snippet BrandCard(brand: Brand)}
    <a href="/brands/{brand.id}" class="hover:-translate-y-2">
        <div class="card min-h-64 p-2">
            <div class="flex gap-2">
                <h3>{brand.id}</h3>
                <h3>{brand.name}</h3>
            </div>

            <div class="flex gap-2">
                {#each brand.mainProducts as product}
                    <p>{product}</p>
                {/each}
            </div>
        </div>
    </a>
{/snippet}

<div class="relative w-full">
    <!-- Hero -->
    <Hero
        title="品牌"
        description="我們收集了數個常見的品牌，並提供了相關的資訊和連結。"
        image="pexels-fadime-demirtas-42037863-12603180.jpg"
    />

    <section class="relative w-full">
        <div class="container mx-auto">
            <div
                class="grid grid-cols-1 place-content-center gap-8 p-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {#each data.brands as brand}
                    {@render BrandCard(brand)}
                    {@render BrandCard(brand)}
                {/each}
            </div>
        </div>
    </section>
</div>
