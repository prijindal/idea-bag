import React, { Component, PropTypes } from 'react';
import { ListItem } from 'react-native-elements';

export default class ContactCard extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func,
    }),
    contact: PropTypes.shape({
      givenName: PropTypes.string,
      middleName: PropTypes.string,
      familyName: PropTypes.string,
      thumbnailPath: PropTypes.string,
      phoneNumbers: PropTypes.arrayOf(PropTypes.shape()),
      hasThumbnail: PropTypes.bool,
    }),
  }

  goToContact = () => {
    let { contact, navigator } = this.props;
    navigator.push('contact', { contact });
  }

  render() {
    let { givenName, middleName, familyName, thumbnailPath, phoneNumbers, hasThumbnail } = this.props.contact;
    let props = {
      title: givenName,
      onPress: this.goToContact,
    };
    if (middleName) {
      props.title += ` ${middleName}`;
    }
    if (familyName) {
      props.title += ` ${familyName}`;
    }
    if (hasThumbnail) {
      props.avatar = {
        uri: thumbnailPath,
      };
      props.roundAvatar = true;
    }
    if (phoneNumbers && phoneNumbers.length > 0) {
      props.subtitle = phoneNumbers[0].number;
    }
    return (
      <ListItem {...props}/>
    );
  }
}
