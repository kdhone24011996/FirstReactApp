import React from 'react';
import styled from 'styled-components';
import classes from './Person.module.css'

	const person = (props) =>{
		return( 
		<div className = {classes.person}>
		
			<p   onClick= {props.click}> my name is {props.name} and my age is {props.age} {props.children} </p> 
			<input className = {classes.Input} type="text" onChange ={props.change} />
		
		 </div>
	)		
	}



	export default person;