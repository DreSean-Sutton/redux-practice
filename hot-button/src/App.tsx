import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
    return (
        <main className='container'>
            <div className="row">
                <Counter />
            </div>
        </main>
    );
}

export default App;
