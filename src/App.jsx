import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import { SharedLayout, About, Resume, Projects, Contact, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<About />} />
          <Route path='resume' element={<Resume />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
