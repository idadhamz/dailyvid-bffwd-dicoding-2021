class CountriesItem extends HTMLElement {
  constructor() {
    super()
  }

  set country(country) {
    this._country = country

    this.confirmed =
      this._country.confirmed.value || this.getAttribute('confirmed')
    this.recovered =
      this._country.recovered.value || this.getAttribute('recovered')
    this.deaths = this._country.deaths.value || this.getAttribute('deaths')

    this.render()
  }

  renderError(message) {
    this.innerHTML = `<img
      src="../src/assets/images/dataNotFound.jpg"
      class="flex w-1/2 h-auto object-cover rounded-3xl m-auto"
      alt="hero image"
      />
      <h1 class="text-xl text-center my-5">${message}</h1>
      `
  }

  render() {
    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    console.log(this._country)
    this.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 my-10 border border-gray-400 rounded-xl p-4">
        <div class="w-full h-auto bg-red-500 text-white rounded-xl text-center p-4 text-xl">
          Kasus Positif
          <h1 class="text-2xl sm:text-2xl font-semibold">${formatNumber(
            this.confirmed,
          )}
          <span class="text-sm sm:text-sm text-white">Orang</span>
          </h1>
        </div>
        <div class="w-full h-auto bg-green-500 text-white rounded-xl text-center p-4 text-xl">
          Kasus Sembuh
          <h1 class="text-2xl sm:text-2xl font-semibold">${formatNumber(
            this.recovered,
          )}
          <span class="text-sm sm:text-sm text-white">Orang</span>
          </h1>
        </div>
        <div class="w-full h-auto bg-black text-white rounded-xl text-center p-4 text-xl">
          Kasus Meninggal
          <h1 class="text-2xl sm:text-2xl font-semibold">${formatNumber(
            this.deaths,
          )}
          <span class="text-sm sm:text-sm text-white">Orang</span>
          </h1>
        </div>
      </div>
    `
  }
}

customElements.define('countries-item', CountriesItem)
