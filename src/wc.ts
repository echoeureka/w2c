import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('wc-wc')
export class WCWC extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `

  @property()
  name = 'WC'

  render() {
    return html`<h1>${this.name}</h1>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wc-wc': WCWC
  }
}
