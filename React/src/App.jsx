/* eslint-disable react/prop-types */
function App() {
  return (
    <>
      <h1>Welcome to React App</h1>
      <CardWrapper>
        <TextComponent title="hi from text component 1"/>
      </CardWrapper >
      <CardWrapper>
        <TextComponent title="hi from text component 2"/>
      </CardWrapper>
    </>
  )
}

function TextComponent({title}) {
  return <div>
    {title}
  </div>
}

function CardWrapper ({children}) {
  return <div style={{ border: "2px solid black" , padding: 30}}>
    {children}
  </div>
}


export default App
