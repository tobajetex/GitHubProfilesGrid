import React from 'react'
import FetchData from './GitHubUserProfiles'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        GitHub User List
      </h1>
      <FetchData />
    </div>
  )
}

export default App
