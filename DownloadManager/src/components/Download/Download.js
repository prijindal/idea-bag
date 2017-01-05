/* global XMLHttpRequest b:true*/
import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import RNFS from 'react-native-fs';

class Download extends Component {
  static propTypes = {
    download: PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
      status: PropTypes.string,
      progress: PropTypes.number,
      path: PropTypes.string,
    }),
    setProgress: PropTypes.func,
    setCompleted: PropTypes.func,
    setAbort: PropTypes.func,
  }

  componentDidMount() {
    let { download, setProgress, setCompleted, setAbort } = this.props;
    let { url } = download;
    if (download.status !== 'DOWNLOADING') return;
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
      let urlArray = url.split('/');
      let path = `${RNFS.ExternalStorageDirectoryPath}/Download/${urlArray[urlArray.length - 1]}`;
      console.log(path);
      console.log(this.req);
      setProgress(99);
      RNFS.writeFile(path, this.req.response, 'utf8')
      .then((success) => {
        console.log(success);
        delete this.req;
        setCompleted(path);
      })
      .catch((err) => {
        console.error(err);
      });
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
    let { url, progress, status, path } = this.props.download;
    let leftIcon = {
      name: 'file-download',
    };
    if (status === 'DOWNLOADING') {
      leftIcon = {
        name: 'cancel',
        onPress: this.abort,
      };
    }
    let filename;
    if (path) {
      let filenameArray = path.split('/');
      filename = filenameArray[filenameArray.length - 1];
    }
    return (
      <ListItem
          leftIcon={leftIcon}
          subtitle={url}
          title={filename}
      />
    );
  }
}

export default Download;
