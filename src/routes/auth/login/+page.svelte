<script lang="ts">
    import Terms from "$lib/components/terms.svelte";
    import Button from "../components/button.svelte";
    import Input from "../components/input.svelte";
</script>

<svelte:head>
    <title>ZulaAI - Login</title>
</svelte:head>

<div class="container">
    <img class="top-part" src="/logo/Grouplogo2.svg" alt="ZulaMed" />
    <div class="middle-part">
        <h1 class="home-title">Willkommen zurück</h1>
        <form class="form login-form">
            <div class="input-wrapper">
                <Input
                    inputType="email"
                    inputPlaceholder="E-Mail-Adresse"
                    inputId="email"
                />
                <Input
                    inputType="password"
                    inputPlaceholder="Passwort"
                    inputId="password"
                    btnDisplay="block"
                />
            </div>
            <div class="reset-password">
                <a href="reset" class=""> Passwort vergessen?</a>
            </div>
            <Button buttonText="Weiter" buttonType="submit" onClick="" />
            <p class="register-link">
                Haben Sie keinen Account? <a href="register">Klicken Sie hier</a
                >
            </p>
        </form>
    </div>
    <Terms textDisplay="none" />
</div>

<style>
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
    .reset-password {
        width: 100%;
        font-size: 16px;
        text-align: start;
        font-weight: 400;
        cursor: default;
        text-align: start;
        color: #616163;
        text-decoration: underline;
        margin-top: 26px;
        margin-bottom: 41px;
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

        .reset-password {
            font-size: 13px;
            margin-top: 16px;
            margin-bottom: 27px;
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
        .top-part {
            width: 174px;
        }
    }

    @media (max-width: 425px) {
        .container {
            padding: 127px 40px 100px 40px;
        }
        .input-wrapper {
            width: 100%;
            gap: 26px;
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

        .reset-password {
            font-size: 13px;
            font-weight: 400;
            margin-top: 20px;
            margin-bottom: 24px;
        }

        .register-link {
            font-size: 14px;
            margin-top: 23px;
            text-align: center;
        }
    }
</style>
