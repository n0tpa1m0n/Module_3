class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._contents = contents;
    
    const lastDotIndex = fullName.lastIndexOf('.');
    this._filename = fullName.substring(0, lastDotIndex);
    this._extension = fullName.substring(lastDotIndex + 1);
    
    this._lineIndex = 0;
    this._charIndex = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._filename;
  }

  get extension() {
    return this._extension;
  }

  getContents() {
    return this._contents;
  }

  write(str) {
    if (this._contents === "") {
      this._contents = str;
    } else {
      this._contents += '\n' + str;
    }
  }

  gets() {
    const lines = this._contents.split('\n');
    if (this._contents === "") return undefined;
    
    if (this._lineIndex < lines.length) {
      return lines[this._lineIndex++];
    }
    return undefined;
  }

  getc() {
    if (this._charIndex < this._contents.length) {
      return this._contents[this._charIndex++];
    }
    return undefined;
  }}