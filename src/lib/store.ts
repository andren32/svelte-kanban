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
            status: TicketStatus.Done,
            summary: "Learn basic svelte",
            description:
                "In order to create a kanban app in Svelte, I first need to learn the basics",
        },
        {
            id: uuid(),
            status: TicketStatus.Testing,
            summary: "Create kanban app",
            description:
                "After learning the basics I'll create a small kanban app",
        },
        {
            id: uuid(),
            status: TicketStatus.Review,
            summary: "Create some tickets",
            description: "Create some tickets to test kanban app",
        },
        {
            id: uuid(),
            status: TicketStatus.InProgress,
            summary: "and some more tickets",
            description: "Create even more tickets",
        },
        {
            id: uuid(),
            status: TicketStatus.InProgress,
            summary: "implement drag and drop",
            description: "let user drag and drop the tickets",
        },
        {
            id: uuid(),
            status: TicketStatus.Backlog,
            summary: "style the components",
            description:
                "style the components so they look better and not as plain",
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
        createTicket: (summary: string, description: string) =>
            update((s) => ({
                ...s,
                tickets: [
                    ...s.tickets,
                    {
                        id: uuid(),
                        status: TicketStatus.Backlog,
                        summary,
                        description,
                    },
                ],
            })),
    };
}

export const store = createStore();
