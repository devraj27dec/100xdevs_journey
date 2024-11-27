import { useEffect, useState } from "react"
import { Balance } from "../components/Balance"
import { useAuth } from "../context/useAuth"
import { useNavigate } from "react-router-dom"
import Appbar from '../components/Appbar'

const Dashboard = () => {
  const [balance , setBalance] = useState(0)
  const navigate = useNavigate()
  const {user} = useAuth()
  
  useEffect(() => {
    if(!user){
      navigate("/dashboard")
    }else {
      fetch('http://localhost:7000/api/v1/account/balance')
      .then((res) => {
        setBalance(res.data.balance)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [user , navigate])
  return (
    <div>
      <Appbar/>
      <div className="m-8">
        <Balance value={balance}/>
        {/* <Users/> */}
      </div>
    </div>
  )
}

export default Dashboard