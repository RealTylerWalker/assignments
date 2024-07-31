import React , { useState } from 'react'

function AddBountyForm(props){

    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living ? "Alive" : "Deceased",
        bountyAmount: props.bountyAmount || "",
        type: props.type || "",
    }

    const [inputs, setInputs] = useState(initInputs);

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault()
    props.submit(inputs, props._id)
    setInputs(initInputs)
}

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type= "text" 
                name="firstName" 
                placeholder="First Name" 
                value={inputs.firstName} 
                onChange={handleChange} /> 
            
            <input 
                type= "text" 
                name="lastName" 
                placeholder="Last Name" 
                value={inputs.lastName} 
                onChange={handleChange} />

            <select
                name="living"
                value={inputs.living}
                onChange={handleChange}
            >
                <option value="">Alive or Deceased</option>
                <option value="true">Alive</option>
                <option value="false">Deceased</option>
            </select>

            <input 
                type= "text" 
                name="bountyAmount" 
                placeholder="Bounty Amount" 
                value={inputs.bountyAmount} 
                onChange={handleChange}/>

            <input 
                type= "text" 
                name="type" 
                placeholder="Type" 
                value={inputs.type} 
                onChange={handleChange} />

            <button className='edit-btn submit-btn'>{props.btnText}</button>
        </form>
    ) 
}

export default AddBountyForm;