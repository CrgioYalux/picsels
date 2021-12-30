import React from 'react';
import './DisplayOptions.css';

interface DisplayOptionsProp {
    switchZoom: () => void;
    switchBordersVisibility: () => void;
    clearCanvas: () => void;
    changeCanvasSize: (event:React.SyntheticEvent<HTMLInputElement>) => void;
    options: {
        canvasSize: number,
        bordersVisibility: boolean,
        zoom: boolean
    }
} 

export const DisplayOptions = ({options, switchZoom, switchBordersVisibility, clearCanvas, changeCanvasSize}:DisplayOptionsProp) => {
    const [auxCanvasSize, setAuxCanvasSize] = React.useState<number>(options.canvasSize);

    return (
        <div className="DisplayOptions">
            <button onClick={() => switchZoom()}>
                zoom
            </button>
            <button onClick={() => switchBordersVisibility()}>
                borders
            </button>
            <label htmlFor="matrix_size">
                <input
                    type="range"
                    name="matrix_size"
                    id="matrix_size"
                    max={30}
                    min={5} 
                    onMouseUp={changeCanvasSize} 
                    onTouchEnd={changeCanvasSize} 
                    onChange={(event) => setAuxCanvasSize(Number(event.currentTarget.value))}
                    value={auxCanvasSize}
                    />
                <strong className={auxCanvasSize !== options.canvasSize ? '--canvas-size-changing' : '--canvas-size-not-changing'}>{auxCanvasSize}</strong>
            </label>
            <button onClick={() => clearCanvas()}>clear</button>
        </div>
    )
}
