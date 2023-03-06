import axios from 'axios'
import React from 'react'
import "./Style.css"
function ConfirmDel({ setIsDelete, setEmployees, employees, delId }) {

     const filteredData = employees.filter(employee => {
          return employee._id !== delId;
     })
     const delData = async () => {
          await axios.delete(`http://127.0.0.1:4040/employee/${delId}`)
          setEmployees(filteredData);
     }
     return (
          <div className='del-container'>
               <p>Are you sure want to delete ?</p>

               <div className="btns">
                    <button onClick={() => {
                         delData();
                         setIsDelete(false)
                    }} className='yes' >Yes Delete!</button>
                    <button className='no' onClick={() => {
                         setIsDelete(false)
                    }} >No!</button>
               </div>
          </div>
     )
}

export default ConfirmDel
