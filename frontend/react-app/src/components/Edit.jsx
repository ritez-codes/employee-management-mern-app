import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
function Edit({ editId, setIsEdit }) {
     // let data;
     const { employees, setEmployees } = useContext(AppContext);
     const [editItem, setEditItem] = useState({});


     const finalClick = async () => {
          await axios.patch(`http://127.0.0.1:4040/employee/${editId}`, { ...editItem });
          const datax = await axios.get("http://127.0.0.1:4040/employee");
          setEmployees(datax.data)
     }

     const onchangeHandle = (setFunc, field, value) => {
          setFunc(state => {
               return { ...state, [field]: value }
          })
          console.log(editItem)
     }

     useEffect(() => {
          const filterEditItem = employees.find((employee) => {
               return employee._id === editId;
          })
          setEditItem(filterEditItem);

     }, [])
     return (
          <div className='edit-container'>
               <h2>Edit</h2>
               <div className="form-group">
                    <input required autoComplete='off' onChange={(e) => {
                         onchangeHandle(setEditItem, "firstname", e.target.value)
                    }} placeholder='firstname' type="text" value={editItem.firstname} />
               </div>
               <div className="form-group">
                    <input required autoComplete='off' onChange={(e) => {
                         onchangeHandle(setEditItem, "lastname", e.target.value)
                    }} placeholder='lastname' type="text" value={editItem.lastname} />
               </div>
               <div className="form-group">
                    <input required autoComplete='off' onChange={(e) => {
                         onchangeHandle(setEditItem, "role", e.target.value)
                    }} placeholder='role' type="text" value={editItem.role} />
               </div>
               <div className="form-group">
                    <input required autoComplete='off' onChange={(e) => {
                         onchangeHandle(setEditItem, "organization", e.target.value)
                    }} placeholder='organization' type="text" value={editItem.organization} />
               </div>

               <div className='btns'>
                    <button onClick={() => {
                         finalClick();
                         setIsEdit(false);
                    }} className='e-btn'>Submit</button>
                    <button onClick={() => {
                         setIsEdit(false)
                    }} className='c-btn'>Cancel</button>
               </div>
          </div>
     )
}

export default Edit
