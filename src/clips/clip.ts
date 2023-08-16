export default class Clip {

  constructor(private readonly clipPath: SVGClipPathElement, private readonly id: string, ...contents: SVGElement[]) {
    this.setContents(...contents)
  }

  setContents(...contents: SVGElement[]): void {
    this.clipPath.replaceChildren(...contents)
  }

  useFor(element: HTMLElement | SVGElement): void {
    element.style.setProperty('clip-path', `url(#${this.id})`)
  }

}
