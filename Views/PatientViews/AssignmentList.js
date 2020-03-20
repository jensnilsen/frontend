import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { useParams } from "react-router-dom";
import Loading from '../Components/Loading';

export default ({ history }) => {
  const { accessToken } = useParams()
  console.log('assignmentlist', accessToken)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `http://192.168.0.103:8080/assignments/`;

  const fetchAssignmentById = () => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log('Get fetch assign', json);
        setData(json);
        setLoading(false)
      });
  }
  useEffect(() => {
    fetchAssignmentById();
  }, []);

  return (
    <MainContainer>
      <Header>
        <HeaderButtons onPress={() => history.push(`/patienthome/${accessToken}`)}>
          <BackButtonText>Tillbaka</BackButtonText>
        </HeaderButtons>
        <HeaderButtons onPress={() => history.push(`/`)}>
          <BackButtonText>Logga Ut</BackButtonText>
        </HeaderButtons>
      </Header>
      <H1>UPPGIFTER</H1>
      {
        loading && (
          <Container>
            <Loading />
          </Container>
        )
      }
      {!loading && (
        <Container>

          <Scroll>
            <WrapDone>
              <DoneHeader>Ej Färdiga Uppgifter:</DoneHeader>
              {data.map(d => {
                return (
                  <C3 key={d._id}>
                    {!d.complete && (
                      <ButtonWrapper>
                        <NotDone onPress={() => history.push(`/fetchform/${d._id}/${accessToken}`)}>
                          <ButtonNameFlex>
                            <AssName>{d.assignmentId}</AssName>
                          </ButtonNameFlex>
                          <ButtonFlex>
                            <AssAdded>Added:{moment(d.createdAt).fromNow()}</AssAdded>
                            <AssAdded>⏳</AssAdded>
                          </ButtonFlex>
                        </NotDone>
                      </ButtonWrapper>
                    )}

                  </C3>
                )
              }
              )}
            </WrapDone>
            <WrapDone>
              <DoneHeader>Färdiga uppgifter:</DoneHeader>
              {data.map(d => {
                return (
                  <C3 key={d._id}>
                    {d.complete && (
                      <Done onPress={() => history.push(`/fetchform/${d._id}/${accessToken}`)}>
                        <ButtonNameFlex>
                          <AssName>{d.assignmentId}</AssName>
                        </ButtonNameFlex>
                        <ButtonFlex>
                          <AssAdded>Added:{moment(d.createdAt).fromNow()}</AssAdded>
                          <AssAdded>✔️</AssAdded>
                        </ButtonFlex>
                      </Done>
                    )}
                  </C3>
                )
              }
              )}
            </WrapDone>
          </Scroll>
        </Container>
      )}

    </MainContainer >
  );
};


const MainContainer = styled.View`
flex: 1;
  flex-direction: column;
  align-items: stretch;
  background-color: #fff;
`;
const Header = styled.View`
flex:1 
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #E1854C;
`
const Container = styled.View`
  flex: 11;
  flex-direction: row;
  align-items: stretch;
  background-color: #fff;
  width: 100%;
`;

const Scroll = styled.ScrollView`
`;

const WrapDone = styled.View`
margin-top: 15px;
`;

const ButtonFlex = styled.View`
flex: 2;
flex-direction: row;
justify-content: space-between;
`
const ButtonNameFlex = styled.View`
flex: 3;
`


const C3 = styled.View`
  flex-direction: column;
`;
const ButtonWrapper = styled.View`
`;

const T = styled.Text`
  font-size: 16px;
  color: black;
`;
const DoneHeader = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #555;
  border-bottom-width: 1px;
  border-color: #8b776a;
  font-family: BalooChettan2-SemiBold;
`;

const HeaderButtons = styled.TouchableOpacity`
margin: 15px;
`;

const BackButtonText = styled.Text`
  font-size: 20px;
  color: #fbeee6;
  font-weight: normal;
  font-family: BalooChettan2-SemiBold;
`;

const H1 = styled.Text`
align-self: center;
  font-size: 25px;
  color: black;
  color: #555;
  font-weight: normal;
  font-family: BalooChettan2-SemiBold;
`;

const NotDone = styled.TouchableOpacity`
align-items: center;
justify-content: space-between;
flex-direction: row;
  margin-top: 2px;
  padding: 15px;
  background-color: #f8e5d8;
`;
const Done = styled.TouchableOpacity`
align-items: center;
justify-content: space-between;
flex-direction: row;
  margin-top: 2px;
  padding: 15px;
  background-color: #faf2ed
`;

const AssAdded = styled.Text`
  font-size: 13px;
  color: #fff;
  color: #555;
  font-weight: normal;
  font-family: BalooChettan2-Regular;
`;
const AssName = styled.Text`
  font-size: 23px;
  color: #555;
  font-weight: normal;
  font-family: BalooChettan2-Regular;
`;