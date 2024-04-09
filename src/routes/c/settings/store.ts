import { writable, type Writable } from "svelte/store";
import type { DateValue } from "../../auth/components/dateInput.svelte";
import type { Selected } from "bits-ui";

type Settings = {
    email: Writable<string>,
    password: Writable<string>,
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
    vorname: writable(""),
    nachname: writable(""),
    date: writable(undefined),
    university: writable(""),
    wunschfach: writable(""),
    semester: writable(undefined)
};

