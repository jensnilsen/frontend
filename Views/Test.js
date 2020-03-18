import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

export default ({ history }) => {

  // List all sorkks

  const id = "2020-03-18T12:03:38.470Z";
  const ass = "gravling"

  const [data, setData] = useState([]);
  const url = `http://192.168.0.12:8080/assignment/id/${id}`;

  const fetchAssignmentById = () => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      });
  }
  useEffect(() => {
    fetchAssignmentById();
  }, []);


  return (
    <C>
      {data.map(d => {
        return (
          <C key={d._id}>
            <C2>
              <Button2 onPress={() => history.push('/')}>
                <ButtonText2>Tillbaka</ButtonText2>
              </Button2>
              <Button2 onPress={() => history.push('/fetchform')}>
                <ButtonText2>{d.assignmentId}</ButtonText2>
                <ButtonText2>{d.createdAt}</ButtonText2>
              </Button2>
            </C2>
          </C>
        )
      }
      )}
    </C>
  );
};

const C = styled.View`
  flex: 1;
  align-items: stretch;
`;
const C2 = styled.View`
`;

const T = styled.Text`
  font-size: 16px;
  color: black;
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