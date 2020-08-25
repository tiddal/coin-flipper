import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  button {
    margin: 20px 0;
    padding: 16px 48px;
    font-size: 16px;
    text-transform: uppercase;
    border-radius: 16px;
    background-color: #333;
    font-weight: bold;
    color: #fff;
    border: none;
    box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.25);
    cursor: pointer;
    width: 300px;
    transition: background-color .3s ease, width .5s ease;
    outline: none;
    :hover {
      background-color: #aaa;
    }
  }
`;

export default Container;
