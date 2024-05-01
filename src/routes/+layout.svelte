<script lang="ts">
    import "./main.css";
    import "../app.css";
    import Alert from "$lib/components/alert.svelte";
    import Snackbar from "$lib/components/snackbar.svelte";
</script>

<Alert />
<Snackbar />

<slot />
