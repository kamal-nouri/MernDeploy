import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react'

export default () => {
    const[name,setName]=useState("")
    const [errors, setErrors] = useState([])
    
    const onSubmitHandler =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/createNewAther",{name})
        .then(()=>navigate("/"))
        .catch(err =>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
            
    }
    const Home =()=>{
        navigate("/")
    }
        
    return (
        <div>
            <p>Add a new author:&nbsp;
                        {
                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                        }
                    </p>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Auther Name :</label><br/>
                <input type='text' onChange={e=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
            <button  onClick={Home} >Cancel</button>
        </form>
        </div>
    )
}
