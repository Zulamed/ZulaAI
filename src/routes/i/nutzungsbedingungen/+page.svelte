<script lang="ts">
    import Terms from "$lib/components/terms.svelte";
    import { onMount } from "svelte";
    let previousPage = "";

    onMount(() => {
        previousPage = document.referrer || "/";
    });

    function goBack() {
        history.back();
    }
</script>

<div class="container">
    <div class="top-part">
        <img class="top-part" src="/logo/Grouplogo2.svg" alt="ZulaMed" />
    </div>
    <button on:click={goBack} class="back-btn">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A1A1A1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg
        >
        <span>Zurück</span>
    </button>
    <div class="middle-part" style="color: #000;">
        <h1 class="i-title">Nutzungsbedingungen</h1>
        <p class="i-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            urna molestie mauris pretium eleifend scelerisque nec nisi. Etiam
            vel dolor dolor. Duis feugiat, nibh in volutpat lacinia, est urna
            ullamcorper elit, nec rhoncus tortor urna vel sem. Nunc euismod
            tempus massa, ut aliquet erat vestibulum vel. Cras sed suscipit ex.
            Proin sit amet semper nulla. Cras laoreet sem id facilisis laoreet.
            Sed malesuada interdum bibendum. Ut cursus nec risus eget pretium.
            Quisque a convallis metus, nec ullamcorper purus. Proin non turpis
            eu sem porta mattis. Donec mollis augue sit amet dui pellentesque,
            vel suscipit purus scelerisque. Praesent sit amet neque eu arcu
            ornare venenatis sed et diam. Nam non nisl malesuada, consequat
            neque sed, faucibus ante. Etiam eget ipsum sit amet massa dignissim
            finibus. Etiam vel massa ac magna interdum porttitor quis quis odio.
            Phasellus commodo tortor nisl, nec vestibulum nibh tempus ut. Etiam
            ac ligula a nisl facilisis mattis. Proin porttitor, nibh eu posuere
            porttitor, dolor mauris sodales nisi, lacinia cursus ligula arcu ut
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna
            molestie mauris pretium eleifend scelerisque nec nisi. Etiam vel
            dolor dolor. Duis feugiat, nibh in volutpat lacinia, est urna
            ullamcorper elit, nec rhoncus tortor urna vel sem. Nunc euismod
            tempus massa, ut aliquet erat vestibulum vel. Cras sed suscipit ex.
            Proin sit amet semper nulla. Cras laoreet sem id facilisis laoreet.
            Sed malesuada interdum bibendum. Ut cursus nec risus eget pretium.
            Quisque a convallis metus, nec ullamcorper purus. Proin non turpis
            eu sem porta mattis. Donec mollis augue sit amet dui pellentesque,
            vel suscipit purus scelerisque. Praesent sit amet neque eu arcu
            ornare venenatis sed et diam. Nam non nisl malesuada, consequat
            neque sed, faucibus ante. Etiam eget ipsum sit amet massa dignissim
            finibus. Etiam vel massa ac magna interdum porttitor quis quis odio.
            Phasellus commodo tortor nisl, nec vestibulum nibh tempus ut. Etiam
            ac ligula a nisl facilisis mattis. Proin porttitor, nibh eu posuere
            porttitor, dolor mauris sodales nisi, lacinia cursus ligula arcu ut
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna
            molestie mauris pretium eleifend scelerisque nec nisi. Etiam vel
            dolor dolor. Duis feugiat, nibh in volutpat lacinia, est urna
            ullamcorper elit, nec rhoncus tortor urna vel sem. Nunc euismod
            tempus massa, ut aliquet erat vestibulum vel. Cras sed suscipit ex.
            Proin sit amet semper nulla. Cras laoreet sem id facilisis laoreet.
            Sed malesuada interdum bibendum. Ut cursus nec risus eget pretium.
            Quisque a convallis metus, nec ullamcorper purus. Proin non turpis
            eu sem porta mattis. Donec mollis augue sit amet dui pellentesque,
            vel suscipit purus scelerisque. Praesent sit amet neque eu arcu
            ornare venenatis sed et diam. Nam non nisl malesuada, consequat
            neque sed, faucibus ante. Etiam eget ipsum sit amet massa dignissim
            finibus. Etiam vel massa ac magna interdum porttitor quis quis odio.
            Phasellus commodo tortor nisl, nec vestibulum nibh tempus ut. Etiam
            ac ligula a nisl facilisis mattis. Proin porttitor, nibh eu posuere
            porttitor, dolor mauris sodales nisi, lacinia cursus ligula arcu ut
            nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean ac urna molestie mauris pretium eleifend scelerisque nec
            nisi. Etiam vel dolor dolor. Duis feugiat, nibh in volutpat lacinia,
            est urna ullamcorper elit, nec rhoncus tortor urna vel sem. Nunc
            euismod tempus massa, ut aliquet erat vestibulum vel. Cras sed
            suscipit ex. Proin sit amet semper nulla. Cras laoreet sem id
            facilisis laoreet. Sed malesuada interdum bibendum. Ut cursus nec
            risus eget pretium. Quisque a convallis metus, nec ullamcorper
            purus. Proin non turpis eu sem porta mattis. Donec mollis augue sit
            amet dui pellentesque, vel suscipit purus scelerisque. Praesent sit
            amet neque eu arcu ornare venenatis sed et diam. Nam non nisl
            malesuada, consequat neque sed, faucibus ante. Etiam eget ipsum sit
            amet massa dignissim finibus. Etiam vel massa ac magna interdum
            porttitor quis quis odio. Phasellus commodo tortor nisl, nec
            vestibulum nibh tempus ut. Etiam ac ligula a nisl facilisis mattis.
            Proin porttitor, nibh eu posuere porttitor, dolor mauris sodales
            nisi, lacinia cursus ligula arcu ut nunc.
        </p>
    </div>
    <Terms textColor="#00BCA1" textDisplay="none" />
