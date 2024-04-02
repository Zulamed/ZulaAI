<script lang="ts">
    export let inputId = "input";
    export let inputType = "text";
    export let inputPlaceholder = "Placeholder";
    export let btnDisplay = "none";

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
    }
    function validateInput() {
        const input = document.getElementById(inputId) as HTMLInputElement;
        const isValid = input.value.trim() !== ""; // Проверяем, что значение не пустое после удаления пробелов

        if (!isValid) {
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    }
</script>

<div class="entryarea">
    <input id={inputId} type={inputType} class="input" required />
    <label for={inputId} class="labelline">{inputPlaceholder}</label>
    <button
        on:click={showPassword}
        type="button"
        style="display: {btnDisplay};"
        class="pass-show"
        ><img class="pass-show-svg" src="/icons/View.svg" alt="" /></button
    >
    <!-- <img class="input-error" src="/icons/Frame.svg" alt="" /> -->
</div>

<style>
    .entryarea {
        position: relative;
        height: fit-content;
        width: 524px;
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
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
    .input.error {
        border-color: #ff0000; /* Красный цвет границы */
        color: #ff0000; /* Красный текст */
    }
    .input-error {
        position: absolute;
        top: 50%;
        right: -32px;
        transform: translateY(-50%);
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
        color: #616163;
        border-color: #00bca1;
    }

    input:focus + .labelline,
    input:valid + .labelline {
        top: 0;
        transform: translateY(-35%);
        color: #00bca1;
        background-color: white;
        padding: 0 10px;
    }

    @media (max-width: 1440px) {
        .entryarea {
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
            transform: translateY(-25%);
        }

        .pass-show {
            right: 10px;
            width: 25px;
            height: 25px;
            transform: translateY(-38%);
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
            transform: translateX(10px);
            color: #00bca1;
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
            transform: translateY(-25%);
        }

        .pass-show {
            right: 10px;
            width: 25px;
            height: 25px;
            transform: translateY(-38%);
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
            transform: translateX(10px);
            color: #00bca1;
            background-color: white;
            padding: 0 10px;
        }
    }
</style>
