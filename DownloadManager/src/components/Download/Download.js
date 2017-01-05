/* global XMLHttpRequest b:true*/
import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

class Download extends Component {
  static propTypes = {
    download: PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
      status: PropTypes.string,
      progress: PropTypes.number,
    }),
    setProgress: PropTypes.func,
    setCompleted: PropTypes.func,
    setAbort: PropTypes.func,
  }

  componentDidMount() {
    let { download, setProgress, setCompleted, setAbort } = this.props;
    let { url } = download;
    this.req = new XMLHttpRequest();
    this.req.addEventListener('error', (err) => {
      console.error(err);
    });
    this.req.addEventListener('progress', (e) => {
      let contentLength = e.currentTarget.responseHeaders['Content-Length'];
      let progress = ((e.currentTarget.response.length * 100) / contentLength);
      progress = Math.round(progress * 100) / 100;
      setProgress(progress);
    });
    this.req.addEventListener('load', () => {
      this.req.removeEventListener('progress');
      this.req.removeEventListener('load');
      this.req.removeEventListener('abort');
      this.req.removeEventListener('error');
      delete this.req;
      setCompleted();
    });
    this.req.addEventListener('abort', () => {
      setAbort();
    });
    this.req.open('GET', url);
    this.req.send();
  }

  abort = () => {
    this.req.abort();
  }

  render() {
    let { url, progress, status } = this.props.download;
    return (
      <View>
        <Text>{url}</Text>
        <Text>{progress}</Text>
        <Text>{status}</Text>
        <Icon
            name="cancel"
            onPress={this.abort}
            reverse
        />
      </View>
    );
  }
}

export default Download;
