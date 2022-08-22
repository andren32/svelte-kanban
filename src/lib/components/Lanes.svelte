<script lang="ts">
    import Lane from "./Lane.svelte";
    import { store, TicketStatus } from "../store";

    let draggedId: string;

    function onStartDragging(event: any) {
        draggedId = event.detail.id;
    }
    function onStopDragging() {
        draggedId = undefined;
    }
    function createOnDrop(ticketStatus: TicketStatus) {
        return () => {
            if (draggedId !== undefined) {
                store.setTicketStatus(draggedId, ticketStatus);
            }
        };
    }

    const lanes = [
        TicketStatus.Backlog,
        TicketStatus.InProgress,
        TicketStatus.Review,
        TicketStatus.Testing,
        TicketStatus.Done,
    ];
</script>

<div class="lanes">
    {#each lanes as lane (lane)}
        <Lane
            on:startDragging={onStartDragging}
            on:stopDragging={onStopDragging}
            on:drop={createOnDrop(lane)}
            ticketStatus={lane}
        />
    {/each}
</div>

<style>
    .lanes {
        display: flex;
    }
</style>
