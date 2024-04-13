<script lang="ts">
    import { Select, type Selected } from "bits-ui";
    import type { Writable } from "svelte/store";

    const semesters = [
        { value: "1-semester", label: "1.⁠ ⁠Semester" },
        { value: "2-semester", label: "2.⁠ ⁠Semester" },
        { value: "3-semester", label: "3.⁠ ⁠Semester" },
        { value: "4-semester", label: "4.⁠ ⁠Semester" },
        { value: "5-semester", label: "5.⁠ ⁠Semester" },
        { value: "6-semester", label: "6.⁠ ⁠Semester" },
        { value: "7-semester", label: "7.⁠ ⁠Semester" },
        { value: "8-semester", label: "8.⁠ ⁠Semester" },
        { value: "9-semester", label: "9.⁠ ⁠Semester" },
        { value: "10-semester", label: "10.⁠ ⁠Semester" },
        { value: "pj", label: "PJ" },
    ];

    export let selected: Writable<Selected<string> | undefined>;
</script>

<Select.Root items={semesters} bind:selected={$selected}>
    <div class="entryarea">
        <Select.Trigger
            aria-label="Wählen Sie ihr Semester"
            class="select-input {selected ? 'active' : ''}"
        >
            <Select.Value placeholder="Wählen Sie ihr Semester" />
            <img class="expand-svg" src="/icons/expand.svg" alt="" />
        </Select.Trigger>

        <Select.Content sideOffset={8} class="select-options">
            {#each semesters as semester}
                <Select.Item
                    value={semester.value}
                    label={semester.label}
                    class="options-item"
                >
                    {semester.label}
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
