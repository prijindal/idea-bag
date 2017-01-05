/* global XMLHttpRequest b:true*/
import React, { Component, PropTypes } from 'react';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNFS from 'react-native-fs';

const gradient = {
  start: {
    x: 0,
    y: 1,
  },
  end: {
    x: 1,
    y: 1,
  },
};

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

  onPress = () => {
    let { status } = this.props.download;
    if (status === 'DOWNLOADING') {
      this.abort();
    }
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
    let colors = ['#ffffff', '#00ff00', '#ffffff'];
    if (status === 'ABORTED') {
      colors[1] = '#ff0000';
    }
    return (
      <TouchableOpacity onPress={this.onPress}>
        <LinearGradient
            colors={colors}
            end={gradient.end}
            locations={[0, progress / 100, 0]}
            start={gradient.start}
        >
          <ListItem
              leftIcon={leftIcon}
              subtitle={url}
              title={filename}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

export default Download;
