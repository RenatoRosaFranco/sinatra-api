import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        var helloWorld = 'Welcome to the Road to learn React';
        return(
            <div className="App">
                <h1>{helloWorld}</h1>
            </div>
        )
    }
}

export default App;
