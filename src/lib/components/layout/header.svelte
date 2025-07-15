<script lang="ts" module>
    interface Link {
        label: string;
        href: string;
    }

    interface HeaderProps {
        title: string;
        links: Link[];
        themeKey?: string;
    }
</script>

<script lang="ts">
    import { page } from "$app/state";
    import { cn } from "$lib/utils";
    import { IconMenu } from "@tabler/icons-svelte";

    let { title, links, themeKey }: HeaderProps = $props();
    let activeUrl = $derived(page.url.pathname);

    let y = $state(0);
    let w = $state(0);
    let isFloating = $derived(y > 80 && w > 768);
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={w} />

<header
    class={cn("fixed inset-x-0 top-0 z-50 px-8", {
        "text-neutral-content bg-transparent transition-all": true,
        "bg-neutral": isFloating
    })}
>
    <div class="container mx-auto h-16 overflow-hidden">
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <IconMenu class="h-5 w-5" />
                    </div>
                    <ul
                        class="menu menu-sm dropdown-content bg-neutral rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {#each links as link}
                            <li><a href={link.href}>{link.label}</a></li>
                        {/each}
                    </ul>
                </div>
                <a href="/" class="text-xl">{title}</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal">
                    {#each links as link}
                        <li>
                            <a
                                href={link.href}
                                class={cn("link hover:link-hover", {
                                    "text-info": link.href === activeUrl
                                })}>{link.label}</a
                            >
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="navbar-end gap-4"></div>
        </div>
    </div>
</header>
