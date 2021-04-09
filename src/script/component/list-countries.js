class ListCountries extends HTMLElement {
  constructor() {
    super()
  }

  set countries(countries) {
    this._countries = countries
    this.render()
  }

  renderError(message) {
    this.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }

  render() {
    let openList = `<div class="grid grid-cols-1 sm:grid-cols-4 gap-5 my-5 sm:my-10">`
    // Looping all countries
    this._countries.forEach((country) => {
      openList += `
      <div class="border border-gray-400 p-5 m-0 rounded-xl hover:bg-gray-200">
          <h1 class="text-2xl font-bold sm:text-xl text-center">${country.name}</h1>
      </div>
      `
    })

    openList += `</div>`
    this.innerHTML = openList

    // Get Detail Countries
    // this.querySelector('#searchButtonElement').addEventListener(
    //   'click',
    //   this.getDetailCountries(),
    //   this._clickEvent,
    // )
  }

  // getDetailCountries() {
  //   const valueCountry = this.querySelector('.countryNameText').innerHTML

  //   const detailCountry = document.createElement('detail-country')
  //   detailCountry.valueCountry = valueCountry
  //   this.appendChild(detailCountry)
  // }
}

customElements.define('list-countries', ListCountries)
