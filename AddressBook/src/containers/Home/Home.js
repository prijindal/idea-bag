import React, { Component, PropTypes } from 'react';
import { ListView, View, Text, ToastAndroid, AsyncStorage } from 'react-native';
import Contacts from 'react-native-contacts';
import { SearchBar } from 'react-native-elements';

import ContactCard from '../../components/ContactCard';

const styles = {
  searchContainer: {
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#efefef',
    color: '#212121',
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
    searchText: '',
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
        if (this.state.searchText) {
          this.onChangeText(this.state.searchText);
        }
      }
    });
  }

  onChangeText = (e) => {
    let searchText = e.toLowerCase();
    this.setState({
      searchText,
    });
    let { contacts } = this.props;
    let results = [];
    contacts.forEach((contact) => {
      if (contact.givenName.toLowerCase().indexOf(searchText) >= 0) {
        results.push(contact);
      }
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(results),
    });
  }

  render() {
    let { navigator, contacts } = this.props;
    return (
      <View>
        <SearchBar
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
            lightTheme
            onChangeText={this.onChangeText}
            placeholder='Search Contacts'
            round
        />
        <View>
          {contacts.length === 0 ?
            <Text>No Journal Entries</Text> :
            <ListView
                dataSource={this.state.dataSource}
                enableEmptySections
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
