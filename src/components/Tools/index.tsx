import React from 'react';
import './DisplayTools.css';

interface DisplayToolsProp {
    switchZoom: () => void;
    switchBordersVisibility: () => void;
}

export const DisplayTools = ({switchZoom, switchBordersVisibility}:DisplayToolsProp) => {
    return (
        <div className="DisplayTools">
            <button onClick={() => switchZoom()}>
                zoom
            </button>
            <button onClick={() => switchBordersVisibility()}>
                borders
            </button>
            {/* <button onClick={() => }></button> */}
        </div>
    )
}
