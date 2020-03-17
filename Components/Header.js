import styled from 'styled-components';
import React from 'react';

export default ({history}) => {
  return (
    <MainContainer>
      <ChangeLoginButton type="button" onPress={() => history.push('/')}>
        <ChangeButtonText>logout</ChangeButtonText>
      </ChangeLoginButton>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  align-items: flex-end;
`;

const ChangeButtonText = styled.Text`
  font-size: 16px;
  color: black;
`;

const ChangeLoginButton = styled.TouchableOpacity`
  border-bottom-width: 1px;
  margin: 10px;
`;
