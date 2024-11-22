import Appbar from "../components/Appbar"
import { Balance } from "../components/Balance"
const Dashboard = () => {
  return (
    <div>
      <Appbar/>
      <div className="m-8">
        <Balance value={"80,000"}/>
        {/* <Users/> */}
      </div>
    </div>
  )
}

export default Dashboard