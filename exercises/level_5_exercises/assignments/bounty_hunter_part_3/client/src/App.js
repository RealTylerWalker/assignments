import React, {useState, useEffect} from 'react'
import Bounty from './components/Bounty'
import axios from 'axios'
import AddBountyForm from './components/AddBountyForm.js'

export default function App(){
    const [bounties, setBounties] = useState([])
    
    function getBounties(){
        axios.get('/bounties')
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

function addBounty(newBounty){
    axios.post('/bounties', newBounty)
    .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
    })
}

function deleteBounty(bountyId){
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
}

function editBounty(updates, bountyID){
    axios.put(`/bounties/${bountyID}`, updates)
    .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyID ? bounty : res.data))
    })
}


    useEffect(() => {
        getBounties()
        addBounty()
        deleteBounty()  
    }, [])

    return (
        <div>
            <div className="bounty-container">
                <AddBountyForm submit={addBounty} btnText="Add Bounty"/>
                { bounties.map(bounty => <Bounty {...bounty} key={bounty.firstName} deleteBounty={deleteBounty} editBounty={editBounty}/>)}
            </div>
        </div>
        )
}