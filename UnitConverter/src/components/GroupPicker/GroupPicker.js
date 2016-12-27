import React, { Component, PropTypes } from 'react';
import { Picker } from 'react-native';
import { getGroups } from '../../helpers/values';

const groups = getGroups();

class GroupPicker extends Component {
  static propTypes = {
    group: PropTypes.string,
    setGroup: PropTypes.func,
  }

  render() {
    let { group, setGroup } = this.props;
    return (
      <Picker
          onValueChange={setGroup}
          selectedValue={group}
      >
        {groups.map(groupKey =>
          <Picker.Item
              key={groupKey}
              label={groupKey}
              value={groupKey}
          />,
        )}
      </Picker>
    );
  }
}

export default GroupPicker;
