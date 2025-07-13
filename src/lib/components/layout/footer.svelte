<script lang="ts" module>
    interface FooterProps {
        year: string;
        title: string;
    }
</script>

<script lang="ts">
    import { IconBrandInstagram, IconBrandThreads, IconHorseToy } from "@tabler/icons-svelte";
    const { year, title }: FooterProps = $props();
</script>

<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 px-8">
    <aside class="mx-auto grid-flow-col items-center sm:mx-0">
        <IconHorseToy class="size-10" />
        <p>© {year} - {title} All right reserved.</p>
    </aside>
    <nav class="mx-auto grid-flow-col gap-4 sm:mx-0 md:place-self-center md:justify-self-end">
        <a href="https://www.instagram.com/" target="_blank">
            <IconBrandInstagram class="size-8" />
        </a>
        <a href="https://www.threads.com/" target="_blank">
            <IconBrandThreads class="size-8" />
        </a>
    </nav>
</footer>
