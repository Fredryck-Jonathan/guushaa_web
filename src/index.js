import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles/index_styles.css';
import App from './App'


import Footer from './components/Footer'


const container = document.getElementById('root');
const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <Router>

                <App/>
                <Footer/>
            </Router>
        </React.StrictMode>,
)
