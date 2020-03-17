import styled from 'styled-components';
import React, {useEffect, useState} from 'react';

export default () => {
  const [data, setData] = useState([]);
  const url = 'http://192.168.0.12:8080/sorkk';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);

        setData(json);
      });
  }, []);

  return (
    <C>
      <T>Jensa debug text</T>
      {data.map(d => (
        <T key={d._id}>Text kropp value: {d.kropp}</T>
      ))}
    </C>
  );
};

const C = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const T = styled.Text`
  font-size: 16px;
  color: black;
`;
