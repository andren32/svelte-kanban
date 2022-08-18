import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

export enum TicketStatus {
    Backlog = "Backlog",
    InProgress = "In progress",
    Review = "Review",
    Testing = "Testing",
    Done = "Done",
}

export interface Ticket {
    id: string;
    status: TicketStatus;
    summary: string;
    description: string;
}

interface Store {
    tickets: Ticket[];
}

const initialState: Store = {
    tickets: [
        {
            id: uuid(),
            status: TicketStatus.Backlog,
            summary: "Learn basic svelte",
            description:
                "In order to create a kanban app in Svelte, we first need to learn the basics",
        },
        {
            id: uuid(),
            status: TicketStatus.Review,
            summary: "Learn basic svelte",
            description:
                "In order to create a kanban app in Svelte, we first need to learn the basics",
        },
        {
            id: uuid(),
            status: TicketStatus.Backlog,
            summary: "Create kanban app",
            description: "Create the kanban app",
        },
        {
            id: uuid(),
            status: TicketStatus.Testing,
            summary: "Learn basic svelte",
            description:
                "In order to create a kanban app in Svelte, we first need to learn the basics",
        },
        {
            id: uuid(),
            status: TicketStatus.Testing,
            summary: "Create kanban app",
            description: "Create the kanban app",
        },
        {
            id: uuid(),
            status: TicketStatus.Done,
            summary: "Learn basic svelte",
            description:
                "In order to create a kanban app in Svelte, we first need to learn the basics",
        },
        {
            id: uuid(),
            status: TicketStatus.InProgress,
            summary: "Create kanban app",
            description: "Create the kanban app",
        },
        {
            id: uuid(),
            status: TicketStatus.Done,
            summary: "Learn basic svelte",
            description:
                "In order to create a kanban app in Svelte, we first need to learn the basics",
        },
        {
            id: uuid(),
            status: TicketStatus.InProgress,
            summary: "Create kanban app",
            description: "Create the kanban app",
        },
        {
            id: uuid(),
            status: TicketStatus.Done,
            summary: "Learn basic svelte",
            description:
                "In order to create a kanban app in Svelte, we first need to learn the basics",
        },
        {
            id: uuid(),
            status: TicketStatus.InProgress,
            summary: "Create kanban app",
            description: "Create the kanban app",
        },
        {
            id: uuid(),
            status: TicketStatus.Done,
            summary: "Learn basic svelte",
            description:
                "In order to create a kanban app in Svelte, we first need to learn the basics",
        },
        {
            id: uuid(),
            status: TicketStatus.InProgress,
            summary: "Create kanban app",
            description: "Create the kanban app",
        },
    ],
};

function createStore() {
    const { subscribe, update } = writable<Store>(initialState);

    return {
        subscribe,
        setTicketStatus: (id: string, status: TicketStatus) =>
            update((s) => ({
                ...s,
                tickets: s.tickets.map((ticket) =>
                    ticket.id === id ? { ...ticket, status } : ticket
                ),
            })),
    };
}

export const store = createStore();
