import React from 'react'
import classes from './Cockpit.module.css'



const Cockpit = (props)=>{
     

    
  let assingClasses = []

  if (props.persons.length<3){
    assingClasses.push(classes.red)
  }

  
  if (props.persons.length<2){
    assingClasses.push(classes.Bold)
  }


 let btnclass=[classes.Button]

if(props.showPerson){
  btnclass.push(classes.Red)
}

return(
    <div>
<h1> Hello </h1>
        <p className = {assingClasses.join(' ')}>this is working</p>
     
       <button className={btnclass.join(' ')} alt ={props.showPerson}
                 onClick = {props.togglePerson}> togglePerson</button>
       </div>
)


}

export default Cockpit;