import { useLocalStore } from 'mobx-react-lite';
import * as React from 'react';
import { PropsWithChildren, ReactNode } from 'react';
import { createMailStore, IMailStore } from './MailStore';

const storeContext = React.createContext<IMailStore | null>(null);

export const MailStoreProvider = ({ children }: PropsWithChildren<ReactNode>) => {
    const store = useLocalStore(createMailStore);
    return (
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
    );
};

export const useStore = () => {
    const store = React.useContext(storeContext);
    if (!store) {
        throw new Error('You have forgot to use Provider.');
    }
    return store;
};
