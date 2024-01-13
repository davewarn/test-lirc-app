<script lang="ts">
    import { postData } from "$lib";
    async function sendSignal() {
        await postData('/send_signal');
    }
</script>

<h1>Test LIRC App</h1>

<button on:click="{sendSignal}">Send Signal</button>
