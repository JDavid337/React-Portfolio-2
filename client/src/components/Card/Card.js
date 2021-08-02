import React from 'react'

function Card() {
    return (
    
        <div className="card" style={{width: '18rem'}}>
            <img src="/images/Cup.jpeg" className="card-img-top" alt="Hoisting the Cup"/>
                <div className="card-body">
                    <h5 className="card-title">Hoisting the Cup</h5>
                    <p className="card-text">The Avalanche won the Stanley Cup in 1996 and 2001.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            
        </div>

    )
}

export default Card
