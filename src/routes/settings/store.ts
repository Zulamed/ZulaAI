import { writable, type Writable } from "svelte/store";
import type { Selected } from "bits-ui";
import type { DateValue } from "$lib/components/dateInput.svelte";

export let needsPaddingChangedForMobile = writable(false);


type Settings = {
    email: Writable<string>,
    password: Writable<string>,
    passwordConfirmation: Writable<string>,
    oldPassword: Writable<string>,
    vorname: Writable<string>,
    nachname: Writable<string>,
    date: Writable<DateValue | undefined>,
    university: Writable<string>,
    wunschfach: Writable<string>,
    semester: Writable<Selected<string> | undefined>
}

export const settings: Settings = {
    email: writable(""),
    password: writable(""),
    passwordConfirmation: writable(""),
    oldPassword: writable(""),
    vorname: writable(""),
    nachname: writable(""),
    date: writable(undefined),
    university: writable(""),
    wunschfach: writable(""),
    semester: writable(undefined)
};

