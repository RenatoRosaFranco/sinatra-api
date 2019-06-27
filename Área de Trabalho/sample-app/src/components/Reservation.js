import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            isGoing: true,
            numberOfGuests: 2
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        console.log(this.state.isGoing);
        console.log(this.state.numberOfGuests);

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <form>
                <label>Estão indo: </label>
                <input type="checkbox"
                       name="isGoing"
                       value={this.state.numberOfGuests}
                       onChange={this.handleInputChange} />
                
                <label>Numero de convidados: </label>
                <input type="number"
                       name="numberOfGuests"
                       value={this.state.numberOfGuests}
                       onChange={this.handleInputChange} />
            </form>
        )
    }
}

export default Reservation;