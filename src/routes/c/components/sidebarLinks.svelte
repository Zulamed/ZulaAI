<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { needsPaddingChangedForMobile } from "../store";

    function openChatlist() {
        const chatlist = document.querySelector(
            ".sidebar-chatlist",
        ) as HTMLDivElement;
        chatlist.style.left = "0";
    }
    let isMobile = false;
    let isLoading = true;

    const updateMobileStatus = () => {
        isMobile = window.innerWidth <= 1024;
        $needsPaddingChangedForMobile = isMobile;
    };

    onMount(() => {
        updateMobileStatus();
        isLoading = false;
        window.addEventListener("resize", updateMobileStatus);

        return () => {
            window.removeEventListener("resize", updateMobileStatus);
        };
    });
</script>

{#if $page.url.pathname === "/c/chatId" && isMobile}
    <div style="display: none;" />
{:else}
    <div class="sidebar-buttons">
        <div class="button-wrapper">
            <a
                href="/c"
                class="button-lg"
                class:active={$page.url.pathname === "/c" ||
                    $page.url.pathname === "/c/chatId"}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A1A1A1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-message-circle"
                    ><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg
                >
            </a>
            <span>Chat</span>
        </div>

        <div class="button-wrapper btn-history">
            <button on:click={openChatlist} class="button-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-history"
                    ><path
                        d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                    /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg
                >
            </button>
            <span>Verlauf</span>
        </div>
        <div class="button-wrapper">
            <a
                class="button-lg"
                class:active={$page.url.pathname === "/c/settings"}
                href="/c/settings"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A1A1A1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-settings"
                    ><path
                        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                    /><circle cx="12" cy="12" r="3" /></svg
                >
            </a>
            <span>Einstellungen</span>
        </div>
        <div class="button-wrapper">
            <button class="button-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-log-out"
                    ><path
                        d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                    /><polyline points="16 17 21 12 16 7" /><line
                        x1="21"
                        x2="9"
                        y1="12"
                        y2="12"
                    /></svg
                >
            </button>
            <span>Ausloggen</span>
        </div>
    </div>
{/if}

<style>
    .sidebar-buttons {
        height: 100%;
        width: 15%;
        border-right: 1px solid #eaeaea;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 235px 0 0 0;
    }

    .button-lg {
        all: unset;
        width: 46px;
        height: 46px;
        cursor: pointer;
        border-radius: 9px;
        background: #f9f9f9;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn-history {
        display: none;
    }
    .button-wrapper span {
        display: none;
    }
    .button-lg:hover {
        background: #f1f1f1;
    }
    .button-lg.active {
        background: #00bca1;
    }

    .button-lg.active svg {
        stroke: #fff;
    }

    .button-lg svg {
        width: 33px;
        height: 33px;
        stroke: #00bca1;
    }

    @media (max-width: 1440px) {
        .sidebar-buttons {
            height: 100%;
            width: 15%;
            border-right: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            padding: 149px 0 0 0;
        }
        .button-wrapper span {
            display: none;
        }
        .button-lg {
            all: unset;
            width: 32px;
            height: 32px;
            background: #f9f9f9;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 9px;
        }
        .button-lg svg {
            width: 23px;
            height: 23px;
        }
    }

    @media (max-width: 1024px) {
        .sidebar-buttons {
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 0 39px;
            gap: 20px;
        }
        .button-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 11px;
            width: 55px;
        }
        .button-lg {
            all: unset;
            width: 55px;
            height: 55px;
            cursor: pointer;
            border-radius: 9px;
            background: #f9f9f9;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .button-lg svg {
            width: 31px;
            height: 31px;
        }
        .button-wrapper span {
            display: block;
            color: #000;
            font-size: 10px;
            font-weight: 400;
        }
    }
</style>
