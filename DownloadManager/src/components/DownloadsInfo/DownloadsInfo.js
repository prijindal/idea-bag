import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import Download from '../Download';

class DownloadsInfo extends Component {
  static propTypes = {
    downloads: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    let { downloads } = this.props;
    return (
      <View>
        {downloads ?
          <View>
            {downloads.map(download =>
              <Download
                  download={download}
                  key={download.id}
              />,
            )}
          </View>
          :
          <Text>No Downloads</Text>
        }
      </View>
    );
  }
}

export default DownloadsInfo;
