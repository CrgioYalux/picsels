import React from 'react';
import './Palette.css';

const colorBlack = 'hsl(0, 0%, 0%)';
const colorWhite = 'hsl(0, 0%, 100%)';

interface PaletteProps {
    setPencilColor: React.Dispatch<React.SetStateAction<string>>;
    pencilColor: string;
}

export const Palette = ({pencilColor, setPencilColor}:PaletteProps) => {
    return (
        <div className="Palette">
            <div className="Palette__colors">
            {
                [...Array(36)].map((_, index) => {
                    const hsl = `hsl(${index * 10}, 50%, 50%)`;
                    return (
                        (
                            <div key={index} onClick={() => setPencilColor(hsl)} className="Palette__color-option" style={{background:hsl}}>
                            </div>
                        )
                    )
                })
            }
                <div className="Palette__color-option" onClick={() => setPencilColor('black')} style={{background:colorBlack}}></div>
                <div className="Palette__color-option" onClick={() => setPencilColor('white')} style={{background:colorWhite}}></div>
            </div>
            <div className="Palette__color-option--selected" style={{background:pencilColor}}></div>
        </div>
    )
}