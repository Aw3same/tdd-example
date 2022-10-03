import { createRoot } from 'react-dom/client'
import { Calculator } from './Calculator'

createRoot(document.getElementById('root') as HTMLElement).render(
    <Calculator />
)