<script lang="ts">
    import { createTooltip, melt } from "@melt-ui/svelte";
    import { fade } from "svelte/transition";

    type Position =
        | "top"
        | "top-start"
        | "top-end"
        | "right"
        | "right-start"
        | "right-end"
        | "bottom"
        | "bottom-start"
        | "bottom-end"
        | "left"
        | "left-start"
        | "left-end";

    export let placement: Position = "top";

    const {
        elements: { trigger, content },
        states: { open },
    } = createTooltip({
        positioning: {
            placement: placement,
        },
        openDelay: 0,
        closeOnPointerDown: true,
        forceVisible: true,
    });
</script>

<slot trigger={$trigger} name="button" />

{#if $open}
    <div use:melt={$content} transition:fade={{ duration: 50 }} class="tooltip">
        <slot class="salam" name="content" />
    </div>
{/if}

<style>
    .tooltip {
        background-color: #3b3b3bdc;
        padding: 7px 11px;
        color: #fff;
        font-size: 12px;
        border-radius: 5px;
        z-index: 9999;
    }
</style>
