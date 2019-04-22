import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        margin: '16px',
        padding: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }
    return (
        <div style={style} onClick={props.clicked}>
            <p>{props.character}</p>
        </div>
    );
};

export default char;