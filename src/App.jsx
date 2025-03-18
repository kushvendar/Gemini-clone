import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './main/Main'

const App = () => {
  return (
    <div className='flex min-h-screen box-border'>
    <Sidebar/>
    <Main/>
    </div>
  )
}

export default App
