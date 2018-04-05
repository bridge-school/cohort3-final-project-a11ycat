import styled, { css } from "styled-components";
import { variables } from "./variables";
import React, {Component} from "react";

const StyledToast = styled.div`
	position:fixed;
	top:2em;
	left:50%;
	transform:translate(-50%,0);
	max-width:600px;
	min-width: 320px;
  border-radius: ${variables.button.borderRadius};
  padding: 20px 15px 20px 70px;
  line-height:1.5;
  background: ${variables.colour.paleGrey};
  color: ${variables.colour.offBlack};
  box-shadow: 4px 4px 12px ${variables.colour.lightGrey};

  &:before {
    color:white;
    height:50px;
    width:50px;
    position:absolute;
    left:8px;
    top: 50%; 
    transform: translate(0,-50%);
    font-size:30px;
    padding-top:2px;
    border-radius:${variables.circle};
  }  

  ${props => props.type==="success" && css`
	  &:before {
	  	background:#6cd577;
	  	background:linear-gradient(to bottom right, #6cd577,#b6eec9);
	    content: "✔";
	  }    
  `}

  ${props => props.type==="error" && css`
	  &:before {
	  	background:#eb6773;
	  	background:linear-gradient(to bottom right, #eb6773,#f3b2ba);
	    content: "✘";
	  }   
  `}
`;

class Toast extends Component {

	constructor(props) {
    super(props);
    this.state = {look: true};
  }

	disappear = (e) => {
		this.setState({look:false})
	};

	componentDidMount() {
	   setTimeout(this.disappear, 3000)
	};

	render(){
		if (this.state.look) {
			return (
				<StyledToast 
					onClick={this.disappear} 
					type={this.props.type} 
					role="dialog" 
					tabIndex="0" 
					aria-live="assertive">
					{this.props.children}
				</StyledToast>
			)					
		}
		else return null;
	}
};

export default Toast;