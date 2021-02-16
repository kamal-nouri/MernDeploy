import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'


export default(props) => {
    const [authers,setAuthers]=useState([])
//   const[loaded,setLoaded]=useState(false)
  useEffect(()=>{
    axios.get("http://localhost:8000/api/getAllAuthers")
        .then(res=>setAuthers(res.data))  
        // setLoaded(true);
 
}, []);

const clickHandler =() =>{
    navigate('/new')
}

const deleteclick=(autherId)=>{
    axios.delete("http://localhost:8000/api/"+autherId)
        .then(res => {remove(autherId)})
}

const remove=(autherId)=>{
    setAuthers(authers.filter(a => a._id !=autherId))
}

    return (
        <>
        <table>
            <th>Auther</th>
            <th>Action</th>
            {authers.length >0 &&
                authers.map((auther,i) =>{
                    return<tr>
                    <td key={i}>{auther.name}</td>
                    <td><button  onClick={(e)=>deleteclick(auther._id)} >Delete</button></td>
                    <td><button onClick={()=>navigate('/edit/'+auther._id)} >Edit</button></td>
                    </tr>
                })
            }
        </table>
        <input type='button' value='add a new author' onClick={clickHandler} />
        </>
    )
}
