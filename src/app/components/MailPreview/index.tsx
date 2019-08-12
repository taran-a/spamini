import { useCallback } from 'react';
import * as React from 'react';
import { format } from 'helpers/date';
import * as s from './styles';
import { IProps } from './types';

export const MailPreview: React.FC<IProps> = (props) => {
    const onClick = useCallback(() => {
        props.onClick(props.mail);
    }, [props.mail, props.onClick]);

    const { from, date, subject, content } = props.mail;
    return (
        <s.MailPreview
            active={props.active}
            onClick={onClick}
        >
            <s.Header>
                {!props.read && <s.ReadIndicator />}
                <s.From>{from}</s.From>
                <s.Date>{format(date)}</s.Date>
            </s.Header>
            <s.Subject>{subject}</s.Subject>
            <s.Body>{content}</s.Body>
        </s.MailPreview>
    );
};
