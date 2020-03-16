/* eslint-disable no-shadow */
import styled from 'styled-components';
import React, {useState} from 'react';

export default ({history}) => {
  const [question, setQuestion] = useState(0);

  const handleNext = () => {
    setQuestion(question + 1);
  };
  const handleBack = () => {
    setQuestion(question - 1);
  };
  const [submit, setSubmit] = useState(false);
  const [text, setText] = useState('');
  const [tanke, setTanke] = useState('');
  const [kansla, setKansla] = useState('');
  const [kropp, setKropp] = useState('');

  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <MainContainer>
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
                    value={text}
                    placeholder="text"
                    multiline={true}
                    onChangeText={text => setText(text)}
                  />
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
                    value={kansla}
                    placeholder="känsla"
                    onChangeText={kansla => setKansla(kansla)}
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
                </FormSection>
              )}
            </FormView>
          )}
          {submit && (
            <FormSection>
              <Welcome>
                {text} {tanke} {kansla} {kropp}
              </Welcome>
            </FormSection>
          )}
        </FormContainer>
        {question === 0 && (
          <StartButtonWrapper>
            <StartButton onPress={() => handleNext(question + 1)}>
              <ButtonText2>Starta uppgiften</ButtonText2>
            </StartButton>
            <P2>Ungefärlig tidsåtgång: 30 min</P2>
          </StartButtonWrapper>
        )}
        <ButtonWrapper>
          {question !== 0 && (
            <Button2
              onPress={() => {
                handleBack(question - 1);
              }}>
              <ButtonText2> Tillbaka</ButtonText2>
            </Button2>
          )}

          {question !== 0 && (
            <Button2 onPress={() => handleNext(question + 1)}>
              <ButtonText2>Nästa</ButtonText2>
            </Button2>
          )}
          {question === 5 && (
            <Button2 onPress={() => handleSubmit()}>
              <ButtonText2>submit</ButtonText2>
            </Button2>
          )}
        </ButtonWrapper>
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

const FormContainer = styled.View``;

const ScrollContainer = styled.ScrollView`
  height: 85%;
`;

const FormView = styled.View`
  align-items: center;
  flex-direction: row;
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
`;

const ImageView = styled.View`
  align-items: center;
  justify-content: flex-start;
`;
const HeadImage = styled.Image`
  width: 100%;
  margin: 0px;
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
