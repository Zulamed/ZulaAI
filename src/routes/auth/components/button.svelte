<script lang="ts">
    export let buttonText = "Button Text";
    export let buttonType: "submit" | "button" | "reset" = "submit";
    export let buttonBgColor = "var(--color-secondary)";
    export let buttonTextColor = "var(--color-primary)";
    export let onClick: (() => void) | "";

    function handleClick() {
        if (onClick) {
            onClick();
        }
    }
</script>

<button
    style="background-color: {buttonBgColor}; color: {buttonTextColor};"
    on:click={handleClick}
    class="default-button"
    type={buttonType}
>
    {buttonText}
</button>

<style>
    .default-button {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: var(--color-primary);
        background-color: var(--color-secondary);
        padding: 16px 20px;
        border-radius: 8px;
        min-width: 240px;
        white-space: nowrap;
        text-align: center;
        cursor: pointer;
        border: 1px solid var(--color-secondary);
    }

    .default-button:hover {
        background-color: red;
    }

    @media (max-width: 1440px) {
        .default-button {
            font-size: 15px;
            padding: 12px 0;
            width: 194px;
            font-weight: 400;
            min-width: 200px;
        }
    }

    @media (max-width: 768px) {
        .default-button {
            font-size: 18px;
            padding: 15px 0;
            min-width: 109px;
            width: 167px;
        }
    }

    @media (max-width: 425px) {
        .default-button {
            font-size: 18px;
            padding: 15px 30px;
            width: auto;
        }
    }
</style>
