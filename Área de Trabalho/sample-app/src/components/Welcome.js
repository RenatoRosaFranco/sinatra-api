import React from 'react';
import Axios from 'axios';

class Welcome extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          value: 'Kenzo',
          textAreaValue: 'Por favor escreva uma dissertação sobre o seu elemento DOM favorito.'
        }

        console.log('Name :', this.state.value);
        console.log('Description: ', this.state.textAreaValue);

        this.handleChange     = this.handleChange.bind(this);
        this.handleSubmit     = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleChange(e) {
        console.log('Valor do evento alvo', e.target.value);
        this.setState({value: e.target.value.toUpperCase() });
        console.log(e.target);
    }

    handleTextChange(e) {
        console.log('Valor do evento alvo', e.target);
        this.setState({textAreaValue: e.target.value.toUpperCase() });
        console.log(e.target);
    } 

    handleSubmit(e) {
        alert("Um nome foi enviado: " + this.state.value);
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className={'field'}>
                    <label>Nome:</label><br/>
                    <input    type="text" 
                              name="name" 
                              value={this.state.value}
                              onChange={this.handleChange} />
                </div>
                <div className={'field'}>
                    <label>Dissertação</label><br/>
                    <textarea name="description"
                              value={this.state.textAreaValue}
                              onChange={this.handleTextChange} />
                </div>
                <div className={'field'}>
                    <input    type="submit" 
                              value="enviar" />
                </div>
                
                <br />
                <div className={'field'}>
                    <label>Name: </label>
                    <p> { this.state.value } </p>
                </div>

                <div className={'field'}>
                    <label>Description:</label>
                    <p> { this.state.textAreaValue } </p>
                </div>
            </form>
        )
    }
}

export default Welcome;