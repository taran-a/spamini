import * as React from 'react';
import { useCallback } from 'react';
import * as s from './styles';
import { IProps } from './types';

export const Folder: React.FC<IProps> = (props) => {
    const onClick = useCallback(() => {
        props.onClick(props.title);
    }, [props.title, props.onClick]);

    return (
        <s.Folder
            active={props.active}
            onClick={onClick}
        >
            {props.title}
        </s.Folder>
    );
};
