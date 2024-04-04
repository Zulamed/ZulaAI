<script lang="ts">
    import Terms from "$lib/components/terms.svelte";
    import Button from "../components/button.svelte";
    import Input from "../components/input.svelte";
    import { newPassword } from "../components/store";
</script>

<svelte:head>
    <title>ZulaAI - Login</title>
</svelte:head>

<div class="container">
    <img class="top-part" src="/logo/Grouplogo2.svg" alt="ZulaMed" />
    <div class="middle-part">
        <h1 class="home-title">Passwort zurücksetzen</h1>
        <form class="form login-form">
            <div class="input-wrapper" style="margin-bottom: 21px;">
                <Input
                    inputType="password"
                    inputPlaceholder="Neues Passwort"
                    inputId="new-password"
                    value={newPassword.password}
                    btnDisplay="block"
                />
            </div>
            <div class="input-wrapper" style="margin-bottom: 21px;">
                <Input
                    inputType="password"
                    inputPlaceholder="Passwort erneut eingeben"
                    inputId="confirm-new-password"
                    value={newPassword.passwordConfirmation}
                    btnDisplay="block"
                />
            </div>

            <Button buttonText="Bestätigen" buttonType="submit" onClick="" />
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

    .form.login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 36px;
        margin-bottom: 50px;
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
            margin-bottom: 28px;
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
            margin-bottom: 37px;
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
