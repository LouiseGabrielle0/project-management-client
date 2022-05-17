import React from 'react'

function ProjectList({projects}) {

    console.log(projects)

      return (
    <div>

       <h1>Project List</h1>
      {projects === null ? 
      <p>Loading....</p>
      : projects.map((project) => {
          return (
              <div>
          <h5>{project.title}</h5>  
          <button>More Details</button>
          <button> Edit </button>
          </div>
          )
      })} 
   


    </div>
  )
}

export default ProjectList
