import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './views/App'

import DataContext from './data/DataContext'

ReactDOM.render(
    <DataContext.Provider>
        <App />
    </DataContext.Provider>,
    
    document.getElementById('root')
)

//parei em 6min aula 72