async function sortFiles(sortby, files = []) {
  let sortedFiles = files;
  if (sortby === 'NAME/ASC' || sortby === 'NAME/DESC') {
    let sign = sortby === 'NAME/ASC' ? 1 : 0;
    for (let i = 0; i < sortedFiles.length; i += 1) {
      for (let j = 0; j < i; j += 1) {
        if (
          (sign === 1 && (sortedFiles[i].name < sortedFiles[j].name)) ||
          (sign === 0 && (sortedFiles[i].name > sortedFiles[j].name))
        ) {
          let temp = sortedFiles[i];
          sortedFiles[i] = sortedFiles[j];
          sortedFiles[j] = temp;
        }
      }
    }
  }
  return sortedFiles;
}

export default sortFiles;
