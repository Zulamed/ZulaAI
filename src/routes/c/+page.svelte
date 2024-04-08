<script lang="ts">
    import Terms from "$lib/components/terms.svelte";
    import { onMount } from "svelte";

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

    function openChatlist() {
        const chatlist = document.querySelector(
            ".chatlist-overlay",
        ) as HTMLDivElement;
        chatlist.style.left = "0";
    }

    function closeChatlist() {
        const chatlist = document.querySelector(
            ".chatlist-overlay",
        ) as HTMLDivElement;
        chatlist.style.left = "-100%";
    }
</script>

{#if isMobile}
    <div class="top-part">
        <img src="/logo/Grouplogo2.svg" class="logo" alt="ZulaMed" />
        <img src="/logo/Mobilelogo.svg" class="mobile-logo" alt="ZulaMed" />
    </div>

    <div class="middle-part">
        <div class="middle-part-text">
            <h1 class="home-title">Willkommen</h1>
            <h1 class="home-title-2">ZULAMED</h1>
            <p class="home-sm-text">
                Jetzt eine Sinulation mit ZulaMed beginnen
            </p>
        </div>
        <a class="start-btn" href="c/chatID">Simulation beginnen</a>
    </div>
    <div class="bottom-part">
        <Terms textColor="#00BCA1" textDisplay="none" />
        <div class="menu">
            <div class="menu-btn-wrapper">
                <a class="menu-btn active" href="home">
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
                        class="lucide lucide-message-circle"
                        ><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg
                    >
                </a>
                <span>Chat</span>
            </div>
            <div class="menu-btn-wrapper">
                <button on:click={openChatlist} class="menu-btn">
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
                        class="lucide lucide-history"
                        ><path
                            d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                        /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg
                    >
                </button>
                <span>Verlauf</span>
            </div>
            <div class="menu-btn-wrapper">
                <a class="menu-btn" href="home">
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
                        class="lucide lucide-settings"
                        ><path
                            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                        /><circle cx="12" cy="12" r="3" /></svg
                    >
                </a>
                <span>Einstellungen</span>
            </div>
            <div class="menu-btn-wrapper">
                <a class="menu-btn" href="home">
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
                </a>
                <span>Ausloggen</span>
            </div>
        </div>
    </div>

    <div class="chatlist-overlay">
        <div class="header">
            <button class="btn-back" on:click={closeChatlist}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#191616"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-left"
                    ><path d="m15 18-6-6 6-6" /></svg
                >
            </button>
            <a href=".">
                <img
                    src="/logo/Grouplogo2.svg"
                    class="chatlist-logo"
                    alt="ZulaMed"
                />
            </a>
        </div>

        <div class="chatlist">
            <h3 class="chat-time">2 days ago</h3>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 50 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 30 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 40 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 60 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 20 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 70 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 80 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 90 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 10 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 70 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 80 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 90 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 10 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 25 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 35 years old</h2>
            </a>
            <a href="." class="chatlist-item">
                <h2 class="chat-title">Patient 45 years old</h2>
            </a>
        </div>
    </div>
{:else}
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
                <a class="start-btn" href="c/chatId">Simulation beginnen</a>
            </div>
        </div>
    </div>
{/if}

<style>
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
    .menu-btn-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 11px;
        color: #000;
        text-decoration: none;
        font-size: 10px;
        font-weight: 400;
    }

    .menu-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 11px;
        padding: 12px;
        background-color: #f9f9f9;
        border-radius: 9px;
        cursor: pointer;
    }
    .menu-btn:hover {
        background-color: #f5f5f5;
    }

    .menu-btn.active {
        background-color: #00bca1;
    }

    .menu-btn.active svg {
        stroke: #fff;
    }

    .menu-btn svg {
        width: 31px;
        height: 31px;
    }
    .chatlist-overlay {
        display: none;
    }
    @media (max-width: 1280px) {
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
    }

    @media (max-width: 1024px) {
        .main {
            width: 100%;
            height: 100%;
        }

        .top-part {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 35px;
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
            height: fit-content;
            justify-content: space-between;
            gap: 25px;
            padding: 0 35px;
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

        /* =======Chatlist======= */

        .chatlist-overlay {
            display: block;
            width: 100%;
            height: 100dvh;
            background-color: #fff;
            position: absolute;
            top: 0;
            left: -100%;
            padding: 24px 13px;
            overflow: hidden;
            transition: left 0.2s ease;
        }
        .header {
            height: fit-content;
            display: flex;
            align-items: center;
        }
        .chatlist-logo {
            width: 164px;
        }
        .btn-back {
            all: unset;
            display: block;
            position: absolute;
            cursor: pointer;
            left: 20px;
        }
        .chatlist {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: start;
            padding: 0px 9px 30px 9px;
            margin-top: 20px;
            gap: 9px;
            overflow-y: scroll;
            scrollbar-color: #00bca1 transparent;
        }

        .chatlist::-webkit-scrollbar-thumb {
            background-color: #00bca1;
        }
        .chatlist::-webkit-scrollbar-track {
            background-color: transparent;
        }
        .chatlist-item {
            display: flex;
            width: 100%;
            padding: 15px 24px;
            background-color: #f5f5f5;
            border-radius: 15px;
        }

        .chatlist-item:hover,
        .chatlist-item:focus,
        .chatlist-item:active {
            background-color: #e5e5e5;
        }

        .chatlist-item h2 {
            font-size: 13px;
            font-weight: 400;
            color: #000;
            line-height: 15.85px;
        }
        .chatlist h3 {
            width: 100%;
            font-size: 12px;
            font-weight: 700;
            color: #000;
            margin-bottom: 9px;
            padding: 0 24px;
        }
        .menu-wrapper {
            display: none;
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 22px;
        }
        .menu {
            width: 100%;
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
            gap: 25px;
            padding: 0 35px;
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
            padding: 0;
        }
    }
</style>
