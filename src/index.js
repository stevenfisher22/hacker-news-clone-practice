import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    return (
        <div>
            Test
        </div>
    )
}

// Fake Data
const Posts = [
    {
        id: 1,
        title: 'Dogs are awesome',
        website: 'dogawesome.com',
        points: '1300',
        author: 'steven',
        time: '3 hours ago'
    },
    {
        id: 2,
        title: 'Cats are stupid',
        website: 'catssuck.com',
        points: '1500',
        author: 'savannah',
        time: '1 hour ago'
    }
]

ReactDOM.render(<App />, document.querySelector('#root'))