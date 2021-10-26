import React from 'react'
import { Home } from './containers/Home'
function App() {
  return (
    <div style={{ display: "flex", position: "fixed", width: "100%", height: "100%", bottom: 0, left: 0, right: 0, top: 0, alignItems: "center", justifyContent: "center" }}>
      <Home />
    </div>
  );
}

export default App;
