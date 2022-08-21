<script lang="ts">
    import Lane from "./Lane.svelte";
    import { TicketStatus } from "../store";

    function onMouseMove(event: MouseEvent) {
        // console.log(`x: ${event.clientX} y: ${event.clientY}`);
    }
    function onStartDragging(event) {
        console.log(`start drag ${event.detail.id}`);
    }
    function onStopDragging(event) {
        console.log(`stop drag ${event.detail.id}`);
    }

    const lanes = [
        TicketStatus.Backlog,
        TicketStatus.InProgress,
        TicketStatus.Review,
        TicketStatus.Testing,
        TicketStatus.Done,
    ];
</script>

<div class="lanes" on:mousemove={onMouseMove}>
    {#each lanes as lane (lane)}
        <Lane
            on:startDragging={onStartDragging}
            on:stopDragging={onStopDragging}
            ticketStatus={lane}
        />
    {/each}
</div>

<style>
    .lanes {
        display: flex;
    }
</style>
