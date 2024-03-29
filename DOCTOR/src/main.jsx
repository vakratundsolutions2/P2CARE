import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import reduxStore from './app/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={reduxStore}>
      <App />
    </Provider>
)
