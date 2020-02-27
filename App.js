/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React from 'react';
import styled from 'styled-components';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Home from './Views/Home';
import FirstTool from './Views/FirstTool';
import te from './Views/te';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <Switch>
            {/* routes */}
            <Route exact path="/" component={Home} />
            <Route exact path="/firsttool" component={FirstTool} />
            <Route exact path="/te" component={te} />
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