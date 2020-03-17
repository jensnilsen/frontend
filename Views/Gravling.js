/* eslint-disable no-shadow */
import styled from 'styled-components';
import React, {useState} from 'react';
import Header from '../Components/Header';

export default ({history}) => {
  const [question, setQuestion] = useState(0);

  const handleNext = () => {
    setQuestion(question + 1);
  };
  const handleBack = () => {
    setQuestion(question - 1);
  };
  const [submit, setSubmit] = useState(false);
  const [situation, setSituation] = useState('');
  const [tanke, setTanke] = useState('');
  const [lukt, setLukt] = useState('');
  const [kropp, setKropp] = useState('');
  const [assignmentId, setAssignmentId] = useState('');

  const formValues = {assignmentId, situation, tanke, lukt, kropp};

  // const clearInputs = () => {
  //   setSituation({situation: ''});
  //   setTanke({tanke: ''});
  //   setKansla({kansla: ''});
  //   setKropp({kropp: ''});
  // };

  const handleAssignmentId = () => {
    setAssignmentId('gravling');
    handleNext(question + 1);
  };

  const handleSubmit = () => {
    console.log('handling sorkk answers', formValues);
    fetch('http://192.168.0.12:8080/assignment', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => {
        if (response.status !== 201) {
          return console.log('nope');
        }

        response.json().then(data => {
          if (data.notFound !== true) {
            setSubmit(true);
            console.log('login ok');
          } else {
            console.log('login fail props wrong user or pass');
          }
        });
      })
      .catch(err => console.log('error:', err));
  };

  return (
    <MainContainer>
      <Header />
      <HomexButton onPress={() => history.push('/')}>
        <ButtonX>✖️</ButtonX>
      </HomexButton>
      <MainContainer2>
        <FormContainer>
          {!submit && (
            <FormView>
              {question === 0 && (
                <FormSection>
                  <H1>UPPGIFT</H1>
                  <Welcome>Funktionsanalys (SORKK)</Welcome>
                  <ImageView>
                    <HeadImage
                      source={require('../images/sorkk.png')}
                      resizeMode="contain"
                    />
                  </ImageView>
                  <P>
                    Lorem Ipsum är en utfyllnadstext från tryck- och
                    förlagsindustrin. Lorem ipsum har varit standard ända sedan
                    1500-talet, när en okänd boksättare tog att antal bokstäver.
                    m är en utfyllnadstext från tryck- och förlagsindustrin.
                    Lorem ipsum har varit standard ända sedan 1500-talet, när en
                    okänd boksättare tog att antal bokstäver
                  </P>
                  <StartButtonWrapper>
                    <StartButton onPress={() => handleAssignmentId()}>
                      <ButtonText2>starta</ButtonText2>
                    </StartButton>
                    <P2>Ungefärlig tidsåtgång: 30 min</P2>
                  </StartButtonWrapper>
                </FormSection>
              )}
              {question === 1 && (
                <FormSection>
                  <H1>SORKK</H1>
                  <Welcome>Situation</Welcome>
                  <P>
                    Lorem Ipsum är en utfyllnadstext från tryck- och
                    förlagsindustrin. Lorem ipsum har varit standard ända sedan
                    1500-talet, när en okänd boksättare tog att antal bokstäver.
                  </P>
                  <InputHeadWrap>
                    <InputHeader>situiation</InputHeader>
                    <HelpButton>
                      <P2>help</P2>
                    </HelpButton>
                  </InputHeadWrap>
                  <Input
                    type="text"
                    required
                    numberOfLines={5}
                    value={situation}
                    placeholder="text"
                    multiline={true}
                    onChangeText={situation => setSituation(situation)}
                  />
                  <ProbarWrap>
                    <ProBarC />
                    <ProBar />
                    <ProBar />
                    <ProBar />
                    <ProBar />
                  </ProbarWrap>
                </FormSection>
              )}
              {question === 2 && (
                <FormSection>
                  <H1>SORKK</H1>
                  <Welcome>Situation</Welcome>
                  <P>
                    Lorem Ipsum är en utfyllnadstext från tryck- och
                    förlagsindustrin. Lorem ipsum har varit standard ända sedan
                    1500-talet, när en okänd boksättare tog att antal bokstäver.
                  </P>
                  <InputHeadWrap>
                    <InputHeader>situiation</InputHeader>
                    <HelpButton>
                      <P2>help</P2>
                    </HelpButton>
                  </InputHeadWrap>
                  <Input
                    type="text"
                    required
                    value={tanke}
                    placeholder="tanke"
                    onChangeText={tanke => setTanke(tanke)}
                  />
                  <InputHeadWrap>
                    <InputHeader>situiation</InputHeader>
                    <HelpButton>
                      <P2>help</P2>
                    </HelpButton>
                  </InputHeadWrap>
                  <Input
                    type="text"
                    required
                    value={lukt}
                    placeholder="känsla"
                    onChangeText={lukt => setLukt(lukt)}
                  />
                  <InputHeadWrap>
                    <InputHeader>situiation</InputHeader>
                    <HelpButton>
                      <P2>help</P2>
                    </HelpButton>
                  </InputHeadWrap>
                  <Input
                    type="text"
                    required
                    value={kropp}
                    placeholder="kropp"
                    onChangeText={kropp => setKropp(kropp)}
                  />
                  <ProbarWrap>
                    <ProBarC />
                    <ProBarC />
                    <ProBar />
                    <ProBar />
                    <ProBar />
                  </ProbarWrap>
                </FormSection>
              )}
              {question === 3 && (
                <FormSection>
                  <Welcome>soRkk lorem </Welcome>
                  <ScrollContainer>
                    <P>
                      Lorem Ipsum är en utfyllnadstext från tryck- och
                      förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare tog att antal
                      bokstäver och blandade dem för att göra ett provexemplar
                      av en bok. Lorem ipsum har inte bara överlevt fem
                      århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
                      med avsnitt av Lorem Ipsum, och senare med mjukvaror som
                      Aldus PageMaker. med lanseringen av Letraset-ark med
                      avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus
                      PageMaker. Lorem Ipsum är en utfyllnadstext från tryck-
                      och förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare tog att antal
                      bokstäver och blandade dem för att göra ett provexemplar
                      av en bok. av en bok. Lorem ipsum har inte bara överlevt
                      fem århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
                      med avsnitt av Lorem Ipsum, och senare med mjukvaror som
                      Lorem Ipsum är en utfyllnadstext från tryck- och tryck-
                      och förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare bokstäver och
                      blandade dem för att göra ett provexemplar provexemplar av
                      en bok. Lorem ipsum har inte bara överlevt fem
                      århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
                      med avsnitt av Lorem Ipsum, och senare med mjukvaror som
                      Det blev allmänt känt på 1960-talet i samband med
                      lanseringen av Letraset-ark med avsnitt av Lorem Ipsum,
                      och senare med mjukvaror som Aldus PageMaker. med
                      lanseringen av Letraset-ark med avsnitt av Lorem Ipsum,
                      och senare med mjukvaror som Aldus PageMaker. Lorem Ipsum
                      är en utfyllnadstext från tryck- och förlagsindustrin.
                      Lorem ipsum har varit standard ända sedan 1500-talet, när
                      en okänd boksättare tog att antal bokstäver och blandade
                      dem för att göra ett provexemplar av en bok. av en bok.
                      Lorem ipsum har inte bara överlevt fem århundraden, utan
                      även övergången till elektronisk typografi utan större
                      förändringar. Det blev allmänt känt på 1960-talet i
                      samband med lanseringen av Letraset-ark med avsnitt av
                      Lorem Ipsum, och senare med mjukvaror som Lorem Ipsum är
                      en utfyllnadstext från tryck- och tryck- och
                      förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare bokstäver och
                      blandade dem för att göra ett provexemplar provexemplar av
                      en bok. Lorem ipsum har inte bara överlevt fem
                      århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
                      med avsnitt av Lorem Ipsum, och senare med mjukvaror som
                      Aldus PageMaker. Aldus PageMaker.
                    </P>
                  </ScrollContainer>
                  <ProbarWrap>
                    <ProBarC />
                    <ProBarC />
                    <ProBarC />
                    <ProBar />
                    <ProBar />
                  </ProbarWrap>
                </FormSection>
              )}
              {question === 4 && (
                <FormSection>
                  <Welcome>soRkk lorem </Welcome>
                  <P>
                    Lorem Ipsum är en utfyllnadstext från tryck- och
                    förlagsindustrin. Lorem ipsum har varit standard ända sedan
                    1500-talet, när en okänd boksättare tog att antal bokstäver
                    och blandade dem för att göra ett provexemplar av en bok.
                    Lorem ipsum har inte bara överlevt fem århundraden, utan
                    även övergången till elektronisk typografi utan större
                    förändringar. Det blev allmänt känt på 1960-talet i samband
                    med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum,
                    och senare med mjukvaror som Aldus PageMaker.
                  </P>
                  <ProbarWrap>
                    <ProBarC />
                    <ProBarC />
                    <ProBarC />
                    <ProBarC />
                    <ProBar />
                  </ProbarWrap>
                </FormSection>
              )}
              {question === 5 && (
                <FormSection>
                  <Welcome>soRkk lorem </Welcome>
                  <P>
                    Lorem Ipsum är en utfyllnadstext från tryck- och
                    förlagsindustrin. Lorem ipsum har varit standard ända sedan
                    1500-talet, när en okänd boksättare tog att antal bokstäver
                    och blandade dem för att göra ett provexemplar av en bok.
                    Lorem ipsum har inte bara överlevt fem århundraden, utan
                    även övergången till elektronisk typografi utan större
                    förändringar. Det blev allmänt känt på 1960-talet i samband
                    med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum,
                    och senare med mjukvaror som Aldus PageMaker.
                  </P>
                  <ProbarWrap>
                    <ProBarC />
                    <ProBarC />
                    <ProBarC />
                    <ProBarC />
                    <ProBarC />
                  </ProbarWrap>
                </FormSection>
              )}
              <ButtonWrapper>
                {question !== 0 && (
                  <Button2 onPress={() => handleBack(question - 1)}>
                    <ButtonText2>Tillbaka</ButtonText2>
                  </Button2>
                )}
                {question === 1 ||
                question === 2 ||
                question === 3 ||
                question === 4 ? (
                  <Button2 onPress={() => handleNext(question + 1)}>
                    <ButtonText2>Nästa</ButtonText2>
                  </Button2>
                ) : null}
                {question === 5 && (
                  <Button2 onPress={() => handleSubmit()}>
                    <ButtonText2>submit</ButtonText2>
                  </Button2>
                )}
              </ButtonWrapper>
            </FormView>
          )}
        </FormContainer>
        {submit && (
          <MainContainer2>
            <FormSection>
              <P>Situation: {situation}</P>
              <P>Tanke: {tanke}</P>
              <P>Lukt: {lukt}</P>
              <P>Kropp: {kropp}</P>
            </FormSection>
          </MainContainer2>
        )}
      </MainContainer2>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  align-items: stretch;
`;
const MainContainer2 = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: stretch;
  margin: 15px;
`;

const ProbarWrap = styled.View`
  flex-direction: row;
  align-items: stretch;
`;

const ProBar = styled.View`
  height: 15px;
  width: 20%;

  border: 1px;
  background: white;
`;
const ProBarC = styled.View`
  height: 15px;
  width: 20%;
  border: 1px;
  background: green;
`;

const FormContainer = styled.View``;

const ScrollContainer = styled.ScrollView`
  height: 85%;
`;

const FormView = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;
const InputHeadWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 10px 0px 10px;
`;
const FormSection = styled.View`
  width: 100%;
  flex-direction: column;
`;

const ImageView = styled.View`
  align-items: center;
  justify-content: flex-start;
`;
const HeadImage = styled.Image`
  width: 100%;
`;

const P2 = styled.Text`
  font-size: 15px;
  color: #e3b89b;
`;

const StartButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Welcome = styled.Text`
  color: black;
  align-self: center;
  font-size: 25px;
  font-weight: 700;
`;

const H1 = styled.Text`
  color: black;
  align-self: center;
  font-size: 15px;
`;

const P = styled.Text`
  color: black;
  font-size: 15px;
  align-self: center;
`;

const InputHeader = styled.Text`
  color: black;
  font-size: 15px;
  align-self: center;
  font-weight: bold;
`;

const Input = styled.TextInput`
  height: 100px;
  padding-left: 22px
  padding-top: 22px;
  margin-bottom: 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  elevation: 2;
  font-size: 20px;
  color: gray;
  text-align-vertical: top;
`;

const ButtonX = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const HomexButton = styled.TouchableOpacity`
  color: white;
  margin-right: 10px;
  margin-top: 10px;
  align-self: flex-end;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #e9a97f;
  justify-content: center;
  align-self: center;
  border-radius: 10px;
  height: 55px;
  margin: 10px;
  padding: 20px;
  shadow-color: #000;
  elevation: 5;
`;

const HelpButton = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  border-radius: 10px;
`;

const Button2 = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  border-radius: 10px;
  padding: 15px;
`;
const ButtonText2 = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: normal;
`;
const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
