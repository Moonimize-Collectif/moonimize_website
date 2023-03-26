import React from 'react';

const ProjectComponent = ({id, name, logo, description, categories}) => {
     console.log(categories)
    if (id%2 == 0) {
        return  (
            <div>
                <img src={logo} alt="Logo" />
                <h1 style={{"color":"white"}}>{name}</h1>
                <h2 style={{"color":"white"}}>Sous titre</h2>
                <p style={{"color":"white"}}>{description}</p>
            </div>
        )
    }
    else {
        return  (
            <div>
                <h1 style={{"color":"white"}}>{name}</h1>
                <h2 style={{"color":"white"}}>Sous titre</h2>
                <p style={{"color":"white"}}>{description}</p>
                <img src={logo} alt="Logo" />
            </div>
        )
    }
    

}

export default ProjectComponent