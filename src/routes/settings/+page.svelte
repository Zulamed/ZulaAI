<script lang="ts">
    import { goto } from "$app/navigation";

    if (window.innerWidth > 1024) {
        goto("/settings/account");
    } else {
        goto("/settings");
    }
</script>

<div class="middle-part">
    <div class="settings-list">
        <a class="settings-item-link" href="/settings/account">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00BCA1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user"
                ><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle
                    cx="12"
                    cy="7"
                    r="4"
                /></svg
            >
            Persönliche daten
        </a>

        <a class="settings-item-link" href="/settings/password">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00BCA1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-lock"
                ><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path
                    d="M7 11V7a5 5 0 0 1 10 0v4"
                /></svg
            >
            Passwort ändern
        </a>
    </div>
</div>

<style>
    .settings-list {
        display: none;
    }

    @media (max-width: 1024px) {
        .middle-part {
            height: 100dvh;
            padding: 80px 20px;
            display: flex;
            align-items: start;
        }

        .settings-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            color: #616163;
            font-size: 14px;
            font-weight: 500;
            gap: 20px;
        }
        .settings-list a {
            gap: 22px;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            border-radius: 8px;
        }
        .settings-list a:hover,
        .settings-list a:active {
            background-color: #f5f5f5;
        }
    }
</style>
