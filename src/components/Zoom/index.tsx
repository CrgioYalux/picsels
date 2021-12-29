import React from 'react';
import {PrintMatrix} from '../PrintMatrix'

interface ZoomProps {
    children: React.ReactNode;
}

export const Zoom = ({children}:ZoomProps) => {
    const [zoomedArea, setZoomedArea] = React.useState<string[][]>([])
    return (
        <div className="Zoom">
            <div className="Zoom__exit_bt">x</div>
            <div className="Zoom__grabber_a">a</div>
            <div className="Zoom__grabber_b">b</div>

            <div className="Zoom__selected_area">
            {children}
            </div>
        </div>
    )
}