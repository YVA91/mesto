export class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data
    this._renderer = renderer
    this._containerSelector = containerSelector
  }

  renderItems () {
    this._renderedItems.forEach(item => this._renderer(item));
  } 

  addItem(item) {
    this._containerSelector.prepend(item)
  }
  }


