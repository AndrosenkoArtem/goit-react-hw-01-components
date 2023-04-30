import styled from 'styled-components';
export const Image = styled.img`
  width: 100px;
`;
export const Section = styled.section`
  text-align: center;
  width: 100%;
  margin-top: 100px;
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
  list-style: none;
  display: flex;
  padding: 0px;
  li {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
