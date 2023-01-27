// import React, { useState, useEffect } from "react";

// function Topic() {
//   const [name, setName] = useState("");
//   const [state, setState] = useState({name: " ",selected: false,});
//   const handleAdd = () => {
//     setState((data) => ({ ...data, name }));
//   };
//   const handleSelect = () => {
//     setState((data) => ({ ...data, selected: true }));
//   };
//   useEffect(() => {
//     console.log("The state has been updated ");
//   }, [state]);

//   return (
//     <div>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <button onClick={handleAdd}>Add name </button>
//       <button onClick={handleSelect}>Select</button>

//       {`{
//             name:${state.name},
//             selected:${state.selected.toString()}
//         }`}
//     </div>
//   );
// }

// export default Topic;
