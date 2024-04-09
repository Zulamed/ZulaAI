<script lang="ts">
    export let textColor = "#616163";
    export let textDisplay = "block";
</script>

<div class="bottom-part">
    <h2 style="display: {textDisplay};" class="home-subtitle">
        Wir gestalten die Zukunft der Medizin
    </h2>
    <div class="terms">
        <a href="/i/nutzungsbedingungen" style="color: {textColor}"
            >Nutzungsbedingungen</a
        >
        <a href="/i/datenschutz" style="color: {textColor}">Datenschutz</a>
        <a href="/i/impressum" style="color: {textColor}">Impressum</a>
    </div>
</div>

<style>
    .bottom-part {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 80px;
        padding: 0 39px;
    }

    .bottom-part .home-subtitle {
        font-size: 27px;
        font-weight: 700;
    }

    .terms {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 57px;
    }

    .terms a {
        font-size: 15px;
        font-weight: 500;
        font-family: "Montserrat", sans-serif;
        background-color: transparent;
        border: none;
        outline: none;
        text-decoration: none;
        cursor: pointer;
    }

    .terms a:hover {
        color: var(--color-primary-hover);
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    @media (max-width: 1440px) {
        .bottom-part .home-subtitle {
            font-size: 18px;
        }

        .terms a {
            font-size: 11px;
            gap: 18px;
        }
    }
    @media (max-width: 768px) {
        .bottom-part {
            gap: 63px;
        }
        .bottom-part .terms {
            flex-wrap: wrap;
            row-gap: 23px;
        }
        .bottom-part .home-subtitle {
            font-size: 20px;
            text-align: center;
        }
        .terms a {
            font-size: 12px;
            gap: 20px;
        }
    }
    @media (max-width: 425px) {
        .bottom-part .home-subtitle {
            font-size: 20px;
            text-align: center;
        }

        .terms a {
            font-size: 12px;
            gap: 20px;
        }
    }
</style>
