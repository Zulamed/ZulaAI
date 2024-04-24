<script lang="ts">
    import Input from "../../auth/components/input.svelte";
    import DateInput from "$lib/components/dateInput.svelte";
    import SelectInput from "../../auth/components/selectInput.svelte";
    import { settings } from ".././store";
</script>

<svelte:head>
    <title>ZulaAI - Settings</title>
</svelte:head>

<div class="main">
    <div class="settings-wrapper">
        <form action="" class="settings">
            <div class="input-group">
                <Input
                    inputId="email"
                    inputType="email"
                    inputPlaceholder="E-Mail-Adresse"
                    value={settings.email}
                />

                <Input
                    inputId="vorname"
                    inputType="text"
                    inputPlaceholder="Vorname"
                    value={settings.vorname}
                />
                <Input
                    inputId="nachname"
                    inputType="text"
                    inputPlaceholder="Nachname"
                    value={settings.nachname}
                />

                <DateInput value={settings.date} />

                <Input
                    inputId="university"
                    inputType="text"
                    inputPlaceholder="Universität"
                    value={settings.university}
                />
                <SelectInput selected={settings.semester} />
                <Input
                    inputId="wunschfach"
                    inputType="text"
                    inputPlaceholder="Wunschfach"
                    value={settings.wunschfach}
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
        gap: 36px;
    }
    .input-group {
        height: 614px;
        display: flex;
        flex-direction: column;
        gap: 36px;
        overflow-y: scroll;
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
            height: 402px;
            gap: 18px;
            padding: 9px 16px 0 0;
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
