class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  set clickEvent(event) {
    this._clickEvent = event
    this.render()
  }

  get value() {
    return this.querySelector('#searchElement').value
  }

  render() {
    this.innerHTML = `
        <div class="flex flex-col sm:flex-row gap-4 my-10">
            <input id="searchElement" type="search" placeholder="Contoh: Indonesia atau ID" class="w-full h-auto border border-gray-400 rounded-xl p-4 text-md sm:w-1/3" required>
            <input type="submit" class="bg-blue-700 text-white px-4 py-2 rounded-xl hover:opacity-80" id="searchButtonElement" value="Search"></input>
        </div>`

    this.querySelector('#searchButtonElement').addEventListener(
      'click',
      this._clickEvent,
    )
  }
}

customElements.define('search-bar', SearchBar)
