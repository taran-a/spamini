import { Mail } from 'components/Mail';
import { Toolbar } from 'components/Toolbar';
import { useObserver } from 'mobx-react-lite';
import { useCallback } from 'react';
import * as React from 'react';
import { useStore } from 'stores/mail';
import * as s from './styles';

export const MailContent: React.FC = () => {
    const store = useStore();

    const closeMail = useCallback(() => {
        store.closeMail();
    }, [store.openedMail]);

    const readMail = useCallback(() => {
        store.readMail(store.openedMail!);
    }, [store.openedMail]);

    const deleteMail = useCallback(() => {
        store.deleteMail(store.openedMail!);
    }, [store.openedMail]);

    return useObserver(() => (
        <s.MailContent>
            {store.openedMail && (
                <>
                    <Toolbar
                        onClose={closeMail}
                        onRead={readMail}
                        onDelete={deleteMail}
                    />
                    <Mail
                        {...store.openedMail}
                    />
                </>
            )}
        </s.MailContent>
    ));
};
