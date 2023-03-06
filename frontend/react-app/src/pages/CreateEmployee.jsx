import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function CreateEmployee() {
     const { employees, setEmployees } = useContext(AppContext);
     const [firstname, setFirstname] = useState();
     const [lastname, setLastname] = useState();
     const [role, setRole] = useState();
     const [organization, setOrganization] = useState()
     const navigate = useNavigate();
     const [success, setSuccess] = useState(false);


     const postData = async (data) => {
          await axios.post("http://127.0.0.1:4040/employee", data);
          const res = await axios.get("http://127.0.0.1:4040/employee")
          setEmployees(res.data);

     }

     const clearAll = () => {
          setFirstname("")
          setLastname("")
          setRole("")
          setOrganization("")
     }

     const handleChange = (setFunc, value) => {
          setFunc(value);
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          setSuccess(true);
          const finalData = { firstname, lastname, role, organization }
          postData(finalData)
          clearAll();
          setTimeout(() => {
               navigate("/")

          }, 2000)
     }
     return (
          <div className='create-container' >
               <div className='alert'>
                    {success ? <h4>Submitted Successfully !</h4> : ""}
               </div>
               <div className='create-form'>
                    <h2>Add New Employee</h2>
                    <form onSubmit={handleSubmit} >
                         <div className="form-group">
                              <label htmlFor="firstname">First Name</label>
                              <br />
                              <input required autoCapitalize autoComplete='off' onChange={(e) => {
                                   const value = e.target.value;
                                   handleChange(setFirstname, value)
                              }} placeholder='Enter first name' type="text" id='firstname' name='firstname' />
                         </div>
                         <div className="form-group">
                              <label htmlFor="lastname">Last Name</label>
                              <br />
                              <input required autoCapitalize autoComplete='off' onChange={(e) => {
                                   const value = e.target.value;
                                   handleChange(setLastname, value)
                              }} placeholder='Enter last name' type="text" id='lastname' name='lastname' />
                         </div>
                         <div className="form-group">
                              <label htmlFor="role">Role</label>
                              <br />
                              <input required autoCapitalize autoComplete='off' onChange={(e) => {
                                   const value = e.target.value;
                                   handleChange(setRole, value)
                              }} placeholder='Web3 Developer' type="text" id='role' name='role' />
                         </div>
                         <div className="form-group">
                              <label htmlFor="organization">Organisation</label>
                              <br />
                              <input required autoCapitalize autoComplete='off' onChange={(e) => {
                                   const value = e.target.value;
                                   handleChange(setOrganization, value)
                              }} placeholder='AlmaBetter' type="text" id='organization' name='organization' />
                         </div>

                         <button onClick={() => {

                         }} className='btn-p' type="submit">Submit</button>
                    </form>

               </div>
          </div>
     )
}

export default CreateEmployee
