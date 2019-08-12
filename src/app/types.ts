export interface IMail {
    id: number;
    date: number;
    from: string;
    subject: string;
    content: string;
    read: boolean;
    deleted: boolean;
}

export enum Filters {
    INBOX = 'Inbox',
    TRASH = 'Trash',
    ALL = 'All',
}
