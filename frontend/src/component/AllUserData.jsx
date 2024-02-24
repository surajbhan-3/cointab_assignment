import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'
function AllUserData({name,phone, email, website, city , company,id}) {
  const [isUserPresent, setIsUserPresent] = useState(false)
const navigate = useNavigate()

  useEffect(()=>{
 
     const checkUserId = async ()=>{

       const response = await axios.get(`http://localhost:4500/api/user/${id}`)
       if(response.data.message==="No User Data"){
        setIsUserPresent(false)
       }else{
        setIsUserPresent(true)
       }
        console.log(response)
     }
     checkUserId()

  },[id])


 const handleAddData = async()=>{
      
       const response = await axios.post("http://localhost:4500/api/user/addNewUser",{

          name:name,
          email:email,
          phone:phone,
          website:website,
          city:city,
          userId:id,
          company:company
       })
       setIsUserPresent(true)
       console.log(response.data)
      alert("Data has been added")
 } 
 const handleRedirect = async(id,name,company)=>{

         localStorage.setItem("cointab-userId", id)
         localStorage.setItem("cointab-username", name)
         localStorage.setItem("cointab-company",company)
        navigate("/post")
        
 }


  return (
    <React.Fragment>
        <tr>
           <td>{name}</td>
           <td>{email}</td>
           <td>{phone}</td>
           <td>{website}</td>
           <td>{city}</td>
           <td>{company}</td>
           <td>{isUserPresent?<button onClick={()=>handleRedirect(id,name,company)}>Open</button> 
           :<button onClick={handleAddData}>Add</button>}</td>
        </tr>
        
    </React.Fragment>
  )
}

export default AllUserData