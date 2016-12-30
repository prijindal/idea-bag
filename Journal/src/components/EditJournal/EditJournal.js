import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationStyles } from '@exponent/ex-navigation';

const styles = {
  toolbar: {
    height: 56,
  },
};

class EditJournal extends Component {
  static propTypes = {
    content: PropTypes.string,
    navigator: PropTypes.shape({
      pop: PropTypes.func,
    }),
    onChangeText: PropTypes.func,
    saveItem: PropTypes.func,
    title: PropTypes.string.isRequired,
  }

  static route = {
    styles: NavigationStyles.FloatVertical,
  }

  state = {
    numberOfLines: 5,
    content: this.props.content,
  }

  onIconClicked = () => {
    this.props.navigator.pop();
  }

  onChangeText = (text) => {
    let length = text.split('\n').length;
    length += 2;
    length = length > 5 ? length : 5;
    this.setState({
      numberOfLines: length,
      content: text,
    });
    this.props.onChangeText();
  }

  saveItem = () => {
    this.props.saveItem(this.state.content);
    this.props.navigator.pop();
  }

  render() {
    let { numberOfLines, content } = this.state;
    return (
      <View>
        <Icon.ToolbarAndroid
            navIconName="md-arrow-back"
            onIconClicked={this.onIconClicked}
            style={styles.toolbar}
            title={this.props.title}
        />
        <ScrollView>
          <View>
            <TextInput
                multiline
                numberOfLines={numberOfLines}
                onChangeText={this.onChangeText}
                value={content}
            />
          </View>
          <View>
            <Button
                onPress={this.saveItem}
                title="Save"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default EditJournal;
