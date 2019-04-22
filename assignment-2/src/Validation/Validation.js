import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text Long Enough';

    if(props.inputLength <= 5) {
        validationMessage = 'Text Too Short';
    }

    return (
        <div>
            {/* Turnorary expression */}
            {/* {
                props.inputLength > 5 ?
                <p>Text long enough</p> :
                <p>Text too short.</p>
            } */}

            <p>{validationMessage}</p>
            
            
        </div>
    );
};

export default validation;