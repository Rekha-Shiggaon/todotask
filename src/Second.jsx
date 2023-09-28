import React from 'react'
import User from "./User.json"
const Second = () => {
  return (
    
            <div id="second">
            <table border={2} cellPadding={2}>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                {User.map((x)=>
               {
                return(   
                <tr>
                    <td>{x.userId}</td>
                    <td>{x.id}</td>
                    <td>{x.title}</td>
                    <td>{x.completed?"completed":"pending"}</td>
                </tr>
               )
            })}
             
            </table>
            </div>
         
        )
    

  
}
export default Second