<script lang="ts">
    import Terms from "$lib/components/terms.svelte";
</script>

<div class="container">
    <button class="settings-lg">
        <img src="/icons/settings-lg.svg" alt="" />
        <span>Settings</span>
    </button>
    <img class="top-part-logo" src="/logo/Grouplogo2.svg" alt="ZulaMed" />
    <div class="middle-part">
        <h1 class="home-title">Hallo, Name Surname!</h1>
        <p class="home-sm-text">
            Wähle die Umgebung aus, in der du chatten möchtest
        </p>
        <form
            style="display: flex; flex-direction: column; align-items: center;"
            action=""
        >
            <div class="home-buttons">
                <input
                    id="Difficulty"
                    type="radio"
                    name="option"
                    value="difficulty"
                />
                <label for="Difficulty">Difficulty</label>
                <input
                    id="Enviroment"
                    type="radio"
                    name="option"
                    value="difficulty"
                />
                <label for="Enviroment">Enviroment</label>
                <input
                    id="Specification"
                    type="radio"
                    name="option"
                    value="difficulty"
                />
                <label for="Specification">Specification</label>
                <input
                    id="Random"
                    type="radio"
                    name="option"
                    value="difficulty"
                />
                <label for="Random">Random</label>
            </div>
            <button type="submit" class="start-btn">Starten</button>
        </form>
    </div>
    <Terms textColor="#000" textDisplay="none" />
</div>

<style>
    .container {
        width: 100%;
        height: 100vh;
        padding: 39px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .settings-lg {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        top: 28px;
        right: 56px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;
        gap: 14px;
        color: #616163;
        font-weight: 600;
    }
    .settings-lg:hover {
        color: #00bca1;
    }
    .settings-lg img {
        transition: 0.1s ease;
        width: 24px;
    }

    .settings-lg:hover img {
        transform: rotate(90deg);
    }

    .top-part-logo {
        width: 244px;
    }
    .home-title {
        font-size: 39px;
        font-weight: 600;
        text-align: center;
        color: #616163;
    }

    .home-sm-text {
        font-size: 15px;
        font-weight: 400;
        text-align: center;
        color: #616163;
        margin-top: 28px;
    }
    .middle-part {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .home-buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 20px;
        column-gap: 20px;
        margin-top: 60px;
    }

    .start-btn {
        display: inline-flex;
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        background-color: #00bca1;
        padding: 12px 74px;
        border-radius: 8px;
        text-align: center;
        margin-top: 60px;
        cursor: pointer;
    }
    .start-btn:hover {
        background-color: #00a88f;
    }

    .home-buttons label {
        text-align: start;
        font-size: 24px;
        font-weight: 600;
        color: #616163;
        font-family: "Montserrat", sans-serif;
        border: 1px solid transparent;
        border-radius: 30px;
        background-color: transparent;
        padding: 26px 117px 64px 21px;
        cursor: pointer;
    }

    .home-buttons label:hover {
        border: 1px solid #999999;
    }

    .home-buttons input[type="radio"] {
        display: none;
    }

    .home-buttons input[type="radio"]:checked + label {
        border: 1px solid #00bca1;
    }
</style>
