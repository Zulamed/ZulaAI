<script lang="ts">
    import { onMount } from "svelte";
    import Terms from "$lib/components/terms.svelte";
    import { readable } from "svelte/store";
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

    const isMobileStore = readable(isMobile, (set) => {
        const updateMobileStatus = () => {
            set(window.innerWidth <= 1024);
        };

        window.addEventListener("resize", updateMobileStatus);

        return () => {
            window.removeEventListener("resize", updateMobileStatus);
        };
    });
</script>

<svelte:head>
    <title>ZulaAI - Simulation beginnen</title>
</svelte:head>

{#if isLoading}
    <Preloader />
{:else}
    <div style="display: none;"></div>
    {#if isMobile}
        <div class="container">
            <div class="top-part">
                <img src="/logo/Grouplogo2.svg" class="logo" alt="ZulaMed" />
                <img
                    src="/logo/Mobilelogo.svg"
                    class="mobile-logo"
                    alt="ZulaMed"
                />
            </div>

            <div class="middle-part">
                <div class="middle-part-text">
                    <h1 class="home-title">Willkommen</h1>
                    <h1 class="home-title-2">ZULAMED</h1>
                    <p class="home-sm-text">
                        Jetzt eine Sinulation mit ZulaMed beginnen
                    </p>
                </div>
                <a class="start-btn" href=".">Simulation beginnen</a>
            </div>
            <div class="bottom-part">
                <Terms textColor="#00BCA1" textDisplay="none" />
                <div class="menu">
                    <a class="menu-btn" href="home">
                        <img src="/icons/chat.svg" alt="chat" />
                        <span>Chat</span>
                    </a>
                    <a class="menu-btn" href="home">
                        <img src="/icons/history.svg" alt="verlauf" />
                        <span>Verlauf</span>
                    </a>
                    <a class="menu-btn" href="home">
                        <img src="/icons/settings.svg" alt="einstellungen" />
                        <span>Einstellungen</span>
                    </a>
                    <a class="menu-btn" href="home">
                        <img src="/icons/logout.svg" alt="logout" />
                        <span>Ausloggen</span>
                    </a>
                </div>
            </div>
        </div>
    {:else}
        <div class="container">
            <div class="sidebar">
                <div class="sidebar-buttons">
                    <button class="button-lg">
                        <img src="/icons/chat.svg" alt="" />
                    </button>

                    <button class="button-lg">
                        <img src="/icons/settings.svg" alt="" />
                    </button>

                    <button class="button-lg">
                        <img src="/icons/logout.svg" alt="" />
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
            <div class="main">
                <div class="header">
                    <a href=".">
                        <img
                            src="/logo/Grouplogo2.svg"
                            class="chatbox-logo"
                            alt="ZulaMed"
                        />
                    </a>
                </div>

                <div class="start-screen">
                    <div class="top-part">
                        <img
                            src="/logo/Mobilelogo.svg"
                            class="mobile-logo"
                            alt="ZulaMed"
                        />
                    </div>

                    <div class="middle-part">
                        <div class="middle-part-text">
                            <h1 class="home-title">Willkommen</h1>
                            <h1 class="home-title-2">ZULAMED</h1>
                            <p class="home-sm-text">
                                Jetzt eine Sinulation mit ZulaMed beginnen
                            </p>
                        </div>
                        <a class="start-btn" href=".">Simulation beginnen</a>
                    </div>
                </div>
            </div>
        </div>
    {/if}
{/if}

<style>
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
    }

    .button-lg img {
        width: 100%;
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
        scrollbar-width: thin;
    }
    @supports (-ms-ime-align: auto) {
        .chatlist {
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
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
        }
        .button-lg img {
            width: 100%;
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
            height: 100vh;
            padding: 50px 40px;
            display: block;
        }
        .top-part {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 72px;
        }
        .logo {
            width: 174px;
        }

        .mobile-logo {
            width: 187px;
        }

        .middle-part {
            margin-top: 31px;
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
    }

    @media (max-width: 425px) {
        .container {
            padding: 50px 20px;
        }
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
