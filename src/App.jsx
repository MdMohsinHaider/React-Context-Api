
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React With Md Mohsin haider</h1>
      <h2>Software Engineering</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
