import { Tr, Td } from './TransactionHistoryItem.styled';
import PropTypes from 'prop-types';
export const TransactionHistoryItem = ({ type, amount, currency }) => (
  <Tr>
    <Td>{type}</Td>
    <Td>{amount}</Td>
    <Td>{currency}</Td>
  </Tr>
);
TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
