import { IMail } from 'types';

export interface IProps extends IHandlers {
    active: boolean;
    mail: IMail;
    read: IMail['read'];
}

export interface IHandlers {
    onClick: (mail: IMail) => void;
}
