<script lang="ts">
    import { Checkbox, Label } from "bits-ui";

    // export let onCheckedChange: (checked: boolean | "indeterminate") => void;
    export let checked: boolean | "indeterminate" = false;
</script>

<div class="all-wrapper">
    <Checkbox.Root
        id="rules"
        aria-labelledby="rules-label"
        class="checkbox-wrapper"
        bind:checked
    >
        <Checkbox.Indicator let:isChecked class="checkbox-bg">
            {#if isChecked}
                <img src="/icons/check.svg" alt="check" />
            {:else}
                <img src="/icons/uncheck.svg" alt="minus" />
            {/if}
        </Checkbox.Indicator>
    </Checkbox.Root>
    <Label.Root id="rules-label" for="rules" class="checkbox-label">
        Ich habe die Regeln gelesen
    </Label.Root>
</div>
