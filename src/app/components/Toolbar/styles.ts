import styled from 'styled-components';

export const Toolbar = styled.div`
  display: flex;
  flex: 0 0 40px;
  align-items: center;
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  color: #fff;
  outline: none;
  border: none;
`;

export const ReadButton = styled(CloseButton)`
  border-radius: 50%;
  margin-left: 20px;
  background-color: rgba(100, 100, 100, 0.1);

  &:hover {
    border: 1px solid #fff;
  }
`;

export const DeleteButton = styled(ReadButton)`
`;
