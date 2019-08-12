import { MailPreview } from 'components/MailPreview';
import { useObserver } from 'mobx-react-lite';
import * as React from 'react';
import { useStore } from 'stores/mail';
import { Spinner } from 'components/Spinner';
import * as s from './styles';

export const MailList: React.FC = () => {
    const store = useStore();
    return useObserver(() => (
        <>
            <s.MailList>
                {store.loading && <Spinner />}
                {!store.loading && store.filteredMails.map((mail) => (
                    <MailPreview
                        key={mail.id}
                        active={(!!store.openedMail && store.openedMail.id === mail.id)}
                        read={mail.read}
                        mail={mail}
                        onClick={store.openMail}
                    />
                ))}
            </s.MailList>
        </>

    ));
};
