import * as React from 'react';
import * as s from './styles';
import { IProps } from './types';

export const Indicator: React.FC<IProps> = (props) =>
    <s.Indicator className={props.className} />;
