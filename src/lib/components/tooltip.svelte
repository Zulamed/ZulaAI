<script lang="ts">
    import { Tooltip } from "bits-ui";
    import { fly } from "svelte/transition";
    export let tooltipText = "";
</script>

<Tooltip.Root openDelay={0}>
    <Tooltip.Trigger class="tooltip-trigger">
        <slot name="trigger" />
    </Tooltip.Trigger>
    <Tooltip.Content
        side="right"
        class="tooltip-content"
        transition={fly}
        transitionConfig={{ x: -7, duration: 100 }}
    >
        <Tooltip.Arrow />
        {tooltipText}
    </Tooltip.Content>
</Tooltip.Root>
