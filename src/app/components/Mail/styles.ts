import styled from 'styled-components';
import { Indicator } from '../Indicator';

export const Mail = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 5px 20px;
  color: #a4a4a4;
  font-size: 14px;
  background-color: rgba(100, 100, 100, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ReadIndicator = styled(Indicator)`
  position: absolute;
  left: 0;
`;

export const SubHeader = styled(Header)`
  justify-content: space-between;
`;

export const From = styled.div`
  line-height: 18px;
  margin: auto;
  margin-left: 12px;
`;

export const Date = styled.div`
  font-size: 13px;
`;

export const Subject = styled.div`
  line-height: 30px;
  height: 30px;
  margin-left: 20px;
`;

export const Body = styled.div`
  line-height: 18px;
  padding: 20px 0;
`;
