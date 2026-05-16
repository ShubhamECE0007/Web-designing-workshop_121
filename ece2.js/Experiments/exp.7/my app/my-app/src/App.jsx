// import React , {useEffect} from "react" ;
// function App() {
//   useEffect (() =>{
//     document.title = "Welcome Students";
//     },[]);
//     return (
//       <div>
//         <h1> Hello Students</h1>
//       </div>
//     );

// }
//  export default App
// ;

import { useEffect } from "react";
function App(){
  useEffect(()=>{
    console.log("Timer Running");
  }, 1000);
  return (
    <div>
      <h1>Check Console</h1>
    </div>
  );
}

export default App;