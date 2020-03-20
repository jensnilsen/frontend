import styled from 'styled-components';
import React from 'react';
import { ActivityIndicator } from 'react-native'

export const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="8b776a" />
    </Container>
  );
};
export default Loading;

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;
