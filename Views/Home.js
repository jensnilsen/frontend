import styled from 'styled-components';
import React from 'react';
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

export default ({ history }) => {
  return (
    <Scroll>
      <Container>
        <Welcome>Welcome, have a look at the tools</Welcome>
      </Container>
      <Container>
        <Button onPress={() => history.push('/firsttool')}>
          <ButtonText>Tools</ButtonText>
        </Button>
        <Button onPress={() => history.push('/firsttool')}>
          <ButtonText>Tools</ButtonText>
        </Button>
        <Button onPress={() => history.push('/firsttool')}>
          <ButtonText>Tools</ButtonText>
        </Button>
        <Button onPress={() => history.push('/firsttool')}>
          <ButtonText>Tools</ButtonText>
        </Button>
        <Button onPress={() => history.push('/firsttool')}>
          <ButtonText>Tools</ButtonText>
        </Button>
        <Button onPress={() => history.push('/firsttool')}>
          <ButtonText>Tools</ButtonText>
        </Button>
      </Container>
    </Scroll>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Scroll = styled.ScrollView``;

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
  height: 500px;
  width: 49%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`