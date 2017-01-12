import React, { Component, PropTypes } from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Text } from 'react-native';

const styles = {
  button: {
    width: 120,
    height: 48,
  },
};

class SignInButton extends Component {
  static propTypes = {
    signIn: PropTypes.func,
  }

  state = {
    loading: true,
  }

  componentDidMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      GoogleSignin.configure({})
      .then(() =>
        this.setState({
          loading: false,
        }),
      )
      .catch((err) => {
        console.log('Play services error', err.code, err.message);
      });
    })
    .catch((err) => {
      console.log('Play services error', err.code, err.message);
    });
  }

  signIn = () => {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.props.signIn(user.email);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  render() {
    let { loading } = this.state;
    if (loading) return <Text>Loading</Text>;
    return (
      <GoogleSigninButton
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          size={GoogleSigninButton.Size.Icon}
          style={styles.button}
      />
    );
  }
}

export default SignInButton;
