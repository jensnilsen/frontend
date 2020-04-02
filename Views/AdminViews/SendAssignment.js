import styled from 'styled-components';
import React, { useState } from 'react';

export default ({ history }) => {
  const [question, setQuestion] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [situation, setSituation] = useState('');
  const [tanke, setTanke] = useState('');
  const [kansla, setKansla] = useState('');
  const [kropp, setKropp] = useState('');
  const [complete, setComplete] = useState(false);
  const [assignmentId, setAssignmentId] = useState('');

  const formValues = {
    assignmentId,
    situation,
    tanke,
    kansla,
    kropp,
    complete,
  };

  const clearInputs = () => {
    setSituation({ situation: '' });
    setTanke({ tanke: '' });
    setKansla({ kansla: '' });
    setKropp({ kropp: '' });
  };

  const back = () => {
    setQuestion(question - 1);
  }

  const backToStart = () => {
    setSubmit(false)
    history.push('/sendassignment')
    setQuestion(question - 1);

  }

  const handleAssignmentId = () => {
    setQuestion(question + 1);
  };

  const angsthantering = () => {
    setAssignmentId('Ångesthantering');
    handleAssignmentId();
  }
  const sorkk = () => {
    setAssignmentId('sorkk');
    handleAssignmentId();
  }

  const handleSubmit = () => {
    clearInputs();
    setComplete(true);
    console.log('handling sorkk answers', formValues);
    fetch('https://mendly.herokuapp.com/assignment', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.status !== 201) {
          return console.log('Couldnt send assignment');
        }

        response.json().then(data => {
          if (data.notFound !== true) {
            setSubmit(true);
            console.log('lassignment sent');
          } else {
            console.log('Something whent wrong');
          }
        });
      })
      .catch(err => console.log('error:', err));
  };

  return (
    <MainContainer>
      {!submit && (
        <MainContainer>
          {question === 0 && (
            <FormView>
              <BackButton onPress={() => history.push('/adminhome')}>
                <ButtonText2>Hem</ButtonText2>
              </BackButton>
              <Welcome>Skicka Uppgift Till Patient</Welcome>
              <P>
                Vilken uppgift vill du skicka?:
                  </P>
              <StartButton onPress={() => angsthantering()}>
                <ButtonText2>Ångesthantering</ButtonText2>
              </StartButton>
              <StartButton onPress={() => sorkk()}>
                <ButtonText2>Sorkk</ButtonText2>
              </StartButton>

            </FormView>
          )}

          {question === 1 && (
            <FormView>
              <BackButton onPress={() => back()}>
                <ButtonText2>Tillbaka</ButtonText2>
              </BackButton>
              <Welcome>Vill du skicka {assignmentId} till patienten?</Welcome>
              <StartButton onPress={() => handleSubmit()}>
                <ButtonText2>Skicka</ButtonText2>
              </StartButton>
            </FormView>

          )}
        </MainContainer>
      )}
      {submit && (
        <MainContainer>
          <FormView>
            <BackButton onPress={() => backToStart()}>
              <ButtonText2>Tillbaka</ButtonText2>
            </BackButton>

            <P>{assignmentId} skickad</P>
          </FormView>

        </MainContainer>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.View`
flex: 1;
flex-direction: row;
align-items: stretch;
`;

const FormView = styled.View`
flex: 1;
margin: 10px;
flex-direction: column;
align-items: stretch;
`;

const Welcome = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: 700;
`;

const H1 = styled.Text`
  color: black;
  font-size: 15px;
`;

const P = styled.Text`
  color: black;
  font-size: 15px;
`;

const BackButton = styled.TouchableOpacity`
border-radius: 10px;
height: 40px;
width: 20%;
margin-top: 15px;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #e9a97f;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: 20px;
  shadow-color: #000;
  elevation: 5;
  margin-top: 15px;
`;

const ButtonText2 = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: normal;
`;
