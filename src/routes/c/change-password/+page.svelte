<script lang="ts">
    import InputPassword from "../../auth/components/inputPassword.svelte";
    import { settings } from "../settings/store";
    import {
        addNotification,
        removeNotification,
    } from "$lib/components/alert.svelte";

    let password = settings.password;
    let passwordConfirmation = settings.passwordConfirmation;
    let oldPassword = settings.oldPassword;
    let error = false;
    let lastToast: string | undefined = undefined;

    $: arePasswordsNotEqual = $password !== $passwordConfirmation;

    if (!$password || !$passwordConfirmation || !oldPassword) {
        error = true;
        if (lastToast) {
            removeNotification(lastToast);
        }
        lastToast = addNotification({
            data: {
                fieldName: "Fehlermeldung",
                error: "Bitte füllen Sie alle Felder aus",
            },
        }).id;
    } else if ($password !== $passwordConfirmation) {
        error = true;
        if (lastToast) {
            removeNotification(lastToast);
        }
        lastToast = addNotification({
            data: {
                fieldName: "Passwort",
                error: "Die Passwörter stimmen nicht überein",
            },
        }).id;
    } else if (
        $password.length < 8 ||
        !/\d/.test($password) ||
        !/[a-zA-Z]/.test($password)
    ) {
        error = true;
        if (lastToast) {
            removeNotification(lastToast);
        }
        lastToast = addNotification({
            data: {
                fieldName: "Passwort",
                error: "Das Passwort muss mindestens 8 Zeichen lang sein und mindestens eine Zahl und einen Buchstaben enthalten",
            },
        }).id;
    }
</script>

<svelte:head>
    <title>ZulaAI - Settings</title>
</svelte:head>

<div class="main">
    <div class="settings-wrapper">
        <form action="" class="settings">
            <h1 class="title">Passwort ändern</h1>
            <div class="input-group">
                <InputPassword
                    inputPlaceholder="Altes Passwort"
                    inputId="old-password"
                    value={settings.oldPassword}
                />
                <InputPassword
                    inputPlaceholder="Neues Passwort"
                    inputId="password"
                    value={settings.password}
                    invalid={arePasswordsNotEqual}
                />
                <InputPassword
                    inputPlaceholder="Neues Passwort erneut eingeben"
                    inputId="password-repeat"
                    value={settings.passwordConfirmation}
                    invalid={arePasswordsNotEqual}
                />
            </div>
            <button type="submit" class="btn-settings">Ändern</button>
        </form>
    </div>
</div>

<style>
    .btn-settings {
        all: unset;
        cursor: pointer;
        padding: 12px 54px;
        background-color: #00bca1;
        color: #fff;
        border-radius: 8px;
    }
    /* =========header========= */

    .title {
        font-size: 25px;
        font-weight: 600;
        color: #000;
    }

    .main {
        width: 100%;
        height: calc(100% - 93px);
        display: flex;
        flex-direction: column;
        padding: 0 17px 22px 0;
    }

    /* =========settings========= */

    .settings-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-left: 5px solid #f5f5f5;
    }
    .settings {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 66px;
    }
    .input-group {
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 36px;
        overflow-y: hidden;
        padding: 10px 48px;
        scrollbar-width: thin;
        scrollbar-color: #00bca1 #f9f9f9;
    }
    .input-group::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #00bca1;
    }
    .input-group::-webkit-scrollbar-track {
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    @media (max-width: 1440px) {
        .settings-wrapper {
            border-left: 3px solid #f5f5f5;
        }

        .main {
            width: 100%;
            height: calc(100% - 54px);
            padding: 0 10px;
        }

        .input-group {
            width: 43%;
            height: 396px;
            gap: 18px;
            padding: 0 16px 0 0;
        }
        .settings {
            gap: 71px;
            padding: 0;
        }
    }

    @media (max-width: 1024px) {
        /* =========header========= */

        .settings-wrapper {
            border: none;
        }

        .main {
            width: 100%;
            height: 100%;
            padding: 0 10px;
        }

        .input-group {
            width: 100%;
            height: 367px;
            gap: 18px;
            padding: 10px 16px 0 16px;
        }
        .settings {
            gap: 14px;
            height: 412.517px;
            padding: 0 0 14px 0;
        }
    }
</style>
