import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';

import {
  AccountActionTypes,
  AccountActionCreators
} from '../store/account/account.action';

type LoginPageProps = {
  navigation: NavigationStackProp,
  loginState: boolean,
  login: Function,
};

function LoginPage({ loginState, navigation, login }: LoginPageProps) {
  if (loginState) {
    navigation.navigate('Home');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = useMemo(() => {
    return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email);
  }, [email]);

  const isValidPassword = useMemo(() => {
    return password.length >= 8;
  }, [password]);

  const handleClickJoinButton = () => {
    navigation.navigate('Join');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>work life bell</Text>
      <Text style={styles.subTitle}>서비스 이용을 위해 로그인이 필요합니다.</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="이메일"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        placeholder="비밀번호"
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          info
          disabled={!(isValidEmail && isValidPassword)}
          onPress={() => {
            login({ email, password });
          }}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={handleClickJoinButton}
          success
        >
          <Text style={styles.buttonText}>회원가입</Text>
        </Button>
      </View>
    </View>
  );
}

const mapStateToProps = (state, ownProps: any = {}) => ({
  loginState: state.account.login
});

const mapDispatchToProps = dispatch => ({
  login: inputAccountData => dispatch(AccountActionCreators.login(inputAccountData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 150,
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 50,
  },
  input: {
    margin: 'auto',
    height: 40,
    width: 300,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    margin: 5,
    marginBottom: 10,
    width: 80,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    // fontSize: 20,
  },
});
