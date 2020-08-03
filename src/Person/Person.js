import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	
		width: 60%;
		margin: 12px auto;
		border :2px solid;
		text-align: center;
		
		box-shadow: 0px 3px 5px  #ccc;
		padding: 20px;
		background-color: gray;
		color: white;

		@media(min-width: 500px){
			width: 450px;
		}
	`;

	const person = (props) =>{
		return( 
		//<div className = 'person'>
		<StyledDiv>
			<p   onClick= {props.click}> my name is {props.name} and my age is {props.age} {props.children} </p> 
			<input className = 'input' type="text" onChange ={props.change} />
		</StyledDiv>
		//</div>
	)		
	}



	export default person;