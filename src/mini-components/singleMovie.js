import React from 'react';

const singleMovie = props => {
    return(
        <div className="row movie">
            <div className="col-xs-1">
                <img src="http://via.placeholder.com/50x50"/>
            </div>

            <div className="col-xs-8">
                <h2>{props.title}</h2>
                <p><strong>Director:</strong>{props.director}</p>
                <p><strong>Actors:</strong>{props.actors}</p>
                <p><strong>Duration:</strong>{props.duration}</p>
                <p><strong>Year:</strong>{props.year}</p>
            </div>

            <div className="col-xs-3 text-right">
                <button className="btn btn-danger"><span className="glyphicon glyphicon-minus"/>
                </button>
                <button className="btn btn-primary"><span className="glyphicon glyphicon-pencil"/>
                </button>
                <button className="btn btn-info"><span className="glyphicon glyphicon-eye-open"/>
                </button>
            </div>
        </div>
    )
}

export default singleMovie;