import React from 'react';
import './Tools.css';

interface ToolsProp {
    children: React.ReactNode;
}

export const Tools = ({children}:ToolsProp) => {
    return (
        <div className="Tools">
            
            {children}
        </div>
    )
}
