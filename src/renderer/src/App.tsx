import { useEffect, useState } from 'react'
import { EXAMPLE_DATA } from '@common/constants/global.constants'

function App(): React.JSX.Element {
  // get data from worker
  const [data, setData] = useState<typeof EXAMPLE_DATA | null>(null)

  // fetch data
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const result = await window.api.request('/api/profile', 'GET')
        setData(result.data)
      } catch (error) {
        console.error('Failed to fetch profile from Hono worker:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div>
      <h1>Hello</h1>
      {data ? (
        <div>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>City: {data.city}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button
      // onClick={async () => {
      //   const res = await window.api.request('/user', 'POST', {
      //     name: 'Jane Doe',
      //     age: 55,
      //     city: 'London'
      //   })
      //   setData(res)
      // }}
      >
        Update Profile (POST)
      </button>
    </div>
  )
}

export default App
