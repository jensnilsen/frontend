import styled from 'styled-components';
import React from 'react';
import MenuHeader from '../Views/Components/MenuHeader'

export default () => {
  return (
    <Container>
      <MenuHeader />
      <Container2>
        <A>
          <Icon>👷</Icon>
          <ButtonText>Sidan Under Arbete</ButtonText>
        </A>
      </Container2>
    </Container>

  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.View`
flex :11;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #555;
  font-size: 45px;
  justify-content: center;
  align-items: center;
  font-family: BalooChettan2-ExtraBold;
`;
const Icon = styled.Text`
  font-size: 120px;
  opacity: 0.7;
`;

const A = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  background-color: #fff;
  color: white;
  justify-content: center;
  align-items: center;
`;

