import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import {useEffect, useState} from 'react'
import ProjectList from './components/ProjectList'
import NewProject from './components/NewProject'

function App() {

  const [projects, setProjects] = useState(null)




useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}/projects`)
  .then(response => {
    setProjects(response.data)
    console.log(projects)
  })
  .catch(e => console.log("Error getting projects from API", e))
}, []);


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<h1>Welcome</h1>} />
        <Route path='/projects' element={<ProjectList projects={projects} />} />
        <Route path='/projects/create' element={<NewProject/>} />
      </Routes>
    </div>
  );
}

export default App;
