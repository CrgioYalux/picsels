import React from 'react';
import './Canvas.css';
import {PrintMatrix} from '../PrintMatrix'
import {Tools} from '../Tools';

interface CanvasProps {
    currentPencilColor: string;
}

const createMatrix = (size:number):string[][] => [...Array(size)].map(() => [...Array(size)].map(() => 'hsl(0, 0%, 100%)'))

export const Canvas = ({currentPencilColor}:CanvasProps) => {
    const [size, setSize] = React.useState<number>(10);
    const [matrix, setMatrix] = React.useState<string[][]>(() => createMatrix(size));

    React.useEffect(() => {
        setMatrix(createMatrix(size));
    }, [size])

    const paintElement = (event:React.SyntheticEvent) => {
        const div = event.currentTarget as HTMLDivElement;
        div.style.background = currentPencilColor;
    }

    return (
        <div className="Canvas">
            <input type="range" name="matrix_size" id="matrix_size" max={30} min={5} onMouseUp={(e) => {
                const _size = Number(e.currentTarget.value);
                _size !== size && setSize(_size);
            }} defaultValue={size} onTouchEnd={(e) => {
                const _size = Number(e.currentTarget.value);
                _size !== size && setSize(_size);
            }} />
            {/* <Tools>

            </Tools> */}
            <PrintMatrix matrix={matrix} paintElement={paintElement} />
        </div>
    )
}