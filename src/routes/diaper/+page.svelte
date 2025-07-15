<script lang="ts">
    import { goto } from "$app/navigation";
    import { Hero } from "$lib/components/layout";
    import { IconCheck, IconSearch, IconX } from "@tabler/icons-svelte";

    const { data } = $props();
    let width = $state(0);
    let display = $derived(width > 1024 ? "table" : "grid");
    let filters = $state({
        search: "",
        madeInChina: false
    });

    let diapers = $derived(
        data.diapers
            .filter((diaper) => diaper.name.toLowerCase().includes(filters.search.toLowerCase()))
            .filter((diaper) =>
                filters.madeInChina
                    ? diaper.countryOfOrigin === "china"
                    : diaper.countryOfOrigin !== "china"
            )
    );
</script>

<svelte:window bind:innerWidth={width} />

<div class="relative w-full">
    <Hero title="diapers" image="pexels-rdne-6849268.jpg" />

    <div class="container mx-auto p-8">
        <div class="grid grid-rows-[auto_1fr] gap-8 lg:grid-cols-[auto_1fr]">
            <div class="card max-w-sm p-8 shadow-sm">
                <div class="flex flex-col gap-4">
                    <label class="input">
                        <IconSearch />
                        <input
                            type="search"
                            class="grow"
                            placeholder="Search"
                            bind:value={filters.search}
                        />
                        <kbd class="kbd kbd-sm">⌘</kbd>
                        <kbd class="kbd kbd-sm">K</kbd>
                    </label>

                    <fieldset class="fieldset flex items-center gap-2">
                        <label class="toggle">
                            <input
                                type="checkbox"
                                bind:checked={filters.madeInChina}
                                class="checked:rounded-full checked:bg-red-400"
                            />
                            <IconX aria-label="enabled" class="size-4" />
                            <IconCheck aria-label="disabled" class="size-4" />
                        </label> Made in China
                    </fieldset>
                </div>
            </div>
            <div class="border p-8">
                <div class="flex justify-end gap-4">
                    <button onclick={() => (display = "table")}>table</button>
                    <button onclick={() => (display = "grid")}>grid</button>
                </div>

                {#if display === "table"}
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>價格</th>
                                <th>片數（標準包）</th>
                                <th>單價</th>
                                <th>產地</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each diapers as diaper}
                                <tr onclick={() => goto(`/diaper/${diaper.id}`)}>
                                    <td class="flex gap-2">
                                        {diaper.brand}
                                        {diaper.name}
                                    </td>
                                    <td>{diaper.price}</td>
                                    <td>
                                        {diaper.unitCount}
                                    </td>
                                    <td>
                                        {(diaper.price / diaper.unitCount).toFixed(2)}
                                    </td>
                                    <td>
                                        {diaper.countryOfOrigin}
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                {:else}
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {#each diapers as diaper}
                            <div class="card debug p-3">
                                <h4>{diaper.name}</h4>
                                <p>{diaper.brand} - made in {diaper.countryOfOrigin}</p>
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
