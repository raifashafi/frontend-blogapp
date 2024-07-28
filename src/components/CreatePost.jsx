import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const CreatePost = () => {
   const [input,setInput]=useState(

    {"Message":"","userId":sessionStorage.getItem("userId")}
        



   )
   const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
const readValues=()=>{
    console.log(input)
    axios.post("http://localhost:3030/create",input,{
        headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
    }).then(
        (response)=>{
            console.log(response.data)
         if (response.data.status=="success") {
            
            alert("posted successfully")
         } else {
            alert("something went wrong")
         }

        }
    ).catch(
        (error)=>{
        console.log(error)
        }
    )
}


  return (
    <div>
        <Navbar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Post a message</label>
                        <textarea name="Message" value={input.Message} id="" className="form-control" onChange={inputHandler}></textarea>
            
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValues} className="btn btn-success">Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default CreatePost