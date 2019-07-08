import React from 'react';
import './App.css';

const list = [
    {
        id: 1,
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        id: 2,
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 0
    }
];

class App extends React.Component {
    render() {
        const helloWorld = 'Welcome to the Road to learn React';
        return(
            <div className="App">
                <h1>{helloWorld}</h1>

                {list.map((e)=> {
                    return(
                        <div key={e.id}>
                            <span>
                                <a href={e.url}>{e.title}</a>
                            </span>
                            <span>{e.author}</span>
                            <span>{e.num_comments}</span>
                            <span>{e.points}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default App;
