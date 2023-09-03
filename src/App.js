import React, { useState } from "react";
import data from "./data";
import Tour from "./component/Tour";
// import Card from "./component/Card";
// import Card from "./component/Card";


const App = () => {
  const[tours,settours] = useState(data);

  function removetour(id){
    const newtour = tours.filter(tour=> tour.id!==id);
    settours(newtour);

  }
  if(tours.length=== 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={()=> settours(data)}>
          Refresh
        </button>
      </div>
    )
  }
  return <div className="App">
    {/* <h2>Plan with Sid</h2> */}
    <Tour tours={tours} removetour = {removetour}></Tour>
  </div>;
};

export default App;
