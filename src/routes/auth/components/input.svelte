<script lang="ts">
    import { onMount } from "svelte";
    import type { Writable } from "svelte/store";

    export let inputId = "input";
    export let inputType = "text";
    export let inputPlaceholder = "Placeholder";
    export let value: Writable<string>;

    let isEmpty = true;

    function onInput(e: Event) {
        let target = e.target as HTMLInputElement;
        let label = document.querySelector(
            `label[for=${inputId}]`,
        ) as HTMLLabelElement;
        isEmpty = target.value.trim() === "";
        $value = target.value;

        if (target.type === "email" && !target.checkValidity()) {
            target.classList.add("invalid"); // Добавить класс "invalid" к input
            target.classList.remove("focus"); // Удалить класс "focus" у input
            label.classList.add("invalid"); // Добавить класс "invalid" к label
            label.classList.remove("focus"); // Удалить класс "focus" у label
        } else {
            target.classList.remove("invalid"); // Удалить класс "invalid" у input
            target.classList.add("focus"); // Добавить класс "focus" к input
            label.classList.remove("invalid"); // Удалить класс "invalid" у label
            label.classList.add("focus"); // Добавить класс "focus" к label
        }
    }
    let inputElement: HTMLInputElement;
    onMount(() => {
        inputElement.value = $value;
        isEmpty = inputElement.value.trim() === "";
    });
</script>

<div class="entryarea">
    <input
        id={inputId}
        type={inputType}
        class:input={true}
        on:input={onInput}
        bind:this={inputElement}
        required
    />
    <label for={inputId} class="labelline">{inputPlaceholder}</label>

    <!-- ======================================== -->
    <div class="labelline focus" style="display: none;"></div>
    <div class="input valid" style="display: none;"></div>
    <div class="input invalid" style="display: none;"></div>
    <div class="input focus" style="display: none;"></div>
    <div class="labelline invalid" style="display: none;"></div>
    <!-- ======================================== -->
</div>

<style>
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
    .entryarea {
        display: flex;
        position: relative;
        height: fit-content;
        width: 524px;
        height: 70px;
    }

    input {
        font-family: "Montserrat", sans-serif;
        width: 100%;
        outline: none;
        font-size: 15px;
        font-weight: 400;
        border-radius: 9px;
        border: 1px solid #999999;
        background-color: transparent;
        transition: 0.1s ease;
        padding: 24px 42px;
    }

    .input.focus {
        border-color: #00bca1;
    }

    .input.valid {
        color: #616163;
        border-color: #00bca1;
    }
    .input.invalid {
        border-color: red;
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    .pass-show {
        position: absolute;
        top: 50%;
        right: 25px;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }

    .labelline {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 15px;
        font-weight: 400;
        color: #616163;
        padding: 0 25px;
        margin: 0 20px;
        background-color: transparent;
        transition: 0.2s ease;
        cursor: text;
        user-select: none;
    }

    input:focus,
    input:valid {
        border-color: #00bca1;
    }

    input:focus + .labelline {
        top: 0;
        transform: translateY(-50%) translateX(26px);
        color: #00bca1;
        background-color: white;
        padding: 0 10px;
    }

    input[type="number"]:user-invalid {
        border: 1px solid red;
    }

    input[type="number"]:user-invalid + .labelline {
        top: 0;
        transform: translateY(-50%) translateX(26px);
        color: red;
        background-color: white;
        padding: 0 10px;
    }

    input[type="email"]:user-invalid {
        border: 1px solid red;
    }

    input[type="email"]:user-invalid + .labelline {
        top: 0;
        transform: translateY(-50%) translateX(26px);
        color: red;
        background-color: white;
        padding: 0 10px;
    }

    .labelline.focus {
        top: 0;
        transform: translateY(-50%) translateX(26px);
        color: #00bca1;
        background-color: white;
        padding: 0 10px;
    }

    .labelline.invalid {
        top: 0 !important;
        transform: translateY(-50%) translateX(26px) !important;
        color: red !important;
        background-color: white !important;
        padding: 0 10px !important;
    }

    @media (max-width: 1440px) {
        .entryarea {
            height: 50px;
            width: 100%;
        }

        input {
            width: 100%;
            padding: 18px 20px;
            font-size: 13px;
            font-weight: 400;
            padding: 16px 27px;
        }

        .labelline {
            font-size: 13px;
            padding: 0 10px;
            top: 50%;
            transform: translateY(-50%);
        }

        .pass-show {
            right: 10px;
            width: 25px;
            height: 25px;
            transform: translateY(-50%);
        }
        .pass-show img {
            width: 25px;
            height: 25px;
        }

        input:focus + .labelline,
        input:valid + .labelline {
            top: 0;
            transform: translateX(10px) translateY(-50%);
            color: #00bca1;
            background-color: white;
            padding: 0 10px;
        }

        .labelline.focus {
            top: 0 !important;
            transform: translateY(-50%) translateX(10px) !important;
            color: #00bca1 !important;
            background-color: white !important;
            padding: 0 10px !important;
        }
        input[type="email"]:user-invalid + .labelline {
            top: 0;
            transform: translateY(-50%) translateX(10px);
            color: red;
            background-color: white;
            padding: 0 10px;
        }
    }

    @media (max-width: 425px) {
        .entryarea {
            width: 100%;
        }

        input {
            padding: 18px 20px;
            font-size: 13px;
            font-weight: 400;
            padding: 16px 27px;
        }

        .labelline {
            font-size: 13px;
            padding: 0 10px;
            top: 50%;
            transform: translateY(-50%);
        }

        .pass-show {
            right: 10px;
            width: 25px;
            height: 25px;
            transform: translateY(-50%);
        }
        .pass-show img {
            width: 25px;
            height: 25px;
        }

        input:focus + .labelline,
        input:valid + .labelline {
            top: 0;
            transform: translateX(10px) translateY(-50%);
            color: #00bca1;
            background-color: white;
            padding: 0 10px;
        }
        .labelline.focus {
            top: 0 !important;
            transform: translateY(-50%) translateX(10px) !important;
            color: #00bca1 !important;
            background-color: white !important;
            padding: 0 10px !important;
        }
        input[type="email"]:user-invalid + .labelline {
            top: 0;
            transform: translateY(-50%) translateX(10px);
            color: red;
            background-color: white;
            padding: 0 10px;
        }
    }
</style>
