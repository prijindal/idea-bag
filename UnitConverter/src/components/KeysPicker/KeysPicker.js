import React, { Component, PropTypes } from 'react';
import { Picker } from 'react-native';
import { getKeys } from '../../helpers/values';

class KeysPicker extends Component {
  static propTypes = {
    group: PropTypes.string,
    keyValue: PropTypes.string,
    setKey: PropTypes.func,
  }

  state = {
    keys: getKeys(this.props.group),
  }

  componentWillReceiveProps(nextProps) {
    const { group } = nextProps;
    this.setState({
      keys: getKeys(group),
    });
  }

  render() {
    let { keyValue, setKey } = this.props;
    let { keys } = this.state;
    return (
      <Picker
          onValueChange={setKey}
          selectedValue={keyValue}
      >
        {keys.map(keyField =>
          <Picker.Item
              key={keyField}
              label={keyField}
              value={keyField}
          />,
        )}
      </Picker>
    );
  }
}

export default KeysPicker;
