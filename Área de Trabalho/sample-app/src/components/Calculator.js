import { React } from 'react';

class Calculator extends React {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render(){
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Informe a temperatura em Celcius: </legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celcius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

export default Calculator;