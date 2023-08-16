import viteLogo from '../public/vite.svg'

import { setupCounter } from './counter'

import template from './main.html'
import './style.css'
import typescriptLogo from './typescript.svg'

import './ccjmne-card/ccjmne-card'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = (template.cloneNode(true) as HTMLElement).innerHTML
  .replace('${typescriptLogo}', typescriptLogo)
  .replace('${viteLogo}', viteLogo)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
