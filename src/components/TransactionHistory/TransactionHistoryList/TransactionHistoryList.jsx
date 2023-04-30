import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';
import { Container, Th, Tr, Section } from './TransactionHistoryItem.styled';
export const TransactionHistory = ({ transactions }) => (
  <Section>
    <Container className="transaction-history">
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionHistoryItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </Container>
  </Section>
);
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ),
};
