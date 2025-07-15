<script lang="ts" module>
    import type { Brand } from "$lib/data/brands";

    interface BrandCardProps {
        brand: Brand;
    }
</script>

<script lang="ts">
    const { brand }: BrandCardProps = $props();
</script>

<div class="card hover:-translate-y-2">
    <figure>
        <img src={brand.image} alt={brand.name} class="h-64" />
    </figure>
    <div class="card-body">
        <div class="card-title">
            <h3>{brand.name}</h3>
            <div class="badge badge-secondary">{brand.country}</div>
        </div>
        <h3>品牌所屬: {brand.owner}</h3>
        <div class="card-actions justify-end"></div>
    </div>
</div>
