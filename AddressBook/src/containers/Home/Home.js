import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import JournalCard from '../../components/JournalCard';

const styles = {
  toolbar: {
    height: 56,
  },
};

const actions = [
  {
    title: 'Add',
    iconName: 'md-add',
    show: 'always',
  },
];

class Home extends Component {
  static propTypes = {
    journals: PropTypes.arrayOf(PropTypes.any),
    navigator: PropTypes.shape({
      push: PropTypes.func,
    }),
  }

  onActionSelected = (position) => {
    if (position === 0) {
      this.props.navigator.push('new');
    }
  }

  render() {
    let { journals, navigator } = this.props;
    return (
      <View>
        <Icon.ToolbarAndroid
            actions={actions}
            onActionSelected={this.onActionSelected}
            style={styles.toolbar}
            title="Home"
        />
        <View>
          {journals.length === 0 ?
            <Text>No Journal Entries</Text> :
            <ScrollView>
              {journals.map(journal =>
                <JournalCard
                    journal={journal}
                    key={journal.id}
                    navigator={navigator}
                />,
              )}
            </ScrollView>
          }
        </View>
      </View>
    );
  }
}

export default Home;
