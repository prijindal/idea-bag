import React, { Component, PropTypes } from 'react';
import { ListView, View, Text, ToastAndroid, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts';

import ContactCard from '../../components/ContactCard';

const styles = {
  toolbar: {
    height: 56,
  },
};

class Home extends Component {
  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func,
    }),
    setContacts: PropTypes.func,
    contacts: PropTypes.arrayOf(ContactCard.propTypes.contact),
  }

  state = {
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  }

  componentDidMount() {
    Contacts.checkPermission((err, permission) => {
      if (permission === 'undefined') {
        Contacts.requestPermission(() => {
          this.fetchContacts();
        });
      } else if (permission === 'authorized') {
        this.fetchContacts();
      } else if (permission === 'denied') {
        ToastAndroid.show('Permission Denied', ToastAndroid.LONG);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    let { contacts } = nextProps;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(contacts),
    });
  }

  fetchContacts() {
    Contacts.getAll((err, contacts) => {
      if (err) {
        console.error(err);
      } else {
        this.props.setContacts(contacts);
        AsyncStorage.setItem('contacts', JSON.stringify(contacts));
      }
    });
  }

  render() {
    let { navigator, contacts } = this.props;
    return (
      <View>
        <Icon.ToolbarAndroid
            style={styles.toolbar}
            title="Home"
        />
        <View>
          {contacts.length === 0 ?
            <Text>No Journal Entries</Text> :
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(contact =>
                <ContactCard
                    contact={contact}
                    key={contact.recordID}
                    navigator={navigator}
                />
              )}
            />
          }
        </View>
      </View>
    );
  }
}

export default Home;
