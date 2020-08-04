import React,{useState} from 'react';
import   './App.css';
import Person from '../components/Persons/Person/Person';
import { render } from '@testing-library/react';
import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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
    let persons = [...personState.persons]
    setPersonState({
       persons : persons,
       showPerson: !toggle
     })
    
  }


  return (
      <div className= 'App'>

<Cockpit persons = {personState.persons}
         showPerson = {personState.showPerson}
         togglePerson = {togglePerson}
/>

{personState.showPerson ?
       <div>
         <Persons persons = {personState.persons} 
                  changed = {nameChangeHandler}
                  clicked = {deletePerson}
         />
      </div> : null         
}

      </div>
    );

};

export default App;
