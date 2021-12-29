import React from 'react';
import './Palette.css';

const colorBlack = 'hsl(0, 0%, 0%)';
const colorWhite = 'hsl(0, 0%, 100%)';
const outline = "3px dashed hsla(0, 0%, 80%, .8)";

interface PaletteProps {
    setPencilColor: React.Dispatch<React.SetStateAction<string>>;
    pencilColor: string;
}


export const Palette = ({pencilColor, setPencilColor}:PaletteProps) => {
    const lastSelectedDivRef = React.useRef<HTMLDivElement | null>(null);

    const selectColor = (e:React.SyntheticEvent, color:string) => {
        if (pencilColor !== color) {
            if (lastSelectedDivRef.current) {
                const lastSelectedDiv = lastSelectedDivRef.current as HTMLDivElement;
                lastSelectedDiv.style.outline = '0';
            }
            const div = e.currentTarget as HTMLDivElement;
            div.style.outline = outline;
            setPencilColor(color);
            lastSelectedDivRef.current = div;
        }
    }

    return (
        <div className="Palette">
            <div className="Palette__colors">
            {
                [...Array(36)].map((_, index) => {
                    const hsl = `hsl(${index * 10}, 50%, 50%)`;
                    return (
                        <div key={index} onClick={(e) => selectColor(e, hsl)} className="Palette__color-option" style={{background:hsl}}>
                        </div>
                    )
                })
            }
                <div ref={lastSelectedDivRef} className="Palette__color-option" onClick={(e) => selectColor(e, colorBlack)} style={{background:colorBlack, outline}}></div>
                <div className="Palette__color-option" onClick={(e) => selectColor(e, colorWhite)} style={{background:colorWhite}}></div>
            </div>
            <div className="Palette__color-option--selected" style={{background:pencilColor}}></div>
        </div>
    )
}