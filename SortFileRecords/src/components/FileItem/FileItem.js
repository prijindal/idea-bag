import React, { Component, PropTypes } from 'react';
import { ListItem } from 'react-native-elements';

class FileItem extends Component {
  static propTypes = {
    file: PropTypes.shape(),
    setDirectory: PropTypes.func,
  }

  render() {
    let { file, setDirectory } = this.props;
    return (
      <ListItem
          onPress={setDirectory}
          roundAvatar
          title={file.name}
      />
    );
  }
}

export default FileItem;
