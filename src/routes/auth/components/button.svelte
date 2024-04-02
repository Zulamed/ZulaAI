<script lang="ts">
    export let buttonText = "Button Text";
    export let buttonType: "submit" | "button" | "reset" = "submit";
</script>

<button class="default-button" type={buttonType}>
    {buttonText}
</button>

<style>
    .default-button {
        font-size: 20px;
        font-weight: 400;
        color: var(--color-primary);
        background-color: var(--color-secondary);
        padding: 18px 0;
        border-radius: 8px;
        width: 262px;
        text-align: center;
        cursor: pointer;
    }

    .default-button:hover {
        background-color: var(--color-secondary-hover);
    }

    @media (max-width: 1440px) {
        .default-button {
            font-size: 15px;
            padding: 12px 0;
            width: 194px;
            font-weight: 400;
        }
    }

    @media (max-width: 768px) {
        .default-button {
            font-size: 18px;
            padding: 15px 0;
            width: 146px;
        }
    }

    @media (max-width: 425px) {
        .default-button {
            font-size: 18px;
            padding: 15px 0;
            width: 176px;
        }
    }
</style>
