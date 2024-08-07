import React, { useState, useEffect } from 'react'
import Bounty from './components/Bounty'
import axios from 'axios'
import AddBountyForm from './components/AddBountyForm'

export default function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get('/api/bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post('/api/bounties', newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
  }

  function deleteBounty(bountyId) {
    axios.delete(`/api/bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyID) {
    axios.put(`/api/bounties/${bountyID}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyID ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div>
      <div className="bounty-container">
        <AddBountyForm submit={addBounty} btnText="Add Bounty" />
        {bounties.map(bounty => <Bounty {...bounty} key={bounty._id} deleteBounty={deleteBounty} editBounty={editBounty} />)}
      </div>
    </div>
  )
}