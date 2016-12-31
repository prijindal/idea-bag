import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text } from 'react-native';

const VOWELS = [
  'a',
  'e',
  'i',
  'o',
  'u',
];

async function countVowels(string) {
  const str = string.toLowerCase();
  let chars = {};
  str.split('').forEach((char, index) => {
    let obj = {
      count: chars[char] ? chars[char].count + 1 : 1,
      positions: chars[char] ? [
        ...chars[char].positions,
        index,
      ] : [index],
    };
    chars[char] = obj;
  });
  let nVowels = 0;
  VOWELS.forEach((vowel) => {
    nVowels += chars[vowel] ? chars[vowel].count : 0;
  });
  return {
    nVowels,
    chars,
  };
}

class CountInfo extends Component {
  static propTypes = {
    string: PropTypes.string,
  }

  state = {
    result: {},
  }

  componentWillReceiveProps = (nextProps) => {
    const { string } = nextProps;
    countVowels(string)
    .then((result) => {
      this.setState({
        result,
      });
    });
  }

  render() {
    const { string } = this.props;
    const { nVowels, chars } = this.state.result;
    return (
      <ScrollView>
        <Text>{string}</Text>
        <Text>No. Of vowels: {nVowels}</Text>
        {chars &&
          <View>
            {VOWELS.map(vowel =>
              <View key={vowel}>
                {chars[vowel] &&
                  <Text>
                    {vowel}: {chars[vowel].count} at {JSON.stringify(chars[vowel].positions)}
                  </Text>
                }
              </View>,
            )}
          </View>
        }
      </ScrollView>
    );
  }
}

export default CountInfo;
