import React from 'react';
import './PrintMatrix.css';

interface MatrixProps {
    matrix: string[][];
    paintElement: (event:React.SyntheticEvent) => void;
}

export const PrintMatrix = ({matrix, paintElement}:MatrixProps) => {
    return (
        <div className="Matrix">
            {
                matrix.map((row, x) => (
                    <div key={`row_${x}`} className="Matrix__row">
                    {
                        row.map((background, y) => (
                            <div onClick={paintElement} key={`el_${x}/${y}`} style={{background}}></div>
                        ))
                    }
                    </div>
                ))
            }
        </div>
    )
}