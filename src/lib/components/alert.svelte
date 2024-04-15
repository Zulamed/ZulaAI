<script lang="ts" context="module">
    export type ToastData = {
        fieldName: string;
        error?: string;
    };

    const {
        elements: { content, title, description },
        helpers,
        states: { toasts },
        actions: { portal },
    } = createToaster<ToastData>({
        closeDelay: 3500,
    });

    export const addNotification = helpers.addToast;
    export const removeNotification = helpers.removeToast;
</script>

<script lang="ts">
    import { createToaster, melt } from "@melt-ui/svelte";
    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";
</script>

<div class="toast-container" use:portal>
    {#each $toasts as { id, data } (id)}
        <div
            use:melt={$content(id)}
            animate:flip={{ duration: 500 }}
            in:fly={{ duration: 150, y: "-100%" }}
            out:fly={{ duration: 150, y: "-100%" }}
            class="toast-inner"
        >
            <div class="toast-content">
                <h3 use:melt={$title(id)} class="toast-fieldname">
                    {data.fieldName}
                    <span />
                </h3>
                {#if data.error}
                    <p class="toast-description" use:melt={$description(id)}>
                        {data.error}
                    </p>
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    .toast-container {
        display: flex;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 999;
        margin: 1rem;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }
    .toast-inner {
        border-radius: 0.5rem;
        color: #ffffff;
        box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .toast-content {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 19px;
        gap: 10px;
        align-items: left;
        background: #ff00001a;
        border: 1px solid #ff0000;
        color: #ff0000;
        border-radius: 10px;
        min-width: 231px;
        z-index: 999;
    }

    .toast-fieldname {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 17px;
    }

    .toast-description {
        font-size: 14px;
    }
    @media (max-width: 768px) {
        .toast-content {
            padding: 14px;
            z-index: 999;
        }
        .toast-fieldname {
            font-size: 14px;
        }
    }
</style>
