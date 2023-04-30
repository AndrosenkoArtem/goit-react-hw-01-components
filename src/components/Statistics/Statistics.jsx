import PropTypes from 'prop-types';
import { Container, StatsItem, StatsList, Section } from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <Section>
    <Container>
      <h2>{title}</h2>
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem
            key={id}
            style={{ backgroundColor: colors(), display: 'inline-block' }}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </Container>
  </Section>
);
/**
 * propTypes
 */
Statistics.prototype = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
/**
 * backgroundColors
 */
function colors() {
  const color =
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  if (color === '#fffff') {
    return '#00000';
  }
  return color;
}
