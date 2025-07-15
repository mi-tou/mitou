<script lang="ts">
    import { Hero } from "$lib/components/layout";

    const { data } = $props();
</script>

<div class="relative w-full">
    <Hero title="diapers" image="pexels-rdne-6849268.jpg" />
    <div class="container mx-auto p-8">
        <pre>
        {JSON.stringify(data, null, 2)}
    </pre>
    </div>
</div>
