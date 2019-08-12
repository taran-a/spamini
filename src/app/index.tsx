import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MailContent } from 'scenes/MailContent';
import { MailList } from 'scenes/MailList';
import { Sidebar } from 'scenes/Sidebar';
import { MailStoreProvider } from 'stores/mail';
import { GlobalStyle } from './styles';

const root = document.getElementById('app');

const App = (
    <>
        <GlobalStyle />
        <MailStoreProvider>
            <>
                <Sidebar />
                <MailList />
                <MailContent />
            </>
        </MailStoreProvider>
    </>
);

ReactDOM.render(App, root);
