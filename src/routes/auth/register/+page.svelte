<script lang="ts">
    import Terms from "$lib/components/terms.svelte";

    import RegistrationForm from "../components/RegistrationForm.svelte";
</script>

<svelte:head>
    <title>ZulaAI - Register</title>
</svelte:head>

<div class="container">
    <img class="top-part" src="/logo/Grouplogo2.svg" alt="ZulaMed" />
    <div class="middle-part">
        <h1 class="home-title">Profil erstellen</h1>
        <p class="subtitle">Registrieren Sie sich um ZulaMed zu nutzen</p>
        <form class="form login-form">
            <RegistrationForm />
            <p class="register-link">
                Sie haben einen Account? <a href="login">Klicken Sie hier</a>
            </p>
        </form>
    </div>
    <Terms textDisplay="none" />
</div>

<style>
    .subtitle {
        text-align: center;
        color: #616163;
        font-size: 16px;
        font-weight: 400;
        margin-top: 19px;
        margin-bottom: 42px;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        background-color: #fff;
        padding: 80px;
        font-size: 50px;
    }
    .register-link {
        font-size: 16px;
        font-weight: 400;
        color: #616163;
        margin-top: 40px;
    }
    .register-link a {
        color: #00bca1;
        text-decoration: underline;
    }

    .form.login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 36px;
        margin-bottom: 35px;
    }

    .home-title {
        font-size: 37px;
        font-weight: 600;
        color: #616163;
        text-align: center;
        margin-bottom: 39px;
    }
    @media (max-width: 1440px) {
        .top-part {
            width: 164px;
        }

        .middle-part {
            gap: 27px;
        }

        .container {
            padding: 39px 40px 39px 40px;
        }

        .middle-part .home-title {
            font-size: 28px;
            font-weight: 600;
        }

        .register-link {
            font-size: 14px;
            margin-top: 40px;
        }

        .input-wrapper {
            gap: 26px;
            width: 384px;
        }

        .home-title {
            margin-bottom: 32px;
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 127px 40px 100px 40px;
        }
        .top-part {
            width: 174px;
        }
    }

    @media (max-width: 425px) {
        .container {
            padding: 127px 40px 100px 40px;
        }

        .home-title {
            margin-bottom: 32px;
        }

        .top-part {
            width: 174px;
        }

        .middle-part .home-title {
            font-size: 28px;
            font-weight: 600;
        }

        .register-link {
            font-size: 14px;
            margin-top: 23px;
            text-align: center;
        }
    }
</style>
