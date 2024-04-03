<script lang="ts">
    import { Select, type Selected } from "bits-ui";
    import type { Writable } from "svelte/store";

    const themes = [
        { value: "winter ", label: "Wintersemester" },
        { value: "autumn", label: "Herbstsemester " },
        { value: "summer", label: "Sommersemester " },
        { value: "spring", label: "Frühlingssemester " },
    ];

    export let selected: Writable<Selected<string> | undefined>;
</script>

<Select.Root items={themes} bind:selected={$selected}>
    <div class="entryarea">
        <Select.Trigger aria-label="Wähle Ihr Semester" class="select-input">
            <Select.Value placeholder="Wähle Ihr Semester" />
            <img class="expand-svg" src="/icons/expand.svg" alt="" />
        </Select.Trigger>

        <Select.Content sideOffset={8} class="select-options">
            {#each themes as theme}
                <Select.Item
                    value={theme.value}
                    label={theme.label}
                    class="options-item"
                >
                    {theme.label}
                </Select.Item>
            {/each}
        </Select.Content>
    </div>
</Select.Root>

<style>
    .expand-svg {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 43px;
        height: 43px;
    }

    @media (max-width: 1440px) {
        .expand-svg {
            width: 35px;
            height: 35px;
        }
    }
</style>
