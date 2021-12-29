import React from 'react';
import './Canvas.css';
import {PrintMatrix} from '../PrintMatrix'

interface CanvasProps {
    currentPencilColor: number | string;
    options: {
        bordersVisibility: boolean;
    }
}

const createMatrix = (size:number):(string|number)[][] => [...Array(size)].map(() => [...Array(size)].map(() => 'white'))

export const Canvas = ({currentPencilColor, options}:CanvasProps) => {
    const [size, setSize] = React.useState<number>(10);
    const [matrix, setMatrix] = React.useState<(string|number)[][]>(() => createMatrix(size));
    
 
    React.useEffect(() => {
        setMatrix(createMatrix(size));
    }, [size]);

    const paintElement = ({x,y}:{x:number, y:number}) => {
        setMatrix(prev => {
            const _prev = [...Array(size)].map((_, index) => [...prev[index]]);
            _prev[x][y] = currentPencilColor;
            return _prev;
        })
     }

    const clearCanvas = () => {
        setMatrix(createMatrix(size))
    }

    return (
        <div className="Canvas">
            <button onClick={() => clearCanvas()}>clear</button>
            <input type="range" name="matrix_size" id="matrix_size" max={30} min={5} onMouseUp={(e) => {
                const _size = Number(e.currentTarget.value);
                _size !== size && setSize(_size);
            }} defaultValue={size} onTouchEnd={(e) => {
                const _size = Number(e.currentTarget.value);
                _size !== size && setSize(_size);
            }} />
            <PrintMatrix matrix={matrix} bordersVisibility={options.bordersVisibility} paintElement={paintElement} />
        </div>
    )
}