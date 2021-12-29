import React from 'react';
import './PrintMatrix.css';

type Coor = {
    x: number,
    y: number
}
interface MatrixProps {
    matrix: (string|number)[][];
    paintElement: (coor:Coor) => void;
    bordersVisibility: boolean;
}

export const PrintMatrix = ({matrix, paintElement, bordersVisibility}:MatrixProps) => {
    const showBorder = bordersVisibility ? '--borders-visible' : '--borders-not-visible';
    return (
        <div className="Matrix">
            {
                matrix.map((row, x) => (
                    <div key={`row_${x}`} className="Matrix__row">
                    {
                        row.map((hue, y) => (
                            <div className={showBorder + ` color-${hue}`} onClick={() => paintElement({x, y})} key={`el_${x}/${y}`}></div>
                        ))
                    }
                    </div>
                ))
            }
        </div>
    )
}