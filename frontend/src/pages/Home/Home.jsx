import React, { useState } from 'react'
import "./Home.css"
import axios from "axios"
import AllUserData from '../../component/AllUserData'

function Home() {
const [data, setData]= useState([])
  const handleClick=()=>{

    const getUser = async ()=>{
        const  response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        console.log(response.data[0].address.city)
        setData(response.data)
    }
    getUser()
  }  

   

  return (
    <>
     <div className='h-main-div'>
        <h1><span>Cointab</span> SE-ASSIGNMENT</h1>
        <button onClick={handleClick}>All user</button>
       
    </div>
    <div className="table-div">
         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>City</th>
                    <th>Company</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
            {data.map((el)=>{
             return (<AllUserData key={el.id}
                    name={el.name} 
                    email={el.email}
                    phone={el.phone}
                    website={el.website}
                    city={el.address.city}
                    company={el.company.name}
                    id={el.id}
                    />)
        })}

            </tbody>
        </table>
    </div>
    </>
  )
}

export default Home