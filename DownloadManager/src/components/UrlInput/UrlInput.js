import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

class UrlInput extends Component {
  static propTypes = {
    setText: PropTypes.func,
  }

  state = {
    text: 'http://download.thinkbroadband.com/1MB.zip',
  }

  onChangeText = (text) => {
    this.setState({
      text,
    });
  }

  setText = () => {
    this.props.setText(this.state.text);
  }

  render() {
    return (
      <View>
        <FormLabel>Enter a Url: </FormLabel>
        <FormInput
            onChangeText={this.onChangeText}
            onSubmitEditing={this.setText}
            value={this.state.text}
        />
      </View>
    );
  }
}

export default UrlInput;
