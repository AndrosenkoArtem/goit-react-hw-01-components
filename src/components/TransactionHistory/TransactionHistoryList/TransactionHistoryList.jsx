import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import transactions from '../../../data/transactions';
import { Container, Th, Tr, Section } from './TransactionHistoryItem.styled';
export const TransactionHistory = () => (
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
