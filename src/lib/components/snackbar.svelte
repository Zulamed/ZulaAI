<script lang="ts" context="module">
    export type ToastData = {
        message: string;
    };

    const {
        elements: { content, description },
        helpers,
        states: { toasts },
        actions: { portal },
    } = createToaster<ToastData>({
        closeDelay: 3000,
    });

    export const addNotification = helpers.addToast;
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
            in:fly={{ duration: 150, y: "100%" }}
            out:fly={{ duration: 150, y: "100%" }}
            class="toast-inner"
        >
            <div class="toast-content">
                {#if data.message}
                    <div class="toast-message" use:melt={$description(id)}>
                        {data.message}
                    </div>
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    .toast-container {
        display: flex;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2%;
        z-index: 9999;
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
        position: relative;
        padding: 14px;
        gap: 1rem;
        align-items: center;
        background: #1b1b1b;
        border-radius: 10px;
        width: fit-content;
        flex-wrap: nowrap;
    }

    .toast-message {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        font-weight: 500;
        font-size: 14px;
        white-space: nowrap;
    }

    @media (max-width: 1440px) {
        .toast-content {
            padding: 13px;
        }

        .toast-message {
            font-size: 13px;
        }
    }

    @media (max-width: 1024px) {
        .toast-content {
            padding: 11px;
        }

        .toast-message {
            font-size: 11px;
        }
    }
</style>
