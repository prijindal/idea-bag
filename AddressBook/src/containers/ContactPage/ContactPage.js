import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, ScrollView } from 'react-native';
import { sendMail, sendPhoneCall } from 'react-native-send-intent';
import { ListItem } from 'react-native-elements';

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
      middleName: PropTypes.string,
      familyName: PropTypes.string,
      phoneNumbers: PropTypes.arrayOf(PropTypes.shape()),
      emailAddresses: PropTypes.arrayOf(PropTypes.shape()),
    }),
  }

  pop = () => {
    this.props.navigator.pop();
  }

  render() {
    let { givenName, middleName, familyName, phoneNumbers, emailAddresses } = this.props.contact;
    let name = givenName;
    if (middleName) {
      name += ` ${middleName}`;
    }
    if (familyName) {
      name += ` ${familyName}`;
    }
    return (
      <ScrollView>
        <Icon.ToolbarAndroid
            navIconName='arrow-back'
            onIconClicked={this.pop}
            style={styles.toolbar}
            title={givenName}
        />
        <ListItem
            title={name}
        />
        {emailAddresses.length > 0 &&
          <View>
            {emailAddresses.map((emailAddress, idx) =>
              <ListItem
                  key={idx}
                  onPress={() => sendMail(emailAddress.email)}
                  subtitle={emailAddress.email}
                  title={emailAddress.label}
              />,
            )}
          </View>
        }
        {phoneNumbers.length > 0 &&
          <View>
            {phoneNumbers.map((phoneNumber, idx) =>
              <ListItem
                  key={idx}
                  onPress={() => sendPhoneCall(phoneNumber.number)}
                  subtitle={phoneNumber.number}
                  title={phoneNumber.label}
              />,
            )}
          </View>
        }
      </ScrollView>
    );
  }
}
