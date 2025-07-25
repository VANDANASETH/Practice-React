import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error("Error", err))
  },[])

  return (
    <>
      <h2>Let's call API using Fetch and Axios Both</h2>
      <ul>
        {users.map(user=>(
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
          ))}
      </ul>
    </>
  )
}

export default App
