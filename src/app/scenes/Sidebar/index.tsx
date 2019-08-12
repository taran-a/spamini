import { Folder } from 'components/Folder';
import { useObserver } from 'mobx-react-lite';
import { useEffect } from 'react';
import * as React from 'react';
import { useStore } from 'stores/mail';
import * as s from './styles';

export const Sidebar: React.FC = () => {
    const store = useStore();

    useEffect(() => {
        store.fetch();
    }, []);

    return useObserver(() => (
        <s.Sidebar>
            <s.Title>Folders</s.Title>
            {store.filters.map((filter) => (
                <Folder
                    key={filter}
                    title={filter}
                    active={filter === store.filter}
                    onClick={store.changeFilter}
                />
            ))}
        </s.Sidebar>
    ));
};
