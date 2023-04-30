import styled from 'styled-components';
export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #eee;
  }
  &:nth-child(2n) {
    background-color: white;
  }
  text-align: center;
`;
export const Td = styled.td`
  font-size: 21px;
  padding: 15px 0;
`;
