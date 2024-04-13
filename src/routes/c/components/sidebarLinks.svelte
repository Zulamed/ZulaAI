<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { needsPaddingChangedForMobile } from "../store";
    import Tooltip from "$lib/components/tooltip.svelte";

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

    function openExitDialog() {
        const exitDialogOverlay = document.querySelector(
            ".exit-dialog-overlay",
        ) as HTMLDivElement;
        const exitDialog = document.querySelector(
            ".exit-dialog",
        ) as HTMLDivElement;
        exitDialogOverlay.style.display = "block";
        exitDialog.style.display = "block";
    }

    function closeExitDialog() {
        const exitDialogOverlay = document.querySelector(
            ".exit-dialog-overlay",
        ) as HTMLDivElement;
        const exitDialog = document.querySelector(
            ".exit-dialog",
        ) as HTMLDivElement;
        exitDialogOverlay.style.display = "none";
        exitDialog.style.display = "none";
    }
</script>

{#if $page.url.pathname === "/c/chatId" && isMobile}
    <div style="display: none;" />
{:else}
    <div class="sidebar-buttons">
        <div class="button-wrapper">
            <Tooltip tooltipText="Chat">
                <a
                    slot="trigger"
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
            </Tooltip>
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
            <Tooltip tooltipText="Einstellungen">
                <a
                    slot="trigger"
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
            </Tooltip>
            <span>Einstellungen</span>
        </div>
        <div class="button-wrapper">
            <Tooltip tooltipText="Ausloggen">
                <button
                    slot="trigger"
                    on:click={openExitDialog}
                    class="button-lg"
                >
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
            </Tooltip>
            <span>Ausloggen</span>
        </div>

        <div class="exit-dialog-overlay">
            <div class="exit-dialog">
                <div class="exit-dialog-content">
                    <p>Wollen Sie sich wirklich ausloggen?</p>
                    <div class="exit-dialog-buttons">
                        <button
                            class="exit-dialog-button exit-dialog-button-yes"
                            >Ausloggen</button
                        >
                        <button
                            on:click={closeExitDialog}
                            class="exit-dialog-button exit-dialog-button-no"
                            >Schließen</button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    /* =========Dialog========= */

    .exit-dialog-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000;
    }

    .exit-dialog {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 200px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        z-index: 101;
        transition: 0.2s ease;
    }

    .exit-dialog-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding: 15px 20px;
    }

    .exit-dialog-content p {
        font-size: 20px;
        font-weight: 500;
        color: #000;
    }

    .exit-dialog-buttons {
        display: flex;
        gap: 20px;
    }

    .exit-dialog-button {
        all: unset;
        cursor: pointer;
        padding: 10px 20px;
        color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
    }
    .exit-dialog-button-yes {
        background: #00bca1;
    }
    .exit-dialog-button-yes:hover,
    .exit-dialog-button-yes:active {
        background: #00a58c;
    }
    .exit-dialog-button-no {
        background: red;
    }
    .exit-dialog-button-no:hover,
    .exit-dialog-button-no:active {
        background: #c70000;
    }

    /* =========Dialog========= */

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
    .button-lg:hover,
    .button-lg:active {
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
        /* =========Dialog=========  */

        .exit-dialog {
            width: 400px;
            height: 200px;
            border-radius: 8px;
        }

        .exit-dialog-content {
            gap: 30px;
            padding: 15px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .exit-dialog-content p {
            font-size: 16px;
        }

        .exit-dialog-buttons {
            gap: 10px;
        }

        .exit-dialog-button {
            padding: 10px 15px;
            border-radius: 6px;
        }

        /* =========Dialog=========  */

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
        /* ========Dialog========= */

        .exit-dialog {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }

        .exit-dialog-content {
            gap: 20px;
            padding: 15px 20px;
        }

        .exit-dialog-content p {
            font-size: 16px;
        }

        .exit-dialog-buttons {
            gap: 10px;
        }

        .exit-dialog-button {
            padding: 10px 15px;
            border-radius: 6px;
        }

        /* ========Dialog========= */

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
