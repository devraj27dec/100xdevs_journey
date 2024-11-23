import UseOnline from "./Hooks/UseOnline"

function App() {
  const online = UseOnline()
  return (
    <>
      {online ? (
        <div>you are online</div>
      ) : (
        <div>
          You are offline check your connection
        </div>
      )}
      
    </>
  )
}
export default App
