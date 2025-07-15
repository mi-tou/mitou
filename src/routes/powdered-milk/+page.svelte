<script lang="ts">
    import { Hero } from "$lib/components/layout";

    const { data } = $props();
</script>

<div class="relative w-full">
    <Hero title="powdered-milk" />
    <div class="container mx-auto p-8">
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
</div>
