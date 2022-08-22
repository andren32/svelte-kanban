<script lang="ts">
    import CreateTicketModal from "./CreateTicketModal.svelte";

    let isShowingModal = false;

    function showModal() {
        isShowingModal = true;
    }
    function hideModal() {
        isShowingModal = false;
    }
</script>

<button on:click={showModal}> Create ticket </button>
{#if isShowingModal}
    <CreateTicketModal on:close={hideModal} />
{/if}

<style>
    button {
        margin-bottom: 10px;
    }
</style>
