import styled from 'styled-components';
import { Indicator } from '../Indicator';

interface IMailPreview {
    active: boolean;
}

export const MailPreview = styled.div<IMailPreview>`
  height: 70px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 25px;
  user-select: none;
  color: #fff;
  font-size: 14px;
  border-bottom: 1px solid #454545;
  position: relative;
  background-color: ${({ active }) => (active ? '#375798' : 'none')};
  &:hover {
    background-color: ${({ active }) => (active ? '#375798' : 'rgba(100, 100, 100, 0.1)')};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const ReadIndicator = styled(Indicator)`
  position: absolute;
  left: 6px;
`;

export const From = styled.div`
  line-height: 18px;
`;

export const Date = styled.div`
  font-size: 13px;
  margin: auto;
  margin-right: 0;
`;

export const Subject = styled.div`
  line-height: 18px;
`;

export const Body = styled.div`
  color: #a4a4a4;
  line-height: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space:nowrap
`;
