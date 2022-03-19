import React from 'react'
import logo from './logo.png';

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'roboto'
    }}>
    <img src={logo} alt="bgi logo" />
      <h1 style={{
        color: '#6EC177',
        margin: 0
      }}>Wah gwan, coming soon</h1>
      <p>what's up, coming soon</p>
    </div>
  )
}

export default App