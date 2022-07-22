import React from 'react';
import styled from 'styled-components';
import loader from '../../assets/loader.gif';

function Loading() {
  return (
    <Container>
      <img src={loader} alt="loader" className="loader" />
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;`;
