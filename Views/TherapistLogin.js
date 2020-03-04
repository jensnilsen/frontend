import styled from 'styled-components';
import React from 'react';

export default ({history}) => {
  return (
    <Container>
      <Scroll>
        <Container3>
          <Welcome>Login</Welcome>
          <Button onPress={() => history.push('/')}>
            <ButtonText>Login</ButtonText>
          </Button>
        </Container3>
        <Button2 onPress={() => history.push('/')}>
          <ButtonText>tillbaka</ButtonText>
        </Button2>
      </Scroll>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  background-color: #fbeee6;
`;

const Container3 = styled.View``;
const Scroll = styled.ScrollView``;

const Welcome = styled.Text`
  color: gray;
  margin-top: 30px;
  margin-bottom: 30px;
  align-self: center;
  font-size: 40px;
`;

const ButtonText = styled.Text`
  color: gray;
  font-size: 30px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: #FBEEE6;
  color: white;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 5px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 12};
  shadow-opacity: 0.55;
  shadow-radius: 15;
  elevation: 22;
  margin-bottom: 40px;
`;

const Button2 = styled.TouchableOpacity`
  flex: 1;
  background-color: #FBEEE6;
  color: white;
  justify-content: center;
  align-self: flex-start;
  height: 50px;
  padding: 20px;
  margin: 5px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 12};
  shadow-opacity: 0.55;
  shadow-radius: 15;
  elevation: 22;
  margin-bottom: 40px;
`;
