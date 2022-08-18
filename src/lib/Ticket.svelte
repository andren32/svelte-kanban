<script lang="ts">
    import type { Ticket } from "../store";
    export let ticket: Ticket;
</script>

<div class="ticket">
    {ticket.summary}
</div>

<style>
    .ticket {
        margin: 5px;
        padding: 10px 8px;
        border: 1px #000000 solid;
        border-radius: 3px;
    }
</style>
