<script lang="ts">
    import { store, TicketStatus } from "../store";
    import Ticket from "./Ticket.svelte";

    export let ticketStatus: TicketStatus;

    $: tickets = $store.tickets.filter(
        (ticket) => ticket.status === ticketStatus
    );
</script>

<div class="lane">
    <h2>{ticketStatus}</h2>
    <div>

    </div>
    {#each tickets as ticket}
        <Ticket {ticket} />
    {/each}
</div>

<style>
    .lane {
        display: flex;
        flex-direction: column;
        width: 200px;
        padding: 15px;
        margin: 3px;
        border-radius: 3px;
        border: 1px #000000 solid;
    }
</style>
