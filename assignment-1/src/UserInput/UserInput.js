import React from 'react';

const userInput = (props) => {
    return (
        <div>

            <input type="text" onChange={props.change} value={props.value}/>
        </div>
    );
};

export default userInput;