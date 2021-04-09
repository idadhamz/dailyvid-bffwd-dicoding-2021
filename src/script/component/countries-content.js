class CountriesContent extends HTMLElement {
  constructor() {
    super()
    this.limit = 12
  }

  set countries(countries) {
    this._countries = countries
    this.render()

    console.log(this.querySelector('.listCountriesValue').getAttribute('value'))
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
    </style>`
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }

  render() {
    this.innerHTML = `
    <section class="mx-5 my-10 sm:my-20 lg:mx-20 xl:mx-40">
        <h1
        class="text-xl font-semibold w-full leading-snug sm:leading-tight sm:text-2xl"
        >
            Daftar Negara
            <span class="text-red-700 font-bold">#DiDailyVid</span>
        </h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-5 my-10 listCountries"></div>
        <div class="my-5 detailCountries"></div>
        <div class="my-5 hidden">
            <button class="w-full h-auto bg-red-500 text-white p-4 rounded-xl hover:opacity-80 getCountriesAgain"> Get Countries </button>
        </div>
    </section>
    `

    // Get Countries Again
    const buttonGetCountries = document.querySelector('.getCountriesAgain')

    buttonGetCountries.addEventListener('click', function () {
      addLimit(12)
    })

    function addLimit(value) {
      this.limit += value
      console.log(this.limit)
    }

    // Get All Countries
    const listCountries = document.querySelector('.listCountries')

    this._countries.splice(0, this.limit).forEach((country) => {
      listCountries.innerHTML += `
        <div class="border border-gray-400 p-5 rounded-xl hover:bg-gray-200 cursor-pointer listCountriesValue" value=${country.name}>
            <h1 class="text-2xl font-bold sm:text-xl text-center">${country.name}</h1>
        </div>
      `
    })
  }
}

customElements.define('countries-content', CountriesContent)
