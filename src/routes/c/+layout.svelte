<script lang="ts">
    import { onMount } from "svelte";
    import Preloader from "$lib/components/preloader.svelte";
    import Sidebarlinks from "./components/sidebarLinks.svelte";
    import { needsPaddingChangedForMobile } from "./store";
    import { page } from "$app/stores";
    import { fly } from "svelte/transition";
    let searchValue = "";
    let isMobile = false;
    let isLoading = true;
    let filteredHistory: History[] = [];

    const names = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Heidi",
        "Ivan",
        "Jane",
        "Kevin",
        "Laura",
        "Michael",
        "Nancy",
        "Oliver",
        "Peter",
        "Quincy",
        "Rachel",
        "Steve",
        "Tina",
        "Ursula",
        "Victor",
        "Wendy",
        "Xander",
        "Yvonne",
        "Zack",
    ];

    $: filteredHistory = history.filter((item) => {
        const search = searchValue.toLowerCase();
        return (
            item.title.toLowerCase().includes(search) ||
            item.text.toLowerCase().includes(search)
        );
    });
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

    type History = {
        title: string;
        time: string;
        text: string;
    };

    let history: History[] = [
        {
            title: "Patient - Rashid",
            time: "9:34 pm",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ...`,
        },
    ];

    function addChat() {
        const time = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
        const randomName = names[Math.floor(Math.random() * names.length)];
        history.push({
            title: `Patient - ${randomName}`,
            time: time,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ...`,
        });
        history = history;
        const chatlist = document.querySelector(".chatlist") as HTMLDivElement;
        requestAnimationFrame(() => {
            chatlist.scrollTo(0, 0);
        });
    }

    function closeChatlist() {
        const chatlist = document.querySelector(
            ".sidebar-chatlist",
        ) as HTMLDivElement;
        chatlist.style.left = "-100%";
    }
</script>

{#if isLoading}
    <Preloader />
{:else}
    <div class="container" class:mobile-padding={$needsPaddingChangedForMobile}>
        <div class="sidebar">
            <Sidebarlinks />

            <div class="sidebar-chatlist">
                {#if $page.url.pathname === "/c" || $page.url.pathname === "/c/chatId" || ($page.url.pathname === "/c/settings" && isMobile)}
                    <h1 class="chatlist-title">Meine Simulationen</h1>
                    <div class="search-chat-wrapper">
                        <button on:click={addChat} class="sidebar-lg-button"
                            ><img src="/icons/plus.svg" alt="plus" />Neue
                            Simulation</button
                        >
                    </div>
                    <div class="search-chat-wrapper">
                        <label class="search-chat">
                            <img src="/icons/search.svg" alt="search" />
                            <input
                                bind:value={searchValue}
                                type="text"
                                placeholder="Suche"
                            />
                        </label>
                    </div>

                    <div class="chatlist">
                        <div class="chatlist-header">
                            <button on:click={closeChatlist} class="btn-back">
                                <img src="/icons/back.svg" alt="Back" />
                            </button>
                            <a href="/c" on:click={closeChatlist}>
                                <img
                                    src="/logo/Grouplogo2.svg"
                                    alt="Zulamed"
                                    class="logo"
                                />
                            </a>
                        </div>
                        {#if searchValue.length > 0}
                            {#each filteredHistory as item}
                                <a
                                    transition:fly={{ y: -10, duration: 100 }}
                                    href="/c/chatId"
                                    class="chatlist-item"
                                    on:click={closeChatlist}
                                >
                                    <h2 class="chat-title">{item.title}</h2>
                                    <span class="last-update">{item.time}</span>
                                    <img src="/logo/Mobilelogo.webp" alt="" />
                                    <p class="last-message">
                                        {item.text}
                                    </p>
                                </a>
                            {/each}
                        {:else}
                            {#each history as item}
                                <a
                                    transition:fly={{ y: -10, duration: 100 }}
                                    href="/c/chatId"
                                    class="chatlist-item"
                                    on:click={closeChatlist}
                                >
                                    <h2 class="chat-title">{item.title}</h2>
                                    <span class="last-update">{item.time}</span>
                                    <img src="/logo/Mobilelogo.webp" alt="" />
                                    <p class="last-message">
                                        {item.text}
                                    </p>
                                </a>
                            {/each}
                        {/if}
                    </div>
                {:else}
                    <h1 class="chatlist-title">Einstellungen</h1>
                    <div class="search-chat-wrapper">
                        <a
                            href="/c/settings"
                            class="sidebar-lg-button"
                            class:active={$page.url.pathname === "/c/settings"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#00BCA1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-user"
                                ><path
                                    d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                                /><circle cx="12" cy="7" r="4" /></svg
                            >

                            Persönliche daten
                        </a>
                    </div>
                    <div class="search-chat-wrapper">
                        <a
                            href="/c/change-password"
                            class="sidebar-lg-button"
                            class:active={$page.url.pathname ===
                                "/c/change-password"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#00BCA1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-lock"
                                ><rect
                                    width="18"
                                    height="11"
                                    x="3"
                                    y="11"
                                    rx="2"
                                    ry="2"
                                /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg
                            >
                            Passwort ändern
                        </a>
                    </div>
                {/if}
            </div>
        </div>
        <div class="main-side">
            {#if $page.url.pathname === "/c/chatId" && isMobile}
                <div style="display: none;" />
            {:else}
                <div class="header">
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
    .sidebar-lg-button.active {
        background-color: #00bca1;
        color: #fff;
    }
    .sidebar-lg-button.active svg {
        stroke: #fff;
    }
    .sidebar-lg-button.active:hover {
        background-color: #00bca1;
    }
    /* ========HEADER======== */

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
    .chatlist-header {
        display: none;
    }

    .sidebar-lg-button {
        all: unset;
        cursor: pointer;
        display: flex;
        width: 100%;
        align-items: center;
        gap: 22px;
        padding: 14px 24px;
        color: #00bca1;
        border: 1px solid #00bca1;
        border-radius: 6px;
        font-size: 20px;
        font-weight: 500;
        line-height: 27px;
        user-select: none;
    }
    .user-svg {
        width: 20px;
    }

    .sidebar-lg-button:hover {
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
        flex-direction: column-reverse;
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

    .chatlist-item:hover {
        background-color: #f4f4f4;
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

        .sidebar-lg-button {
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
        .user-svg {
            width: 14px;
        }

        .sidebar-lg-button:hover {
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
            flex-direction: column-reverse;
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

        .chatlist-item:hover {
            background-color: #f4f4f4;
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
    }

    @media (max-width: 1024px) {
        .container {
            width: 100%;
            height: 100dvh;
            padding: 26px 39px 51px 39px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
        }
        .sidebar {
            width: 100%;
            height: fit-content;
            z-index: 100;
            margin-top: 27px;
        }

        .chatlist-header {
            background-color: #fff;
            position: relative;
            display: block;
            height: fit-content;
            width: 100%;
            padding-bottom: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
        }
        .chatlist-header .logo {
            width: 174px;
        }
        .btn-back {
            all: unset;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            cursor: pointer;
            left: 20px;
        }
        .sidebar .sidebar-chatlist {
            width: 100%;
            background-color: #fff;
            display: block;
            position: fixed;
            top: 0;
            left: -100%;
            padding: 0 13px;
            transition: 0.4s ease;
        }

        .chatlist-title,
        .sidebar-lg-button,
        .search-chat {
            display: none;
        }
        .chatlist {
            padding: 26px 9px 20px 9px;
            height: 100%;
            flex-direction: column;
        }
        .chatlist-item {
            background-color: #f5f5f5;
        }
    }
</style>
