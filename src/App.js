import logo from './logo.svg'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/sora/history?date=13-02-2021')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  })
  return (
    <div className='App'>
      <header className='App-header'>
        {
          data ? (
            <p>{`The coin is ${data.localization.es}`}</p>
          ) : (
            <p>There is not info to show</p>
          )
        }
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
