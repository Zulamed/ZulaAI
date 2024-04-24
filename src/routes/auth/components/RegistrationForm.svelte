<script lang="ts">
    import Button from "../components/button.svelte";
    import Input from "../components/input.svelte";
    import InputPassword from "$lib/components/inputPassword.svelte";
    import SelectInput from "./selectInput.svelte";
    import { firstStep, secondStep, thirdStep } from "./store";
    import { get } from "svelte/store";
    import {
        addNotification,
        removeNotification,
    } from "$lib/components/alert.svelte";
    import DateInput from "$lib/components/dateInput.svelte";

    export let currentStep = 1;

    let error = false;
    let email = firstStep.email;
    let password = firstStep.password;
    let passwordConfirmation = firstStep.passwordConfirmation;

    $: arePasswordsNotEqual = $password !== $passwordConfirmation;

    let lastToast: string | undefined = undefined;

    function nextStep() {
        error = false;

        if (currentStep === 1) {
            let email_dom = document.getElementById(
                "email",
            ) as HTMLInputElement;
            error = !email_dom.checkValidity();
            if (!$email || !$password || !$passwordConfirmation) {
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
            } else if (currentStep === 1) {
                let email_dom = document.getElementById(
                    "email",
                ) as HTMLInputElement;
                error = !email_dom.checkValidity();
                if (!$email || !$password || !$passwordConfirmation) {
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
            }
        } else if (currentStep === 2) {
            if (
                !get(secondStep.vorname) ||
                !get(secondStep.nachname) ||
                !get(secondStep.date)
            ) {
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
            }
        } else if (currentStep === 3) {
            if (
                !get(thirdStep.university) ||
                !get(thirdStep.semester) ||
                !get(thirdStep.wunschfach)
            ) {
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
            }
        }

        // Если обнаружена ошибка, завершаем выполнение функции
        if (error) {
            return;
        }

        currentStep++;
    }
    function prevStep() {
        currentStep--;
    }
</script>

{#if currentStep == 1}
    <div class="input-wrapper">
        <Input
            inputType="email"
            inputPlaceholder="E-Mail-Adresse"
            inputId="email"
            value={firstStep.email}
        />
        <InputPassword
            inputPlaceholder="Passwort"
            inputId="password"
            value={firstStep.password}
            invalid={arePasswordsNotEqual}
        />
        <InputPassword
            inputPlaceholder="Passwort wiederholen"
            inputId="password-repeat"
            value={firstStep.passwordConfirmation}
            invalid={arePasswordsNotEqual}
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
            buttonText="Zurück"
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
