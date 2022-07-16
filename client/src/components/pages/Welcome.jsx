import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Robot from '../../assets/robot.gif';

function Welcome() {
  const sessionUser = useSelector((state) => state.user);

  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome,
        {' '}
        <span>
          {sessionUser}
          !
        </span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}
export default Welcome;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
