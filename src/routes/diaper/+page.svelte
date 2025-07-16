<script lang="ts">
    import { Hero } from "$lib/components/layout";
    import {
        IconCheck,
        IconLayoutBoardFilled,
        IconListDetails,
        IconSearch,
        IconX
    } from "@tabler/icons-svelte";

    const { data } = $props();
    let width = $state(0);
    let display = $derived(width > 1024 ? "table" : "grid");

    let filters = $state({
        search: "",
        type: "黏貼型",
        size: "M",
        madeInChina: false
    });
    let diapers = $derived(
        data.diapers
            .filter((diaper) => diaper.name.toLowerCase().includes(filters.search.toLowerCase()))
            .filter((diaper) => diaper.type === filters.type)
            .filter((diaper) =>
                filters.madeInChina
                    ? diaper.countryOfOrigin === "中國"
                    : diaper.countryOfOrigin !== "中國"
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

                    <select class="select" bind:value={filters.type}>
                        {#each data.types as type}
                            <option>{type}</option>
                        {/each}
                    </select>

                    <select class="select" bind:value={filters.size}>
                        {#each data.sizes as size}
                            <option>{size}</option>
                        {/each}
                    </select>

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

            <div class="card p-8 shadow-sm">
                <div class="card-title justify-between">
                    <h3>價格統計 PChome 無折扣，無特殊型號，最佳價格請參考折扣區。</h3>
                    <div class="flex justify-end gap-4">
                        <button class="btn btn-circle" onclick={() => (display = "table")}
                            ><IconListDetails /></button
                        >
                        <button class="btn btn-square" onclick={() => (display = "grid")}
                            ><IconLayoutBoardFilled /></button
                        >
                    </div>
                </div>

                {#if display === "table"}
                    <table class="table">
                        <thead>
                            <tr>
                                <th>名稱</th>
                                <th>類型</th>
                                <th>尺寸</th>
                                <th>價格</th>
                                <th>單價(片)</th>
                                <th>產地</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each diapers as diaper}
                                {#each diaper.prices as price}
                                    {#if price.size === filters.size}
                                        <tr>
                                            <td class="flex items-center gap-2">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle h-24 w-24">
                                                        <img
                                                            src={diaper.image}
                                                            alt="{diaper.brand} {diaper.name}"
                                                        />
                                                    </div>
                                                </div>
                                                {diaper.brand}
                                                {diaper.name}
                                            </td>
                                            <td>{diaper.type}</td>
                                            <td>{price.size}</td>
                                            <td>{price.pricing} / {price.numberOfItems} 片</td>
                                            <td class="w-fit text-right">
                                                {(price.pricing / price.numberOfItems).toFixed(2)}
                                            </td>
                                            <td>
                                                {diaper.countryOfOrigin}
                                            </td>
                                        </tr>
                                    {/if}
                                {/each}
                            {/each}
                        </tbody>
                    </table>
                {:else}
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {#each diapers as diaper}
                            {#each diaper.prices as price}
                                {#if price.size === filters.size}
                                    <div class="card bg-base-100 shadow-sm">
                                        <figure>
                                            <img
                                                src={diaper.image}
                                                alt="{diaper.brand} {diaper.name}"
                                            />
                                        </figure>
                                        <div class="card-body">
                                            <h2 class="card-title">
                                                {diaper.brand}
                                                {diaper.name}
                                                <div class="badge badge-primary">
                                                    {diaper.countryOfOrigin}
                                                </div>
                                            </h2>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>類型</th>
                                                        <th>尺寸</th>
                                                        <th>價格</th>
                                                        <th>單價(片)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{diaper.type}</td>
                                                        <td>{price.size}</td>
                                                        <td
                                                            >{price.pricing} / {price.numberOfItems}
                                                            片</td
                                                        >
                                                        <td class="w-fit text-right">
                                                            {(
                                                                price.pricing / price.numberOfItems
                                                            ).toFixed(2)}
                                                        </td>
                                                    </tr></tbody
                                                >
                                            </table>
                                            <div class="card-actions justify-end"></div>
                                        </div>
                                    </div>
                                {/if}
                            {/each}
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
