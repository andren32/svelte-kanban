<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { store, TicketStatus } from "../store";
    import Ticket from "./Ticket.svelte";

    export let ticketStatus: TicketStatus;

    $: tickets = $store.tickets.filter(
        (ticket) => ticket.status === ticketStatus
    );

    const dispatch = createEventDispatcher();
    let isDragOver = false;

    function onDragOver() {
        isDragOver = true;
    }
    function onDragLeave() {
        isDragOver = false;
    }
    function onDrop() {
        isDragOver = false;
        dispatch("drop")
    }
</script>

<div
    class="lane"
    class:isDragOver
    on:dragover={onDragOver}
    on:dragleave={onDragLeave}
    on:dragover={(event) => event.preventDefault()}
    on:drop={onDrop}
>
    <h2>{ticketStatus}</h2>
    <div />
    {#each tickets as ticket (ticket.id)}
        <Ticket {ticket} on:startDragging on:stopDragging />
    {/each}
</div>

<style>
    .lane {
        display: flex;
        flex-direction: column;
        width: 200px;
        padding: 15px;
        margin-right: 5px;
        border-radius: 3px;
        border: 1px #000000 solid;
    }
    .isDragOver {
        border-color: red;
    }
</style>
