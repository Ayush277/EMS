import React from 'react'
import Header from '../other/Header'
import TaskCreate from '../other/TaskCreate'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-7'>
            <Header />
            <TaskCreate />
            <AllTask /> 
        </div>
        
    )
}

export default AdminDashboard
