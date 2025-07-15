<script lang="ts" module>
    interface HeroProps {
        title: string;
        description?: string;
        image?: string;
        imageClass?: string;
    }
</script>

<script lang="ts">
    import { cn } from "$lib/utils";
    const { title, description, image, imageClass }: HeroProps = $props();
</script>

<section class="hero relative h-96 w-full overflow-hidden">
    <div class="prose xl:prose-xl p-8 text-center">
        <h2 class="capitalize">{title}</h2>
        <p>{description}</p>
    </div>

    {#if image}
        <img
            src="/image/{image}"
            class={cn("absolute inset-0 -z-10 size-full object-cover object-bottom", imageClass)}
            alt="hero cov"
        />
    {/if}
</section>
