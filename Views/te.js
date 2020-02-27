/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import styled from 'styled-components';
import React from 'react';

export default ({ history }) => {
  return (
    <Container>
      <Welcome>te</Welcome>
      <Button onPress={() => history.push('/')}>
        <ButtonText>te</ButtonText>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
`;

const Welcome = styled.Text`
  color: black;
`
const ButtonText = styled.Text`
  color: white;
`

const Button = styled.TouchableOpacity`
  background-color: gray;
  color: white;
  border: 2px red solid;
  height: 40px;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`