import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-native";
export default () => {
  return (
    <>
      <Container>
        <Container2>
          <Link to={'/'}><ButtonText>Logga Ut</ButtonText></Link>
        </Container2>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #e4bca1;
  align-items: stretch;
`;
const Container2 = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`;
const ButtonText = styled.Text`
  color: #684f3f;
  font-size: 20px;
  margin: 15px;
  text-decoration: underline;
`;


const B = styled.TouchableOpacity`
`;
