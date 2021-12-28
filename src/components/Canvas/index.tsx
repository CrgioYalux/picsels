import React from 'react';
import './Canvas.css';

interface CanvasProps {
    currentPencilColor: string;
}

const createMatrix = (size:number):string[][] => [...Array(size)].map(() => [...Array(size)].map(() => 'hsl(0, 0%, 100%)'))

export const Canvas = ({currentPencilColor}:CanvasProps) => {
    const [size, setSize] = React.useState<number>(30);
    const [canvas, setCanvas] = React.useState<string[][]>(() => createMatrix(size));

    const paint = (event:React.SyntheticEvent) => {
        const div = event.currentTarget as HTMLDivElement;
        div.style.background = currentPencilColor;
    }

    return (
        <div className="Canvas">
            {
                canvas.map((row, x) => (
                    <div key={`row_${x}`} className="Canvas__row">
                    {
                        row.map((background, y) => (
                            <div onClick={paint} key={`el_${x}/${y}`} data-color={background} style={{background}}></div>
                        ))
                    }
                    </div>
                ))
            }
        </div>
    )
}