<script lang="ts">
    import { Hero } from "$lib/components/layout";
    import type { PageData } from "./$types";
    const { data }: { data: PageData } = $props();
</script>

<div class="relative w-full">
    <Hero title={data.name} description="我們收集了數個常見的品牌，並提供了相關的資訊和連結。" />

    <div class="grid grid-cols-1 place-content-center gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        {#each data.products as product}
            <a href="/{product.type}/{product.id}">
                <div class="card p-2">
                    <div class="prose lg:prose-lg">
                        <h3>{product.name}</h3>
                        <div class="badge badge-primary">{product.type}</div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>
