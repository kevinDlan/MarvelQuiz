import React from 'react'
import ErrorImg from '../../images/batman.png';

const Errors = () => {

    const centerH2 = {
        textAlign:'center',
        marginTop:'50px'
    }
    const centerImg = {
        display:'block',
        margin:'30px auto',
    }
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2}>Oups Cette page n'existe pas !</h2>
                <img style={centerImg} src={ErrorImg} alt="Error-Img" />
            </div> 
        </div>
    )
}

export default Errors
