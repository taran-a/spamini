import { Filters } from 'types';

export interface IProps extends IHandlers {
    title: Filters;
    active: boolean;
}

export interface IHandlers {
    onClick: (folder: Filters) => void;
}
