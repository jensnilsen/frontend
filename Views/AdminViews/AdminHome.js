import styled from 'styled-components';
import React from 'react';

export default ({ history }) => {
  return (
    <Container>
      <ButtonWrapper>
        <PatientButton onPress={() => history.push('/assignmentlist')}>
          <ButtonText>Patients assignment list</ButtonText>
        </PatientButton>
        <TherapistButton onPress={() => history.push('/sendassignment')}>
          <ButtonText>nada</ButtonText>
        </TherapistButton>
        <FormButton onPress={() => history.push('/sendassignment')}>
          <ButtonText>sent Assignments</ButtonText>
        </FormButton>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
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
`;

const PatientButton = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  background-color: #fbeee6;
  color: white;
  justify-content: center;
  align-items: center;
`;

const TherapistButton = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  background-color: #f8e5d8;
  color: white;
  justify-content: center;
  align-items: center;
`;

const FormButton = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  background-color: #f6ddcc;
  color: white;
  justify-content: center;
  align-items: center;
`;
