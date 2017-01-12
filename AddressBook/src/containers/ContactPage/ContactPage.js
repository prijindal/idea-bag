import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const styles = {
  toolbar: {
    height: 56,
  },
};

export default class ContactPage extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      pop: PropTypes.func,
    }),
    contact: PropTypes.shape({
      givenName: PropTypes.string,
      phoneNumbers: PropTypes.arrayOf(PropTypes.shape),
    }),
  }

  pop = () => {
    this.props.navigator.pop();
  }

  render() {
    let { givenName, phoneNumbers } = this.props.contact;
    // console.log(contact);
    return (
      <ScrollView>
        <Icon.ToolbarAndroid
            navIconName='arrow-back'
            onIconClicked={this.pop}
            style={styles.toolbar}
            title={givenName}
        />
        <List>
          {phoneNumbers.map((phoneNumber, idx) =>
            <ListItem
                key={idx}
                subtitle={phoneNumber.number}
                title={phoneNumber.label}
            />,
          )}
        </List>
      </ScrollView>
    );
  }
}
