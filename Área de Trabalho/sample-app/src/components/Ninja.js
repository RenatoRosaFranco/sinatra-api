import React, { Component } from 'react';

class Ninjas extends Component {

    render() {
        const ninjas = this.props.ninjas;
        return(
            ninjas.map((ninja) => {
                return <div key={ninja.id} className={'Ninja'}>
                            <div>Name: { ninja.name } </div>
                            <div>Age: { ninja.age} </div>
                            <div>Belt: { ninja.belt } </div>
                        </div>
            })
        )
    }
}

export default Ninjas;