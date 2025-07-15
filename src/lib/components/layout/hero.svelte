<script lang="ts" module>
    interface HeroProps {
        title: string;
        description?: string;
    }
</script>

<script lang="ts">
    const { title, description }: HeroProps = $props();
</script>

<section class="hero relative h-96">
    <div class="prose xl:prose-xl p-8 text-center">
        <h2 class="capitalize">{title}</h2>
        <p>{description}</p>
    </div>
</section>
