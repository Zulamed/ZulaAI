<script lang="ts">
    import { onMount } from "svelte";
    import Preloader from "$lib/components/preloader.svelte";
    import Sidebarlinks from "$lib/components/sidebarLinks.svelte";
    import { needsPaddingChangedForMobile } from "./store";
    import { page } from "$app/stores";

    let isMobile = false;
    let isLoading = true;

    const updateMobileStatus = () => {
        isMobile = window.innerWidth <= 1024;
    };

    onMount(() => {
        updateMobileStatus();
        isLoading = false;
        window.addEventListener("resize", updateMobileStatus);

        return () => {
            window.removeEventListener("resize", updateMobileStatus);
        };
    });

    const goBack = () => {
        history.back();
    };
</script>

{#if isLoading}
    <Preloader />
{:else}
    <div class="container" class:mobile-padding={$needsPaddingChangedForMobile}>
        <div class="sidebar">
            <Sidebarlinks />
        </div>
        <div class="main-side">
            {#if $page.url.pathname === "/c/chatId" && isMobile}
                <div style="display: none;" />
            {:else}
                <div class="header">
                    {#if $page.url.pathname === "/settings/account" || $page.url.pathname === "/settings/password"}
                        <a href="/settings" class="btn-back">
                            <img src="/icons/back.svg" alt="Back" />
                        </a>
                    {/if}

                    <a href="/c">
                        <img
                            src="/logo/Grouplogo2.svg"
                            class="logotype"
                            alt="ZulaMed"
                        />
                    </a>
                </div>
            {/if}
            <slot />
        </div>
    </div>
{/if}

<style>
    /* ========HEADER======== */
    .btn-back {
        display: none;
    }
    .mobile-padding {
        padding: 36px 0px !important;
    }

    .main-side {
        width: 100%;
    }
    .header {
        width: 100%;
        height: 93px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header .logotype {
        width: 317px;
    }

    /* ========SCROLL BAR======== */

    /* ========SCROLL BAR======== */

    .container {
        width: 100%;
        height: 100vh;
        display: flex;
    }

    .sidebar {
        width: 30%;
        height: 100%;
        display: flex;
    }

    @media (max-width: 1440px) {
        .container {
            width: 100%;
            height: 100vh;
            display: flex;
        }
        .sidebar {
            width: 35%;
            height: 100%;
            display: flex;
        }

        /* HEADER */

        .header {
            height: 54px;
        }

        .header .logotype {
            width: 164px;
        }

        /* HEADER */
    }

    @media (max-width: 1024px) {
        .btn-back {
            all: unset;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            cursor: pointer;
            left: 20px;
            z-index: 1000;
        }
        .container {
            width: 100%;
            height: 100dvh;
            padding: 36px 0;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
        }
        .sidebar {
            width: 100%;
            height: fit-content;
            background-color: #fff;
            z-index: 100;
            margin: 0;
            position: fixed;
            bottom: 20px;
        }
        .header {
            position: fixed;
            top: 20px;
            height: fit-content;
            background: #fff;
        }
    }
</style>
