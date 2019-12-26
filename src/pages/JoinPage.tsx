import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';

import {
  AccountActionTypes,
  AccountActionCreators
} from '../store/account/account.action';

type JoinPageProps = {
  navigation: NavigationStackProp,
  loginState: boolean,
  register: Function,
};

function JoinPage({ loginState, navigation, register }: JoinPageProps) {
  if (loginState) {
    navigation.navigate('Home');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = useMemo(() => {
    return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email);
  }, [email]);

  const isValidPassword = useMemo(() => {
    // return password.length >= 8;
    return true;
  }, [password]);

  const handleClickLoginButton = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>work life bell</Text>
      <Text style={styles.subTitle}>워라밸에 가입하고 근무시간을 관리해보세요 :)</Text>
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
          success
          disabled={!(isValidEmail && isValidPassword)}
          onPress={() => {
            register({ email, password });
          }}
        >
          <Text style={styles.buttonText}>회원등록</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={handleClickLoginButton}
          info
        >
          <Text style={styles.buttonText}>로그인</Text>
        </Button>
      </View>
    </View>
  );
}

const mapStateToProps = (state, ownProps: any = {}) => ({
  loginState: state.account.login
});

const mapDispatchToProps = dispatch => ({
  register: inputAccountData => dispatch(AccountActionCreators.register(inputAccountData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JoinPage);

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
