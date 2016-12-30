import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Element from '../Element';

const numbers = [];
for (let i = 1; i <= 100; i += 1) {
  numbers.push(i);
}

class ElementsList extends Component {
  render() {
    return (
      <ScrollView>
        {numbers.map(number =>
          <Element
              key={number}
              number={number}
          />,
        )}
      </ScrollView>
    );
  }
}

export default ElementsList;
