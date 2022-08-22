<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { store } from "../store";

    const dispatcher = createEventDispatcher();

    let summary = "";
    let description = "";

    let modalNode;

    function createTicket() {
        store.createTicket(summary, description);
        onClose();
    }
    function onClose() {
        dispatcher("close");
    }

    onMount(() => {
        const handleClick = (event: MouseEvent) => {
            if (modalNode && !modalNode.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
</script>

<div class="modal" bind:this={modalNode}>
    <h2>Create ticket</h2>
    <label>
        Summary
        <input bind:value={summary} type="text" />
    </label>

    <label>
        Description
        <input bind:value={description} type="text" />
    </label>
    <div>
        <button on:click={createTicket}>Create</button>
        <button on:click={onClose}>Cancel</button>
    </div>
</div>

<style>
    .modal {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border: 1px solid #000000;
        border-radius: 3px;

        padding: 15px 20px;
        z-index: 1;
    }
</style>
