import { fetchMails } from 'app/api/mails';
import { IMail, Filters } from 'app/types';
import { runInAction } from 'mobx';

export interface IMailStore {
    mails: IMail[];
    filter: Filters;
    filters: Filters[];
    filteredMails: IMail[];
    openedMail: IMail | null;
    fetch: () => void;
    loading: boolean;
    changeFilter: (filter: Filters) => void;
    closeMail: () => void;
    openMail: (mail: IMail) => void;
    readMail: (mail: IMail) => void;
    deleteMail: (mail: IMail) => void;
}

export const createMailStore = (): IMailStore => ({
    mails: [],
    openedMail: null,
    filter: Filters.INBOX,
    filters: [Filters.INBOX, Filters.TRASH, Filters.ALL],
    loading: false,
    get filteredMails(): IMail[] {
        switch (this.filter) {
            case Filters.INBOX:
                return this.mails.filter((mail) => !mail.deleted);
            case Filters.TRASH:
                return this.mails.filter((mail) => mail.deleted);
            case Filters.ALL:
                return this.mails;
        }
    },
    fetch() {
        this.loading = true;
        fetchMails().then(
            (response) => {
                runInAction(() => {
                    this.mails = response;
                    this.loading = false;
                });
            },
        );
    },
    changeFilter(filter: Filters) {
        this.filter = filter;
    },
    readMail(mail: IMail) {
        const current = this.mails.find((m) => m === mail);
        if (current) {
            current.read = !current.read;
        }
    },
    openMail(mail: IMail | null) {
        const current = this.mails.find((m) => m === mail);
        if (current) {
            this.openedMail = mail;
        }
    },
    closeMail() {
        this.openedMail = null;
    },
    deleteMail(mail: IMail) {
        const current = this.mails.find((m) => m === mail);
        if (current) {
            current.deleted = true;
        }
    },
});
