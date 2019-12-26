import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Button } from 'native-base';

function Buttons() {
  return (
    <View style={styles.buttonArea}>
      <Button style={styles.button} primary>
        <Text style={styles.buttonText}>출근</Text>
      </Button>
      <Button style={styles.button} danger disabled>
        <Text style={styles.buttonText}>퇴근</Text>
      </Button>
      <Button style={styles.button} success>
        <Text style={styles.buttonText}>정정</Text>
      </Button>
    </View>
  );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Buttons);

const styles = StyleSheet.create({
  buttonArea: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    margin: 5,
    marginBottom: 10,
    width: 90,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    // fontWeight: 'bold',
  },
});
