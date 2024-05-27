import { useState } from "react";

function App() {
  const [isdark, setIsDark] = useState(false);

  const changeMode = () => {
    setIsDark(!isdark);
  };

  return (
    <div>
      {isdark ? "다크모드" : "화이트모드"}
      <button onClick={changeMode}>change</button>
    </div>
  );
}

export default App;
