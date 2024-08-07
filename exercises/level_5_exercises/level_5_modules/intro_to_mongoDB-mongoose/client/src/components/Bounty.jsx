import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.jsx';

function Bounty(props) {

    const { firstName, lastName, living, type, bountyAmount, _id, editBounty } = props
    const [editToggle, setEditToggle] = useState(false)

    function handleSubmit(updates, _id) {
        editBounty(updates, _id)
        setEditToggle(prevToggle => !prevToggle)
    }

    return (
        <div className='bounty'>
            {!editToggle ?
                <>
                    <h1>Name: {firstName} {lastName ? lastName : ""}</h1>
                    <p> Type: {type}</p>
                    <p> Alive or Deceased Status: {living ? "living" : "deceased"}</p>
                    <p> Type: {type}</p>
                    <p>Bounty Amount: ${bountyAmount}</p>
                    <button className='delete-btn' onClick={() => props.deleteBounty(_id)}>Delete Bounty</button>
                    <button className='edit-btn' onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>

                :
                <>
                    <AddBountyForm firstName={firstName} lastName={lastName} living={living} type={type} bountyAmount={bountyAmount} btnText={"Submit Edit"} submit={handleSubmit} _id={_id} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default Bounty;