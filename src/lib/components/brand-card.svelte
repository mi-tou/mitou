<script lang="ts" module>
    import type { Brand } from "$lib/data/brands";

    interface BrandCardProps {
        brand: Brand;
    }
</script>

<script lang="ts">
    const { brand }: BrandCardProps = $props();
</script>

<a href="/brand/{brand.id}" class="hover:-translate-y-2">
    <div class="card">
        <figure>
            <img src={brand.image} alt={brand.name} />
        </figure>
        <div class="card-body">
            <div class="card-title">
                <h3>{brand.name}</h3>
                <div class="badge badge-secondary">{brand.country}</div>
            </div>
            <h3>{brand.id}</h3>
            <div class="card-actions justify-end"></div>
        </div>
    </div>
</a>
