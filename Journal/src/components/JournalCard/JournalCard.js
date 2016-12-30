import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});

class JournalCard extends Component {
  static propTypes = {
    journal: PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
    }),
    navigator: PropTypes.shape({
      push: PropTypes.func,
    }),
  }

  onPress = () => {
    this.props.navigator.push('edit', { id: this.props.journal.id });
  }

  render() {
    let { content } = this.props.journal;
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>{content}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default JournalCard;
