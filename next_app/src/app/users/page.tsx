import axios from "axios";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function delay(t:any){
  return new Promise((r) => setTimeout(r , t))
}

async function fetchData() {
  delay(4000)
  const response = await axios.get('https://dummyjson.com/users')
  // console.log("data" , JSON.stringify(response.data.users[1]))
  return response.data.users[1]
}

export default async function Users() {
  const data = await fetchData()
  return (
    <>
      <h2 className="text-xl text-white">{data.email}</h2>
      <p>{data.age}</p>
    </>
  );
}
