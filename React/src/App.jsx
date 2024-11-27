import { useState } from "react";
import { UseDebounce } from "./Hooks/UseDebounce";
import Card from "./components/Card";

function App() {
  const [value, setValue] = useState("");
  const debouncedValue = UseDebounce(value , 500)
  return (
    <>
      Debounce Value is {debouncedValue}
      <input
        type="text"
        placeholder="Enter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Card/>
    </>
  );
}
export default App;
