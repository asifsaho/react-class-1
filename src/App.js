import React from 'react';
import Movie from './mini-components/singleMovie'
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            movielist: [
                {
                    title: 'Life of a pie',
                    director: 'Lorem Ipsum',
                    actors: 'Lorem, Ipsum, Dolor, Sit',
                    duration: 120,
                    year: 2013
                },
                {
                    title: 'Pirates of Caribbean',
                    director: 'Lorem Ipsum',
                    actors: 'Lorem, Ipsum, Dolor, Sit',
                    duration: 120,
                    year: 2013
                },
                {
                    title: 'Life of a pie',
                    director: 'Lorem Ipsum',
                    actors: 'Lorem, Ipsum, Dolor, Sit',
                    duration: 120,
                    year: 2013
                },
                {
                    title: 'Pirates of Caribbean',
                    director: 'Lorem Ipsum',
                    actors: 'Lorem, Ipsum, Dolor, Sit',
                    duration: 120,
                    year: 2013
                },
                {
                    title: 'Life of a pie',
                    director: 'Lorem Ipsum',
                    actors: 'Lorem, Ipsum, Dolor, Sit',
                    duration: 120,
                    year: 2013
                },
                {
                    title: 'Pirates of Caribbean',
                    director: 'Lorem Ipsum',
                    actors: 'Lorem, Ipsum, Dolor, Sit',
                    duration: 120,
                    year: 2013
                }
            ]
        }

    }

    componentWillMount(){
        document.title = 'All movies will be shown here'
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <header>
                        <button className="btn"><span className="glyphicon glyphicon-plus"/>Add New Movie</button>
                    </header>
                    <div className="body">
                        { this.state.movielist.map(
                            movie => <Movie
                                        title={movie.title}
                                        director={movie.director}
                                        actors={movie.actors}
                                        duration={movie.duration}
                                        year={movie.year}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
