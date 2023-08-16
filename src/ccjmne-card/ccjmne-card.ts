import Clips, { type Clip } from '../clips/clips'

import template from './ccjmne-card.html'

const TAG = 'ccjmne-card'

export default class CcjmneCard extends HTMLElement {

  private readonly clip: Clip

  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'closed' })
    shadow.append(template.content.cloneNode(true))
    this.clip = Clips.at(shadow).newClip()
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('width', '300')
    rect.setAttribute('height', '50')
    rect.setAttribute('rx', '15')
    this.clip.setContents(rect)
    const main = shadow.querySelector('[main]') as HTMLDivElement
    this.clip.useFor(main)
    const observer = new ResizeObserver(entries => {
      if (entries.find(({ target }) => target === main)) {
        console.log(entries.find(({ target }) => target === main)?.contentRect)
        rect.getAnimations().forEach(a => a.cancel())
        rect.animate([{ x: 0 }, { x: main.clientWidth - 300 }], { duration: 500, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' })
        rect.animate([{ y: 0 }, { y: main.clientHeight - 50 }], { duration: 750, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' })
      }
    })

    observer.observe(main)
  }

  public connectedCallback(): void {
  }

}

customElements.define(TAG, CcjmneCard)
