<script lang="ts">
    import Ticket from "./lib/Ticket.svelte";
    import { store, TicketStatus } from "./store";

    $: inProgressTickets = $store.tickets.filter(
        (ticket) => ticket.status === TicketStatus.InProgress
    );
    $: doneTickets = $store.tickets.filter(
        (ticket) => ticket.status === TicketStatus.Done
    );
</script>

<main>
    <div>
      <h2>In progress</h2>
        {#each inProgressTickets as ticket}
            <Ticket {ticket} />
        {/each}
    </div>
    <div>
      <h2>Done</h2>
        {#each doneTickets as ticket}
            <Ticket {ticket} />
        {/each}
    </div>
</main>
