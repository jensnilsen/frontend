/* eslint-disable no-shadow */
import React, {useState} from 'react';
import styled from 'styled-components';

export default ({history}) => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [adminname, setAdminname] = useState('');
  const [password, setPassword] = useState('');

  const formValues = {adminname, password};

  const clearInputs = () => {
    setAdminname({adminname: ''});
    setPassword({password: ''});
  };

  const handleSubmit = () => {
    console.log('handling submit', formValues);
    fetch('http://192.168.100.159:8080/adminlogin', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => {
        if (response.status !== 200) {
          setLoginFailed(true);
          return console.log('nope');
        }

        response.json().then(data => {
          if (data.notFound !== true) {
            clearInputs();
            setLoginFailed(false);
            history.push('/test');
            console.log('login ok');
          } else {
            setLoginFailed(true);
            clearInputs();
            console.log('login fail props wrong user or pass');
          }
        });
      })
      .catch(err => console.log('errodasdr:', err));
  };

  return (
    <Wrapper>
      <Form>
        {loginFailed ? (
          <LoginFailed>Incorrect adminname or password</LoginFailed>
        ) : (
          <LoginText>Please Login</LoginText>
        )}
        <AllInputWrapper>
          <Label>
            <InputHeader>admin-name:</InputHeader>
            <Input
              onChangeText={adminname => setAdminname(adminname)}
              value={adminname}
              type="text"
              placeholder="admin-name"
              placeholderTextColor="#fcd6bd"
              required
            />
          </Label>

          <Label>
            <InputHeader>Password:</InputHeader>
            <Input
              onChangeText={password => setPassword(password)}
              value={password}
              type="password"
              placeholder="**********"
              placeholderTextColor="#fcd6bd"
              secureTextEntry={true}
              password={true}
              required
            />
          </Label>
        </AllInputWrapper>
        <GoToButton type="submit" onPress={() => handleSubmit()}>
          <ButtonText>Login</ButtonText>
        </GoToButton>
        <ChangeLoginButton type="button" onPress={() => history.push('/')}>
          <ChangeButtonText>Patient</ChangeButtonText>
        </ChangeLoginButton>
      </Form>
    </Wrapper>
  );
};

const Form = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
`;
const Label = styled.View``;

const AllInputWrapper = styled.View`
  flex: 1;
  width: 100%;
`;

const InputHeader = styled.Text`
  margin-top: 20px;
  color: black;
  font-size: 20px;
`;
const Input = styled.TextInput`
  padding: 3px;
  font-size: 40px;
  border-bottom-width: 3px;
  border-bottom-color: #e9a97f;
`;
const LoginFailed = styled.Text`
  padding-top: 25px;
  font-weight: 700;
  color: red;
`;
const LoginText = styled.Text`
  padding-top: 25px;
  font-weight: 700;
  color: black;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  color: #f5f3f5;
`;

const ChangeButtonText = styled.Text`
  font-size: 16px;
  color: black;
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const GoToButton = styled.TouchableOpacity`
  background-color: #e9a97f;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 55px;
  width: 90%;
  margin: 5px;
  padding: 20px;
  shadow-color: #000;
  elevation: 5;
`;

const ChangeLoginButton = styled.TouchableOpacity`
  border-bottom-width: 1px;
  margin-top: 20px;
`;
