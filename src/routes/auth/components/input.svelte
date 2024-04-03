<script lang="ts">
    import { onMount } from "svelte";
    import type { Writable } from "svelte/store";

    export let inputId = "input";
    export let inputType = "text";
    export let inputPlaceholder = "Placeholder";
    export let btnDisplay = "none";
    export let isValid = true;
    export let value: Writable<string>;

    function showPassword() {
        const input = document.getElementById(inputId) as HTMLInputElement;
        const button = document.querySelector(
            ".pass-show",
        ) as HTMLButtonElement;
        const buttonSvg = button.querySelector(
            ".pass-show-svg",
        ) as HTMLImageElement;

        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }

        if (input.type === "password") {
            buttonSvg.src = "/icons/View25.svg";
        } else {
            buttonSvg.src = "/icons/View_hide.svg";
        }
        isValid = input.checkValidity();
    }

    let isEmpty = true;

    function onInput(e: Event) {
        // if (e.target.value.trim() !== "") {
        //     isEmpty = false;
        // } else {
        //     isEmpty = true;
        // }
        let target = e.target as HTMLInputElement;
        isEmpty = target.value.trim() === "";
        $value = target.value;
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
        class:focus={!isEmpty}
        bind:this={inputElement}
        required
    />
    <label for={inputId} class="labelline" class:focus={!isEmpty}
        >{inputPlaceholder}</label
    >
    <button
        on:click={showPassword}
        type="button"
        style="display: {btnDisplay};"
        class="pass-show"
        ><img class="pass-show-svg" src="/icons/View25.svg" alt="" /></button
    >
    <!-- <img class="input-error" src="/icons/Frame.svg" alt="" /> -->

    <!-- ======================================== -->
    <div class="labelline focus" style="display: none;"></div>
    <div class="input valid" style="display: none;"></div>
    <div class="input focus" style="display: none;"></div>
    <div class="labelline invalid" style="display: none;"></div>
    <!-- ======================================== -->
</div>

<style>
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
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
    .input.invalid {
        border: 1px solid red;
    }
    .labelline.invalid {
        color: red;
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
        transform: translateY(-35%) translateX(26px);
        color: #00bca1;
        background-color: white;
        padding: 0 10px;
    }

    /* .up {
        top: 0;
        transform: translateY(-35%) translateX(26px);
        color: #00bca1;
        background-color: white;
        padding: 0 10px;
    } */

    .labelline.focus {
        top: 0 !important;
        transform: translateY(-35%) translateX(26px) !important;
        color: #00bca1 !important;
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

        .input-error {
            right: -20px;
            width: 12px;
            height: 12px;
            top: 55%;
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
    }
</style>
