<script lang="ts">
    import { Hero } from "$lib/components/layout";
    const { data } = $props();
</script>

<div class="relative w-full">
    <Hero title={data.name} />
</div>
