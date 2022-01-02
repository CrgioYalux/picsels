import React from 'react';
import './PrintMatrix.css';

type Coor = {
	x: number;
	y: number;
};
interface MatrixProps {
	matrix: (string | number)[][];
	paintElement: (coor: Coor) => void;
	bordersVisibility: boolean;
	zoom?: {
		start: Coor;
		end: Coor;
	};
}

const isACorner = (
	check: Coor,
	matrix: { start: Coor; end: Coor },
): boolean => {
	if (check.x === matrix.start.x && check.y === matrix.start.y) return true;
	if (check.x === matrix.start.x && check.y === matrix.end.y) return true;
	if (check.x === matrix.end.x && check.y === matrix.start.y) return true;
	if (check.x === matrix.end.x && check.y === matrix.end.y) return true;
	return false;
};

const isInsideArea = (check: Coor, area: { start: Coor; end: Coor }): boolean =>
	check.x >= area.start.x &&
	check.x <= area.end.x &&
	check.y >= area.start.y &&
	check.y <= area.end.y;

export const PrintMatrix = ({
	matrix,
	paintElement,
	bordersVisibility,
	zoom,
}: MatrixProps) => {
	const showBorder = bordersVisibility
		? '--borders-visible'
		: '--borders-not-visible';

	if (zoom) {
		return (
			<div className="Matrix">
				{matrix.map((row, x) => (
					<div key={`row_${x}`} className="Matrix__row">
						{row.map((hue, y) => {
							const isCornerOfZoomedArea = isACorner({ x, y }, zoom)
								? ' --corner-zoomed-area'
								: ' --not-corned-zoomed-area';
							const isInZoomedArea = isInsideArea({ x, y }, zoom)
								? ' --in-zoomed-area'
								: ' --not-in-zoomed-area';
							return (
								<div
									className={
										showBorder +
										isCornerOfZoomedArea +
										isInZoomedArea +
										` color-${hue}`
									}
									onClick={() => paintElement({ x, y })}
									key={`el_${x}/${y}`}
									data-pos={`el_${x}/${y}`}
								></div>
							);
						})}
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="Matrix">
			{matrix.map((row, x) => (
				<div key={`row_${x}`} className="Matrix__row">
					{row.map((hue, y) => (
						<div
							className={showBorder + ` color-${hue}`}
							onClick={() => paintElement({ x, y })}
							key={`el_${x}/${y}`}
						></div>
					))}
				</div>
			))}
		</div>
	);
};
