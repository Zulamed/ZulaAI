import { writable } from "svelte/store";

export type ChatHistory = {
    id: number;
    title: string;
    time: string;
    text: string;
    isSolved: boolean;
};


export const chatHistory = writable<ChatHistory[]>([
    {
        id: 1,
        title: "Patient - Rashid",
        time: "9:34 pm",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ...`,
        isSolved: false
    }
]);