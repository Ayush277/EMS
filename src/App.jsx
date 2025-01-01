import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null)
  
  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser("this is admin")
    }else if(email == 'user@me.com' && password == '123'){
      setUser("this is user")
    }
    else{
      alert("Invalid Credentials")
    }
  }

  const data = useContext(AuthContext)
  console.log(data)
  

  return (
  <>
  {!user ? <Login handleLogin={handleLogin} /> : ''}
  {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
  </>

  )
}

export default App

