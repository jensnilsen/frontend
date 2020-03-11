import styled from 'styled-components';
import React, {Component, useHistory} from 'react';

class TherapistLogin extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      name: '',
    };
  }

  updateValue(text, field) {
    if (field === 'name') {
      this.setState({
        name: text,
      });
    } else if (field === 'password') {
      this.setState({
        password: text,
      });
    }
  }

  submit() {
    let collection = {};
    collection.name = this.state.name;
    collection.password = this.state.password;
    console.warn(collection);
  }

  render() {
    return (
      <Container>
        <Scroll>
          <Form>
            <TextIn
              onChangeText={text => this.updateValue(text, 'name')}
              type="text"
              placeholder="*******"
              required
            />
            <TextIn
              onChangeText={text => this.updateValue(text, 'password')}
              type="password"
              placeholder="*******"
              required
              secureTextEntry={true}
            />
            <LoginButton type="submit" onPress={() => this.submit()}>
              <ButtonText>signup</ButtonText>
            </LoginButton>
          </Form>
          <Button2 onPress={() => history.push('/')}>
            <ButtonText>tillbaka</ButtonText>
          </Button2>
        </Scroll>
      </Container>
    );
  }
}

export default TherapistLogin;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  background-color: #fbeee6;
`;

const Form = styled.View``;
const Scroll = styled.ScrollView``;

const TextIn = styled.TextInput`
  background-color: #fbeee6;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  align-self: center;
  font-size: 20px;
  shadow-color: #000;
  shadow-opacity: 0.55;
  shadow-radius: 50px;
  elevation: 42;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  color: gray;
  font-size: 30px;
`;

const LoginButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #fbeee6;
  color: white;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 5px;
  shadow-color: #000;
  shadow-opacity: 0.55;
  shadow-radius: 15px;
  elevation: 22;
  margin-bottom: 40px;
`;

const Button2 = styled.TouchableOpacity`
  flex: 1;
  background-color: #fbeee6;
  color: white;
  justify-content: center;
  align-self: flex-start;
  height: 50px;
  padding: 20px;
  margin: 5px;
  shadow-color: #000;
  shadow-opacity: 0.55;
  shadow-radius: 15px;
  elevation: 22;
  margin-bottom: 40px;
`;
