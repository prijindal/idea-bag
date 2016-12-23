import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ScrollView } from 'react-native';
import CheckNumber from './components/CheckNumber';
import store from './store';

let A = [];
for (let i = 1; i <= 100; i += 1) {
  A.push(i);
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          {A.map(index =>
            <CheckNumber
                key={index}
                number={index}
            />,
          )}
        </ScrollView>
      </Provider>
    );
  }
}

export default App;
