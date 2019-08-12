import { format } from 'helpers/date';
import * as React from 'react';
import { IMail } from 'types';
import * as s from './styles';

export const Mail: React.FC<IMail> = (props) => {
    const { from, date, subject, content, read } = props;
    return (
        <s.Mail>
            <s.Header>
                {!read && <s.ReadIndicator />}
                <s.Subject>{subject}</s.Subject>
            </s.Header>
            <s.SubHeader>
                ><s.From> From: {from}</s.From>
                <s.Date>{format(date)}</s.Date>
            </s.SubHeader>
            <s.Body>{content}</s.Body>
        </s.Mail>
    );
};
