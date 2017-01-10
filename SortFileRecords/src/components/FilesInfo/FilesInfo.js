import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { readDir } from 'react-native-fs';
import sortFiles from '../../helpers/sortFiles';
import FileItem from '../FileItem';

class FilesInfo extends Component {
  static propTypes = {
    sortby: PropTypes.string,
    directory: PropTypes.string,
  }

  state = {
    files: [],
    loading: false,
  }

  componentWillMount() {
    this.refreshList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.refreshList(nextProps);
  }

  async refreshList(props) {
    let { sortby, directory } = props;
    this.setState({
      loading: true,
    });
    let fileLs = await readDir(directory);
    this.setState({
      files: await sortFiles(sortby, fileLs),
      loading: false,
    });
  }

  render() {
    let { files, loading } = this.state;
    return (
      <ScrollView>
        {loading ?
          <Text>Loading...</Text>
          :
          <View>
            {files.length > 0 ?
              files.map((file, i) => (
                <FileItem
                    file={file}
                    key={i}
                />
              )) : <Text>Empty</Text>
            }
          </View>
        }
      </ScrollView>
    );
  }
}

export default FilesInfo;
