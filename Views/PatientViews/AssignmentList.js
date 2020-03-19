import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import moment from 'moment'
import FetchForm from './FetchForm';

export default ({ history }) => {

  const [data, setData] = useState([]);
  const url = `http://192.168.0.103:8080/assignments/`;



  const fetchAssignmentById = () => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log('Get fetch assign', json);
        setData(json);
      });
  }
  useEffect(() => {
    fetchAssignmentById();
  }, []);


  return (
    <C2>
      <C>
        <Scroll>
          <Button1 onPress={() => history.push('/patienthome')}>
            <ButtonText2>Tillbaka</ButtonText2>
          </Button1>
          <WrapDone>
            <DoneHeader>Ej Färdiga Uppgifter::</DoneHeader>
            {data.map(d => {
              return (
                <C3 key={d._id}>
                  {!d.complete && (
                    <ButtonWrapper>
                      <Button2 onPress={() => history.push(`/fetchform/${d._id}`)}>
                        <ButtonText1>{d.assignmentId}</ButtonText1>
                        <ButtonText3>Added:{moment(d.createdAt).fromNow()}</ButtonText3>
                        <ButtonText3>Still to do</ButtonText3>
                        <ButtonText3>{d._id}</ButtonText3>
                      </Button2>
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
                    <Button3 onPress={() => history.push(`/fetchform${d._id}`)}>
                      <ButtonText1>{d.assignmentId}</ButtonText1>
                      <ButtonText3>Added:{moment(d.createdAt).fromNow()}</ButtonText3>
                      <ButtonText3>Done</ButtonText3>
                      <ButtonText3>{d._id}</ButtonText3>
                    </Button3>
                  )}
                </C3>
              )
            }
            )}
          </WrapDone>
        </Scroll>
      </C>
    </C2 >
  );
};

const C = styled.View`
flex: 1;
  flex-direction: column;
`;

const Scroll = styled.ScrollView`
`;

const WrapDone = styled.View`
margin-top: 15px;
`;
const C2 = styled.View`
flex: 1;
  flex-direction: row;
  align-items: stretch;
`;
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
  color: #8b776a;
  border-bottom-width: 1px;
  border-color: #8b776a;
`;
const Button2 = styled.TouchableOpacity`
  margin-top: 2px;
  padding: 15px;
  background-color: #ffcfb1;
`;

const Button3 = styled.TouchableOpacity`
  margin-top: 2px;
  padding: 15px;
  background-color: #fbeee6;
`;

const Button1 = styled.TouchableOpacity`
  padding: 15px;
`;
const ButtonText1 = styled.Text`
  font-size: 30px;
  color: black;
  font-weight: normal;
`;
const ButtonText2 = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: normal;
`;
const ButtonText3 = styled.Text`
  font-size: 13px;
  color: black;
  font-weight: normal;
`;