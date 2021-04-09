class FooterContent extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <footer>
        <div class="w-full h-auto bg-red-700 flex">
            <h1 class="m-auto text-md text-white p-10 sm:p-5 text-center">
                Dibuat Oleh Dadi Ilham S
                <br />
                <b>
                Submission Fundamental Front-End Web Development Dicoding Indonesia
                </b>
            </h1>
        </div>
    </footer>
    `
  }
}

customElements.define('footer-content', FooterContent)
