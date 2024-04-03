<script lang="ts">
    export let inputId = "input";
    export let inputPlaceholder = "Placeholder";
</script>

<div class="entryarea">
    <select id={inputId} class="input" required>
        <option value="" disabled selected hidden></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </select>
    <img class="expand-arrow" src="/icons/expand.svg" alt="" />
    <label for={inputId} class="labelline">{inputPlaceholder}</label>

    <!-- <img class="input-error" src="/icons/Frame.svg" alt="" /> -->
</div>

<style>
    .entryarea {
        position: relative;
        height: fit-content;
        width: 524px;
    }

    select {
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
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .expand-arrow {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        transition: transform 0.2s;
    }

    select:focus ~ .expand-arrow {
        transform: translateY(-50%) rotate(180deg);
    }

    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
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

    select:focus,
    select:valid {
        color: #616163;
        border-color: #00bca1;
    }

    select:focus ~ .labelline,
    select:valid ~ .labelline {
        top: 0;
        transform: translateY(-35%) translateX(26px);
        color: #00bca1;
        background-color: white;
        padding: 0 10px;
    }

    @media (max-width: 1440px) {
        .entryarea {
            width: 100%;
        }

        select {
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

        select:focus ~ .labelline,
        select:valid ~ .labelline {
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

        select {
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

        select:focus ~ .labelline,
        select:valid ~ .labelline {
            top: 0;
            transform: translateX(10px);
            color: #00bca1;
            background-color: white;
            padding: 0 10px;
        }
    }
</style>
