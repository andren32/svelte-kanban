<script lang="ts">
    import Lane from "./lib/Lane.svelte";
    import { TicketStatus } from "./store";

</script>

<main>
    <div class="lanes">
    <Lane ticketStatus={TicketStatus.Backlog}/>
    <Lane ticketStatus={TicketStatus.InProgress}/>
    <Lane ticketStatus={TicketStatus.Review}/>
    <Lane ticketStatus={TicketStatus.Testing}/>
    <Lane ticketStatus={TicketStatus.Done}/>
    </div>
</main>

<style>
    .lanes {
        display: flex;
    }
</style>