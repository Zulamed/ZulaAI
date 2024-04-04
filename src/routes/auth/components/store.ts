import { writable, type Writable } from "svelte/store";
import type { DateValue } from "./dateInput.svelte";
import type { Selected } from "bits-ui";

// export const register = writable({
//     email: "",
//     password: "",
//     passwordConfirmation: "",
//     vorname: "",
//     nachname: "",
//     date: new Date()
// });




export const login = {
    email: writable(""),
    password: writable("")
};
export const resetPass = {
    email: writable(""),
};

export const codeConfirmation = {
    code: writable(""),
};

export const newPassword = {
    password: writable(""),
    passwordConfirmation: writable("")
};

export const firstStep = {
    email: writable(""),
    password: writable(""),
    passwordConfirmation: writable("")
};

type SecondStep = {
    vorname: Writable<string>,
    nachname: Writable<string>,
    date: Writable<DateValue | undefined>
}

export const secondStep: SecondStep = {
    vorname: writable(""),
    nachname: writable(""),
    date: writable(undefined)
};

type ThirdStep = {
    university: Writable<string>,
    wunschfach: Writable<string>,
    semester: Writable<Selected<string> | undefined>
}

export const thirdStep: ThirdStep = {
    university: writable(""),
    wunschfach: writable(""),
    semester: writable(undefined),
}