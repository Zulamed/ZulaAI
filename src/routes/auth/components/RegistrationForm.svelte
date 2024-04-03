<script>
    import Button from "../components/button.svelte";
    import Input from "../components/input.svelte";
    import DateInput from "./dateInput.svelte";
    import SelectInput from "./selectInput.svelte";
    import { firstStep, secondStep, thirdStep } from "./store";

    export let currentStep = 1;

    function nextStep() {
        currentStep++;
    }

    function prevStep() {
        currentStep--;
    }
</script>

{#if currentStep == 1}
    <!-- Форма для первого этапа -->
    <div class="input-wrapper">
        <Input
            inputType="email"
            inputPlaceholder="E-Mail-Adresse"
            inputId="email"
            value={firstStep.email}
        />
        <Input
            inputType="password"
            inputPlaceholder="Passwort"
            inputId="password"
            btnDisplay="block"
            value={firstStep.password}
        />
        <Input
            inputType="password"
            inputPlaceholder="Passwort wiederholen"
            inputId="password-repeat"
            btnDisplay="block"
            value={firstStep.passwordConfirmation}
        />
    </div>

    <Button buttonText="Weiter" onClick={nextStep} buttonType="button" />
{:else if currentStep == 2}
    <div class="input-wrapper">
        <Input
            inputType="text"
            inputPlaceholder="Vorname"
            inputId="vorname"
            value={secondStep.vorname}
        />
        <Input
            inputType="text"
            inputPlaceholder="Nachname"
            inputId="nachname"
            value={secondStep.nachname}
        />
        <DateInput value={secondStep.date} />
    </div>
    <div class="button-group">
        <Button
            buttonTextColor="var(--color-secondary)"
            buttonBgColor="var(--color-primary)"
            buttonText="Zurück"
            onClick={prevStep}
            buttonType="button"
        />
        <Button buttonText="Weiter" onClick={nextStep} buttonType="button" />
    </div>
{:else if currentStep == 3}
    <div class="input-wrapper">
        <Input
            inputType="text"
            inputPlaceholder="Universität"
            inputId="university"
            value={thirdStep.university}
        />
        <SelectInput selected={thirdStep.semester} />
        <Input
            inputType="text"
            inputPlaceholder="Wunschfach"
            inputId="wunschfach"
            value={thirdStep.wunschfach}
        />
    </div>
    <div class="button-group">
        <Button
            buttonTextColor="var(--color-secondary)"
            buttonBgColor="var(--color-primary)"
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
            width: 423px;
        }
    }

    @media (max-width: 768px) {
        .input-wrapper {
            width: 100%;
            gap: 26px;
            margin-bottom: 24px;
        }
    }

    @media (max-width: 425px) {
        .input-wrapper {
            width: 100%;
            gap: 26px;
        }
    }
</style>
