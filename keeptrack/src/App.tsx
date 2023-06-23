import React from 'react';
import ProjectsPage from './projects/ProjectsPage';
import Hello from './projects/Hello';
import HelloClass from './projects/HelloClass'
import './App.css';

function App() {
  return (
    <div className="container">
      <ProjectsPage />
      {/* <Hello name = "Abc" enthusiamLevel = {0}/> */}
      {/* <HelloClass name = "Abc" enthusiasmLevel = {0} /> */}
    </div>
      
  );
}

export default App;
