/* eslint-disable no-shadow */
import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from '../Components/Loading'

export default ({ history }) => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formValues = { username, password };

  const clearInputs = () => {
    setUsername({ username: '' });
    setPassword({ password: '' });
  };

  const handleSubmit = () => {
    console.log('handling submit', formValues);
    fetch('https://mendly.herokuapp.com/userlogin', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.status !== 200) {
          setLoginFailed(true);
          return console.log('nope');
        }
        response.json()
          .then(data => {
            if (data.notFound !== true) {
              clearInputs();
              setLoginFailed(false);
              history.push(`/patienthome/${data.accessToken}`);
            } else {
              setLoginFailed(true);
              clearInputs();
              console.log('login fail probs wrong user or pass');
            }
          });
      })
      .catch(err => console.log('error:', err));
  };

  return (
    <Wrapper>

      <Form>
        <AllInputWrapper>
          <ImageView>
            <HeadImage
              source={require('../images/Mendly-grey.png')}
              resizeMode="contain"
            />
          </ImageView>

          {loginFailed ? (
            <LoginFailed>Incorrect username or password</LoginFailed>
          ) : (
              <LoginText>Please Login</LoginText>
            )}

          <Input
            value={username}
            onChangeText={username => setUsername(username)}
            type="text"
            placeholder="Username"
            placeholderTextColor="rgba(225, 133, 76, 0.39);"
            required
          />
          <Input
            onChangeText={password => setPassword(password)}
            value={password}
            type="password"
            placeholder="Password"
            placeholderTextColor="rgba(225, 133, 76, 0.39);"
            secureTextEntry={true}
            password={true}
            required
          />

        </AllInputWrapper>

        <GoToButton type="submit" onPress={() => handleSubmit()}>
          <ButtonText>Login</ButtonText>
        </GoToButton>
        <LocksWrapper>
          <ChangeLoginButton
            type="button"
            onPress={() => history.push('/therapistlogin')}>
            <ChangeButtonText>🔐</ChangeButtonText>
          </ChangeLoginButton>
        </LocksWrapper>

      </Form>
    </Wrapper >
  );
};

const Wrapper = styled.View`
flex: 1;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`;

const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const LocksWrapper = styled.View`
flex-direction: row;
align-self: flex-end;
`

const AllInputWrapper = styled.View`
width: 87%;
`;

const Input = styled.TextInput`
  padding: 3px;
  margin-top: 20px;
  font-size: 40px;
  color: #555;
  border-bottom-width: 3px;
  border-bottom-color: #e9a97f33;
  font-family: BalooChettan2-Regular;
`;
const LoginFailed = styled.Text`
  padding-top: 25px;
  font-weight: 700;
  color: red;
  font-size: 20px;
  font-family: BalooChettan2-SemiBold;
`;
const LoginText = styled.Text`
font-size: 20px;
  padding-top: 25px;
  font-weight: 600;
  color: #555;
  font-family: BalooChettan2-SemiBold;
`;
const ButtonText = styled.Text`
  font-size: 29px;
  color: #f5f3f5;
  font-family: Comfortaa-VariableFont_wght;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ChangeButtonText = styled.Text`
opacity: 0.7;
`;

const GoToButton = styled.TouchableOpacity`
  background-color: #E1854C;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 55px;
  width: 90%;
  margin-top: 190px;
  shadow-color: #000;
  elevation: 5;
`;

const ChangeLoginButton = styled.TouchableOpacity`
margin: 19px;
`;

const ImageView = styled.View`
align-self: center;
`;
const HeadImage = styled.Image`
width: 300px;
`;