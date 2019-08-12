import * as React from 'react';
import * as s from './styles';
import { IProps } from './types';

export const Toolbar: React.FC<IProps> = (props) => {
    return (
        <s.Toolbar>
            <s.CloseButton
                title="Close"
                onClick={props.onClose}
            >
                X
            </s.CloseButton>
            <s.ReadButton
                title="Mark as Unread"
                onClick={props.onRead}
            >
                R
            </s.ReadButton>
            <s.DeleteButton
                title="Delete"
                onClick={props.onDelete}
            >
                D
            </s.DeleteButton>
        </s.Toolbar>
    );
};
