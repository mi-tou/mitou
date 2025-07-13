<script lang="ts" module>
    import type { Snippet } from "svelte";

    interface MainProps {
        children: Snippet;
    }
</script>

<script lang="ts">
    let { children }: MainProps = $props();
</script>

<main class="relative min-h-dvh w-full">
    {@render children()}
</main>
