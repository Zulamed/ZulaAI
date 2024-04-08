<script>
    import { page } from "$app/stores";
</script>

<div class="sidebar-buttons">
    <a href="/c" class="button-lg" class:active={$page.url.pathname === "/c"}>
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
            class="lucide lucide-message-circle"
            ><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg
        >
    </a>

    <a
        class="button-lg"
        class:active={$page.url.pathname === "/c/settings"}
        href="/c/settings"
    >
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
            class="lucide lucide-settings"
            ><path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
            /><circle cx="12" cy="12" r="3" /></svg
        >
    </a>

    <button class="button-lg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-log-out"
            ><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline
                points="16 17 21 12 16 7"
            /><line x1="21" x2="9" y1="12" y2="12" /></svg
        >
    </button>
</div>

<style>
    .sidebar-buttons {
        height: 100%;
        width: 15%;
        border-right: 1px solid #eaeaea;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 235px 0 0 0;
    }

    .button-lg {
        all: unset;
        width: 46px;
        height: 46px;
        cursor: pointer;
        border-radius: 9px;
        background: #f9f9f9;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button-lg:hover {
        background: #f1f1f1;
    }
    .button-lg.active {
        background: #00bca1;
    }

    .button-lg.active svg {
        stroke: #fff;
    }

    .button-lg svg {
        width: 33px;
        height: 33px;
        stroke: #00bca1;
    }

    @media (max-width: 1280px) {
        .sidebar-buttons {
            height: 100%;
            width: 15%;
            border-right: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            padding: 149px 0 0 0;
        }
        .button-lg {
            all: unset;
            width: 32px;
            height: 32px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 9px;
        }
        .button-lg svg {
            width: 23px;
            height: 23px;
        }
    }
</style>
