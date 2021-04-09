class TipsContent extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 my-10 sm:my-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col bg-gray-100 p-7 rounded-xl gap-4">
          <h1 class="text-xl font-bold sm:text-2xl">Memakai Masker 😷</h1>
          <p class="text-md sm:text-lg">
            Untuk menghindari droplets yang dikeluarkan oleh diri kita dan
            orang lain ketika berbicara
          </p>
        </div>
        <div class="flex flex-col bg-gray-100 p-7 rounded-xl gap-4">
          <h1 class="text-xl font-bold sm:text-2xl">Menjaga Jarak 🖖</h1>
          <p class="text-md sm:text-lg">
            Menjaga jarak dengan orang lain minimal 1 meter untuk menghindari
            terjangkitnya covid-19
          </p>
        </div>
        <div class="flex flex-col bg-gray-100 p-7 rounded-xl gap-4">
          <h1 class="text-xl font-bold sm:text-2xl">Menjauhi Kerumunan 👥</h1>
          <p class="text-md sm:text-lg">
            Menjauhi kerumuman karna kita tidak tahu keadaan orang lain
          </p>
        </div>
        <div class="flex flex-col bg-gray-100 p-7 rounded-xl gap-4">
          <h1 class="text-xl font-bold sm:text-2xl">Mencuci Tangan 💧</h1>
          <p class="text-md sm:text-lg">
            Dengan sabun dibawah air mengalir atau menggunakan hand sanitizer
            agar tangan kita tetap steril dan bersih
          </p>
        </div>
      </div>
      <div
        class="w-full h-auto my-10 sm:mx-20 sm:my-auto border border-gray-400 p-10 rounded-xl"
      >
        <h1 class="text-xl font-bold sm:text-3xl">
          Share ke Orang Disekitarmu ❤️
        </h1>
        <p class="text-xl sm:text-md text-gray-600 my-5">
          Jika kamu merasa website ini bermanfaat untukmu, sebarkan
          dailyvid.netlify.app kepada teman-temanmu yang ingin membutuhkan
          informasi mengenai covid-19
        </p>
        <div class="flex flex-row flex-wrap gap-2 my-5">
          <button
            class="bg-blue-700 text-white px-5 py-3 rounded-md hover:opacity-80"
          >
            Facebook
          </button>
          <button
            class="bg-blue-400 text-white px-5 py-3 rounded-md hover:opacity-80"
          >
            Twitter
          </button>
          <button
            class="bg-purple-700 text-white px-5 py-3 rounded-md hover:opacity-80"
          >
            Instagram
          </button>
        </div>
      </div>
    </div>
      `
  }
}

customElements.define('tips-content', TipsContent)
