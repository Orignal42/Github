import React, { Component } from "react";

class Formulaire extends Component{
    constructor(){
        super();
        this.state={
            userInput:'',
            items:[],
        }
    }


onChange(event){
    this.setState({
        userInput:event.target.value
        });
} 





render(){
    return(
        <div>
            <h1 align='center'>Search Github user</h1>
            <form className='form-row align-items-center'>
                <input 
                value={this.state.userInput} 
                type='text' 
                placeholder='Chercher les utilisateurs'
                onChange={this.onChange.bind(this)}    
                />
                <button>Chercher</button>
            </form>
        
        </div>

    );

}

}
export default Formulaire;