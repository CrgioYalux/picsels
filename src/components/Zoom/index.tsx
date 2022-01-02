import React from 'react';
import { PrintMatrix } from '../PrintMatrix';
import './Zoom.css';

type Coor = {
	x: number;
	y: number;
};

interface ZoomProps {
	matrix: (string | number)[][];
	paintElement: (coor: Coor) => void;
	bordersVisibility: boolean;
	exitZoom: () => void;
}

export const Zoom = ({ exitZoom, ...props }: ZoomProps) => {
	const [zoomedArea, setZoomedArea] = React.useState<string[][]>([]);
	const [zoom, setZoom] = React.useState<{ start: Coor; end: Coor }>({
		start: {
			x: 0,
			y: 0,
		},
		end: {
			x: 2,
			y: 3,
		},
	});
	return (
		<div className="Zoom">
			<button className="Zoom__exit_bt" onClick={() => exitZoom()}>
				exit
			</button>
			<PrintMatrix {...props} zoom={zoom} />
		</div>
	);
};
