/* eslint-disable react/prop-types */
function App() {
  return (
    <>
      <h1>Welcome to React App</h1>
      <CardWrapper innerComponent={<TextComponent title="hello"/>}/>
      <CardWrapper innerComponent={<TextComponent title="hello guyz"/>}/>
    </>
  )
}

function TextComponent({title}) {
  return <div>
    {title}
  </div>
}

function CardWrapper ({innerComponent}) {
  return <div style={{ border: "2px solid black" , padding: 30}}>
    {innerComponent}
  </div>
}
export default App
