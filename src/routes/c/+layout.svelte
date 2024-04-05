<script lang="ts">
    import { onMount } from "svelte";
    import Preloader from "$lib/components/preloader.svelte";

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
</script>

{#if isLoading}
    <Preloader />
{:else}
    <div class="container">
        {#if !isMobile}
            <div class="sidebar">
                <div class="sidebar-buttons">
                    <button class="button-lg active">
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
                    </button>

                    <button class="button-lg">
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
                    </button>

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
                </div>
                <div class="sidebar-chatlist">
                    <h1 class="chatlist-title">Meine Simulationen</h1>
                    <div class="search-chat-wrapper">
                        <button class="add-chat"
                            ><img src="/icons/plus.svg" alt="plus" />Neue
                            Simulation</button
                        >
                    </div>
                    <div class="search-chat-wrapper">
                        <label class="search-chat">
                            <img src="/icons/search.svg" alt="search" />
                            <input type="text" placeholder="Suche" />
                        </label>
                    </div>

                    <div class="chatlist">
                        <a href="." class="chatlist-item">
                            <h2 class="chat-title">Patient - example 1</h2>
                            <span class="last-update">9:34 pm</span>
                            <img src="/logo/Mobilelogo.svg" alt="" />
                            <p class="last-message">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ...
                            </p>
                        </a>
                        <a href="." class="chatlist-item active">
                            <h2 class="chat-title">Patient - example 1</h2>
                            <span class="last-update">9:34 pm</span>
                            <img src="/logo/Mobilelogo.svg" alt="" />
                            <p class="last-message">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ...
                            </p>
                        </a>
                        <a href="." class="chatlist-item">
                            <h2 class="chat-title">Patient - example 1</h2>
                            <span class="last-update">9:34 pm</span>
                            <img src="/logo/Mobilelogo.svg" alt="" />
                            <p class="last-message">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ...
                            </p>
                        </a>
                        <a href="." class="chatlist-item">
                            <h2 class="chat-title">Patient - example 1</h2>
                            <span class="last-update">9:34 pm</span>
                            <img src="/logo/Mobilelogo.svg" alt="" />
                            <p class="last-message">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ...
                            </p>
                        </a>
                        <a href="." class="chatlist-item">
                            <h2 class="chat-title">Patient - example 1</h2>
                            <span class="last-update">9:34 pm</span>
                            <img src="/logo/Mobilelogo.svg" alt="" />
                            <p class="last-message">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ...
                            </p>
                        </a>
                        <a href="." class="chatlist-item">
                            <h2 class="chat-title">Patient - example 1</h2>
                            <span class="last-update">9:34 pm</span>
                            <img src="/logo/Mobilelogo.svg" alt="" />
                            <p class="last-message">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ...
                            </p>
                        </a>
                        <a href="." class="chatlist-item">
                            <h2 class="chat-title">Patient - example 1</h2>
                            <span class="last-update">9:34 pm</span>
                            <img src="/logo/Mobilelogo.svg" alt="" />
                            <p class="last-message">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ...
                            </p>
                        </a>
                        <a href="." class="chatlist-item">
                            <h2 class="chat-title">Patient - example 1</h2>
                            <span class="last-update">9:34 pm</span>
                            <img src="/logo/Mobilelogo.svg" alt="" />
                            <p class="last-message">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ...
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        {/if}
        <slot />
    </div>
{/if}

<style>
    /* ========SCROLL BAR======== */

    .chatlist::-webkit-scrollbar {
        width: 4px;
    }
    .chatlist::-webkit-scrollbar-track {
        border-radius: 25px;
        background-color: transparent;
    }
    .chatlist::-webkit-scrollbar-thumb {
        border-radius: 25px;
        background-color: #00bca1;
    }
    .chatlist {
        scrollbar-width: none;
        scrollbar-color: #00bca1 transparent;
    }

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

    .sidebar .sidebar-buttons {
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

    .sidebar .sidebar-chatlist {
        height: 100%;
        width: 85%;
        padding: 93px 17px 20px 17px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }

    .chatlist-title {
        width: 100%;
        text-align: start;
        font-size: 25px;
        font-weight: 600;
        color: #000;
        padding: 0 0 0 20px;
    }

    .add-chat {
        all: unset;
        cursor: pointer;
        display: flex;
        width: 100%;
        align-items: center;
        gap: 7px;
        padding: 14px 24px;
        color: #00bca1;
        border: 1px solid #00bca1;
        border-radius: 6px;
        font-size: 20px;
        font-weight: 500;
        line-height: 27px;
    }

    .add-chat:hover {
        background-color: #f1f1f1;
    }

    .search-chat-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .search-chat {
        all: unset;
        display: flex;
        width: 100%;
        align-items: center;
        gap: 16px;
        padding: 9px 17px 9px 17px;
        background-color: #f4f4f4;
        border: 1px solid #f4f4f4;
        border-radius: 6px;
        font-size: 15px;
        font-weight: 500;
        line-height: 27px;
        cursor: text;
    }

    .search-chat img {
        width: 20px;
    }

    .search-chat input {
        all: unset;
        width: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #000;
    }

    .search-chat:focus-within {
        border: 1px solid #00bca1;
    }

    /* =========chatlist========= */

    .chatlist {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px 5px 10px 0;
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: none;
    }
    @supports (-ms-ime-align: auto) {
        .chatlist {
            scrollbar-width: none;
        }
    }

    .chatlist-item {
        all: unset;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 7px;
        padding: 19px 38px;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 6px;
        cursor: pointer;
        color: #000;
    }

    .chatlist-item.active {
        background-color: #00bca11a;
        border: 1px solid #00bca11a;
    }

    .chatlist-item:hover {
        background-color: #f4f4f4;
    }

    .chatlist-item.active:hover {
        background-color: #00bca11a;
    }

    .chatlist-item img {
        position: absolute;
        top: 22px;
        left: 11px;
        width: 17px;
    }

    .chat-title {
        font-size: 16px;
        font-weight: 700;
        color: #000;
    }

    .last-message {
        font-size: 15px;
        font-weight: 400;
        color: #000;
        max-width: 232px;
    }

    .last-update {
        position: absolute;
        top: 21px;
        right: 16px;
        font-size: 12px;
        font-weight: 400;
        color: #1e1f22;
    }

    /* =========header========= */

    .main {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 17px 22px 0;
    }

    .header {
        width: 100%;
        height: 93px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chatbox-logo {
        width: 300px;
    }

    /* =========chatbox start page========= */

    .start-screen {
        width: 100%;
        background: #f5f5f5;
        border-radius: 15px;
        height: calc(100% - 54px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .top-part img {
        width: 187px;
    }

    .middle-part {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .middle-part-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 26px;
    }

    .home-title {
        font-size: 34px;
        font-weight: 700;
        color: #000;
        margin-top: 0px;
    }

    .home-title-2 {
        font-size: 33px;
        font-weight: 700;
        color: #00bca1;
    }

    .home-sm-text {
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: #000;
    }

    .start-btn {
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        background-color: #00bca1;
        padding: 15px 21px;
        border-radius: 8px;
        margin-top: 36px;
        margin-bottom: 50px;
        text-align: center;
        width: fit-content;
    }

    .start-btn:hover {
        background-color: #00a88f;
    }

    .bottom-part {
        display: flex;
        flex-direction: column;
        height: 130px;
        justify-content: space-between;
    }

    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 35px;
    }

    .menu .menu-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 11px;
        text-decoration: none;
        color: #000;
        font-size: 10px;
        font-weight: 400;
    }

    @media (max-width: 1280px) {
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
        .sidebar .sidebar-buttons {
            height: 100%;
            width: 15%;
            border-right: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            padding: 149px 0 0 0;
        }
        .button-lg {
            all: unset;
            width: 32px;
            height: 32px;
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
        .sidebar .sidebar-chatlist {
            height: 100%;
            width: 85%;
            padding: 54px 10px 0 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
        }

        .chatlist-title {
            width: 100%;
            text-align: start;
            font-size: 18px;
            font-weight: 600;
            color: #000;
            padding: 0 0 0 20px;
        }

        .add-chat {
            all: unset;
            cursor: pointer;
            display: flex;
            width: 100%;
            align-items: center;
            gap: 7px;
            padding: 9px 17px 9px 17px;
            color: #00bca1;
            border: 1px solid #00bca1;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            line-height: 27px;
        }
        .add-chat:hover {
            background-color: #f1f1f1;
        }

        .search-chat {
            all: unset;
            display: flex;
            width: 100%;
            align-items: center;
            gap: 16px;
            padding: 9px 17px 9px 17px;
            background-color: #f4f4f4;
            border: 1px solid #f4f4f4;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            line-height: 27px;
            cursor: text;
        }
        .search-chat input {
            all: unset;
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: #000;
        }
        .search-chat:focus-within {
            border: 1px solid #00bca1;
        }

        /* =========chatlist========= */

        .chatlist {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 10px 3px 10px 0;
            overflow: scroll;
        }

        .chatlist-item {
            all: unset;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 7px;
            padding: 17px 29px;
            background-color: transparent;
            border: 1px solid transparent;
            border-radius: 6px;
            cursor: pointer;
            color: #000;
        }
        .chatlist-item.active {
            background-color: #00bca11a;
            border: 1px solid #00bca11a;
        }
        .chatlist-item:hover {
            background-color: #f4f4f4;
        }

        .chatlist-item.active:hover {
            background-color: #00bca11a;
        }

        .chatlist-item img {
            position: absolute;
            top: 18px;
            left: 9px;
            width: 12px;
        }

        .chat-title {
            font-size: 12px;
            font-weight: 700;
            color: #000;
        }

        .last-message {
            font-size: 12px;
            font-weight: 400;
            color: #000;
            max-width: 232px;
        }

        .last-update {
            position: absolute;
            top: 21px;
            right: 16px;
            font-size: 8px;
            font-weight: 400;
            color: #1e1f22;
        }

        /* =========header========= */

        .main {
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 17px 22px 0;
        }

        .header {
            width: 100%;
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .chatbox-logo {
            width: 164px;
        }

        /* =========chatbox start page========= */

        .start-screen {
            width: 100%;
            background: #f5f5f5;
            border-radius: 15px;
            height: calc(100% - 54px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .top-part img {
            width: 187px;
        }

        .middle-part {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .middle-part-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 26px;
        }

        .home-title {
            font-size: 34px;
            font-weight: 700;
            color: #000;
            margin-top: 31px;
        }

        .home-title-2 {
            font-size: 33px;
            font-weight: 700;
            color: #00bca1;
        }

        .home-sm-text {
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            color: #000;
        }

        .start-btn {
            font-size: 18px;
            font-weight: 400;
            color: #fff;
            background-color: #00bca1;
            padding: 15px 21px;
            border-radius: 8px;
            margin-top: 36px;
            margin-bottom: 50px;
            text-align: center;
            width: fit-content;
        }

        .start-btn:hover {
            background-color: #00a88f;
        }
    }

    @media (max-width: 1024px) {
        .container {
            width: 100%;
            height: 100dvh;
            padding: 24px 0px 36px 0px;
            display: block;
        }
    }

    @media (max-width: 425px) {
        .middle-part {
            margin-bottom: 20px;
        }
        .home-title {
            font-size: 28px;
        }

        .home-sm-text {
            font-size: 11px;
            margin: 0;
        }
        .bottom-part {
            gap: 10px;
        }
        .start-btn {
            font-size: 15px;
            margin-bottom: 0px;
        }
        .menu {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 0;
        }
    }
</style>
