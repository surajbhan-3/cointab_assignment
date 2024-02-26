import React, { useEffect, useState } from 'react'
import axios from "axios"
import  "./Post.css"
import xlsx from "json-as-xlsx"
function Post() {
    const [data, setData]=useState([])
    const [isUserPresent, setIsUserPresent]=useState(false)

useEffect(()=>{
      
    const getUserPostdata =  async ()=>{
        const userId = localStorage.getItem("cointab-userId")
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          console.log(response.data, "this is user d")
          
          setData(response.data)

    }
    getUserPostdata()
},[])


useEffect(()=>{
  const checkIsuserPresent = async()=>{
     const response = await axios.get(`https://tiny-ruby-angelfish-belt.cyclic.app/api/post/verifyUserId/${localStorage.getItem("cointab-userId")}`)
     console.log(response)
    if(response.data.exists===true){
        setIsUserPresent(true)
    }else{
        setIsUserPresent(false)
    }
  } 
  checkIsuserPresent()

},[])


const handleBulkAdd = async()=>{
    const response = await axios.post(`https://tiny-ruby-angelfish-belt.cyclic.app/api/post/addPostInBulk`,{
                     data
                     })
       
                     setIsUserPresent(true)
                     

}


const downloadFile =()=>{


    const dataToExport = data.map(item => ({
        columns: Object.keys(item).map(key => ({ label: key, value: key })),
        content: [item],
      }));
      const settings = {
        fileName: 'MySpreadsheet',
      };
    
      xlsx(dataToExport, settings);

   
    
    }

  return (
  <>
  <div className='p-main-div'>

      {isUserPresent?<button onClick={downloadFile}>Download</button>
       : <button onClick={handleBulkAdd}>Bulk Add</button>
       }
  </div>
  <div className='post-div-table'>
        <table>
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
               {data.map((el)=>{

                    return (
                        <tr key={el.id}>
                    <td>{localStorage.getItem("cointab-username")}</td>        
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>{el.body}</td>
                    <td>{localStorage.getItem("cointab-company")}</td>
                    </tr>
                    )
               })}
            </tbody>
        </table>
    </div>
  </>
  )
}

export default Post