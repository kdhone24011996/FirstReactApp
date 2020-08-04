import React,{useState} from 'react';
import   './App.css';
import Person from './Person/Person';
import { render } from '@testing-library/react';
import styled from 'styled-components';

const App = props =>{


const [personState, setPersonState] = useState({
  persons : [
   { id :1, name : 'kushal' , age : 28},
   { id :2, name : 'nikit' , age : 24},
   { id :3, name : 'nalandeep' , age : 25},
   { id :4, name : 'sumit' , age : 29}
  ],

  showPerson: false
})

  const deletePerson = (index) =>{
    const persons = [...personState.persons]
    persons.splice(index,1) //removes one element at index=index.
    setPersonState({
      persons : persons,
      showPerson: true

    })
    
  }

  const nameChangeHandler = (event,id) =>{
    const personIndex = personState.persons.findIndex(person => person.id ==id)

    const person = {...personState.persons[personIndex]}
    
    person.name = event.target.value

   const persons = [...personState.persons]

    persons[personIndex] = person

    setPersonState({
      persons: persons,
      showPerson: true
    })
    }
  
 const togglePerson = () =>{
    let toggle = personState.showPerson
    setPersonState({
      persons : [
        { id :1, name : 'kushal' , age : 28},
        { id :2, name : 'nikit' , age : 24},
        { id :3, name : 'nalandeep' , age : 25},
        { id :4, name : 'sumit' , age : 29}
       ],
     
       showPerson: !toggle
     })
    
  }


  render()
{
  
  let assingClasses = []

  if (personState.persons.length<3){
    assingClasses.push('red')
  }

  
  if (personState.persons.length<2){
    assingClasses.push('bold')
  }


 let btnclass='button'

if(personState.showPerson){
  btnclass = 'Red'
}

  

  return (
      <div className= 'App'>
        
        <h1> Hello </h1>
        <p className = {assingClasses.join(' ')}>this is working</p>
        <button className={btnclass} alt ={personState.showPerson} onClick = {togglePerson}> togglePerson</button>

       

{personState.showPerson ?
       <div>
         
        {personState.persons.map((person ,index) =>{
          return <Person name = {person.name }
                          age = {person.age}
                          change = {(event) => nameChangeHandler(event, person.id)}
                          click = {deletePerson.bind(this,index)} 
                    
                          key = {person.id}/>
        } 
         
        )
        }
     
      </div> : null 

      
      
}


      </div>
    );

};
}
export default App;
