<script lang="ts">
    import Terms from "$lib/components/terms.svelte";
</script>

<svelte:head>
    <title>ZulaAI</title>
</svelte:head>

<div class="container">
    <img class="top-part" src="/logo/Grouplogo.svg" alt="ZulaMed" />
    <div class="middle-part">
        <h1 class="home-title">Beginnen</h1>
        <div class="home-buttons">
            <a href="auth/login" class="home-button">Anmelden</a>
            <a href="auth/register" class="home-button">Registrieren</a>
        </div>
    </div>
    <Terms textColor="#ffffff" />
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
        gap: 63px;
    }
    .middle-part .home-title {
        font-size: 37px;
        font-weight: 600;
    }

    .middle-part .home-buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 37px;
    }

    .home-buttons .home-button {
        font-size: 20px;
        font-weight: 400;
        color: var(--color-secondary);
        background-color: var(--color-primary);
        padding: 18px 0;
        border-radius: 8px;
        width: 262px;
        text-align: center;
    }

    .home-buttons .home-button:hover {
        background-color: var(--color-primary-hover);
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

        .middle-part .home-buttons {
            gap: 16px;
        }

        .middle-part .home-buttons .home-button {
            font-size: 15px;
            padding: 12px 0;
            width: 194px;
            font-weight: 400;
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

        .middle-part .home-buttons {
            gap: 40px;
        }

        .middle-part .home-buttons .home-button {
            font-size: 18px;
            padding: 15px 0;
            width: 146px;
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

        .middle-part .home-buttons {
            gap: 40px;
        }

        .middle-part .home-buttons .home-button {
            font-size: 18px;
            padding: 15px 0;
            width: 146px;
        }
    }
</style>
