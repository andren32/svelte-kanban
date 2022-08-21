<script lang="ts">
import { createEventDispatcher } from "svelte";

    import type { Ticket } from "../store";
    export let ticket: Ticket;

    let isBeingDragged = false;

    const dispatch = createEventDispatcher();

    function onDragStart() {
        isBeingDragged = true;
        dispatch("startDragging", {id: ticket.id});
    }
    function onDragEnd(event) {
        event.preventDefault();
        isBeingDragged = false;
        dispatch("stopDragging", {id: ticket.id});
    }

</script>

<div
    class="ticket"
    class:isBeingDragged
    draggable="true"
    on:dragstart={onDragStart}
    on:dragend={onDragEnd}
>
    {ticket.summary}
</div>

<style>
    .ticket {
        cursor: pointer;
        margin-bottom: 10px;
        padding: 10px 8px;
        border: 1px #000000 solid;
        border-radius: 3px;
    }
    .isBeingDragged {
        opacity: 50%;
    }
</style>
