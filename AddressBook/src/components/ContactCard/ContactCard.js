import React, { Component, PropTypes } from 'react';
import { ListItem } from 'react-native-elements';

export default class ContactCard extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func,
    }),
    contact: PropTypes.shape({
      givenName: PropTypes.string,
      thumbnailPath: PropTypes.string,
      phoneNumbers: PropTypes.arrayOf(PropTypes.shape()),
    }),
  }

  render() {
    let { givenName, thumbnailPath, phoneNumbers } = this.props.contact;
    let props = {
      title: givenName,
    };
    if (thumbnailPath) {
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
