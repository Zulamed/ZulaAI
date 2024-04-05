<script lang="ts">
    export let textColor = "#616163";
    export let textDisplay = "block";
    function termsOpen() {
        const overlay = document.querySelector(".overlay-terms") as HTMLElement;
        overlay.style.display = "block";
    }

    function policyOpen() {
        const overlay = document.querySelector(
            ".overlay-policy",
        ) as HTMLElement;

        overlay.style.display = "block";
    }

    function policyClose() {
        const overlay = document.querySelector(
            ".overlay-policy",
        ) as HTMLElement;
        overlay.style.display = "none";
    }
    function termsClose() {
        const overlay = document.querySelector(".overlay-terms") as HTMLElement;
        overlay.style.display = "none";
    }
</script>

<div class="bottom-part">
    <h2 style="display: {textDisplay};" class="home-subtitle">
        Wir gestalten die Zukunft der Medizin
    </h2>
    <div class="terms">
        <button style="color: {textColor}" on:click={termsOpen}
            >Nutzungsbedingungen</button
        >
        <button style="color: {textColor}" on:click={policyOpen}
            >Datenschutz</button
        >
    </div>
</div>

<div class="overlay-terms">
    <div class="terms-conditions">
        <button class="close-btn" on:click={termsClose}
            ><box-icon name="x"></box-icon></button
        >
        <h2>Nutzungsbedingungen</h2>
        <p class="terms-text">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies 1.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies 1.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies 1.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies 1.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies 1.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies 1.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies 1.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies 1.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies
        </p>
    </div>
</div>
<div class="overlay-policy">
    <div class="privacy-policy">
        <button class="close-btn" on:click={policyClose}
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A1A1A1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x"
                ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
            ></button
        >
        <h2>Datenschutz</h2>
        <p>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultricies, nunc nec ultricies tincidunt, nunc nunc ultricies
            tincidunt, nunc nunc ultricies tincidunt, nunc nunc ultricies
        </p>
    </div>
</div>

<style>
    .bottom-part {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 80px;
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

    .terms button {
        font-size: 15px;
        font-weight: 500;
        font-family: "Montserrat", sans-serif;
        background-color: transparent;
        border: none;
        outline: none;
        text-decoration: none;
        cursor: pointer;
    }

    .terms button:hover {
        color: var(--color-primary-hover);
        text-decoration: underline;
        text-underline-offset: 5px;
    }
    .overlay-terms,
    .overlay-policy {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        font-weight: 600;
        color: #010101;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
    }

    .close-btn:hover {
        background-color: #0101011c;
    }

    .terms-conditions,
    .privacy-policy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #010101;
        width: 700px;
    }
    .terms-conditions h2,
    .privacy-policy h2 {
        font-size: 25px;
        font-weight: 600;
    }

    .terms-conditions p,
    .privacy-policy p {
        font-size: 15px;
        font-weight: 400;
        height: 700px;
        overflow-y: scroll;
    }

    @media (max-width: 1440px) {
        .bottom-part .home-subtitle {
            font-size: 18px;
        }

        .terms button {
            font-size: 11px;
            gap: 18px;
        }
    }
    @media (max-width: 768px) {
        .bottom-part .home-subtitle {
            font-size: 20px;
            text-align: center;
        }
        .terms button {
            font-size: 12px;
            gap: 20px;
        }

        .overlay-policy,
        .overlay-terms {
            width: 100%;
            height: 100%;
        }

        .terms-conditions,
        .privacy-policy {
            width: 100%;
            height: 100dvh;
            border-radius: 0;
            padding: 20px;
        }
    }
    @media (max-width: 425px) {
        .bottom-part .home-subtitle {
            font-size: 20px;
            text-align: center;
        }

        .terms button {
            font-size: 12px;
            gap: 20px;
        }

        .overlay-policy,
        .overlay-terms {
            width: 100%;
            height: 100%;
        }

        .terms-conditions,
        .privacy-policy {
            width: 100%;
            padding: 20px;
        }
    }
</style>
