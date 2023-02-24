import React, {useState } from "react";
import './pages.css';

const TicketingApprover = () =>{
    
    const[ticketType, setTicketType] = useState('')
    const[requirementType, setRequirementType] = useState('')
    const[description, setDescription] = useState('')
    const[fileAttached, setFileAttached] = useState('')
    const[priority, setPriority] = useState('')
    const[remark, setRemark] = useState('')
    const[assignTo, setAssignTo] = useState('')
    const[user, setUser] = useState('') 
    // const[status, setStatus] = useState('')
    const[comment, setComment] = useState('')
    

    const types = [
            {key:"Manage other Applications", value:"Manage other Applications"},
    ];

    const priorities = [
            {key:" --select-- ", value:" --Select--  "},
            {key:"High", value:"High"},
            {key:"Medium", value:"Medium"},
            {key:"Normal", value:"Normal"},
            {key:"Low", value:"Low"}
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Ticket Added Successfully!')
    }
    

    return(
        <>
        <article>

            <form className="form" onSubmit={handleSubmit}>
            <h2>Ticket System-Approver</h2>

                <div className="details">
                    <label htmlFor="ticketType" className="label">Employment Type</label>      
                        <select className="dropDown"
                            disabled={true}
                            id='ticketType' 
                            name="ticketType" value={ticketType} onChange={e => setTicketType(e.target.value)}>
                                {types.map(option => (
                                    <option key={option.key} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                        </select>
                </div>{/*non-editable, disabled*/}

                <div className="details">
                    <label htmlFor="requirementType" className="label">Employment Type</label>      
                        <select className="dropDown" 
                            disabled={true}
                            id="requirementType" 
                            name="requirementType" value={requirementType} onChange={e => setRequirementType(e.target.value)}>
                                {types.map(option => (
                                    <option key={option.key} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                        </select>
                </div>{/*non-editable, disabled*/}

                <div className="details">
                    <label htmlFor="description" className="label">Requirement Description</label>
                    <input type="text"
                    className="inputField"
                    id="description"
                    name="description"
                    placeholder="Enter Requirement Description"
                    required
                    value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <hr/>

                <div className="details">
                    <label htmlFor="fileAttached" className="label">Multiple Upload Attached </label>
                    <input type="text"
                        className="inputField"
                        id="fileAttached"
                        name="fileAttached"
                        placeholder="                         " 
                        value={fileAttached} onChange={(e) => setFileAttached(e.target.value)} />                    
                </div>

                <div className="details">
                    <label htmlFor="priority" className="label">Employment Type</label>      
                        <select className="dropDown"
                            id="priority" 
                            name="priority" value={priority} onChange={e => setPriority(e.target.value)}>
                                {priorities.map(option => (
                                    <option key={option.key} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                        </select>
                </div>

                <hr/>

                <div className="details">
                    <label htmlFor="remark" className="label">Remarks</label>
                    <input type="text"
                    className="inputField"
                    id="remark"
                    name="remark"
                    placeholder="Give Remarks"
                    required
                    value={remark} onChange={(e) => setRemark(e.target.value)}/>
                </div>
                
                <br/>

                <div className="details">
                    <label htmlFor="assignTo" className="label">Assign Ticket to</label>      
                        <select className="dropDown" 
                            id="assignTo" 
                            name="assignTo" value={assignTo} onChange={e => setAssignTo(e.target.value)}>
                                {types.map(option => (
                                    <option key={option.key} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                        </select>
                </div>{/* </select>To IT members only */}

                <div className="details">
                    <label htmlFor="user" className="label">Assign to User</label>      
                        <select className="dropDown" 
                            id="user" 
                            name="user" value={user} onChange={e => setUser(e.target.value)}>
                                {types.map(option => (
                                    <option key={option.key} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                        </select>
                </div>

                <hr/>

                <div className="details">
                    <label htmlFor="comment" className="label">Comment</label>
                    <input type="text"
                    className="inputField"
                    id="comment"
                    name="comment"
                    placeholder="Status Comment"
                    value={comment} onChange={(e) => setComment(e.target.value)}/>
                </div>
                
            <br/>

            <button className="submitBtn" type="submit" onClick={() => window.location.reload(false)}>Submit</button>
            </form>
        </article>
        </>
    )
}

export default TicketingApprover;