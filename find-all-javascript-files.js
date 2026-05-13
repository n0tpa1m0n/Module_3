function findAllJavascriptFiles(folder, callback) {
  const result = [];
  let activeOperations = 0;

  function traverse(currentFolder) {
    activeOperations++;

    currentFolder.size((len) => {
      if (len === 0) {
        checkDone();
        return;
      }

      let readCount = 0;

      for (let i = 0; i < len; i++) {
        currentFolder.read(i, (file) => {
          if (typeof file === 'string') {
            if (file.endsWith('.js')) {
              result.push(file);
            }
          } else if (typeof file === 'object' && file !== null) {
            traverse(file);
          }

          readCount++;
          if (readCount === len) {
            checkDone();
          }
        });
      }
    });
  }

  function checkDone() {
    activeOperations--;
    if (activeOperations === 0) {
      callback(result);
    }
  }

  traverse(folder);
}