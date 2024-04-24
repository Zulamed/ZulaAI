<script context="module" lang="ts">
    import { DateField, type DateFieldProps } from "bits-ui";
    import { onMount } from "svelte";

    export type DateValue = DateFieldProps["value"];
</script>

<script lang="ts">
    import type { Writable } from "svelte/store";
    let up = false;

    function onValueChange(e: DateValue | undefined) {
        up = e != undefined;
    }

    export let value: Writable<DateValue | undefined>;

    onMount(() => {
        up = $value != undefined;
    });
</script>

<DateField.Root locale="en-UK" {onValueChange} bind:value={$value}>
    <div class="entryarea">
        <DateField.Input
            class="date-input {up == true ? 'up' : ''}"
            let:segments
        >
            {#each segments as { part, value }}
                {#if part === "literal"}
                    <DateField.Segment {part} class="muted-foreground">
                        {value}
                    </DateField.Segment>
                {:else}
                    <DateField.Segment {part} class="input-part">
                        {value}
                    </DateField.Segment>
                {/if}
            {/each}
        </DateField.Input>
    </div>
</DateField.Root>
