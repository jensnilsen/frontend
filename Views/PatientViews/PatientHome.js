import styled from 'styled-components';
import React from 'react';
import { useParams } from "react-router-dom";
import MenuHeader from '../Components/MenuHeader'

export default ({ history }) => {
  const { accessToken } = useParams()
  console.log('patient is home', accessToken)

  return (
    <>
      <MenuHeader />
      <Container>
        <ButtonWrapper>
          <AssButton onPress={() => history.push(`/assignmentlist/${accessToken}`)}>
            <Icon>📚</Icon>
            <ButtonText>Uppgifter</ButtonText>
          </AssButton>
          <ModellButton onPress={() => history.push('/fetchform/construction')}>
            <Icon>📈</Icon>
            <ButtonText>Modeller</ButtonText>
          </ModellButton>
          <TextButton onPress={() => history.push('/fetchform/construction')}>
            <Icon>📜</Icon>
            <ButtonText>Texter</ButtonText>
          </TextButton>
        </ButtonWrapper>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 11;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fbeee6;
  align-items: stretch;
`;
const ButtonWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ButtonText = styled.Text`
  color: #555555;
  font-size: 28px;
  font-family: BalooChettan2-Regular;
`;
const Icon = styled.Text`
  font-size: 60px;
  opacity: 0.7;
`;

const AssButton = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  background-color: #fff;
  color: white;
  justify-content: center;
  align-items: center;
`;

const ModellButton = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  background-color: #faf2ed
  color: white;
  justify-content: center;
  align-items: center;
`;

const TextButton = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  background-color: #f8e5d8;
  color: white;
  justify-content: center;
  align-items: center;
`;
