import React,{useState} from 'react';
import './App.css';
//import './Person/person.css'
import Person from './Person/Person';
import { render } from '@testing-library/react';
import styled from 'styled-components';

const App = props =>{

  const StyledButton= styled.button`
  background-color: ${(props) => props.alt?'red':'green'};
    border : 2px gray;
    width: 10%;
    color: white;
    height : 30px;
    margin : 20px auto;

    &:hover{
      background-color : ${(props) => props.alt?'salmon':'lightgreen'};
      color : black;
    }
  
  `;


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
  
  let classes = []

  if (personState.persons.length<3){
    classes.push('red')
  }

  
  if (personState.persons.length<2){
    classes.push('bold')
  }


  let person = null

  return (
      <div className="App">
        
        <h1> Hello </h1>
        <p className = {classes.join(' ')}>this is working</p>
        <StyledButton alt ={personState.showPerson} onClick = {togglePerson}> togglePerson</StyledButton>

       

{personState.showPerson ?
       <div>
         
        {personState.persons.map((person ,index) =>{
          return <Person name = {person.name }
                          age = {person.age}
                          change = {(event) => nameChangeHandler(event, person.id)}
                          click = {deletePerson.bind(this,index)} 
                    
                          key = {person.id}/>
        } )}
    
    
    
      </div> : null 
      
}


      </div>
    );

};
}
export default App;
