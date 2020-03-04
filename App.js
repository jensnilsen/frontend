/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import {NativeRouter, Switch} from 'react-router-native';

import Routes from './Routes/Routes';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <Switch>
            <Routes />
          </Switch>
        </Container>
      </NativeRouter>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
