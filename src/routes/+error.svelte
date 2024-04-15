<script lang="ts">
    import { page } from "$app/stores";
    import Terms from "$lib/components/terms.svelte";
</script>

<svelte:head>
    <title>ZulaAI - Error {$page.status}</title>
</svelte:head>

<div class="container">
    <a href="/">
        <img class="top-part" src="/logo/Grouplogo.svg" alt="ZulaMed" />
    </a>
    <div class="middle-part">
        <h1 class="home-title">Oops!</h1>
        <p class="home-text">
            Es scheint, als ob wir die von Ihnen gesuchte Seite nicht finden
            konnten
        </p>
    </div>
    <Terms textDisplay="none" textColor="#ffffff" />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        background-color: #00bca1;
        padding: 80px;
        font-size: 50px;
    }

    .middle-part {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .middle-part .home-title {
        font-size: 37px;
        font-weight: 600;
    }

    .home-text {
        font-size: 20px;
        font-weight: 400;
        color: var(--color-primary);
        text-align: center;
        width: 355px;
        line-height: 27px;
    }

    @media (max-width: 1440px) {
        .container {
            padding: 39px 40px 39px 40px;
        }

        .top-part {
            width: 164px;
        }

        .middle-part {
            gap: 26px;
        }
        .middle-part .home-title {
            font-size: 28px;
        }
    }
    @media (max-width: 1024px) {
        .container {
            padding: 36px 0px !important;
            width: 100%;
            height: 100dvh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .top-part {
            width: 174px;
        }

        .middle-part {
            gap: 42px;
        }

        .middle-part .home-title {
            font-size: 30px;
        }

        .home-text {
            font-size: 16px;
        }
    }
    @media (max-width: 425px) {
        .top-part {
            width: 174px;
        }

        .middle-part {
            gap: 42px;
        }

        .middle-part .home-title {
            font-size: 30px;
        }
    }
</style>
