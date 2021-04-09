class HeroContent extends HTMLElement {
  constructor() {
    super()
  }

  set data(data) {
    this._data = data
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
    </style>`
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }

  render() {
    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    this.innerHTML = `
    <section
      class="mx-5 my-10 grid grid-cols-1 sm:grid-cols-2 sm:my-20 lg:mx-20 xl:mx-40"
    >
      <div class="sm:my-auto">
        <h1
          class="text-4xl font-semibold w-full leading-snug sm:leading-tight sm:text-5xl"
        >
          Pantau Jumlah Penyebaran Covid-19
          <span class="text-red-700 font-bold">#DiDailyVid</span>
        </h1>

        <div class="flex flex-row flex-wrap gap-4 my-10">
          <h1
            class="text-2xl font-bold w-full text-center leading-snug sm:leading-tight sm:text-xl sm:text-left"
          >
            Data Nasional
            <br />
            <span class="text-sm sm:text-lg font-normal">
              (Update terakhir: ${new Date(
                Date.parse(this._data.lastUpdate),
              ).toLocaleString('ID', {
                dateStyle: 'full',
                timeStyle: 'long',
              })})
            </span>
          </h1>
          <div
            class="w-full h-auto text-center border-2 border-red-500 p-6 rounded-lg shadow-xl sm:w-auto sm:text-left"
          >
            Kasus Positif
            <h1 class="text-2xl sm:text-2xl font-semibold">
              ${formatNumber(this._data.confirmed.value)}
              <span class="text-sm sm:text-sm text-black">Orang</span>
            </h1>
          </div>
          <div
            class="w-full h-auto text-center border-2 border-green-700 p-6 rounded-lg shadow-xl sm:w-auto sm:text-left"
          >
            Kasus Sembuh
            <h1 class="text-2xl sm:text-2xl font-semibold">
              ${formatNumber(this._data.recovered.value)}
              <span class="text-sm sm:text-sm text-black">Orang</span>
            </h1>
          </div>
          <div
            class="w-full h-auto text-center border-2 border-black p-6 rounded-lg shadow-xl sm:w-auto sm:text-left"
          >
            Kasus Meninggal
            <h1 class="text-2xl sm:text-2xl font-semibold">
              ${formatNumber(this._data.deaths.value)}
              <span class="text-sm sm:text-sm text-black">Orang</span>
            </h1>
          </div>
        </div>
        <div class="w-full h-auto bg-red-700 rounded-xl sm:w-max">
          <p class="font-bold text-sm p-5 text-white sm:text-md">
            Tetap Terapkan 3M
            <br />
            (Mencuci Tangan, Memakai Masker & Menjaga Jarak)
          </p>
        </div>
      </div>
      <div class="sm:my-auto">
        <img
          src="../src/assets/images/vectorCovid.png"
          class="w-auto h-auto object-cover rounded-3xl"
          alt="hero image"
        />
      </div>
    </section>
    `
  }
}

customElements.define('hero-content', HeroContent)
