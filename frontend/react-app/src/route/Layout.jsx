import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateEmployee from '../pages/CreateEmployee'
import EmployeeList from '../pages/EmployeeList'
import Error404 from '../components/404'
function Layout() {
     return (
          <Routes>
               <Route path='/'>
                    <Route index path='/' element={<EmployeeList />} />
                    <Route path='/create' element={<CreateEmployee />} />
                    <Route path='*' element={< Error404 />} />
               </Route>
          </Routes>
     )
}

export default Layout
