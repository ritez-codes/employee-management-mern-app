import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { MdDelete, MdEdit } from "react-icons/md";
import { IconContext } from 'react-icons';
import ConfirmDel from '../components/ConfirmDel';
import Edit from '../components/Edit';
function EmployeeList() {
     const { employees, setEmployees } = useContext(AppContext);
     const [isDelete, setIsDelete] = useState(false);
     const [delId, setDelId] = useState();
     const [editId, setEditId] = useState();
     const [isEdit, setIsEdit] = useState(false);
     return (
          isDelete ? <ConfirmDel employees={employees} delId={delId} setIsDelete={setIsDelete} setEmployees={setEmployees} /> :
               isEdit ? <Edit editId={editId} setIsEdit={setIsEdit} /> :
                    <div className='list-container'>
                         <h2 style={{ textAlign: "center" }} >Developer's List</h2>
                         <div className='card-container'>
                              {
                                   employees && employees.map((employee, index) => {
                                        return <Employee setIsEdit={setIsEdit} editId={editId} setDelId={setDelId} setEditId={setEditId} setIsDelete={setIsDelete} key={index.toString()} employee={employee} />
                                   })
                              }
                         </div>
                    </div>
     )
}

export default EmployeeList

const Employee = ({ employee, setIsDelete, setDelId, setEditId, editId, setIsEdit }) => {

     const handleDel = () => {
          setIsDelete(true);
     }

     return <div className='employee-card' >
          <div>

               <div className="name-wrap">
                    <div className='name'>{employee.firstname} {employee.lastname}</div>

                    <div className='btn-group'>

                         <IconContext.Provider value={{ size: "24", color: "red" }} className='btn-group'>
                              <button onClick={() => {
                                   handleDel();
                                   setDelId(employee._id)

                              }} className='a-btn btn-delete' ><MdDelete /></button>
                              <button onClick={() => {
                                   setEditId(employee._id)
                                   setIsEdit(true);
                              }} className='a-btn btn-edit' ><MdEdit color='green' /></button>
                         </IconContext.Provider>
                    </div>

               </div>
               <div className='wrap'>
                    <div className='role'> {employee.role}</div>
                    <div className='emp-id'> ID : {employee._id}</div>
                    <div className='organization'> {employee.organization}</div>
               </div>

          </div>

     </div>
}