<script lang="ts">
    import Terms from "$lib/components/terms.svelte";
</script>

<div class="main">
    <div class="start-screen">
        <div class="top-part">
            <img
                src="/logo/Mobilelogo.webp"
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

        <div class="bottom-part">
            <Terms textDisplay="none" textColor="#00BCA1" />
        </div>
    </div>
</div>

<style>
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
