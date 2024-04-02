<script>
    import Button from "../components/button.svelte";
    import Input from "../components/input.svelte";
    import Select from "../components/select.svelte";
    import { writable } from "svelte/store";

    export let currentStep = writable(1);

    const nextStep = () => {
        currentStep.update((step) => step + 1);
    };

    const prevStep = () => {
        currentStep.update((step) => step - 1);
    };
</script>

{#if $currentStep == 1}
    <!-- Форма для первого этапа -->
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
        <Input
            inputType="password"
            inputPlaceholder="Passwort wiederholen"
            inputId="password-repeat"
            btnDisplay="block"
        />
    </div>

    <Button buttonText="Weiter" onClick={nextStep} buttonType="button" />
{:else if $currentStep == 2}
    <div class="input-wrapper">
        <Input inputType="text" inputPlaceholder="Vorname" inputId="vorname" />
        <Input
            inputType="text"
            inputPlaceholder="Nachname"
            inputId="nachname"
        />
        <Input
            inputType="text"
            inputPlaceholder="Geburtsdatum"
            inputId="geburtsdatum"
        />
    </div>
    <div class="button-group">
        <Button
            buttonTextColor="var(--color-secondary)"
            buttonBgColor="transparent"
            buttonText="Zurück"
            onClick={prevStep}
            buttonType="button"
        />
        <Button buttonText="Weiter" onClick={nextStep} buttonType="button" />
    </div>
{:else if $currentStep == 3}
    <div class="input-wrapper">
        <Input
            inputType="text"
            inputPlaceholder="Universität"
            inputId="university"
        />
        <Select />
        <Input
            inputType="text"
            inputPlaceholder="Wunschfach"
            inputId="wunschfach"
        />
    </div>
    <div class="button-group">
        <Button
            buttonTextColor="var(--color-secondary)"
            buttonBgColor="transparent"
            buttonText="Weiter"
            onClick={prevStep}
            buttonType="button"
        />
        <Button buttonText="Weiter" buttonType="submit" onClick="" />
    </div>
{/if}

<style>
    /* =========================== */
    .button-group {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 36px;
        margin-bottom: 35px;
    }

    @media (max-width: 1440px) {
        .input-wrapper {
            gap: 26px;
            width: 384px;
        }
    }
    @media (max-width: 425px) {
        .input-wrapper {
            width: 100%;
            gap: 26px;
        }
    }
</style>
