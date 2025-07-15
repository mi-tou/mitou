<script lang="ts" module>
    import type { Brand } from "$lib/data/brands";

    interface BrandCardProps {
        brand: Brand;
    }
</script>

<script lang="ts">
    const { brand }: BrandCardProps = $props();
</script>

<a class="card card-border card-lg hover:-translate-y-2" href="/brand/{brand.id}">
    <figure>
        <img
            src={brand.image}
            alt={brand.name}
            class="size-full h-64 object-contain object-center md:object-cover"
        />
    </figure>
    <div class="card-body">
        <div class="card-title">
            <h3>{brand.name}</h3>
        </div>
        <div class="flex items-center gap-2">
            <h3>{brand.owner}</h3>
            <div class="badge badge-secondary">{brand.country}</div>
        </div>

        <div class="card-actions"></div>
    </div>
</a>
