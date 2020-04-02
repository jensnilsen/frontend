/* eslint-disable no-shadow */
import styled from 'styled-components';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";

export default ({ history }) => {
  const { accessToken } = useParams()
  const { _id } = useParams();
  const [question, setQuestion] = useState(0);
  const id = _id

  const handleNext = () => {
    setQuestion(question + 1);
  };
  const handleBack = () => {
    setQuestion(question - 1);
  };
  const [submit, setSubmit] = useState(false);
  const [situation, setSituation] = useState('');
  const [tanke, setTanke] = useState('');
  const [kansla, setKansla] = useState('');
  const [kropp, setKropp] = useState('');
  const [complete, setComplete] = useState(true);

  const formValues = {
    situation,
    tanke,
    kansla,
    kropp,
    complete,
  };

  const handleSubmit = () => {
    setComplete(true);
    setSubmit(true)
    console.log('handling sorkk answers');
    fetch(`https://mendly.herokuapp.com/${id}/update`, {
      method: 'PUT',
      body: JSON.stringify(formValues),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.status !== 200) {
          return console.log('nope');
        }
        response.json().then(data => {
          if (data.notFound !== true) {
            setSubmit(true);
            console.log('Form fetched and updated');
          } else {
            console.log('Failed to update form');
          }
        }, [_id]);
      })
      .catch(err => console.log('error:', err));
  };
  //FIX ASSIGNMENTiD
  return (
    <>
      <MainContainer>
        <Header>
          <HeaderButtons onPress={() => history.push(`/assignmentlist/${accessToken}`)}>
            <BackButtonText>Tillbaka</BackButtonText>
          </HeaderButtons>
          <HeaderButtons onPress={() => history.push(`/`)}>
            <BackButtonText>Logga Ut</BackButtonText>
          </HeaderButtons>
        </Header>
        <MainContainer2>
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
                    <StartButton onPress={() => handleNext(question + 1)}>
                      <ButtonText2>starta</ButtonText2>
                    </StartButton>
                    <P2>Ungefärlig tidsåtgång: 30 min</P2>
                  </StartButtonWrapper>
                </FormSection>
              )}
              {question === 1 && (
                <FormSection>
                  <SpaceWrapper>
                    <H1>SORKK</H1>
                    <Welcome>Situation</Welcome>
                    <P>
                      Lorem Ipsum är en utfyllnadstext från tryck- och
                      förlagsindustrin. Lorem ipsum har varit standard ända sedan
                      1500-talet, när en okänd boksättare tog att antal bokstäver.
                  </P>
                    <SpaceWrapper>
                      <InputHeadWrap>
                        <InputHeader>situiation</InputHeader>
                        <HelpButton>
                          <P2>❓</P2>
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
                    </SpaceWrapper>
                  </SpaceWrapper>
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
                      <P2>❓</P2>
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
                      <P2>❓</P2>
                    </HelpButton>
                  </InputHeadWrap>
                  <Input
                    type="text"
                    required
                    value={kansla}
                    placeholder="känsla"
                    onChangeText={kansla => setKansla(kansla)}
                  />
                  <InputHeadWrap>
                    <InputHeader>situiation</InputHeader>
                    <HelpButton>
                      <P2>❓</P2>
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
                      Lorem Ipsum är en utfyllnadstext från tryck- och
                      förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare tog att antal
                      bokstäver och blandade dem för att göra ett provexemplar
                      av en bok. Lorem ipsum har inte bara överlevt fem
                      århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
                      Lorem Ipsum är en utfyllnadstext från tryck- och
                      förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare tog att antal
                      bokstäver och blandade dem för att göra ett provexemplar
                      av en bok. Lorem ipsum har inte bara överlevt fem
                      århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
                      Lorem Ipsum är en utfyllnadstext från tryck- och
                      förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare tog att antal
                      bokstäver och blandade dem för att göra ett provexemplar
                      av en bok. Lorem ipsum har inte bara överlevt fem
                      århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
                      Lorem Ipsum är en utfyllnadstext från tryck- och
                      förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare tog att antal
                      bokstäver och blandade dem för att göra ett provexemplar
                      av en bok. Lorem ipsum har inte bara överlevt fem
                      århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
                      Lorem Ipsum är en utfyllnadstext från tryck- och
                      förlagsindustrin. Lorem ipsum har varit standard ända
                      sedan 1500-talet, när en okänd boksättare tog att antal
                      bokstäver och blandade dem för att göra ett provexemplar
                      av en bok. Lorem ipsum har inte bara överlevt fem
                      århundraden, utan även övergången till elektronisk
                      typografi utan större förändringar. Det blev allmänt känt
                      på 1960-talet i samband med lanseringen av Letraset-ark
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
                  <SpaceWrapper>
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
                  </SpaceWrapper>
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
                  <SpaceWrapper>
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
                  </SpaceWrapper>
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
          {submit && (

            <SubmitContainer>
              <P>Situation: {situation}</P>
              <P>Tanke: {tanke}</P>
              <P>Känsla: {kansla}</P>
              <P>Kropp: {kropp}</P>
            </SubmitContainer>

          )}
        </MainContainer2>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  align-items: stretch;
`;
const MainContainer2 = styled.View`
  flex: 11;
  flex-direction: column;
  align-items: stretch;
  margin: 15px;
`;
const SubmitContainer = styled.View`
width: 100%;
  flex-direction: column;
  align-items: stretch;
`;

const FormSection = styled.View`
flex: 1
flex-direction: column;
  justify-content: space-between;
`;
const ProbarWrap = styled.View`
flex-direction: row;
  align-items: stretch;
`;

const FormView = styled.View`
flex: 1
flex-direction: column;
align-items: stretch;
`;

const InputHeadWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 10px 0px 10px;
`;
const SpaceWrapper = styled.View``
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

const ScrollContainer = styled.ScrollView`
  height: 82%;
  margin-bottom: 5px;
`;



const ImageView = styled.View`
  align-items: center;
  justify-content: flex-start;
`;
const HeadImage = styled.Image`
  width: 100%;
`;

const P2 = styled.Text`
  font-size: 12px;
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

const BackButtonText = styled.Text`
  font-size: 20px;
  color: #fbeee6;
  font-weight: normal;
  font-family: BalooChettan2-SemiBold;
`;
const Header = styled.View`
flex:1 
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #E1854C;
`
const HeaderButtons = styled.TouchableOpacity`
margin: 15px;
`;