import styled from 'styled-components';
export const Section = styled.section`
  width: 100%;
  margin-top: 100px;
  text-align: center;
`;
export const Container = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 1px 8px 17px -2px #6d6d6d;
`;
export const StatsList = styled.ul`
  padding: 0px;
`;
export const StatsItem = styled.li`
  padding: 3px;
  border-radius: 4px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  span {
    color: white;
  }
`;
