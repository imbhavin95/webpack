import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>Webpack Tutorial With React My view</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));