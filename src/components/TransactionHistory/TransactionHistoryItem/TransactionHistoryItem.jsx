import { Tr, Td } from './TransactionHistoryItem.styled';
export const TransactionHistoryItem = ({ type, amount, currency }) => (
  <Tr>
    <Td>{type}</Td>
    <Td>{amount}</Td>
    <Td>{currency}</Td>
  </Tr>
);
