class NavContent extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <nav
      class="mx-5 my-5 flex flex-row justify-between items-center lg:mx-20 xl:mx-40"
    >
        <div class="flex flex-row items-center">
            <img
            src="../src/assets/images/logoCovid.svg"
            class="w-auto h-14 lg:h-15 xl:h-15"
            alt="logo covid-19"
            />
            <h2 class="text-md sm:text-xl font-bold text-red-600 mx-4">DailyVid</h2>
        </div>

        <div class="hidden sm:block">
            <ul class="flex flex-row gap-6 md:gap-4 lg:gap-6 xl:gap-6">
            <li class="text-lg md:text-md font-bold text-red-700 cursor-pointer">
                Beranda
            </li>
            <li
                class="text-lg md:text-md font-semibold hover:font-bold hover:text-red-700 cursor-pointer"
            >
                Daftar Negara
            </li>
            <li
                class="text-lg md:text-md font-semibold hover:font-bold hover:text-red-700 cursor-pointer"
            >
                Kontak
            </li>
            </ul>
        </div>
    </nav>
    `
  }
}

customElements.define('nav-content', NavContent)
