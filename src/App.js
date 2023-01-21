import Home from './pages/Home'
import { useRoutes } from 'react-router-dom'
const element = <Home />
function App() {
  return useRoutes(
    ['/', '/token-management', '/docs', '/apply-for-ido', '/art'].map((path) => ({ path, element }))
  )
}

export default App
