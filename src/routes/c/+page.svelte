<script lang="ts">
    import Terms from "$lib/components/terms.svelte";
    import Checkbox from "$lib/components/checkbox.svelte";
    import Rules from "$lib/components/rules.svelte";

    let checkboxChecked = false;
    function closeRulesPopup() {
        let rulesPopup = document.querySelector(
            ".popup-overlay",
        ) as HTMLElement;

        let rulesPopupInfo = document.querySelector(
            ".rules-overlay",
        ) as HTMLElement;

        if (checkboxChecked) {
            rulesPopup.style.display = "none";
        }

        rulesPopupInfo.style.display = "none";
    }

    function openRulesPopup() {
        let rulesPopup = document.querySelector(
            ".rules-overlay",
        ) as HTMLElement;

        rulesPopup.style.display = "flex";
    }
</script>

<svelte:head>
    <title>ZulaAI - Chat</title>
</svelte:head>

<div class="main">
    <div class="start-screen">
        <div class="popup-overlay">
            <div class="popup">
                <div class="popup-header">
                    <h2 class="popup-title">
                        Willkommen bei einer Simulation mit ZulaMed
                    </h2>
                </div>
                <div class="popup-content">
                    <Rules />
                </div>

                <Checkbox bind:checked={checkboxChecked} />

                <button
                    on:click={closeRulesPopup}
                    class:disabled={!checkboxChecked}
                    class="popup-btn rules">Schließen</button
                >
            </div>
        </div>

        <div class="rules-overlay">
            <div class="popup">
                <button class="close-rulespopup" on:click={closeRulesPopup}
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00BCA1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-x"
                        ><path d="M18 6L6 18M6 6l12 12" />
                    </svg></button
                >
                <div class="popup-header">
                    <h2 class="popup-title">
                        Willkommen bei einer Simulation mit ZulaMed
                    </h2>
                </div>
                <div class="popup-content">
                    <Rules />
                </div>
            </div>
        </div>

        <div class="top-part">
            <a href="/c">
                <img
                    src="/logo/Mobilelogo.webp"
                    class="mobile-logo"
                    alt="ZulaMed"
                />
            </a>
        </div>
        <div class="middle-part">
            <div class="middle-part-text">
                <h1 class="home-title">Willkommen</h1>
                <h1 class="home-title-2">ZULAMED</h1>
                <div class="info-wrapper">
                    <p class="home-sm-text">
                        Beginnen Sie jetzt eine Simulation mit ZulaMed
                    </p>
                    <button class="info-button" on:click={openRulesPopup}>
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
                            class="lucide lucide-info"
                            ><circle cx="12" cy="12" r="10" /><path
                                d="M12 16v-4"
                            /><path d="M12 8h.01" /></svg
                        >
                    </button>
                </div>
            </div>
            <a class="start-btn" href="c/chatId">Simulation beginnen</a>
        </div>

        <div class="bottom-part">
            <Terms textDisplay="none" textColor="#00BCA1" />
        </div>
    </div>
</div>

<style>
    /* =========popup========= */
    .popup-header {
        margin-bottom: 15px;
    }
    .close-rulespopup {
        all: unset;
        cursor: pointer;
        position: absolute;
        right: 27px;
        top: 25px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
    }

    .close-rulespopup:hover {
        background-color: #f4f4f4;
        border-radius: 50%;
    }
    .popup-overlay {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000033;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .rules-overlay {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000033;
        z-index: 999;
        justify-content: center;
        align-items: center;
    }

    .popup {
        width: 100%;
        max-width: 800px;
        background-color: #fff;
        border-radius: 15px;
        padding: 36px 70px 19px 70px;
        position: relative;
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .popup-title {
        font-size: 16px;
        font-weight: 700;
        color: #000;
        text-align: center;
    }
    .popup-content {
        height: 500px;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #00bca1 #f5f5f5;
        margin-bottom: 8px;
    }

    .popup-content::-webkit-scrollbar {
        width: 5px;
    }

    .popup-content::-webkit-scrollbar-thumb {
        background-color: #00bca1;
        border-radius: 10px;
    }

    .popup-content::-webkit-scrollbar-track {
        background-color: #f5f5f5;
    }

    .popup-btn.rules {
        font-family: "Montserrat", sans-serif;
        background-color: #00bca1;
        padding: 15px 37px;
        border-radius: 9px;
        cursor: pointer;
        color: #ffffff;
        font-size: 15px;
        font-weight: 400;
    }

    .disabled {
        background-color: #f5f5f5 !important;
        color: #000 !important;
        cursor: not-allowed !important;
    }

    .popup-btn.rules:hover,
    .popup-btn.rules:active {
        background-color: #00a88f;
    }

    .info-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .info-button {
        background: none;
        border: none;
        cursor: pointer;
    }
    /* =========popup========= */

    /* =========header========= */

    .main {
        width: 100%;
        height: calc(100% - 93px);
        display: flex;
        flex-direction: column;
        padding: 0 17px 22px 0;
        position: relative;
    }

    /* =========chatbox start page========= */
    .bottom-part {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: absolute;
        bottom: 65px;
        left: 0;
        height: fit-content;
    }
    .start-screen {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
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

    @media (max-width: 1440px) {
        .popup-overlay {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #00000033;
            z-index: 999;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .rules-overlay {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #00000033;
            z-index: 999;
            justify-content: center;
            align-items: center;
        }

        .popup {
            width: 100%;
            max-width: 600px;
            background-color: #fff;
            border-radius: 15px;
            padding: 36px 70px 19px 70px;
            position: relative;
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .popup-content {
            height: 300px;
            padding: 0 7px;
        }
        .popup-header {
            margin-bottom: 10px;
        }
        .popup-btn.rules {
            font-family: "Montserrat", sans-serif;
            background-color: #00bca1;
            padding: 12px 32px;
            border-radius: 9px;
            cursor: pointer;
            color: #ffffff;
            font-size: 15px;
            font-weight: 400;
        }

        /* =========header========= */

        .main {
            width: 100%;
            height: calc(100% - 54px);
            display: flex;
            flex-direction: column;
            padding: 0 17px 22px 0;
        }

        /* =========chatbox start page========= */

        .bottom-part {
            bottom: 72px;
        }

        .start-screen {
            width: 100%;
            height: 100%;
            background: #f5f5f5;
            border-radius: 15px;
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
        .popup-overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #00000033;
            z-index: 999;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .popup {
            max-width: 100%;
            width: 100%;
            height: 100dvh;
            padding: 36px 25px 19px 25px;
            border-radius: 0;
        }
        .popup .popup-content {
            height: 100%;
        }
        .popup-title {
            margin-bottom: 15px;
        }
        .info-wrapper {
            display: flex;
            align-items: center;
            gap: 7px;
        }
        .info-button {
            background: none;
            border: none;
            cursor: pointer;
        }
        .info-button svg {
            width: 19px;
            height: 19px;
        }
        .close-rulespopup {
            right: 6px;
            top: 6px;
        }
        /* =========header========= */

        .main {
            width: 100%;
            height: fit-content;
            padding: 0;
        }
        .start-screen {
            background-color: #fff;
            gap: 6px;
        }
        .bottom-part {
            position: relative;
            bottom: 0;
        }
        .top-part {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 35px;
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
            gap: 13px;
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

        .top-part img {
            width: 127px;
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

        .start-btn {
            font-size: 15px;
            margin-bottom: 0px;
        }
    }
</style>
