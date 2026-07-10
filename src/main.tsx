import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './style.css'
import './support/support.css'
import './redesign.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

const isLegalHash = window.location.hash === '#/impressum' || window.location.hash === '#/datenschutz'

if (root.hasChildNodes() && !isLegalHash) hydrateRoot(root, app)
else {
  if (root.hasChildNodes()) root.replaceChildren()
  createRoot(root).render(app)
}
