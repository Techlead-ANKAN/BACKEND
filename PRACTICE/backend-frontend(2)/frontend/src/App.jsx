import React, { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [details, setDetails] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        setDetails(response.data)
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
      });
  }, [])

  return (
    <>
      <h1>Details</h1>
      <h2>Name: {details.name}</h2>
      <h2>Age: {details.age}</h2>
      <h2>Email: {details.email}</h2>
      <h2>Role: {details.role}</h2>
    </>
  )
}

export default App