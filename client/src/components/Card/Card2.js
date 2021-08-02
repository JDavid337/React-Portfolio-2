import React from 'react'

function Card2() {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src="/images/ExpressNoteTaker.png" className="card-img-top" alt="Express Note Taker App"/>
                    <div className="card-body">
                        <h5 className="card-title">Express Note Taker</h5>
                        <p className="card-text">This is an App called "Express Note Taker". It's designed to create, review, and delete notes.</p>
                        <a href="https://github.com/JDavid337/express-note-jotter" className="btn btn-primary">View GitHub Repo</a>
                        <a href="https://express-note-jotter-jzd.herokuapp.com/" className="btn btn-primary">View Deployed App</a>
                    </div>
            </div>
        </div>
    )
}

export default Card2
