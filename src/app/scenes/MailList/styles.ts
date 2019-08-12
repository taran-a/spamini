import styled from 'styled-components';

export const MailList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 340px;
  border-right: 1px solid #1e1e1e;
  background-color: #1e1e1e;
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #212121;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #212121;
  }

  &::-webkit-scrollbar-thumb {
    border: 1px solid #414141;
    border-radius: 12px;
    background-color: #414141;
  }
`;
