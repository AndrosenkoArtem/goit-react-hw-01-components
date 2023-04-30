import styled from 'styled-components';

export const Status = styled.span`
  padding: 2px 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};

  margin-right: 10px;
`;
export const Avatar = styled.img`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
export const Name = styled.p`
  font-weight: 500;
`;
