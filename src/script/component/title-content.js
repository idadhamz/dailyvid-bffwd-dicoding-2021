class TitleContent extends HTMLElement {
  connectedCallback() {
    this.h1 = this.getAttribute('h1') || null
    this.span = this.getAttribute('span') || null

    this.innerHTML = `
        <h1
          class="text-xl font-semibold w-full leading-snug sm:leading-tight sm:text-2xl"
        >
          ${this.h1}
          <span class="text-red-700 font-bold">${this.span}</span>
        </h1>
        `
  }
}

customElements.define('title-content', TitleContent)
