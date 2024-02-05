import { useEffect, useState } from 'react'

const FetchData = () => {
  const [profiles, setProfiles] = useState([])

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    placeItems: 'center',
  }

  const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    maxWidth: '400px',
  }
  const img = {
    borderRadius: '50%',
    width: '75px',
    height: '75px',
  }
  useEffect(() => {
    async function fetchData() {
      try {
        // Using 'await' to wait for the fetch to complete
        const response = await fetch('https://api.github.com/users')

        // Checking if the fetch was successful (status code in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        // Parsing the response body as JSON
        const data = await response.json()

        setProfiles(data)
      } catch (error) {
        // If an error occurs during the fetch or JSON parsing, handle it here
        console.error('Error during fetch:', error)
        throw error // You might want to rethrow the error to handle it further up the call stack
      }
    }
    fetchData()
  }, [])
  return (
    <div style={cardContainerStyle}>
      {profiles.map((profile) => {
        const { id, login, avatar_url, url } = profile
        console.log(profile)
        return (
          <div style={cardStyle}>
            <img src={avatar_url} alt="" style={img} />
            <div>
              <h4>{login}</h4>
              <a href={url}>Profile</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default FetchData
