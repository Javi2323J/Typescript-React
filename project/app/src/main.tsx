import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
)