import styled from 'styled-components';
import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-native";
export default ({ history }) => {
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
  background-color: #E1854C;
  align-items: stretch;
`;
const Container2 = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`;
const ButtonText = styled.Text`
  color: #fbeee6;
  font-size: 20px;
  margin: 15px;
  font-family: BalooChettan2-SemiBold;
`;


const B = styled.TouchableOpacity`
`;
