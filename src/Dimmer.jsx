import React from 'react';

export default function Dimmer(props) {
    return (
        <div className={`dimmer ${props.open?'dimmer--open' : 'dimmer--closed'}`} />
    );
}