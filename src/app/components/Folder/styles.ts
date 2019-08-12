import styled from 'styled-components';
import { IProps } from './types';

interface IFolderProps {
    active: IProps['active'];
}

export const Folder = styled.div<IFolderProps>`
  width: 100%;
  padding: 15px 40px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? 'rgba(100, 100, 100, 0.3)' : 'transparent')};

  &:hover {
    background-color: ${({ active }) => (active ? 'rgba(100, 100, 100, 0.3)' : 'rgba(100, 100, 100, 0.1)')};
  }
`;
