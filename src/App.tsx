import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

/**

Renders the top-level component of the application which handles routing.
@returns {JSX.Element} - The top-level component of the application.
*/

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;
