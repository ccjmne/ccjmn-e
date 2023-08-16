import Clip from './clip'
import template from './clips.html'

export { default as Clip } from './clip'

export default class Clips {

  private readonly defs: SVGDefsElement
  private id_seq = 0

  public static at(at: ShadowRoot | HTMLBodyElement): Clips {
    return new Clips(at)
  }

  private constructor(parent: ShadowRoot | HTMLBodyElement) {
    const content = template.content.cloneNode(true) as SVGSVGElement
    this.defs = content.querySelector('defs')!
    parent.prepend(content)
  }

  public newClip(...contents: SVGElement[]): Clip {
    const id = `clip-${String(this.id_seq += 1).padStart(4, '0')}`
    const clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')
    clip.setAttribute('id', id)
    this.defs.appendChild(clip)

    return new Clip(clip, id, ...contents)
  }

}
