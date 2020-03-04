import styled from 'styled-components';
import React from 'react';

export default ({history}) => {
  return (
    <Container>
      <Scroll>
        <Container3>
          <Welcome>Login</Welcome>

          <Container2>
            <Button onPress={() => history.push('/patientLogin')}>
              <ButtonText>Patient Login</ButtonText>
            </Button>
            <Button onPress={() => history.push('/therapistLogin')}>
              <ButtonText>Therapist Login</ButtonText>
            </Button>
          </Container2>
        </Container3>
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

const Container2 = styled.View``;
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
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: #FBEEE6;
  color: white;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin: 5px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 12};
  shadow-opacity: 0.55;
  shadow-radius: 15;
  elevation: 22;
  margin-bottom: 40px;
`;
