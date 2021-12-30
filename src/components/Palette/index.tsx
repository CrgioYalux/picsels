import React from 'react';
import './Palette.css';

const outline = "3px dashed hsla(0, 0%, 80%, .8)";

interface PaletteProps {
    setPencilColor: React.Dispatch<React.SetStateAction<number | string>>;
    pencilColor: number | string;
}

export const Palette = ({pencilColor, setPencilColor}:PaletteProps) => {
    const lastSelectedDivRef = React.useRef<HTMLDivElement | null>(null);

    const selectColor = (e:React.SyntheticEvent, color:number|string) => {
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
                    const hue = index * 10;
                    return (
                        <div key={index} onClick={(e) => selectColor(e, hue)} className={"Palette__color-option" + ` color-${hue}`}>
                        </div>
                    )
                })
            }
                <div ref={lastSelectedDivRef} className="Palette__color-option" onClick={(e) => selectColor(e, 'black')} style={{background:'black', outline}}></div>
                <div className="Palette__color-option" onClick={(e) => selectColor(e, 'white')} style={{background:'white'}}></div>
                </div>
        </div>
    )
}