</div>

<style>
    .container {
        padding: 80px 334px 63px;
        width: 100%;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .top-part {
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
    }

    .top-part img {
        width: 317px;
    }

    .middle-part {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 100%;
        padding: 24px 0;
    }

    .back-btn {
        all: unset;
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 20px;
        font-weight: 500;
        color: #a1a1a1;
        text-decoration: none;
        cursor: pointer;
        width: fit-content;
        margin-top: 18.75px;
    }

    .back-btn:hover {
        color: #00bca1;
    }

    .back-btn:hover svg {
        stroke: #00bca1;
    }

    .i-title {
        font-size: 37px;
        font-weight: 600;
        margin-bottom: 44px;
        color: #616163;
    }

    .i-text {
        font-size: 20px;
        font-weight: 400;
        color: #616163;
        text-align: center;
        line-height: 24.38px;
    }

    @media (max-width: 1440px) {
        .container {
            padding: 39px 236px 39px 236px;
        }

        .top-part img {
            width: 164px;
        }

        .middle-part {
            padding: 17px 0;
        }

        .back-btn {
            font-size: 16px;
            gap: 12px;
        }

        .i-title {
            font-size: 28px;
        }

        .i-text {
            font-size: 14px;
            line-height: 17.07px;
        }
    }
    @media (max-width: 1024px) {
        .container {
            padding: 39px 28px;
        }

        .i-title {
            font-size: 28px;
            margin-bottom: 22px;
        }
    }

    @media (max-width: 768px) {
        .top-part img {
            width: 174px;
        }

        .middle-part {
            padding: 17px 0;
        }

        .back-btn {
            font-size: 14px;
            gap: 8px;
        }

        .i-title {
            font-size: 28px;
        }

        .i-text {
            font-size: 14px;
            line-height: 17.07px;
        }
    }

    @media (max-width: 425px) {
        .i-title {
            font-size: 22px;
        }
    }
</style>
